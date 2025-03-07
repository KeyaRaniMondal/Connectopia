const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config();
// multer for file uploads
const multer=require('multer')
const fs=require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'))


const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage });

const uri = `mongodb+srv://${process.env.db_USER}:${process.env.db_PASSWORD}@cluster0.nj8v5.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const connect = client.db('ConnectopiaDB')
    const usersCollection = connect.collection('users')
    const userPostsCollection = connect.collection('createdPosts')

    //For creating user API
    app.post('/users', async (req, res) => {
      const { email, displayName, photoURL } = req.body;
      const existingUser = await usersCollection.findOne({ email })
      if (existingUser) {
        return res.send({ message: 'User already exists', user: existingUser })
      }
      const newUser = {
        email, displayName, photoURL, createAt: new Date()
      }
      const result = await usersCollection.insertOne(newUser)
      res.send(result)
    })


    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray()
      res.send(result)
    })



    //creating posts by Users

    app.post('/createdPosts',upload.single('photo'), async (req, res) => {
      const { email,caption } = req.body
      const photo=req.file?`/uploads/${req.file.filename}`:null
      const user = await usersCollection.findOne({ email })
      const newPost = {
        email,
        caption,
        photo,
        createAt: new Date()
      }
      const result = await userPostsCollection.insertOne(newPost)
      res.send(result)
    })

    app.get('/createdPosts', async (req, res) => {
      const posts = await userPostsCollection.find().toArray();
      res.send(posts.map(post => ({
        ...post,
        photo: post.photo ? `http://localhost:5000${post.photo}` : null
      })));
    });
    

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('server running');
})

app.listen(port, () => {
  console.log(`server running on port : ${port}`);
})
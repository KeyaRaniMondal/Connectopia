// LW95nKB3nKM6046G
// Connectopia
const express=require('express')
const cors=require('cors')
const app=express()
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port=process.env.PORT||5000
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

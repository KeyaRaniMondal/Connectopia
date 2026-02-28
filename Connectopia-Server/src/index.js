
// const serv=require('node:dns/promises');
// serv.setServers(['1.1.1.1','8.8.8.8']);
import dotenv from 'dotenv';
dotenv.config();
import serv from 'node:dns/promises';
serv.setServers(['1.1.1.1', '8.8.8.8']);

import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '../src/routes/auth.route.js';
import postRoutes from '../src/routes/postRoutes.js';
import messageRoutes from '../src/routes/message.route.js';
import { Connectopia } from './lib/db.js';

import path from 'path';
// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
app.use(express.json({limit:"2mb"})); 
app.use(express.urlencoded({extended:true,limit:"2mb"}))
app.use(cookieParser());  

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps, curl)
        if (!origin) return callback(null, true);
        
        // In development, allow all localhost and 127.0.0.1 requests
        if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
            return callback(null, true);
        }
        
        // Fallback for other origins in development
        if (process.env.NODE_ENV !== "production") {
            return callback(null, true);
        }
        
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../Connectopia-Frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../Connectopia-Frontend","dist","index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    Connectopia();
});

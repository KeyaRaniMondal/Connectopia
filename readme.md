# 🌐 Connectopia

<p align="center">
  <img src="./preview.png" alt="Connectopia Preview" width="100%">
</p>

---

# 🔗 Links

<p align="center">

### 🌐 Live Website

  <a href="https://connectopia-4.onrender.com/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit-success?style=for-the-badge">
  </a>

  ### 💻 Frontend Repository

  <a href="https://github.com/KeyaRaniMondal/Connectopia">
    <img src="https://img.shields.io/badge/GitHub-blue?style=for-the-badge&logo=github">
  </a>
</p>

---

# 📖 Overview

**Connectopia** is a modern full-stack social media platform built with the MERN stack, designed to help users connect, share ideas, and engage with a vibrant community. Users can create posts, upload images, react, comment, and share content while enjoying a responsive and intuitive user experience through real time messaging.

The platform features **secure Firebase authentication with JWT authorization**, allowing users to manage their profiles, interact with posts, and access personalized dashboards. Built with **React**, **Express.js**, **MongoDB**, and **Zustand**, Connectopia follows modern development practices with scalable REST APIs, efficient global state management, Cloudinary-powered image storage, and a fully responsive interface optimized for all devices.

---

# ✨ Key Features

- 🔐 Secure Authentication (Firebase + JWT)
- 👤 User Profile & Profile Management
- 📝 Create, Edit & Delete Posts
- 🖼️ Image Upload with Cloudinary
- ❤️ Like & React to Posts
- 💬 Comment System
- 🔄 Share Posts
- 💬 Real-time Chat
- 😀 Emoji Picker Support
- 🔥 Trending & Popular Posts
- 📊 User Dashboard
- 📱 Fully Responsive Design
- ⚡ Fast SPA with React + Vite
- 🔔 Toast Notifications
- 📡 RESTful API Architecture
- 🚀 Optimized Performance

---

# 🛠 Tech Stack

## Frontend

- React 18
- Vite
- React Router v7
- Tailwind CSS 4
- DaisyUI
- Material UI
- Zustand
- Recoil
- Axios
- Firebase Authentication
- React Hook Form
- React Hot Toast
- Lucide React
- React Icons
- React Share
- Emoji Picker
- Lottie Animation
- TSParticles

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Firebase Admin SDK
- JWT Authentication
- bcrypt
- Cloudinary
- Multer
- Cookie Parser
- CORS
- dotenv

---

# 📦 Main Dependencies

## Frontend

```json
react
react-router-dom
axios
firebase
zustand
recoil
tailwindcss
daisyui
@mui/material
react-hook-form
react-hot-toast
react-icons
react-share
emoji-picker-react
lucide-react
react-type-animation
@lottiefiles/dotlottie-react
react-tsparticles
```

## Backend

```json
express
mongoose
mongodb
firebase-admin
jsonwebtoken
bcrypt
multer
cloudinary
cookie-parser
cors
dotenv
```

---

# 📂 Project Structure

```
Connectopia
│
├── frontend
│   ├── src
│   ├── public
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── store
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   ├── models
│   │   ├── config
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/KeyaRaniMondal/Connectopia.git
```

```bash
cd Connectopia
```

---

## 2️⃣ Frontend Setup

```bash
cd Connectopia-Frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000

VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

Run the development server

```bash
npm run dev
```

---

## 3️⃣ Backend Setup

```bash
cd Connectopia-Server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=YOUR_NAME
CLOUDINARY_API_KEY=YOUR_KEY
CLOUDINARY_API_SECRET=YOUR_SECRET
```

Start the server

```bash
npm run dev
```

---

# 🚀 Future Enhancements

- 🔔 Real-time Notifications
- 👥 Follow & Unfollow Users
- 🎥 Video Posts
- 📖 Stories Feature
- 🤖 AI Content Suggestions
- 🌙 Dark Mode
- 📊 Advanced Analytics Dashboard

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to GitHub.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

⭐ **If you found this project helpful, please consider giving it a Star on GitHub!**
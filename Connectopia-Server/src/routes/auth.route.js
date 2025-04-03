import express from 'express'
import { checkAuth, login, logout, signup, updateProfile } from '../controllers/auth.controller.js'
import protectRoute from '../middleware/auth.middleware.js'

const router=express.Router()

router.post('/signup', signup);  // ✅ Fixed method


router.get('/login',login)

router.get('/logout',logout)

router.put('/update-profile',protectRoute,updateProfile)

router.get("/check",checkAuth)
export default router
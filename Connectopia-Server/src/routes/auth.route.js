import express from 'express'
import { checkAuth, login, logout, signUp, updateProfile } from '../controllers/auth.controller.js'
import protectRoute from '../middleware/auth.middleware.js'

const router=express.Router()

router.get('/signUp',signUp)

router.get('/login',login)

router.get('/logout',logout)

router.put('/update-profile',protectRoute,updateProfile)

router.get("/check",protectRoute,checkAuth)
export default router
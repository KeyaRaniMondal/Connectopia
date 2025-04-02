import express from 'express'
import { checkAuth, login, logout, signUp } from '../controllers/auth.controller.js'

const router=express.Router()

router.get('/signUp',signUp)

router.get('/login',login)

router.get('/logout',logout)

router.put('/update-profile',protectRoute,updateProfile)

router.get("/check",checkAuth)
export default router
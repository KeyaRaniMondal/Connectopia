import express from 'express'
import protectRoute from '../middleware/auth.middleware'
import { getUserSideBar } from '../controllers/message.controller'

const router=express.Router()
router.get('/users',protectRoute,getUserSideBar)

export default router
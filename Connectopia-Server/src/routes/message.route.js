import express from 'express'
import protectRoute from '../middleware/auth.middleware'
import { getMessages, getUserSideBar } from '../controllers/message.controller'

const router=express.Router()
router.get('/users',protectRoute,getUserSideBar)
router.get('/:id',protectRoute,getMessages)

export default router
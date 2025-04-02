import express from 'express'
import protectRoute from '../middleware/auth.middleware'
import { getMessages, getUserSideBar, sendMessage } from '../controllers/message.controller'

const router=express.Router()
router.get('/users',protectRoute,getUserSideBar)
router.get('/:id',protectRoute,getMessages)

router.post('/send/:id',protectRoute,sendMessage)

export default router
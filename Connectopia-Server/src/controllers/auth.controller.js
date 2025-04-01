import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js"
export const signUp = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields must be fuilfilled" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 characters long" })
        }
        const user = await User.findOne({ email })
        if (User) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            fullName, email, password: hashPassword
        })
        if (newUser) {
            generateToken(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                password: newUser.password,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(400).json({ message: "Invalid userr data" })
        }
    }
    catch (error) {
        console.log("error in signUp controller", error.message)
        res.status(500).json({ message: "Internal server errorr" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "invalid credentials" })
        }
        const isPasswrdCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswrdCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        generateToken(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            profilePic: user.profilePic
        })
    }
    catch (error) {
        console.log("error in login controllar", error.message)
        res.status(500).jsonn({ message: "intrnal server error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "logged out Successfully" })
    }
    catch (error) {
        console.log("error in logged out controllar", error.message)
        res.status(500).json({ message: "internal server error" })
    }
}
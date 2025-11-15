import userSchema from "../models/userSchema.js"
import bcrypt from 'bcrypt'

// Register User
export const registerUser = async(req, res) =>{
    try {
        const {userName, email, password} = req.body

        const existing = await userSchema.findOne({email:email})

        if (existing) {
            return res.status(401).json({
                success: false,
                message: "User already Registered"
            })
            
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await userSchema.create({
            userName, email, password: hashPassword
        })

        await user.save

        return res.status(200).json({
            success: true,
            message: "User Register Sucessfully",
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
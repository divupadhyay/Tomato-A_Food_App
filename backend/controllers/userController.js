import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcyrpt from "bcrypt"
import validator from "validator"


//login
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    try {
        const user=await userModel.findOne({email});

        if (!user) {
           return res.json({success:false,message:"User doesn't exists"}) 
        }
        const isMatch=await bcyrpt.compare(password,user.password)

        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user

const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;
    try {
        //user existance
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }
        //validation of email and password format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter valid email"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please enter strong password"})
        }

        //hashing user password
        const salt = await bcyrpt.genSalt(10) //range can be 5 to 15
        const hashedPassword = await bcyrpt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })


        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}
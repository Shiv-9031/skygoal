import userSchema from "../models/userModel.mjs";
import jwt from "jsonwebtoken";
import { comparePassword,  hashPassword } from "../util/passwordBcypt.mjs";
export const registerUserController = async (req, res, next) => {
  try {
    const { name,phone,email,password} = req.body;
 
    //validation
    if (!name) {
      return res.status(500).json({ message: "name is missing" });
    }
    if (!phone) {
      return res.status(500).json({ message: "contact number is missing" });
    }
    if (!email) {
      return res.status(500).json({ message: "email is missing" });
    }
    if (!password) {
      return res.status(500).json({ message: "password is missing" });
    }

    //exisiting user
    const existingUser = await userSchema.findOne({ email:email });
    

    if (existingUser) {
      return res.status(201).json({
        success: true,
        message: "user already exist",
      });
    }
    
    const hashedPassword = await hashPassword(password);
    
    const user = await userSchema({
      name,
      phone,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({
      success: true,
      message: "user has created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "error in registering",
      error,
    });
  }
};

//for login

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(500).send({
        message: "email or password is not valid",
      });
    }

    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    const matchPassword = await comparePassword(password, user.password);

    if (!matchPassword) {
      return res.status(201).send({
        success: false,
        message: "either email or password is wrong",
      });
    }
    const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(201).json({
        success:true,
        user:{
            name:user.name,
            phone:user.phone,
           
        },
        token:token

    })
  } catch (error) {
    console.log(error);
    res.status(201).send({
      success: false,
      message:"error in login",
      error,
    });
  }
};

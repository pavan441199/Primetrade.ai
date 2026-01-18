const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");




const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("body", req.body);

    try {

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashedPassword", hashedPassword);
        const newUser = new User({ name, email, password: hashedPassword })
        await newUser.save();
        console.log("newUser", newUser);
        res.status(201).json({
            message: "User registered successfully",
            success: true,
            data: newUser
        })

    } catch (error) {
        console.log(error, "some error occurred at register controllers")
        res.status(500).json({
            message: error.message,
            success: false
        })
    }


}

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            return res.status(400).json({
                message: "Invalid credentials",
                success: false
            })
        }

        const token = jwt.sign({ id: user._id, role: user.role, email: user.email, userName: user.name }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d"
        })

        // set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: false // set to true in production
        }).status(200).json({
            message: "User logged in successfully",
            success: true,
            data: {
                user: {
                    email: user.email,
                    role: user.role,
                    id: user._id,
                    userName: user.name
                }
            },
            token
        })

    } catch (error) {
        console.log(error, "some error occurred at login controllers")
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

const logoutController = (req, res) => {
    res.clearCookie("token").json({
        success: true,
        message: "Logged out successfully!",
    });
};

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
        return res.status(401).json({
            success: false,
            message: "Unauthorised user!",
        });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorised user!",
        });
    }
}


module.exports = {
    registerController,
    loginController,
    logoutController,
    authMiddleware
}

import bcrypt from "bcryptjs"
import userModel from "../schema/userSchema.js"
import { generateToken } from "../utils/genereteTokens.js";
import axios from 'axios';
import { oauth2Client } from '../utils/googleConfig.js';

//function to login user
export const signupUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password, role, orgname } = req.body;
        if (!name || !email || !password) {
            return res.json({ message: "all fields are required" });
        }
        let checkUser = await userModel.findOne({ email });
        if (checkUser) {
            return res.json({ message: "user  already exist" });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = await userModel.create({
            name,
            email,
            password: hash,
            role,

        })

        //user without password


        const token = generateToken(newUser);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: "/",  // Ensures the cookie works across subdomains
            maxAge: 3600000 * 24 * 30,
        });
        return res.json({ message: "user created", newUser })
    } catch (error) {
        if (error) {
            console.log(error);
            return res.json({ message: error.message });
        }
    }

}

//function to login the user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let newUser = await userModel.findOne({ email });
        if (!newUser) {
            return res.json({ message: "email or password is incorrect" })
        }
        const matchedPassword = await bcrypt.compare(password, newUser.password)
        if (!matchedPassword) {
            return res.json({ message: "email or password is incorrect" })
        }
        const token = generateToken(newUser);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: "/",
            maxAge: 3600000 * 24 * 30,
        });
        return res.json({ message: "user logged in", newUser })
    } catch (error) {
        if (error) {
            console.log(error);
            return res.json({ message: error.message })
        }
    }

}
//login with google
export const googleLogin = async (req, res) => {
    try {
        const { code } = req.body;
        const googleRes = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes.tokens);

        const userRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' + googleRes.tokens.access_token);
        console.log(userRes.data);
        console.log("Google login successful");
        console.log(userRes.data);
        const email = userRes.data.email;
        let user = await userModel.findOne({ email });
        if (!user) {
            user = await userModel.create({
                name: userRes.data.name,
                email: userRes.data.email,
                profilePicture: userRes.data.picture,
            });

        }
        const token = generateToken(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: "/",  // Ensures the cookie works across subdomains
            maxAge: 3600000 * 24 * 30,
        });

return res.json({ message: "user logged in", user })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

//function to logout user
export const logoutUser = (req, res) => {
    res.cookie('token', " ", {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        path: "/",  // Ensures the cookie works across subdomains
        maxAge: 0,
    });
    res.json({ message: "logout succesfull" })

}


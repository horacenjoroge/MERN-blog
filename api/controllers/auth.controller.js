import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup= async (req, res, ) =>{
    const {username, password,email} =req.body;

    if(!username||!password||!email ||username===''||password===''||email==='') {
        return res.status(400).json({message:'All fields are required'});
    }

    const hashedPassword =bcryptjs.hashSync(password ,10);

    const newUser = new User({
        username,
        password:hashedPassword,
        email

    });
    try {

    await newUser.save();
    res.json('signup successfull');
    } catch (err) {
        res.status(500).json({message: err.message});
    }   

} 
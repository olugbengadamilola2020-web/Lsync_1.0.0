const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/userModel.js');

const register = async (req, res, next) => {
    try {
        const { name, username, email, password, bio, location, avatar, currentRole, targetRole, track, isPublic } = req.body;
        let exists = await User.findOne({ $or: [{email}, {username}] });
        if(exists) return res.status(400).json({
            message: 'Email or username exists'
        });
        const hashed = await bcrypt.hash(password,6);
        const user = await User.create({
             name, username: username.toLowercase(), email, password:hashed, currentRole, targetRole, bio, location });
        const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, { expiresIn:'3d' });
        res.status(201).json({
            success:true, token, user 
        });
    } catch (error) { res.status(500).json({
        message: error.message
    }); 
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({
            message: 'User not found'
        });
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(401).json({
            message: 'Wrong password'
    });
        const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, {expiresIn:'3d'});
        res.status(200).json({
            success:true, token, user
        });
    } catch (error) { res.status(500).json({
        message: error.message
    });
    }
};

module.exports = { register, login };
const router = require('express').Router();
const User = require('../models/User');

// SIGNUP
router.post('/signup', async (req, res)) {
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        const user = await newUser.save();
    } catch(err) {
        res.status(500).json(err);
    }
}


// LOGIN

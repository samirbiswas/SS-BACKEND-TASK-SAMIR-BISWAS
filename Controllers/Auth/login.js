const User = require("../../Models/User");
const bcrypt = require("bcryptjs");
const loginValidator = require("../../Validation/auth/login.validator");
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    try {
        // Check Validation
        const { errors, isValid, data } = loginValidator(req.body);

        if (!isValid) return res.status(400).json({ status: false, errors });

        const foundUser = await User.findOne({
            email: data.email
        });

        if (!foundUser) {
            return res.status(400).json({ message: "Invalid credential" });
        }

        const doMatch = await bcrypt.compare(data.password, foundUser.password);
        if (!doMatch) {
            return res.status(400).json({ message: "Invalid credential" });
        }

        delete foundUser.password;
        
        const userToken = {
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email
        }
        const token = jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });

        return res.status(200).json({
            message: `${foundUser.username} logged in successfully`,
            token
        });

    } catch (error) {
        next(error)
    }
};
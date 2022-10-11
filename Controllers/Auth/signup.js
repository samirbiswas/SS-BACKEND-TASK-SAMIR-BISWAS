const User = require("../../Models/User");
const signupValidator = require("../../Validation/auth/signup.validator");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res, next) => {
    try {

        const { data, isValid, errors } = signupValidator(req.body);

        if (!isValid) {
            return res.status(400).json({ status: false, errors });
        }
        // User checked by Email
        const user = await User.findOne({ email: data.email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        data.password = await bcrypt.hash(data.password, 12);

        await User.create(data)

        delete data.password

        return res.status(201).json({
            message: "User signup successfully",
            data
        });
    } catch (error) {
        next(error)
    }
};
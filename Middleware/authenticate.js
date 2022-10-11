const jwt = require('jsonwebtoken');
const User = require("../Models/User");

const authenticate = async (req, res, next) => {
    try {

        let token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorize user'
            })
        }
        token = token.split(' ')[1]
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decode._id)
        if (!user) {
            return res.status(400).json({
                message: 'Unauthorize user'
            })
        }

        req.user = decode
        next()

    } catch (error) {
        next(error)
    }
}

module.exports = authenticate
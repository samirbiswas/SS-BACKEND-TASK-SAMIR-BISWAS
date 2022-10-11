const router = require('express').Router();
const { signup } = require('../../Controllers/Auth/signup');
const { login } = require('../../Controllers/Auth/login');

router
    .post('/sign-up', signup)
    .post('/login', login)

module.exports = router
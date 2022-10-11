const router = require('express').Router();
const { create } = require('../../Controllers/Movies-TV-Show/create');

router
    .post('/create', create)

module.exports = router
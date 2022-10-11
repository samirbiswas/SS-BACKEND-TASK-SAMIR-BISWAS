const router = require('express').Router()
const authRoutes = require('./auth')
const movieTvShow = require('./Movie_Tv_Show')
const authenticate = require('../Middleware/authenticate')
const { lists, single_list } = require('../Controllers/Movies-TV-Show/lists')
// public route
router.get("/api/movie-tv-shows", lists)
router.get("/api/movie-tv-show/", single_list)

router.use("/api/auth", authRoutes)
router.use("/api/movie-tv-show", authenticate, movieTvShow)

module.exports = router
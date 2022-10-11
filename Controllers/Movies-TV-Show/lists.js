const Movie_Tv_Show = require('../../Models/Movie_TV_Show')

// all list of movie and tv shows
exports.lists = async (req, res, next) => {
    try {
        const find_movie_tv_shows = await Movie_Tv_Show.find()

        return res.status(200).json({
            list: find_movie_tv_shows
        })
    } catch (error) {
        next(error)
    }
}

// single list of movies and tv shows
exports.single_list = async (req, res, next) => {
    try {

        const find_movie_tv_show = await Movie_Tv_Show.find({
            type: req.query.type
        }).select("title")
       
        return res.status(200).json({
            name: find_movie_tv_show
        })
    } catch (error) {
        next(error)
    }
}
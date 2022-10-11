const Movie_Tv_Show = require('../../Models/Movie_TV_Show')

exports.create = async (req, res, next) => {
    try {

        let movie_tv_show = new Movie_Tv_Show({
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            cast: req.body.cast,
            runtime: req.body.runtime,
            release_date: req.body.release_date,
            directors: req.body.directors,
            producer: req.body.producer,

        })

        const result = await movie_tv_show.save()

        return res.status(200).json({
            message: `${result.type} Created successfully`
        })
    } catch (error) {
        next(error)
    }
}
const { Schema, model } = require("mongoose")

const movieTvShowSchema = new Schema({
    user_name: {
        type: String,
        required: true,
    },
   
   
})

const MovieTvShow = model('MovieTvShow', movieTvShowSchema)

module.exports = MovieTvShow



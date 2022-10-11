const { Schema, model } = require("mongoose");

const movieTvShowSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
        enum: ['MOVIES', 'TV-SHOW'],
        required: true,
        default: "MOVIES"
    },
    cast: [{
        type: String,
        required: true,
    }],
    runtime: {
        type: Number,
        required: true,
    },
    released_date: {
        type: Date,
        required: true,
    },
    directors: [{
        type: String,
        required: true,
    }],
    producer: {
        type: String,
        required: true,
    }
},
    { timestamps: true, minimize: false }
)

const MovieTvShow = model('MovieTvShow', movieTvShowSchema)

module.exports = MovieTvShow



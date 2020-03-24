const mongoose = require('mongoose')

const RateSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "*Rating is required"]
    },
    comment: {
        type: String,
        required: [true, "*Comment is required"]
    }
}, { timestamps: true });

const CakeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    ratings: [RateSchema]
}, {timestamps: true});

const model = {
    Cake: mongoose.model('Cake', CakeSchema),
    Rate: mongoose.model('Rate', RateSchema)
}

module.exports = model;
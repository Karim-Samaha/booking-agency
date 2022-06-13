const mongoose = require("mongoose");
const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // city: {
    //     type: String,
    //     required: true
    // },
    description: {
        type: String,
        required: true}
    // },
    // photos: {
    //     type: [String],
    //     required: true
    // },
    // rating: {
    //     type: Number,
    //     min: 0,
    //     max: 5
    // },
    // rooms: {
    //     type: [String]
    // }
});

module.exports = mongoose.model("Hotel", hotelSchema)
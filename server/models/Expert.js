const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    experience: Number,

    rating: Number,

    bio: String,

    availableSlots: [
        {
            date: String,
            slots: [String]
        }
    ]
});

module.exports = mongoose.model("Expert", expertSchema);
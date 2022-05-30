const { Schema, model } = require('mongoose');

const puzzleSchema = new Schema({
    title: {
        type: String,
        required: false,
        trim: true,
    },
    difficulty: {
        type: Number,
        required: false, 
    },
    img: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Puzzle = model('Puzzle', puzzleSchema);

module.exports = Puzzle;
const { Schema, model } = require('mongoose');

const puzzleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    difficulty: {
        type: String,
    },
    img: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    puzzleID: {
        type: String,
        required: true,
    }
});

const Puzzle = model('Puzzle', puzzleSchema);

module.export = Puzzle;
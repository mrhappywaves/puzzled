const mongoose = require('mongoose');

const { Schema } = mongoose; 

const puzzleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String ,
    },
    difficulty: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    puzzleID: {
        type: String,
        required: true,
    }
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

model.export = Puzzle;
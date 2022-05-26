const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Puzzle = require('./Puzzle');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter a username'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter an email address'],
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: [6, 'Password must be at least six charaters'],
        },
        postedPuzzles: [Puzzle],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);


// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in 
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

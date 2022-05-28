const db = require('../config/connection');
const { Puzzle } = require('../models');
const puzzleSeeds = require('./puzzleSeeds.json');

db.once('open', async () => {
    try {
        await Puzzle.deleteMany({});
        await Puzzle.create(puzzleSeeds);

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});

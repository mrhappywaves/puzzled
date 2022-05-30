import Puzzle from "../models/Puzzle";

export const createPuzzle = async (req, res) => {
    const puzzle = req.body;

    const newPuzzle = new Puzzle(puzzle);

    try {
        await newPuzzle.save();

        res.status(201).json(newPuzzle);
    } catch (err) {
        res.status(409).json({ message: error.message});
    }
}
const { AuthenticationError } = require('apollo-server-express');
const { User, Puzzle } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('username');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('puzzles');
    },
    puzzles: async () => {
      return Puzzle.find(); 
    },
    puzzle: async (parent, {_id}) => {
      return Puzzle.findOne(_id).populate(['img', 'title', 'complexity'])
    }
  },

  Mutation: {
    signup: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPuzzle: async (parent, { img, title, difficulty }, context) => {
      if (context.user) {
        const puzzle = await Puzzle.create({
          img,
          title,
          difficulty,
          author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { puzzles: puzzle._id } }
        );

        return puzzle;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePuzzle: async (parent, { puzzleId }, context) => {
      if (context.user) {
        const puzzle = await Puzzle.findOneAndDelete({
          _id: puzzleId,
          author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { puzzles: puzzle._id } }
        );

        return puzzle;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

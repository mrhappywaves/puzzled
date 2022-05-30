const { AuthenticationError } = require('apollo-server-express');
const { User, Puzzle } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('username');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('username');
    },
    puzzles: async () => {
      return Puzzle.find().populate(['puzzleId', 'img', 'title', 'complexity']); 
    },
    puzzle: async () => {
      return Puzzle.findOne({ puzzleId }).populate(['img', 'title', 'complexity'])
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
    addPuzzle: async (parent, { puzzleId, img, title, complexity }) => {
      const puzzle = await Puzzle.create({ puzzleId, img, title, complexity });

      return { puzzle };
    },

    removePuzzle: async (parent, args, context) => {
      if (context.puzzle) {
        return Puzzle.findOneAndDelete({ _id: context.puzzle._id });
      }
      throw new AuthenticationError('You need to be logged in first!');
    }
  },
};

module.exports = resolvers;

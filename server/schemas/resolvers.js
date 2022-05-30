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
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne ({ _id: context.user._id }).select('-__v -password');
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    puzzles: async () => {
      return Puzzle.findAll();
    },
    puzzle: async (parent, { puzzleId }) => {
      return Puzzle.findOne({ _id: puzzleId }).populate('owner');
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
    addPuzzle: async (parent,{ puzzleData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { puzzle: puzzleData } },
          { 
            new: true,
            runValidators: true,
          }
        );
        return updatedUser;
      }
      throw new AuthenticationError ('You need to be logged in!');
    },
    removePuzzle: async (parent, { puzzleId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { puzzle: puzzleId } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;

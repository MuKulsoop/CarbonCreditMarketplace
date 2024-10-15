// backend/models/User.js

import mongoose from 'mongoose';

// User Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'company', 'individual'],
      default: 'individual',
    },
    organizationType: {
      type: String,
      enum: ['seller', 'buyer'], // Specifies if the organization is selling or buying carbon credits
      required: true,
    },
    profilePicture: {
      type: String,
      default: 'default_avatar_url', // Placeholder image
    },
    companyName: {
      type: String,
      default: null,
    },
    carbonCreditsOwned: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// User Model
const User = mongoose.model('User', UserSchema);

export default User;

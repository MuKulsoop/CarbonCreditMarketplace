// backend/models/Project.js

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalCredits: {
    type: Number,
    required: true,
  },
  remainingCredits: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true}

);

module.exports = mongoose.model('Project', ProjectSchema);

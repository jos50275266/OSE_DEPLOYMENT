const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;
dotenv.config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 32,
    required: true,
  },

  bio: {
    type: String,
    maxlength: 160,
    default: '',
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    maxlength: 32,
    required: true,
  },

  salt: String,

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: 'user',
  },

  resetPasswordLink: {
    type: String,
    default: '',
  },

  likes: [
    {
      type: ObjectId,
      ref: 'Blog',
    },
  ],
});

// photo: {
//   url: {
//     type: String,
//     required: true,
//     default:
//       'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
//   },
//   key: { type: String, required: true },
// },

// bio: String,

userSchema.pre('save', async function (next) {
  console.log('user');
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

userSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user = this;
  const token = JWT.sign({ _id: user._id }, process.env.JWT_KEY, {
    expiresIn: '1d',
  });

  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async function (email, password) {
  // Search for a user by email and password
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ error: 'Invalid Login Credentials' });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: 'Invalid Login Credentials' });
  }

  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;

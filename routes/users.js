const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/instacloney`);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  stories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "story"
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  followings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  story: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story",
    },
  ],
  messages: {
    type: Array,
    default: [],
  },
  profilepicture: {
    type: String,
    default: "default.jpg",
  },
  bio: String,
  password: String,
  email: String,
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

mongoose.plugin(plm);

module.exports = mongoose.model("user", userSchema);

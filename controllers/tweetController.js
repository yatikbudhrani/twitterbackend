import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: " fields are requiered",
        success: false,
      });
    }
    await Tweet.create({
      description,
      userId: id,
    });
    return res.status(201).json({
      message: "tweet created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "tweet deleted",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id });
    return res.status(200).json({
      tweets: loggedInUserTweets,
    });
  } catch (error) {
    console.log(error);
  }
};

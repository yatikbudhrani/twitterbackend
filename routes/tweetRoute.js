import express from "express";
import {
  createTweet,
  deleteTweet,
  getAllTweets,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);

export default router;

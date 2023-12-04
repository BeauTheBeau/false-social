const express = require("express");
const router = express.Router();

const samplePosts = [
  {
    id: 1,
    author: "John",
    content: "STOP THE VOTE!! THE TREACHEROUS TRAITORS MUST BE STOPPED!!!",
    likes: 22,
    reposts: 7,
    date: 1662038400, // Unix timestamp for "2022-09-01"
    comments: [
      {
        id: 1,
        user: "Sarah",
        text: "What are they?",
        likes: 5,
        date: 1662038400,
      },
      {
        id: 2,
        user: "Mike",
        text: "This is the content I signed up for!",
        likes: 12,
        date: 1662038400,
      },
    ],
    tags: ["Satire", "Humor"],
    imageURL: "path/to/image1.jpg",
    videoURL: "path/to/video1.mp4",
    reactions: {
      thumbsUp: 15,
      hearts: 4,
      laughing: 3,
    },
  },
  {
    id: 2,
    author: "Alice",
    content:
      "Just discovered a conspiracy theory that aliens invented avocados. Wake up, sheeple!",
    likes: 45,
    reposts: 12,
    date: 1661952000, // Unix timestamp for "2022-08-31"
    comments: [
      { user: "Bob", text: "I've always suspected avocados were suspicious." },
      { user: "Emma", text: "That's what the avocados want us to think!" },
    ],
    tags: ["Conspiracy", "Humor"],
    imageURL: "path/to/image2.jpg",
    videoURL: null, // No video for this post
    reactions: {
      thumbsUp: 30,
      hearts: 10,
      laughing: 5,
    },
  },
  {
    id: 3,
    author: "Ethan",
    content:
      "Facts are so last season. I'm here for wild speculation and poorly drawn conclusions!",
    likes: 34,
    reposts: 5,
    date: 1662144800, // Unix timestamp for "2022-09-02"
    comments: [
      { user: "Olivia", text: "Finally, someone gets it!" },
      { user: "Noah", text: "This is why I love this platform!" },
    ],
    tags: ["Satire", "Humor"],
    imageURL: "path/to/image3.jpg",
    videoURL: null,
    reactions: {
      thumbsUp: 20,
      hearts: 6,
      laughing: 8,
    },
  },
  {
    id: 4,
    author: "Lily",
    content:
      "New study shows that pizza is the secret to eternal happiness. I knew it all along!",
    likes: 78,
    reposts: 23,
    date: 1661865600, // Unix timestamp for "2022-08-30"
    comments: [
      { user: "Max", text: "Pizza is life!" },
      { user: "Sophie", text: "I'm getting pizza right now!" },
    ],
    tags: ["Funny", "Food"],
    imageURL: "path/to/image4.jpg",
    videoURL: null,
    reactions: {
      thumbsUp: 50,
      hearts: 20,
      laughing: 8,
    },
  },
  {
    id: 5,
    author: "Max",
    content:
      "BREAKING: Cats found plotting world domination through mind control. Stay vigilant!",
    likes: 56,
    reposts: 19,
    date: 1661952000, // Unix timestamp for "2022-08-31"
    comments: [
      { user: "Liam", text: "I always knew my cat was up to something!" },
      { user: "Ava", text: "Time to join the resistance!" },
    ],
    tags: ["Cats", "Conspiracy"],
    imageURL: "path/to/image5.jpg",
    videoURL: null,
    reactions: {
      thumbsUp: 40,
      hearts: 10,
      laughing: 6,
    },
  },
];

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

// GET /feed
router.get("/feed", function (req, res) {
  res.render("feed", { posts: samplePosts });
});

// GET /comments/:postId
router.get("/comments/:postId", function (req, res) {
  const postId = parseInt(req.params.postId);
  const post = samplePosts.find((post) => post.id === postId);
  res.render("post", { post });
});

module.exports = router;

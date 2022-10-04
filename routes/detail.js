const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

router.get("/:id", postController.getPostById);

router.post("/add-comment", commentController.addComment);

module.exports = router;

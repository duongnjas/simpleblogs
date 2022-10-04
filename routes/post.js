const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.getPost);

router.get("/home", postController.getPost);

router.get("/new-post", postController.newPost);

router.get("/update-post/:id", postController.updatePage);

router.post("/add-post", postController.addPost);

router.post("/edit-post", postController.editPost);

router.delete("/delete-post", postController.deletePost);

//router.get('/:id/detail', postController.getPostById);

module.exports = router;

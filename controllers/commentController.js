const { posts } = require("../models/blogs");

class CommentController {
  //Post 
  addComment(req, res) {
    const { id, comment } = req.body;
    if (comment !== null && comment !== "") {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === Number(id)) {
          posts[i].comments.push(comment);
        }
      }
      res.status(200).json(200);
    } else {
      res.status(404).json(404);
    }
  }
}

module.exports = new CommentController();

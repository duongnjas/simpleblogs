const { posts } = require("../models/blogs");
const { post } = require("../routes/post");

function checkPost(id) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      return i;
    }
  }
  return -1;
}

class PostController {
  //Get
  getPost(req, res) {
    res.render("home", {
      posts: posts,
    });
  }

  //Get
  newPost(req, res) {
    res.render("blog", {
      action: "/add-post",
    });
  }

  //Get
  updatePage(req, res) {
    res.render("blog", {
      post: posts[Number(req.params.id) - 1],
      action: "/edit-post",
    });
  }

  //Get
  getPostById(req, res) {
    const id = Number(req.params.id);
    if (checkPost(id) > -1) {
      res.render("detail", {
        post: posts[checkPost(id)],
      });
    } else {
      res.send("<html><body><h1>Not found</h1></body></html>");
    }
  }

  //Post
  addPost(req, res) {
    const { title, content } = req.body;
    const newPost = {
      id: posts.length + 1,
      title: title,
      content: content,
      comments: [],
    };
    posts.push(newPost);
    res.redirect("/");
  }

  //Delete
  deletePost(req, res) {
    const { id } = req.body;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id === Number(id)) {
        posts.splice(i, 1);
        return res.status(200).json(200);
      }
    }
  }

  //Post
  editPost(req, res) {
    const { id, title, content } = req.body;
    posts[id - 1].title = title;
    posts[id - 1].content = content;
    res.redirect(`/detail/${id}`);
  }
}

module.exports = new PostController();

const { posts } = require("../config/db.js");
const {
  _getAllPosts,
  _getPostById,
  _insertPost,
  _updatePost,
  _deletePost,
} = require("../models/posts.model.js");

const getAllPosts = async(req, res) => {
  try {
    const data = await _getAllPosts();
    res.json(data);
  } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Couldnt find the posts" });
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await _getPostById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: "No post match this id" });
  }
};

const creatPost = async (req, res) => {
  try {
    const data = await _insertPost(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _updatePost(req.body, id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _deletePost(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  creatPost,
  updatePost,
  deletePost,
};

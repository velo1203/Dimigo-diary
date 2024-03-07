const db = require("../database/db");
const Post = require("../models/post");
const post = new Post(db);

exports.createPost = (user_id, title, description) => {
    return new Promise((resolve, reject) => {
        post.createPost(user_id, title, description)
            .then((post_id) => resolve(post_id))
            .catch((err) => reject(err));
    });
};

exports.getAllposts = () => {
    return new Promise((resolve, reject) => {
        post.getAllposts()
            .then((posts) => resolve(posts))
            .catch((err) => reject(err));
    });
};

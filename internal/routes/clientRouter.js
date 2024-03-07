const router = require("express").Router();
const postController = require("../controllers/postController");
const photoController = require("../controllers/photoController");

router.get("/all", async (req, res) => {
    try {
        const posts = await postController.getAllposts();
        const postsWithPhotos = await Promise.all(
            posts.map(async (post) => {
                const photos = await photoController.getPhotosByPostId(post.id);
                post.photos = photos;
                return post;
            })
        );
        res.json(postsWithPhotos);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = router;

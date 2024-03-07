const router = require("express").Router();
const postController = require("../controllers/postController");
const photoController = require("../controllers/photoController");

router.get("/all", async (req, res) => {
    try {
        const posts = await postController.getAllposts();
        res.json(posts);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = router;

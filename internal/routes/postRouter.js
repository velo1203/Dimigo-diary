const router = require("express").Router();
const postController = require("../controllers/postController");
const authenticate = require("../middleware/authenticate");
function validatePostRequest(req, res, next) {
    if (!req.body.title || !req.body.description) {
        return res
            .status(400)
            .json({ error: "Request body must include title and description" });
    }
    next();
}
router.post("/create", authenticate, validatePostRequest, async (req, res) => {
    try {
        const post_id = await postController.createPost(
            req.user.id,
            req.body.title,
            req.body.description
        );
        res.json({ message: "Post created successfully", post_id });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = router;

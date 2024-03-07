const router = require("express").Router();
const photoController = require("../controllers/photoController");

router.post("/create", async (req, res) => {
    try {
        const photo_id = await photoController.createPhoto(
            req.body.title,
            req.body.description,
            req.body.image
        );
        res.json({ message: "Photo created successfully", photo_id });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = router;

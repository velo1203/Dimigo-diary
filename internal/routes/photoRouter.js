const router = require("express").Router();
const photoController = require("../controllers/photoController");
const authenticate = require("../middleware/authenticate");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const upload = multer({
    storage: multer.diskStorage({
        filename(req, file, done) {
            done(null, uuidv4() + path.extname(file.originalname));
        },
        destination(req, file, done) {
            done(null, path.join(__dirname, "../../photos"));
        },
    }),
});

function validatePhotoRequest(req, res, next) {
    if (!req.body.post_id || !req.file) {
        return res
            .status(400)
            .json({ error: "Request must include post_id and image file" });
    }
    next();
}

router.post(
    "/create",
    authenticate,

    upload.single("image"),
    validatePhotoRequest,
    async (req, res) => {
        try {
            const post_id = req.body.post_id;
            const photo_name = req.file.filename;
            const photo_id = await photoController.createPhoto(
                post_id,
                photo_name
            );
            res.json({ message: "Photo created successfully", photo_id });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
);

module.exports = router;

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
    if (!req.body.title || !req.body.description || !req.file) {
        // '!' 연산자를 추가하여 필드가 없는 경우를 검사
        return res
            .status(400)
            .json({ error: "Title, description, and image are required." });
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
            const photo_name = req.file.filename;
            const title = req.body.title;
            const description = req.body.description;
            const photo_id = await photoController.createPhoto(
                photo_name,
                title,
                description
            );
            res.json({ message: "Photo created successfully", photo_id });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
);

router.delete("/:photoId", authenticate, async (req, res) => {
    try {
        const photoId = req.params.photoId;
        const changes = await photoController.deletePhoto(photoId);
        res.json({ message: "Photo deleted successfully", changes });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const month = req.query.month;
        let photos;
        if (month) {
            photos = await photoController.getPhotosByMonth(month);
        } else {
            photos = await photoController.getAllPhotos();
        }
        res.json(photos);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});
module.exports = router;

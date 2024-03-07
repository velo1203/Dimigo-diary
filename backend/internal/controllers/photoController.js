const db = require("../database/db");
const Photo = require("../models/photo");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const photo = new Photo(db);

exports.createPhoto = (post_id, path) => {
    return new Promise((resolve, reject) => {
        photo
            .createPhoto(post_id, path)
            .then((photo_id) => {
                resolve(photo_id);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

exports.getPhotosByPostId = (post_id) => {
    return new Promise((resolve, reject) => {
        photo
            .getPhotosByPostId(post_id)
            .then((photos) => resolve(photos))
            .catch((err) => reject(err));
    });
};

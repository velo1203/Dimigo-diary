const db = require("../database/db");
const Photo = require("../models/photo");
const multer = require("multer");

const photo = new Photo(db);

exports.createPhoto = (filename, title, description) => {
    return new Promise((resolve, reject) => {
        photo
            .createPhoto(filename, title, description)
            .then((photo_id) => {
                resolve(photo_id);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

exports.deletePhoto = (photoId) => {
    return new Promise((resolve, reject) => {
        photo
            .deletePhoto(photoId)
            .then((changes) => {
                if (changes > 0) {
                    resolve(changes);
                } else {
                    reject(new Error("Photo not found"));
                }
            })
            .catch((err) => reject(err));
    });
};

exports.getPhotosByMonth = (month) => {
    return new Promise((resolve, reject) => {
        photo
            .getPhotosByMonth(month)
            .then((photos) => resolve(photos))
            .catch((err) => reject(err));
    });
};

exports.getAllPhotos = () => {
    return new Promise((resolve, reject) => {
        photo
            .getAllPhotos()
            .then((photos) => resolve(photos))
            .catch((err) => reject(err));
    });
};

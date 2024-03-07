class Photo {
    constructor(db) {
        this.db = db;
    }

    //사진 추가
    createPhoto(post_id, path) {
        return new Promise((resolve, reject) => {
            this.db.run(
                "INSERT INTO photos (post_id, path, upload_date) VALUES (?, ?, ?)",
                [post_id, path, new Date()],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                }
            );
        });
    }

    //post id에 해당하는 사진 전부 가져오기
    getPhotosByPostId(post_id) {
        return new Promise((resolve, reject) => {
            this.db.all(
                "SELECT * FROM photos WHERE post_id = ?",
                [post_id],
                function (err, rows) {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }
}

module.exports = Photo;

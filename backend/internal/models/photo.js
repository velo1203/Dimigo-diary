class Photo {
    constructor(db) {
        this.db = db;
    }

    // 사진 추가
    createPhoto(filename, title, description) {
        const date = new Date();
        const month = date.getMonth() + 1; // getMonth는 0부터 시작하므로 1을 더해줍니다.
        const day = date.getDate();

        return new Promise((resolve, reject) => {
            this.db.run(
                "INSERT INTO photos (filename, title, description, month, day) VALUES (?, ?,?, ?, ?)",
                [filename, title, description, month, day],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                }
            );
        });
    }

    getPhotosByMonth(month) {
        return new Promise((resolve, reject) => {
            this.db.all(
                "SELECT * FROM photos WHERE month = ? ORDER BY createdAt DESC",
                [month],
                function (err, rows) {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }

    // 모든 사진 가져오기
    getAllPhotos() {
        //모든사진
        return new Promise((resolve, reject) => {
            this.db.all(
                "SELECT * FROM photos ORDER BY createdAt DESC",
                function (err, rows) {
                    if (err) reject(err);
                    else resolve(rows);
                }
            );
        });
    }
    deletePhoto(photoId) {
        return new Promise((resolve, reject) => {
            this.db.run(
                "DELETE FROM photos WHERE id = ?",
                [photoId],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.changes); // 삭제된 행의 수를 반환
                }
            );
        });
    }
}

module.exports = Photo;

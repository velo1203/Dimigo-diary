class Post {
    constructor(db) {
        this.db = db;
    }

    //post 추가
    createPost(user_id, title, description) {
        return new Promise((resolve, reject) => {
            this.db.run(
                "INSERT INTO posts (user_id, title, description) VALUES (?, ?, ?)",
                [user_id, title, description],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                }
            );
        });
    }

    //전체 post
    getAllposts() {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM posts", function (err, rows) {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}

module.exports = Post;

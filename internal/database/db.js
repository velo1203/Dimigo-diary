// database/db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("internal/database/database.db"); // 데이터베이스 파일 생성 및 연결

db.serialize(() => {
    // 사용자 테이블 생성
    db.run(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE,username TEXT, password TEXT)"
    );

    // photos 테이블에 post_id 필드 추가
    db.run(
        "CREATE TABLE IF NOT EXISTS photos (id INTEGER PRIMARY KEY AUTOINCREMENT, post_id INTEGER, path TEXT, upload_date DATETIME, FOREIGN KEY(post_id) REFERENCES posts(id))"
    );

    // posts 테이블 생성
    db.run(
        "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, title TEXT, description TEXT, FOREIGN KEY(user_id) REFERENCES users(id))"
    );
});

module.exports = db;

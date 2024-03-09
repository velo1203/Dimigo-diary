// database/db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("internal/database/database.db"); // 데이터베이스 파일 생성 및 연결

db.serialize(() => {
    // 사용자 테이블 생성
    db.run(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL)"
    );

    // photos 테이블 생성
    db.run(
        "CREATE TABLE IF NOT EXISTS photos (id INTEGER PRIMARY KEY AUTOINCREMENT, filename TEXT NOT NULL, title TEXT, description TEXT, month INTEGER NOT NULL, day INTEGER NOT NULL, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP)"
    );
});

module.exports = db;

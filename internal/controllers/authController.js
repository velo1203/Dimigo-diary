// 필요한 모듈 불러오기
const bcrypt = require("bcrypt"); // 비밀번호를 해싱하기 위한 bcrypt 모듈
const jwt = require("jsonwebtoken"); // JWT 토큰을 생성하고 검증하기 위한 jsonwebtoken 모듈
require("dotenv").config({ path: "cmd/.env" }); // .env 파일에서 환경변수 불러오기
const User = require("../models/user"); // 사용자 모델
const db = require("../database/db"); // 데이터베이스 연결 설정
const user = new User(db); // User 클래스의 인스턴스 생성

const secretKey = process.env.JWT_SECRET; // JWT 토큰 생성 시 사용할 시크릿 키

// 회원가입 기능
exports.register = (email, username, password) => {
    return new Promise((resolve, reject) => {
        user.findByEmail(email)
            .then((existingUser) => {
                if (existingUser) throw new Error("User already exists");
                return bcrypt.hash(password, 10);
            })
            .then((hash) => {
                return user.createUser(email, username, hash);
            })
            .then((user) => resolve(user))
            .catch((err) => reject(err));
    });
};

// 로그인 기능
exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        let foundUser;
        user.findByEmail(email)
            .then((user) => {
                if (!user) throw new Error("User not found");
                foundUser = user;
                return bcrypt.compare(password, user.password);
            })
            .then((result) => {
                if (!result) throw new Error("Wrong password");
                const token = jwt.sign(
                    { id: foundUser.id, email: foundUser.email },
                    secretKey,
                    { expiresIn: "1h" }
                );
                resolve(token);
            })
            .catch((err) => reject(err));
    });
};

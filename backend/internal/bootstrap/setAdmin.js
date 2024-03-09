const User = require("../models/user");
const db = require("../database/db");
const user = new User(db);
const bcrypt = require("bcrypt"); // 비밀번호를 해싱하기 위한 bcrypt 모듈

const AdminAccounts = require("../config/AdminList.json");

function AdminInitial() {
    AdminAccounts.map((account, index) => {
        user.findByEmail(account.email).then((userFound) => {
            if (!userFound) {
                bcrypt.hash(account.password, 10).then((hash) => {
                    user.createUser(account.email, account.username, hash);
                    console.log("NEW Admin account created", account);
                });
            }
        });
    });
}

module.exports = AdminInitial;

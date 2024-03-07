class registerRequestModel {
    constructor({ email, password, username }) {
        this.email = email ? email.trim() : ""; // 공백 제거
        this.password = password;
        this.username = username ? username.trim() : ""; // 공백 제거
    }

    validate() {
        if (!this.email || !this.password || !this.username) {
            throw Error("email, username, and password are required");
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
            throw Error("Invalid email format");
        }
        // 비밀번호 강도 검사 등 추가적인 검사를 여기에 구현할 수 있습니다.
        return true;
    }
}

class loginRequestModel {
    constructor({ email, password }) {
        this.email = email ? email.trim() : ""; // 공백 제거
        this.password = password;
    }

    validate() {
        if (!this.email || !this.password) {
            throw Error("email and password are required");
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
            throw Error("Invalid email format");
        }
        return true;
    }
}

module.exports = { loginRequestModel, registerRequestModel }; // 정의된 라우터 모듈을 내보냅니다.

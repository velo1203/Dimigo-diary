// 필요한 모듈을 불러옵니다.
const express = require("express"); // Express 프레임워크
const authService = require("../controllers/authController"); // 인증 서비스 로직이 정의된 모듈
const router = express.Router(); // 새 Express 라우터 인스턴스를 생성합니다.
const {
    loginRequestModel,
    registerRequestModel,
} = require("../requestmodel/authModel");

// 회원가입을 위한 POST 엔드포인트
router.post("/register", async (req, res) => {
    try {
        const request = new registerRequestModel(req.body);
        request.validate();

        const userId = await authService.register(
            req.body.email,
            req.body.username,
            req.body.password
        );
        res.json({ message: "User registered successfully", userId });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

// 로그인을 위한 POST 엔드포인트
router.post("/login", async (req, res) => {
    try {
        const request = new loginRequestModel(req.body);
        request.validate(req.body);

        const token = await authService.login(
            req.body.email,
            req.body.password
        );
        res.json({ message: "Logged in successfully", token });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = router;

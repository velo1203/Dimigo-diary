const express = require("express");
const authRouter = require("../internal/routes/authRouter");
const postRouter = require("../internal/routes/postRouter");
const photoRouter = require("../internal/routes/photoRouter");
const authenticate = require("../internal/middleware/authenticate");
const logRequest = require("../internal/middleware/log_request");
const errorHandler = require("../internal/middleware/errorHandler");
const clientRouter = require("../internal/routes/clientRouter");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json()); // JSON 요청 본문 파싱을 위한 미들웨어
app.use(logRequest); // 로그 미들웨어 등록
app.use(errorHandler); // 에러 핸들러 등록

app.use("/api/auth/", authRouter); // 인증 라우터 등록
app.use("/api/post", postRouter);
app.use("/api/photo", photoRouter);
app.use("/api/client", clientRouter);
// 인증된 사용자만 접근 가능한 임시 라우트
app.get("/api/protected", authenticate, (req, res) => {
    // 인증된 사용자 정보는 req.user에서 가져올 수 있습니다 (미들웨어에서 설정)
    res.json({ message: "Hello, authenticated user!", user: req.user });
});

app.use("/photos", express.static(path.join(__dirname, "..", "photos")));
//react app build folder path is: ../../frontend/build
// app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build")));
// app.get("*", (req, res) => {
//     res.sendFile(
//         path.join(__dirname, "..", "..", "frontend", "build", "index.html")
//     );
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

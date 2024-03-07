require("dotenv").config({ path: "cmd/.env" }); // .env 파일에서 환경변수 불러오기
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET; // JWT 토큰 생성 시 사용할 시크릿 키

// JWT 토큰을 검증하는 미들웨어 함수
const authenticate = (req, res, next) => {
    // 요청 헤더에서 'Authorization' 값 가져오기
    const authHeader = req.headers["authorization"];
    // 'Bearer TOKEN' 형태에서 토큰 부분만 추출
    const token = authHeader && authHeader.split(" ")[1];

    // 토큰이 없는 경우, 401 Unauthorized 응답
    if (!token) {
        return res.sendStatus(401);
    }
    console.log(token);
    // 토큰 검증
    jwt.verify(token, secretKey, (err, decoded) => {
        // 토큰이 유효하지 않거나 만료된 경우, 403 Forbidden 응답
        if (err) {
            return res.sendStatus(403); //403 forbidden
        }

        // 토큰이 유효한 경우, decoded 정보를 req.user에 할당하고 다음 미들웨어로 이동
        req.user = decoded;
        next();
    });
};

module.exports = authenticate;

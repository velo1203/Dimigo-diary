function logRequest(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next(); // 다음 미들웨어 함수로 제어를 넘깁니다.
}

module.exports = logRequest;

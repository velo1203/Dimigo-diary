// error.js
function errorHandler(err, req, res, next) {
    // HTTP 상태 코드가 설정되어 있지 않으면, 500 (서버 내부 오류)로 설정
    const statusCode = err.statusCode || 500;

    // 개발 환경에서는 에러 스택도 함께 출력 (운영 환경에서는 제외하는 것이 좋습니다)
    if (process.env.NODE_ENV === "development") {
        console.error(err.stack);
    }

    // 에러 응답을 클라이언트에 전송
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message: err.message,
    });
}

module.exports = errorHandler;

// API.js
import axios from "axios";
import useAuthStore from "../store/userStore";

const getApiClient = () => {
    const { token } = useAuthStore.getState(); // 스토어에서 토큰 상태 가져오기

    const apiClient = axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined, // 토큰이 있으면 헤더 설정
        },
    });

    return apiClient;
};

export default getApiClient;

import getApiClient from "../api";

const login = async (email, password) => {
    try {
        const apiClient = getApiClient();
        const response = await apiClient.post("api/auth/login", {
            email: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error("GET Request Error:", error);
        throw error;
    }
};

export { login };

import getApiClient from "../api";

const uploadPhoto = async (photo) => {
    const apiClient = getApiClient(); // 기본 설정된 API 클라이언트 가져오기

    const formData = new FormData();
    formData.append("title", photo.title);
    formData.append("description", photo.description);
    formData.append("image", photo.file);

    const response = await apiClient.post("api/photo/create", formData, {
        headers: {
            // multipart/form-data로 설정을 오버라이드
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

const getPhotos = async () => {
    const apiClient = getApiClient();

    const response = await apiClient.get("api/photo");

    return response.data;
};
const deletePhoto = async (id) => {
    const apiClient = getApiClient();
    const response = await apiClient.delete(`api/photo/${id}`);
    return response.data;
};

export { uploadPhoto, getPhotos, deletePhoto };

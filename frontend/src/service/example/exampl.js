// service.js
import { apiClient } from '../api';

// GET 요청
const getExample = async (path) => {
  try {
    const response = await apiClient.get(path);
    return response.data;
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error;
  }
};

// POST 요청
const postExample = async (path, data) => {
  try {
    const response = await apiClient.post(path, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error);
    throw error;
  }
};

// PUT 요청
const putExample = async (path, data) => {
  try {
    const response = await apiClient.put(path, data);
    return response.data;
  } catch (error) {
    console.error('PUT Request Error:', error);
    throw error;
  }
};

// DELETE 요청
const deleteExample = async (path) => {
  try {
    const response = await apiClient.delete(path);
    return response.data;
  } catch (error) {
    console.error('DELETE Request Error:', error);
    throw error;
  }
};

export { getExample, postExample, putExample, deleteExample };

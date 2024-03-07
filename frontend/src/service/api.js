import axios from 'axios';

const TempToken = '';

const apiClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TempToken}`
    }
});

export default apiClient;

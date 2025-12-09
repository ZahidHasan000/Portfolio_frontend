import axios from "axios";
export default axios.create({
  // baseURL: `${import.meta.env.REACT_APP_PRO_MODE_URL}`,
  // baseURL: `${'http://localhost:5000/api/'}`,
  // baseURL: `${process.env.REACT_APP_GET_BASE_URL}`,
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    // "Content-Type": "application/json"
    'Content-Type': 'multipart/form-data'
  }
});


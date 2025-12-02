import axios from "axios";
export default axios.create({
  // baseURL: `${import.meta.env.REACT_APP_PRO_MODE_URL}`,
  // baseURL: `${'http://localhost:5000/api/'}`,
  baseURL: `${'https://zahid-portfolio-1.onrender.com/api/'}`,
  headers: {
    // "Content-Type": "application/json"
    'Content-Type': 'multipart/form-data'
  }
});


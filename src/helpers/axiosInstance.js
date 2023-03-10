import axios from 'axios'


const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_BACK_END_URL,
  withCredentials: true, 
  credentials: 'include'
})
export default axiosInstance
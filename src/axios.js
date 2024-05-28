import axios from "axios";
const instanse = axios.create({
  baseURL: 'http://localhost:4444/'
  // baseURL: process.env.REACT_APP_API_URL,


})

instanse.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})


// axios.get('')

export default instanse
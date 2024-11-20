import axios from "axios";
const instanse = axios.create({
  baseURL: 'https://adb-solution.com/api/'
  // baseURL: 'http://localhost:4444/'


})

instanse.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})


// axios.get('')

export default instanse
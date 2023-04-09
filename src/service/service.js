import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1"
})

axiosInstance.interceptors.request.use(
    function(config) {
        const token = window.localStorage.getItem("token");
      
        if(token){
            config.headers.Authorization = token
            
        }
        return config;
    },
    function (error){
     
        return Promise.reject(error)
    }
)
const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint)
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body)
    },
    login(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    createUser(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    }
}

export default {
   signIn(body) {
    return api.login(`/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`, body)
   },
    validToken() { 
        return api.login(`/accounts:lookup?key=${process.env.VUE_APP_API_KEY}`,{
            idToken: window.localStorage.getItem("token")
        })
    },
    signUp(body) {
        return api.login(`/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`, body)
    },
    
    updateUser(body){
        return api.login(`/accounts:update?key=${process.env.VUE_APP_API_KEY}`, body)
    }
}
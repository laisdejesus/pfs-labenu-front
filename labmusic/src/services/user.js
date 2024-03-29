import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
            
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })
}

export const signup = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}
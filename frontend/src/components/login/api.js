import axios from "axios"
export const api = axios.create({
    baseURL: "https://myauthapivone.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Controll-Allow-Origin": "*",
    },
})
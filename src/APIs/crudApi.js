import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_BASE_URL })

export const newPost=(data)=>API.post('/addPost',data)
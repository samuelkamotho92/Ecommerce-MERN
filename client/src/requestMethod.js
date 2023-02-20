import axios from 'axios';
const BASE_URL = `http://localhost:8000/api/v1/`
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWJlNGI1NWU4ZDYwMTZjY2FjMjMwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg3ODM3MSwiZXhwIjoxNjc3MTM3NTcxfQ.2V6Eukauj0KtaY80quFFIxKyZ4hOIrvsheQXKmtKsk8"
export const publicRequets = axios.create({
    baseUrl:BASE_URL 
})
export const userRequest = axios.create({
    baseUrl:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})
import axios from "axios";

const REST_API_BASE_URL = 'https://liberty-backend-production.up.railway.app/api/employee';
const REST_API_BASE_URL_ALL = 'https://liberty-backend-production.up.railway.app/api/employee/all';
const REST_API_PENDING_URL = 'https://liberty-backend-production.up.railway.app/api/employee/pending';

export const listEmployee = () =>{
    return axios.get(REST_API_BASE_URL_ALL);

}
export const listEmployee1 = () =>{
    return axios.get(REST_API_BASE_URL_ALL);

}


export const createEmployee = (formData) => axios.post(REST_API_BASE_URL,formData);

export const pending = (id,name) => axios.post(REST_API_PENDING_URL+'/'+id+'/'+name);

export const statusChecking = (id) => axios.get(REST_API_BASE_URL+'/'+id);
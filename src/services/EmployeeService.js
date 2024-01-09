import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employee';
const REST_API_BASE_URL_ALL = 'http://localhost:8080/api/employee/all';
const REST_API_PENDING_URL = 'http://localhost:8080/api/employee/pending';

export const listEmployee = () =>{
    return axios.get(REST_API_BASE_URL);

}
export const listEmployee1 = () =>{
    return axios.get(REST_API_BASE_URL_ALL);

}


export const createEmployee = (formData) => axios.post(REST_API_BASE_URL,formData);

export const pending = (id,name) => axios.post(REST_API_PENDING_URL+'/'+id+'/'+name);

export const statusChecking = (id) => axios.get(REST_API_BASE_URL+'/'+id);
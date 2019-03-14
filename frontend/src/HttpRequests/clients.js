import axios from 'axios';

export const getClients = ({ params } = {}) => axios.get(`clients`, { params });
export const getClient = ({ params, id } = {}) => axios.get(`clients/${id}`, { params });
export const createClient = ({ data }) => axios.post(`clients`, data);
export const updateClient = ({ id, data }) => axios.put(`clients/${id}`, data);
export const deleteClient = ({ id }) => axios.delete(`clients/${id}`);
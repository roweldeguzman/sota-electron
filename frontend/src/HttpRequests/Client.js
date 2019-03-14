import axios from 'axios';

export const getClient = ({ id, params }) => axios.get(`clients/${id}`, { params });
export const getClients = ({ params } = {}) => axios.get('clients', { params });
export const createClient = ({ data }) => axios.post('clients', data);
export const updateClient = ({ id, data }) => axios.put(`clients/${id}`, data);
export const deleteClient = ({ id }) => axios.delete(`clients/${id}`);

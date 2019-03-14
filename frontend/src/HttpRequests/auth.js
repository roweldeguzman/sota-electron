import axios from 'axios';

export const login = ({ data }) => axios.post('/auth/login', data, { authWithToken: false });

export const logout = () => axios.post('/auth/logout');

export const refresh = () => axios.post('/auth/refresh');

export const currentUser = () => axios.post('/auth/user');

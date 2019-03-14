import axios from 'axios';

export const getProjects = ({ params } = {}) => axios.get(`projects`, { params });
export const getProject = ({ params, id } = {}) => axios.get(`projects/${id}`, { params });
export const createProject = ({ data }) => axios.post(`projects`, data);
export const updateProject = ({ id, data }) => axios.put(`projects/${id}`, data);
export const deleteProject = ({ id }) => axios.delete(`projects/${id}`);
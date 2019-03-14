import axios from 'axios';

export const getJobs = ({ params } = {}) => axios.get(`jobs`, { params });
export const getJob = ({ params, id } = {}) => axios.get(`jobs/${id}`, { params });
export const createJob = ({ data }) => axios.post(`jobs`, data);
export const updateJob = ({ id, data }) => axios.put(`jobs/${id}`, data);
export const deleteJob = ({ id }) => axios.delete(`jobs/${id}`);
export const abortJob = ({ id }) => axios.put(`jobs/${id}/abort`);


export const getJobCount = ({ params } = {}) => axios.get(`jobs/count`, { params });
export const updateJobPricing = ({ id, data }) => axios.put(`jobs/${id}/pricing`, data);
export const updateJobAsApproved = ({ id, data }) => axios.put(`jobs/${id}/approved`, data);
export const updateJobAsCompleted = ({ id, data }) => axios.put(`jobs/${id}/completed`, data);
export const updateJobAsInvoiced = ({ id, data }) => axios.put(`jobs/${id}/invoiced`, data);
export const clearJobPrice = ({ id }) => axios.put(`jobs/${id}/clear_price`);

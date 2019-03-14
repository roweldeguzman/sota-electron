import { has } from 'lodash';

export default (error) => (error && has(error,'response.status'));
import axios from 'axios';

const getAll = () => {
  return axios.get('http://localhost:3001/persons').then(response => response.data);
};

const create = newObject => {
  return axios.post('http://localhost:3001/persons', newObject).then(response => response.data);
};

export default { getAll, create };

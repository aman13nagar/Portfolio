import api from '../utils/api';

const getProjects = async () => {
  const { data } = await api.get('/projects');
  return data;
};

export default {
  getProjects,
};

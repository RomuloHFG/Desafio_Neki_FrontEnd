import axios from 'axios';

const API_URL = '/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  return response.data;
};

export const fetchSkills = async () => {
  const response = await axios.get(`${API_URL}/skills`);
  return response.data;
};

export const fetchAvailableSkills = async () => {
  const response = await axios.get(`${API_URL}/available-skills`);
  return response.data;
};

export const addSkill = async (skill) => {
  const response = await axios.post(`${API_URL}/skills`, skill);
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = await axios.delete(`${API_URL}/skills/${id}`);
  return response.data;
};

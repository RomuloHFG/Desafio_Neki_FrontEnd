import axiosInstance from "../axiosConfig";

export const login = async (email, password) => {
  const response = await axiosInstance.post(`/auth/login`, { email, password });
  return response.data;
};

export const postUser = async (data) => {
  const response = await axiosInstance.post(`/auth/register`, data);
  return response.data;
};

export const postProfessionals = async (data) => {
  const response = await axiosInstance.post(`/Professionals`, data);
  return response.data;
};

export const getProfessionals = async () => {
  const response = await axiosInstance.get(`/Professionals`);
  return response.data;
};

export const getSpecialties = async () => {
  const response = await axiosInstance.get(`/specialties`);
  return response.data;
};

export const getLevelsofexpertise = async () => {
  const response = await axiosInstance.get(`/levelsofexpertise`);
  return response.data;
};

export const postPhoto = async (formData, professionalId) => {
  const response = await axiosInstance.post(
    `/Professionals/${professionalId}/photo`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getPhoto = async (professionalId) => {
  const response = await axiosInstance.get(
    `/Professionals/${professionalId}/photo`
  );
  return response.data;
};

export const updateProfessional = async (id, updatedData) => {

  updatedData = {
    "name": updatedData.title,
    "specialty": {
      "id": updatedData.subheader,
    },
    "levelOfExpertise": {
      "id": updatedData.description,
    },
    "address": updatedData.address,
    "phone": updatedData.phone,
  }

  const response = await axiosInstance.put(
    `/Professionals/${id}`,
    updatedData
  );
  return response;
};

export const deleteProfessional = async (id) => {
  const response = await axiosInstance.delete(`/Professionals/${id}`);
  return response;
};
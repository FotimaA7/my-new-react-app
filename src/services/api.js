// src/services/api.js
import axios from "axios";

const API_BASE_URL = "https://fake-json-api.mock.beeceptor.com";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    return [];
  }
};

export const fetchUserDetails = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details", error);
    return null;
  }
};

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching companies", error);
    return [];
  }
};

export const fetchCompanyDetails = async (companyId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching company details", error);
    return null;
  }
};

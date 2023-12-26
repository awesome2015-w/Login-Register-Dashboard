import { Axios } from "axios";

const API_URL = "/api/users";

// Register user

const register = async (userData) => {
  const response = await Axios.post(API_URL);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const authService = {
  register,
};
export default authService;

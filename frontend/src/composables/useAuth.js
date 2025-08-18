import axios from "axios";

export const useAuth = () => {
  const login = async (username, password) => {
    const res = await axios.post("http://localhost:8000/api/token/", {
      username,
      password
    });
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };

  const getAuthHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem("access")}`
  });

  return { login, logout, getAuthHeader };
};

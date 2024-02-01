import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "<your-api-base-url>",
  // Add any other configuration options here
});

// Add a request interceptor to automatically include the token in the Authorization header
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (username, password) => {
  try {
    const response = await api.post("/login", { username, password });
    if (response.status === 200) {
      // Login successful, store token in cookie
      const token = response.data.token;
      Cookies.set("token", token);
    }
    return response;
  } catch (error) {
    // Handle error
    throw error;
  }
};
export const signup = (username, password) => {
  return api.post("/signup", { username, password });
};

export const fetchNotes = () => {
  return api.get("/notes");
};

export const addNote = (note) => {
  return api.post("/notes", note);
};

export const updateNote = (noteId, note) => {
  return api.put(`/notes/${noteId}`, note);
};

export const deleteNote = (noteId) => {
  return api.delete(`/notes/${noteId}`);
};

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
//product
export const fetchProducts = () => API.get(`/products`);
export const fetchProductsByBrand = (brand) => API.get(`/products/b/${brand}`);
export const fetchFeatureProducts = () => API.get(`/products/feature-products`);

// category
export const fetchBrands = () => API.get("/brands");

// color
export const fetchColors = () => API.get("/colors");

// size
export const fetchSizes = () => API.get("/sizes");

// order
export const createOrder = (data) => API.post("/orders", data);
export const getOrders = (userId) => API.get(`/orders/${userId}`);
export const getOrder = (data) => API.get(`/orders/order/${data}`);

// auth
export const login = (formData) => API.post("/users/login", formData);
export const logout = (id) => API.post("/users/logout", id);
export const signup = (formData) => API.post("/users/signup", formData);
export const userData = (id) => API.get(`/users/${id}`);

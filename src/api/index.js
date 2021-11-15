import axios from "axios"


const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

//product
export const fetchProducts = () => API.get(`/products`);
export const fetchProductsByBrand = (brand) => API.get(`/products/b/${brand}`);
export const fetchFeatureProducts = () => API.get(`/products/feature-products`);


// category
export const fetchBrands = () => API.get('/brands')



// color
export const fetchColors = () => API.get('/colors')



// size
export const fetchSizes = () => API.get('/sizes')


// order
export const createOrder = (data) => API.post('/orders',data)
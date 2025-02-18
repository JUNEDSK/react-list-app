import axios from "axios";

export const fetchProducts = async () => {
    console.log('fetchProducts function is loaded');
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

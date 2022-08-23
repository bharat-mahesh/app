import apiClient from "./clientApi";

const endpoint = "/facts";

const getListings = () => apiClient.get(endpoint);

export default {
    getListings,
};
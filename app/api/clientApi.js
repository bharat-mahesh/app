import { create } from "apisauce";

const apiClient = create({
    baseURL: "https://catfact.ninja",
})

export default apiClient;
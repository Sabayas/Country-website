import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET request to fetch all countries
export const getCountryData = () => {
    return api.get("/all?fields=name,capital,currencies");
};
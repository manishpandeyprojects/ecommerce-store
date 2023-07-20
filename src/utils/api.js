import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_API_TOKEN,
        'Content-Type': 'application/json',
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return data;
    } catch (error) {
        return error;
    }
}

export const addDataFromApi = async (url, newData) => {
    try {
        const { data } = await axios.post(process.env.REACT_APP_DEV_URL + url, { data: newData }, params);
        return data;
    } catch (error) {
        return error;
    }
}
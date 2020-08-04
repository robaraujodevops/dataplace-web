import axios from "axios";

const apiMap = axios.create({
    baseURL:"https://api.mapbox.com/geocoding/v5/mapbox.places/",
    params: {
        ID: 12345
    }
});

apiMap.interceptors.request.use(async config => {
    config.params = {access_token: "pk.eyJ1IjoiYmV0b2FyYXVqb2RldiIsImEiOiJja2QyM2d5N2cxOWM2MnlteTAwM3BodG1zIn0.wvdL_sqUluTP8jwrX4dkjA"}

    return config;
});

export default apiMap;
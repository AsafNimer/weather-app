import { FirstApiResultType } from "types";

const URL: string = "api.openweathermap.org";

const fetchData = async (
    url: string,
    value: string | FirstApiResultType,
    units?: string
) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (err) {
        console.log("error on fetch: ", err);
    }
};

export const searchCity = (value: string) => {
    const response = fetchData(
        `http://${URL}/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
            process.env.REACT_APP_API_KEY
        }`,
        value
    );

    return response;
};

export const getCurrent = (value: FirstApiResultType, units: string) => {
    const response = fetchData(
        `http://${URL}/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`,
        value,
        units
    );
    return response;
};

export const getForecast = (value: FirstApiResultType, units: string) => {
    const response = fetchData(
        `http://api.openweathermap.org/data/2.5/forecast?q=${value.name}&&units=${units}&appid=${process.env.REACT_APP_API_KEY}`,
        value,
        units
    );
    return response;
};

export const currentPollution = (value: FirstApiResultType) => {
    const response = fetchData(
        `http://${URL}/data/2.5/air_pollution?lat=${value.lat}&lon=${value.lon}&appid=${process.env.REACT_APP_API_KEY}`,
        value
    );
    return response;
};

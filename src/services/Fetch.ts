import { FirstApiResultType } from "types";

const URL: string = "api.openweathermap.org";

export const searchCity = async (value: string) => {
    try {
        const response = await fetch(
            `http://${URL}/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
                process.env.REACT_APP_API_KEY
            }`
        );

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("first fetch response: ", jsonResponse);
            return jsonResponse;
        }
    } catch (err) {
        console.log("error on fetch: ", err);
    }
};

export const current = async (city: FirstApiResultType, units: string) => {
    try {
        const response = await fetch(
            `http://${URL}/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Current fetch response:", jsonResponse);
            return jsonResponse;
        }
    } catch (err) {
        console.log("error fetching CurrentWeather API");
    }
};

export const getForecast = async (city: FirstApiResultType, units: string) => {
    try {
        const response = await fetch(
            `http://${URL}/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Forecast fetch response:", jsonResponse);
            return jsonResponse;
        }
    } catch (err) {
        console.log("error fetching forcast API");
    }
};

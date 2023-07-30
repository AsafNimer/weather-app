import { ResultType } from "types";

export const searchCity = async (value: string) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
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

export const getForecast = async (city: ResultType, units: string) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("second fetch response:", jsonResponse);
            return jsonResponse;
        }
    } catch (err) {
        console.log("error fetching second API");
    }
};

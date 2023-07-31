import { Dispatch, SetStateAction } from "react";

export interface FirstApiResultType {
    name: string;
    local_names: { [key: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}

export type addProps = {
    observedCity: FirstApiResultType | null;
};

export type ForecastType = null | {
    clouds: { all: number };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: { description: string; icon: string; id: number; main: string }[];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
};

export type ForecastContextType = {
    forecast: ForecastType;
    setForecast: Dispatch<SetStateAction<ForecastType>>;
    units: string;
    setUnits: Dispatch<SetStateAction<string>>;
    observedCity: FirstApiResultType | null;
    userInput: string;
    currentWeather: ForecastType;
    setCurrentWeather: Dispatch<SetStateAction<ForecastType>>;
};

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

export type CurrentType = null | {
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

export interface ForcastType {
    city: {
        coord: {
            lat: number;
            lon: number;
            country: string;
            id: number;
            name: string;
            population: number;
            sunrise: number;
            sunset: number;
            timezone: number;
        };
    };
    cnt: number;
    cod: string;
    list: {
        clouds: { all: number };
        dt: number;
        dt_txt: string;
        main: {
            feels_like: number;
            grnd_level: number;
            humidity: number;
            pressure: number;
            sea_level: number;
            temp: number;
            temp_kf: number;
            temp_max: number;
            temp_min: number;
        };
        pop: number;
        rain: { "3h": number };
        sys: { pod: string };
        visibility: number;
        weather: {
            description: string;
            icon: string;
            id: number;
            main: string;
        }[];
        wind: {
            deg: number;
            gust: number;
            speed: number;
        };
    }[];
}

export type pollutionType = null | {
    coord: number[];
    list: {
        dt: number;
        main: { aqi: number };
        components: {
            co: number;
            no: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
            nh3: number;
        };
    }[];
};

export type ForecastContextType = {
    forecast: CurrentType;
    setForecast: Dispatch<SetStateAction<CurrentType>>;
    units: string;
    setUnits: Dispatch<SetStateAction<string>>;
    observedCity: FirstApiResultType | null;
    userInput: string;
    currentWeather: CurrentType;
    setCurrentWeather: Dispatch<SetStateAction<CurrentType>>;
    pollution: pollutionType;
};

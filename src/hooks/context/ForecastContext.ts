import { createContext, useContext } from "react";
import {
    ForecastContextType,
    ObservedCityContextType,
    UnitsContextType,
} from "types";

export const ForecastContext = createContext<ForecastContextType>(
    {} as ForecastContextType
);

export const ObservedCityContext = createContext<ObservedCityContextType>(
    {} as ObservedCityContextType
);

export const unitsContext = createContext<UnitsContextType>(
    {} as UnitsContextType
);

export function useForecastContext() {
    const forecast = useContext(ForecastContext);

    if (forecast === null) {
        throw new Error(
            "useForecastContext must be used with a ForecastContext"
        );
    }
    return forecast;
}

export function useObservedCityContext() {
    const observedCity = useContext(ObservedCityContext);

    return observedCity;
}

export function useUnitsContext() {
    const units = useContext(unitsContext);

    return units;
}

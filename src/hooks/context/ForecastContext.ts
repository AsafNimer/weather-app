import { createContext, useContext } from "react";
import { ForecastContextType } from "types";

export const ForecastContext = createContext<ForecastContextType>(
    {} as ForecastContextType
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

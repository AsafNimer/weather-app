import { createContext } from "react";
import { ForecastContextType } from "types";

export const ForecastContext = createContext<ForecastContextType>(
    {} as ForecastContextType
);

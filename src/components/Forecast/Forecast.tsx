import styles from "./Forecast.module.css";
import { Current, Daily, Hourly } from "../components";
import { addProps } from "types";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Forecast(props: addProps): JSX.Element {
    const { displayResults } = useContext(ForecastContext);
    const { observedCity } = useContext(ForecastContext);

    console.log("FORECAST: ", props.forecast);

    const forecastCityNameValues = () => {
        if (props.forecast === null || !observedCity) {
            return "";
        } else if (props.forecast?.city.name === undefined) {
            return observedCity?.name + " " + observedCity?.country;
        } else {
            return (
                props.forecast?.city.name + " " + props.forecast?.city.country
            );
        }
    };

    return (
        <div
            className={
                displayResults
                    ? styles.forecast_component_container
                    : styles.hide_component
            }
        >
            <h2 className={styles.observed_city_title}>
                {forecastCityNameValues()}
            </h2>

            <Current />
            <Hourly />
            <Daily />
        </div>
    );
}

export { Forecast };

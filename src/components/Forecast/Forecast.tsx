import styles from "./Forecast.module.css";
import { Current, SwitchBtn, Daily, Hourly } from "../components";
import { addProps } from "types";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Forecast(props: addProps): JSX.Element {
    const { displayResults } = useContext(ForecastContext);
    const { observedCity } = useContext(ForecastContext);

    console.log("FORECAST: ", props.forecast);

    const forecastCityNameValues = () => {
        if (props.forecast === null) {
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
            <SwitchBtn />
            <Current />
            <Hourly />
            <Daily />
        </div>
    );
}

//how to use Math.floor when it's NULL

/* <p>{forecast !== null ? Math.floor(forecast.list[0].main.temp) : ""}</p>; */

export { Forecast };

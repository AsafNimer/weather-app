import styles from "./Forecast.module.css";
import { Current, Daily, Hourly } from "../components";
import { addProps } from "types";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Forecast(props: addProps): JSX.Element {
    const { display } = useContext(ForecastContext);

    const forecastCityNameValues = () => {
        if (props.forecast === null) {
            return "";
        } else if (props.forecast?.city.name === undefined) {
            return "";
        } else {
            return (
                props.forecast?.city.name + " " + props.forecast?.city.country
            );
        }
    };

    return (
        <section
            className={
                display
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
        </section>
    );
}

export { Forecast };

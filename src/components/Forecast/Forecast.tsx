import styles from "./Forecast.module.css";
import { Current, SwitchBtn, Daily, Hourly } from "../components";
import { addProps } from "types";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Forecast(props: addProps): JSX.Element {
    const { forecast } = useContext(ForecastContext);
    const { displayResults } = useContext(ForecastContext);
    const { searchResults } = useContext(ForecastContext);

    // console.log("FORECAST: ", forecast);

    return (
        <div
            className={
                displayResults
                    ? styles.forecast_component_container
                    : styles.hide_component
            }
        >
            <h2 className={styles.observed_city_title}>
                <>
                    {props.observedCity?.name} {props.observedCity?.country}
                </>
            </h2>
            <SwitchBtn /> <Current />
            <Hourly />
            <Daily />
        </div>
    );
}

//how to use Math.floor when it's NULL
{
    /* <p>{forecast !== null ? Math.floor(forecast.list[0].main.temp) : ""}</p>; */
}

export { Forecast };

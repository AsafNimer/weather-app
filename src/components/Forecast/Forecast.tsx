import styles from "./Forecast.module.css";
import { Current, SwitchBtn } from "../components";
import { addProps } from "types";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Forecast(props: addProps): JSX.Element {
    const { forecast } = useContext(ForecastContext);
    console.log("FORECAST: ", forecast);

    return (
        <div className={styles.forecast_component_container}>
            <h2 className={styles.observed_city_title}>
                <>
                    {props.observedCity?.name} {props.observedCity?.country}
                </>
            </h2>
            <p>
                {forecast !== null
                    ? Math.floor(forecast.list[0].main.temp)
                    : ""}
            </p>
            <Current />
            <SwitchBtn />
        </div>
    );
}

export { Forecast };

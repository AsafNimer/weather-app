import styles from "./Forecast.module.css";
import { Today, Hourly, SwitchBtn } from "../components";
import { addProps } from "types";

function Forecast(props: addProps): JSX.Element {
    return (
        <div className={styles.forecast_component_container}>
            <h2 className={styles.observed_city_title}>
                <>
                    {" "}
                    {props.observedCity?.name} {props.observedCity?.country}{" "}
                    {props.observedCity?.state ? props.observedCity?.state : ""}
                </>
            </h2>
            <Today />
            <Hourly />
            <SwitchBtn />
        </div>
    );
}

export { Forecast };

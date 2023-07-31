import styles from "./Forecast.module.css";
import { Current, SwitchBtn } from "../components";
import { addProps } from "types";

function Forecast(props: addProps): JSX.Element {
    return (
        <div className={styles.forecast_component_container}>
            <h2 className={styles.observed_city_title}>
                <>
                    {props.observedCity?.name} {props.observedCity?.country}
                </>
            </h2>
            <Current />
            <SwitchBtn />
        </div>
    );
}

export { Forecast };

import styles from "./Hourly.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Hourly(): JSX.Element {
    const { forecast } = useContext(ForecastContext);
    // console.log("FORECAST: ", forecast);

    return (
        <div className={styles.hourly_component_container}>
            <p>Hourly</p>
        </div>
    );
}

export { Hourly };

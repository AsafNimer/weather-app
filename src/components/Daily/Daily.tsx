import styles from "./Daily.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Daily(): JSX.Element {
    const { forecast } = useContext(ForecastContext);
    // console.log("FORECAST: ", forecast);

    return (
        <div className={styles.daily_component_container}>
            <p>daily</p>
        </div>
    );
}

export { Daily };

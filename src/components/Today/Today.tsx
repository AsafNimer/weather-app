import styles from "./Today.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Today(): JSX.Element {
    const { currentWeather } = useContext(ForecastContext);

    return (
        <div className={styles.today_component_container}>
            <>
                <h1>
                    Feels like:{" "}
                    {currentWeather !== null
                        ? Math.floor(currentWeather.main.feels_like)
                        : ""}
                    °
                </h1>
            </>
        </div>
    );
}

export { Today };

import styles from "./Today.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function Today(): JSX.Element {
    const { forecast } = useContext(ForecastContext);

    return (
        <div className={styles.today_component_container}>
            <>
                <h1>
                    Feels like:{" "}
                    {forecast !== null
                        ? Math.floor(forecast.main.feels_like)
                        : ""}
                    °
                </h1>
            </>
        </div>
    );
}

export { Today };

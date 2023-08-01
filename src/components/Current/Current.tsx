import styles from "./Current.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

const pollutionRateArray: string[] = [
    "indexzero",
    "Good",
    "Fair",
    "Moderate",
    "Poor",
    "Very Poor",
];

function Current(): JSX.Element {
    const { currentWeather } = useContext(ForecastContext);
    const { pollution } = useContext(ForecastContext);

    // console.log("Current weather:", currentWeather);
    // console.log("Pollution:", pollution);

    return (
        <div className={styles.current_component_container}>
            <>
                <h1>
                    {" "}
                    {currentWeather !== null
                        ? Math.floor(currentWeather.main.temp) + "°"
                        : ""}
                </h1>
                <p>
                    Air quallity:
                    {pollutionRateArray.filter(
                        (item) =>
                            pollutionRateArray.indexOf(item) ===
                            pollution?.list[0].main.aqi
                    )}
                </p>
            </>
        </div>
    );
}

export { Current };

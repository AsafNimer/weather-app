import styles from "./SwitchBtn.module.css";
import { getCurrent, getForecast } from "services/Fetch";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";
import { FirstApiResultType } from "types";

const SwitchBtn: React.FC = () => {
    const {
        setForecast,
        observedCity,
        units,
        setUnits,
        userInput,
        setCurrentWeather,
    } = useContext(ForecastContext);

    const fetchCurrentAndForecast = async (
        city: FirstApiResultType,
        unit: string
    ) => {
        const getCurrentResponse = await getCurrent(city, unit);
        setCurrentWeather(getCurrentResponse);

        const getForecastResponse = await getForecast(city, unit);
        setForecast(getForecastResponse);
    };

    const handleSwitch = () => {
        if (!observedCity || !userInput) {
            console.log("returned");
            return;
        } else {
            if (units === "imperial") {
                setUnits("metric");
                fetchCurrentAndForecast(observedCity, "metric");
            } else {
                setUnits("imperial");
                fetchCurrentAndForecast(observedCity, "imperial");
            }
        }
    };

    return (
        <>
            <div className={styles.switch_container}>
                <input
                    onChange={handleSwitch}
                    className={styles.switch_input}
                    type="checkbox"
                    id="switch"
                />
                <label className={styles.switch_label} htmlFor="switch"></label>
            </div>
        </>
    );
};

export { SwitchBtn };

import styles from "./SwitchBtn.module.css";
import { getCurrent, getForecast, searchCity } from "services/Fetch";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function SwitchBtn(): JSX.Element {
    const {
        setForecast,
        observedCity,
        units,
        setUnits,
        userInput,
        setCurrentWeather,
    } = useContext(ForecastContext);

    const checkbox = document.getElementById("switch") as HTMLInputElement;

    const setCelcOrFahr = () => {
        if (checkbox.checked) {
            setUnits("imperial");
            return units;
        }
        setUnits("metric");
        return units;
    };

    const handleSwitch = () => {
        if (!observedCity || !userInput) {
            console.log("returned");
            return;
        } else {
            searchCity(observedCity.name).then(() => {
                getCurrent(observedCity, setCelcOrFahr()).then((data) => {
                    setCurrentWeather(data);
                });
                getForecast(observedCity, setCelcOrFahr()).then((data) => {
                    setForecast(data);
                });
            });
        }
    };

    return (
        <>
            <div className={styles.switch_container}>
                <input
                    onClick={handleSwitch}
                    className={styles.switch_input}
                    type="checkbox"
                    id="switch"
                />
                <label className={styles.switch_label} htmlFor="switch"></label>
            </div>
        </>
    );
}

export { SwitchBtn };

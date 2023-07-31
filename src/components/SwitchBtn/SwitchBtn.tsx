import styles from "./SwitchBtn.module.css";
import { current, getForecast, searchCity } from "services/Fetch";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function SwitchBtn(): JSX.Element {
    const { setForecast } = useContext(ForecastContext);
    const { observedCity } = useContext(ForecastContext);
    const { units, setUnits } = useContext(ForecastContext);
    const { userInput } = useContext(ForecastContext);
    const { setCurrentWeather } = useContext(ForecastContext);

    const checkbox = document.getElementById("switch") as HTMLInputElement;
    const handleSwitch = () => {
        if (!observedCity || !userInput) {
            //should i leave the || !user input?
            console.log("returned");
            return;
        } else {
            const apiCall = () => {
                searchCity(observedCity.name).then(() => {
                    current(observedCity, units).then((data) => {
                        setCurrentWeather(data);
                    });
                    getForecast(observedCity, units).then((data) => {
                        setForecast(data);
                    });
                });
            };
            console.log("CHECKBOX.CHECKED: ", checkbox.checked);

            if (!checkbox.checked) {
                setUnits("imperial");
                apiCall();
                console.log("IT'S CHECKED . . .screen shows Celcius");
            } else {
                setUnits("metric");
                apiCall();
                console.log("NOT CHECKED . . . screen shows Fahrenheit");
            }
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

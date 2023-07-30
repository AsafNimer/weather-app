import styles from "./SwitchBtn.module.css";
import { getForecast } from "services/Fetch";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";

function SwitchBtn(): JSX.Element {
    const { setForecast, forecast } = useContext(ForecastContext);
    const { observedCity } = useContext(ForecastContext);
    const { units, setUnits } = useContext(ForecastContext);

    const checkbox = document.getElementById("switch") as HTMLInputElement;

    const handleSwitch = () => {
        console.log("units in SwitchBtn.tsx:", units);
        console.log("observedCity in SwitchBtn.tsx:", observedCity);
        console.log("forecast in SwitchBtn.tsx: ");

        if (!observedCity) {
            console.log("returned");
            return;
        } else {
            if (checkbox.checked) {
                setUnits("metric");
                console.log("units:", units);
                getForecast(observedCity, units).then((data) => {
                    setForecast(data);
                    console.log("forecast is: ", forecast);
                });

                console.log("IT'S CHECKED . . .screen shows Celcius");
            } else {
                setUnits("imperial");
                console.log("units:", units);
                getForecast(observedCity, units).then((data) => {
                    setForecast(data);
                });
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

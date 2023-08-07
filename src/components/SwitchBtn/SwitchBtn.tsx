import styles from "./SwitchBtn.module.css";
import { current, getForecast, searchCity } from "services/Fetch";
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

    const handleSwitch = () => {
        if (!observedCity || !userInput) {
            // console.log("returned");
            return;
        } else {
            const apiCall = (units: string) => {
                searchCity(observedCity.name).then(() => {
                    current(observedCity, units).then((data) => {
                        setCurrentWeather(data);
                    });
                    getForecast(observedCity, units).then((data) => {
                        setForecast(data);
                    });
                });
            };

            if (units === "metric") {
                setUnits("imperial");
                apiCall(units);
                // console.log("screen shows Celcius");
            } else {
                setUnits("metric");
                apiCall(units);
                // console.log("screen shows Fahrenheit");
            }
        }
    };

    return (
        <>
            <button
                id={styles.wrapper_btn}
                type="button"
                onChange={handleSwitch}
            >
                <div className={styles.switch_container}>
                    <input
                        className={styles.switch_input}
                        type="checkbox"
                        id="switch"
                    />
                    <label
                        className={styles.switch_label}
                        htmlFor="switch"
                    ></label>
                </div>
            </button>
        </>
    );
}

export { SwitchBtn };

// import styles from "./SwitchBtn.module.css";
// import { current, getForecast, searchCity } from "services/Fetch";
// import { ForecastContext } from "hooks/context/ForecastContext";
// import { useContext } from "react";

// function SwitchBtn(): JSX.Element {
//     const {
//         setForecast,
//         observedCity,
//         units,
//         setUnits,
//         userInput,
//         setCurrentWeather,
//     } = useContext(ForecastContext);

//     const checkbox = document.getElementById("switch") as HTMLInputElement;
//     const handleSwitch = () => {
//         if (!observedCity || !userInput) {
//             console.log("returned");
//             return;
//         } else {
//             const apiCall = () => {
//                 searchCity(observedCity.name).then(() => {
//                     current(observedCity, units).then((data) => {
//                         setCurrentWeather(data);
//                     });
//                     getForecast(observedCity, units).then((data) => {
//                         setForecast(data);
//                     });
//                 });
//             };
//             console.log("CHECKBOX.CHECKED: ", checkbox.checked);

//             if (!checkbox.checked) {
//                 setUnits("imperial");
//                 apiCall();
//                 console.log("IT'S CHECKED . . .screen shows Celcius");
//             } else {
//                 setUnits("metric");
//                 apiCall();
//                 console.log("NOT CHECKED . . . screen shows Fahrenheit");
//             }
//         }
//     };

//     return (
//         <>
//             <div className={styles.switch_container}>
//                 <input
//                     onClick={handleSwitch}
//                     className={styles.switch_input}
//                     type="checkbox"
//                     id="switch"
//                 />
//                 <label className={styles.switch_label} htmlFor="switch"></label>
//             </div>
//         </>
//     );
// }

// export { SwitchBtn };

import styles from "./Current.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";
// const { DateTime } = require("luxon");
// import { DateTime } from "luxon/build/node/luxon";

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
    const { observedCity } = useContext(ForecastContext);
    const { userInput } = useContext(ForecastContext);

    console.log("Current weather:", currentWeather);

    const showResultsOrNotFound = (userInput: string) => {
        if (observedCity === null) {
            return (
                <p>
                    No results found for <br /> {`${userInput}`}
                </p>
            );
        } else if (currentWeather !== null) {
            return Math.floor(currentWeather.main.temp) + "°";
        }
    };

    return (
        <div className={styles.current_component_container}>
            <div className={styles.component_upper_container}>
                <h2 className={styles.current_temp}>
                    {showResultsOrNotFound(userInput)}
                </h2>
                <h4 className={styles.description}>
                    {currentWeather?.weather[0].description}
                </h4>
            </div>
            <div className={styles.component_bottom_container}>
                <div className={styles.fls_like_hum_wnd_poll_icon_container}>
                    <div className={styles.img_div}>
                        <img
                            className={styles.weather_icon_img}
                            src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                            alt={currentWeather?.weather[0].description}
                        />
                    </div>
                    <div className={styles.data_wrapper}>
                        <p className={styles.feels_like}>
                            <svg
                                className={styles.data_icon}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z" />
                            </svg>
                            {currentWeather?.main.feels_like !== undefined
                                ? `Feels Like: ${Math.floor(
                                      currentWeather?.main.feels_like
                                  )}°`
                                : ""}
                        </p>
                        <p className={styles.humidity}>
                            <svg
                                className={styles.data_icon}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 384 512"
                            >
                                <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                            </svg>
                            {currentWeather?.main.humidity !== undefined
                                ? `Humidity: ${Math.ceil(
                                      currentWeather?.main.humidity
                                  )}%`
                                : ""}
                        </p>
                        <p className={styles.wind}>
                            <svg
                                className={styles.data_icon}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
                            </svg>
                            {currentWeather?.wind.speed !== undefined
                                ? `Wind: ${Math.ceil(
                                      currentWeather?.wind.speed
                                  )} m/s`
                                : ""}
                        </p>
                        <p className={styles.pollution}>
                            <svg
                                className={styles.data_icon}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 640 512"
                            >
                                <path d="M32 144c0 79.5 64.5 144 144 144H299.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368H280c-13.3 0-24 10.7-24 24s10.7 24 24 24H616c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H200c13.3 0 24-10.7 24-24z" />
                            </svg>
                            {observedCity !== null
                                ? `Air Quallity: ${pollutionRateArray.filter(
                                      (item) =>
                                          pollutionRateArray.indexOf(item) ===
                                          pollution?.list[0].main.aqi
                                  )}`
                                : ""}
                        </p>
                    </div>
                </div>
                <div className={styles.minmax_sunrise_sunset_container}>
                    <p className={styles.min}>
                        <svg
                            className={styles.data_icon}
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                        >
                            <path d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM176 0C114.1 0 64 50.1 64 112V276.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C288 50.1 237.9 0 176 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v50.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zm336-64H480V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V352H384c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8z" />
                        </svg>
                        {currentWeather?.main.temp_min !== undefined
                            ? `Min: ${Math.floor(
                                  currentWeather?.main.temp_min
                              )}° `
                            : ""}
                    </p>
                    <p className={styles.vertical_line_par}>|</p>
                    <p className={styles.max}>
                        <svg
                            className={styles.data_icon}
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                        >
                            <path d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM176 0C114.1 0 64 50.1 64 112V276.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C288 50.1 237.9 0 176 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM480 160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V160z" />
                        </svg>
                        {currentWeather?.main.temp_max !== undefined
                            ? `Max: ${Math.ceil(
                                  currentWeather?.main.temp_max
                              )}°`
                            : ""}
                    </p>
                    <p className={styles.vertical_line_par}>|</p>
                    <p className={styles.sunrise}>sunrise</p>
                    <p className={styles.vertical_line_par}>|</p>
                    <p className={styles.sunset}>sunset</p>
                </div>
            </div>
        </div>
    );
}

export { Current };

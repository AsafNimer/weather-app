import styles from "./Current.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";
import { SwitchBtn } from "../components";
import {
    getFeelsLikeSVG,
    getHumiditySVG,
    getWindSVG,
    getPollutionSVG,
    getTempMinSVG,
    getTempMaxSVG,
    getSunsetSVG,
    getSunriseSVG,
    getHumidity,
    getDescription,
    getFeelsLike,
    getTempMax,
    getTemp,
    getTempMin,
    getWind,
    getSunrise,
    getSunset,
} from "utils/HelperFunctions";
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

    const description: string | undefined =
        currentWeather?.weather[0].description;
    const temp: number | undefined = currentWeather?.main.temp;
    const feelsLike: number | undefined = currentWeather?.main.feels_like;
    const humidity: number | undefined = currentWeather?.main.humidity;
    const wind: number | undefined = currentWeather?.wind.speed;
    const tempMin: number | undefined = currentWeather?.main.temp_min;
    const tempMax: number | undefined = currentWeather?.main.temp_max;
    const sunset: number | undefined = currentWeather?.sys.sunset;
    const sunrise: number | undefined = currentWeather?.sys.sunrise;

    return (
        <div>
            {/* <p className={styles.no_results}>
                {" "}
                {observedCity === null ? "No results found" : ""}
            </p> */}

            <div
                className={
                    observedCity === null
                        ? styles.hide_component_container
                        : styles.current_component_container
                }
            >
                <div className={styles.component_upper_container}>
                    <div className={styles.switch_btn_container}>
                        <SwitchBtn />
                    </div>
                    <h1 className={styles.current_temp}>{getTemp(temp)}</h1>
                    <h4 className={styles.description}>
                        {getDescription(description)}
                    </h4>
                </div>
                <div className={styles.component_bottom_container}>
                    <div
                        className={styles.fls_like_hum_wnd_poll_icon_container}
                    >
                        <div className={styles.img_div}>
                            <img
                                className={styles.weather_icon_img}
                                src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                                alt={currentWeather?.weather[0].description}
                            />
                        </div>
                        <div className={styles.data_wrapper}>
                            <p className={styles.feels_like}>
                                {getFeelsLikeSVG(styles.data_icon)}
                                {getFeelsLike(feelsLike)}
                            </p>
                            <p className={styles.humidity}>
                                {getHumiditySVG(styles.data_icon)}
                                {getHumidity(humidity)}
                            </p>
                            <p className={styles.wind}>
                                {getWindSVG(styles.data_icon)}
                                {getWind(wind)}
                            </p>
                            <p className={styles.pollution}>
                                {getPollutionSVG(styles.data_icon)}

                                {observedCity !== null
                                    ? `Air Quallity: ${pollutionRateArray.filter(
                                          (item) =>
                                              pollutionRateArray.indexOf(
                                                  item
                                              ) === pollution?.list[0].main.aqi
                                      )}`
                                    : ""}
                            </p>
                        </div>
                    </div>
                    <div className={styles.minmax_sunrise_sunset_container}>
                        <p className={styles.min}>
                            {getTempMinSVG(styles.data_icon)}
                            {getTempMin(tempMin)}
                        </p>
                        <p className={styles.vertical_line_par}>|</p>
                        <p className={styles.max}>
                            {getTempMaxSVG(styles.data_icon)}
                            {getTempMax(tempMax)}
                        </p>
                        <p className={styles.vertical_line_par}>|</p>
                        <div className={styles.sunrise_container}>
                            {getSunriseSVG(styles.sunrise_sunset_icon)}
                            <p className={styles.sunrise}>
                                {getSunrise(sunrise)}
                            </p>
                        </div>
                        <p className={styles.vertical_line_par}>|</p>
                        <div className={styles.sunset_container}>
                            {getSunsetSVG(styles.sunrise_sunset_icon)}
                            <p className={styles.sunset}>{getSunset(sunset)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Current };

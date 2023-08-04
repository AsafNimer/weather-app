import styles from "./Hourly.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";
import { getWeatherIcon, getTemp } from "utils/HelperFunctions";

function Hourly(): JSX.Element {
    const { forecast } = useContext(ForecastContext);

    return (
        <>
            <div className={styles.hourly_component_container}>
                <div className={styles.hour_cards_container}>
                    {forecast !== null
                        ? forecast.list
                              .filter(
                                  (item) => forecast?.list.indexOf(item) <= 7
                              )
                              .map((item) => {
                                  return (
                                      <>
                                          <div className={styles.hour_card}>
                                              <p className={styles.hour_par}>
                                                  {forecast.list.indexOf(
                                                      item
                                                  ) === 0
                                                      ? "Now"
                                                      : `${item.dt_txt.slice(
                                                            11,
                                                            16
                                                        )}`}
                                              </p>
                                              <div
                                                  className={
                                                      styles.icon_temp_container
                                                  }
                                              >
                                                  <img
                                                      className={
                                                          styles.hourly_weather_icon
                                                      }
                                                      src={`${getWeatherIcon(
                                                          item.weather[0].icon
                                                      )}`}
                                                      alt="temp"
                                                  />
                                                  <p
                                                      className={
                                                          styles.hourly_temp
                                                      }
                                                  >
                                                      {getTemp(item.main.temp)}
                                                  </p>
                                              </div>
                                          </div>
                                      </>
                                  );
                              })
                        : ""}
                </div>
            </div>
        </>
    );
}

export { Hourly };

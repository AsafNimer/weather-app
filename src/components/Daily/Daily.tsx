import styles from "./Daily.module.css";
import { ForecastContext } from "hooks/context/ForecastContext";
import { useContext } from "react";
import { getWeatherIcon, getComingDaysNames } from "utils/HelperFunctions";

function Daily(): JSX.Element {
    const { forecast } = useContext(ForecastContext);
    return (
        <>
            <div className={styles.daily_component_container}>
                <p className={styles.daily_title}>
                    {forecast !== null ? "Daily" : ""}
                </p>
                <div className={styles.day_cards_container}>
                    {forecast !== null
                        ? forecast.list
                              .filter(
                                  (item) =>
                                      forecast?.list.indexOf(item) % 8 === 0
                              )
                              .map((item, index) => {
                                  return (
                                      <>
                                          <div
                                              key={item.dt_txt.slice(8, 10)}
                                              className={styles.day_card}
                                          >
                                              <p className={styles.week_day}>
                                                  {getComingDaysNames(item.dt)}
                                              </p>
                                              <img
                                                  className={
                                                      styles.weekDay_icon
                                                  }
                                                  src={getWeatherIcon(
                                                      item.weather[0].icon
                                                  )}
                                                  alt="weather"
                                              />
                                              <div
                                                  className={
                                                      styles.minmax_temp_container
                                                  }
                                              >
                                                  <p
                                                      className={
                                                          styles.minmax_temps
                                                      }
                                                  >
                                                      {forecast !== null
                                                          ? `${Math.ceil(
                                                                item.main
                                                                    .temp_max
                                                            )}° / ${Math.floor(
                                                                item.main
                                                                    .temp_min
                                                            )}°`
                                                          : ""}
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

export { Daily };

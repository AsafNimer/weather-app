import styles from "./App.module.css";
import { useState, useEffect, ChangeEvent } from "react";
import { Forecast } from "./components/components";
import { ForecastContext } from "hooks/context/ForecastContext";
import {
    getForecast,
    searchCity,
    getCurrent,
    currentPollution,
} from "services/Fetch";
import {
    CurrentType,
    FirstApiResultType,
    PollutionType,
    ForecastType,
} from "types";

function App(): JSX.Element {
    const [units, setUnits] = useState<string>("metric");
    const [userInput, setUserInput] = useState<string>("");
    const [searchResults, setSearchResults] = useState<[]>([]);
    const [pollution, setPollution] = useState<PollutionType | null>(null);
    const [display, setDisplay] = useState<boolean>(true);
    const [noResults, setNoResults] = useState<boolean>(false);
    const [observedCity, setObservedCity] = useState<FirstApiResultType | null>(
        null
    );
    const [currentWeather, setCurrentWeather] = useState<CurrentType | null>(
        null
    );
    const [forecast, setForecast] = useState<ForecastType | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserInput(value);

        if (value === "") {
            setSearchResults([]);
            setDisplay(false);
        } else {
            searchCity(value).then((data) => {
                console.log(data);
                setSearchResults(data);
            });
        }
    };

    const handleCitySelect = (city: FirstApiResultType) => {
        setObservedCity(city);
    };

    const handleCitySubmit = async () => {
        if (!observedCity || !userInput) {
            console.log("return");
            setDisplay(false);
            setNoResults(true);
            setSearchResults([]);
            return;
        } else {
            setDisplay(true);
            setNoResults(false);

            const currentData = await getCurrent(observedCity, units);
            setCurrentWeather(currentData);

            const forecastData = await getForecast(observedCity, units);
            setForecast(forecastData);

            const pollutionData = await currentPollution(observedCity);
            setPollution(pollutionData);
        }
    };

    const handleClearTxt = () => {
        setUserInput("");
        setNoResults(false);
        setSearchResults([]);
        setObservedCity(null);
    };

    useEffect(() => {
        if (observedCity) {
            setUserInput(
                `${observedCity.name} ${observedCity.country} ${
                    observedCity.state ? observedCity.state : ""
                }`
            );
            setSearchResults([]);
        } else {
            setDisplay(false);
        }
        return () => {
            setCurrentWeather(null);
            setForecast(null);
            setPollution(null);
        };
    }, [observedCity]);

    return (
        <section className={styles.app_container}>
            <div className={styles.search_container}>
                <h2 className={styles.no_results_par}>
                    {noResults ? "No Results" : ""}
                </h2>
                <h4 className={styles.app_title}>getWeather.</h4>
                <div className={styles.input_container}>
                    <div className={styles.search_btn_container}>
                        <button
                            onClick={handleCitySubmit}
                            className={styles.search_btn}
                        >
                            <svg
                                className={styles.magnifying_glass_icon}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>{" "}
                        </button>
                    </div>
                    <input
                        type="text"
                        value={userInput}
                        id="input"
                        className={styles.user_input}
                        onChange={handleInputChange}
                        placeholder="Enter your location"
                    />
                    <div className={styles.x_icon_container}>
                        <svg
                            onClick={handleClearTxt}
                            className={styles.x_icon}
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>
                </div>
                <ul className={styles.cities_list}>
                    {searchResults
                        ? searchResults.map(
                              (result: FirstApiResultType, index: number) => (
                                  <li
                                      key={`${result.name}-${index}`}
                                      onClick={() => handleCitySelect(result)}
                                      className={styles.city_item}
                                  >
                                      <button className={styles.city_btn}>
                                          <svg
                                              className={styles.location_icon}
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="1em"
                                              viewBox="0 0 384 512"
                                          >
                                              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                          </svg>
                                          {result.name}, {result.country}{" "}
                                          {result.state ? result.state : ""}
                                      </button>
                                  </li>
                              )
                          )
                        : ""}
                </ul>
            </div>
            <ForecastContext.Provider
                value={{
                    forecast,
                    setForecast,
                    units,
                    setUnits,
                    observedCity,
                    userInput,
                    currentWeather,
                    setCurrentWeather,
                    pollution,
                    display,
                }}
            >
                <Forecast forecast={forecast} />
            </ForecastContext.Provider>
        </section>
    );
}

export { App };

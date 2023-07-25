import { useState, useEffect, ChangeEvent } from "react";
import styles from "./CitySearch.module.css";
import { resultType } from "types";

function CitySearch(): JSX.Element {
    const [userInput, setUserInput] = useState<string>("");
    const [searchResults, setSearchResults] = useState<[]>([]);
    const [obserevedCity, setObservedCity] = useState<resultType | null>(null);

    const searchCity = async (value: string) => {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log("first fetch response: ", jsonResponse);
                setSearchResults(jsonResponse);
            }
        } catch (err) {
            console.log("error on fetch: ", err);
        }
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserInput(value);

        if (value === "") {
            setSearchResults([]);
        } else {
            searchCity(value);
        }
    };

    const onCitySelect = (city: resultType) => {
        setObservedCity(city);
    };

    const getForecast = async (city: resultType) => {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            );
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log("second fetch response:", jsonResponse);
            }
        } catch (err) {
            console.log("error fetching second API");
        }
    };

    const onCitySubmit = () => {
        if (!obserevedCity) return;
        getForecast(obserevedCity);
    };

    useEffect(() => {
        if (obserevedCity) {
            setUserInput(obserevedCity.name);
            setSearchResults([]);
        }
    }, [obserevedCity]);

    return (
        <div className={styles.search_container}>
            <div className={styles.input_container}>
                <input
                    type="text"
                    value={userInput}
                    className={styles.user_input}
                    onChange={onInputChange}
                    placeholder="Enter your location"
                />
                <button onClick={onCitySubmit} className={styles.search_btn}>
                    <svg
                        className={styles.magnifying_glass_icon}
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                </button>
            </div>
            <ul className={styles.cities_list}>
                {searchResults.map((result: resultType, index: number) => (
                    <li
                        key={`${result.name}-${index}`}
                        onClick={() => onCitySelect(result)}
                        className={styles.city_item}
                    >
                        <button className={styles.city_btn}>
                            {result.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { CitySearch };

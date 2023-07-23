import { useState, ChangeEvent } from "react";
import styles from "./CitySearch.module.css";

function CitySearch(): JSX.Element {
    const [location, setLocation] = useState<string>("");
    const [citiesList, setCitiesList] = useState<[]>([]);
    const [selectedCity, setSelectedCity] = useState<EventTarget>();

    const searchCity = async (value: string) => {
        //with the GEO API i first extract the LAT and LONG props which i will
        // nest in next URL in another fetch req
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                setCitiesList(jsonResponse);
            }
        } catch (err) {
            console.log("error on fetch: ", err);
        }
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setLocation(value);

        if (value === "") {
            return;
        } else {
            searchCity(value);
        }
    };

    const handleCityClick = (e: React.MouseEvent<HTMLElement>) => {
        const citySelected: EventTarget = e.target;
        setSelectedCity(citySelected);
        console.log("city selected:", citySelected);
    };

    return (
        <div className="search_container">
            <svg
                className={styles.location_icon}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
            >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <input
                type="text"
                value={location}
                className={styles.user_input}
                onChange={onInputChange}
                placeholder="Enter your location"
            />
            <button className={styles.search_btn}>
                <svg
                    className={styles.magnifying_glass_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </button>
            <div className={styles.search_results_container}>
                <ul className={styles.cities_list}>
                    {citiesList.map((city: { name: string }, index: number) => (
                        <li
                            key={`${city.name}-${index}`}
                            onClick={handleCityClick}
                            className={styles.city_item}
                        >
                            <button className={styles.cityClick}>
                                {city.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { CitySearch };

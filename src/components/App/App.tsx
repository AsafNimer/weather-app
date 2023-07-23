import { Current, Hourly, Forecast, CitySearch } from "../components";
import styles from "./App.module.css";

function App(): JSX.Element {
    return (
        <div className={styles.App}>
            <div className={styles.title_container_div}>
                <h1 className={styles.app_title}>GetWeather</h1>
            </div>
            <CitySearch />
            <Current />
            <Hourly />
            <Forecast />
        </div>
    );
}

export default App;

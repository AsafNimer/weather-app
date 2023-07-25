import {
    Current,
    Hourly,
    Forecast,
    CitySearch,
    SwitchBtn,
} from "../components";
import styles from "./App.module.css";

function App(): JSX.Element {
    return (
        <div className={styles.App}>
            <div className={styles.search_box}>
                <SwitchBtn />
                <CitySearch />
            </div>
            <div className={styles.forecast_container}>
                <Current />
                <Hourly />
                <Forecast />
            </div>
        </div>
    );
}

export default App;

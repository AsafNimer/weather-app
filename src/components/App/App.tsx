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
            <CitySearch />
            <Current />
            <Hourly />
            <Forecast />
            <SwitchBtn />
        </div>
    );
}

export default App;

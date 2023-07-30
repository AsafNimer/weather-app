import styles from "./Today.module.css";
import { useForecastContext } from "hooks/context/ForecastContext";

function Today(): JSX.Element {
    const { forecast } = useForecastContext();

    return (
        <div className={styles.today_component_container}>
            <>
                <h1>{forecast?.main.feels_like}</h1>
            </>
        </div>
    );
}

export { Today };

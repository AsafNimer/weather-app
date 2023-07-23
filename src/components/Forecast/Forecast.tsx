import styles from "./Forecast.module.css";

function Forecast(): JSX.Element {
    return (
        <div className="forecast_component_container">
            <h4 className={styles.forecastH4}>Forecast component</h4>
        </div>
    );
}

export { Forecast };

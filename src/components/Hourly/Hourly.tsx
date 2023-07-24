import styles from "./Hourly.module.css";

function Hourly(): JSX.Element {
    return (
        <div className={styles.forecast_component_container}>
            <h4 className={styles.hourlyH4}>Hourly component</h4>
        </div>
    );
}

export { Hourly };

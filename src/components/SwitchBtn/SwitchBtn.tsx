import styles from "./SwitchBtn.module.css";

function SwitchBtn(): JSX.Element {
    return (
        <div className={styles.switch_container}>
            <input
                className={styles.switch_input}
                type="checkbox"
                id="switch"
            />
            <label className={styles.switch_label} htmlFor="switch"></label>
        </div>
    );
}

export { SwitchBtn };

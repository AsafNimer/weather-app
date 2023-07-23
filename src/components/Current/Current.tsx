import styles from "./Current.module.css";

function Current(): JSX.Element {
    return (
        <div className="current_component_container">
            <h4 className={styles.currentH4}>Current weather component</h4>
        </div>
    );
}

export { Current };

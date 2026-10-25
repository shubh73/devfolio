import styles from "./Loader.module.scss";

const Loader = ({ exiting }) => {
  return (
    <div className={`${styles.screen} ${exiting ? styles.exit : ""}`}>
      <div className={styles.container}>
        <div className={styles.loader}>
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className={styles.base}>
            <span />
            <div className={styles.face} />
          </div>
        </div>
        <div className={styles.progress} />
      </div>
      <div>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Loader;

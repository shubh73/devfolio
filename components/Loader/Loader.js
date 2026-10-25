import styles from "./Loader.module.scss";

const Loader = ({ exiting, replayFlyBy, onExited }) => {
  return (
    <div
      className={`${styles.screen} ${exiting ? styles.exit : ""} ${replayFlyBy ? styles.replay : ""}`}
      onAnimationEnd={(e) => {
        if (exiting && e.target === e.currentTarget) onExited();
      }}
    >
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
    </div>
  );
};

export default Loader;

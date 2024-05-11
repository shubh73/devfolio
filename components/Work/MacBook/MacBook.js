import styles from "./MacBook.module.scss";

const MacBook = () => {
  return (
    <div className={styles.macbook}>
      <div className={styles.screen}>
        <div className={styles.screenClose}></div>
        <div className={styles.screenOpen}>{/* video here */}</div>
      </div>
      <div className={styles.body}></div>
    </div>
  );
};

export default MacBook;

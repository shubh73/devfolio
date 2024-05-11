import styles from "./MacBook.module.scss";

const MacBook = () => {
  return (
    <div class={styles.macbook}>
      <div class={styles.screen}>
        <div class={styles.screenClose}></div>
        <div class={styles.screenOpen}>{/* video here */}</div>
      </div>
      <div class={styles.body}></div>
    </div>
  );
};

export default MacBook;

import styles from "./Iphone.module.scss";

const Iphone = () => {
  return (
    <div className={styles.iphoneFront}>
      <div className={styles.frame}></div>
      <div className={styles.antenas}>
        <div className={styles.tt}></div>
        <div className={styles.tr}></div>
        <div className={styles.tl}></div>
        <div className={styles.bb}></div>
        <div className={styles.br}></div>
        <div className={styles.bl}></div>
      </div>
      <div className={styles.keys}>
        <div className={styles.silent}></div>
        <div className={styles.volt}></div>
        <div className={styles.volb}></div>
        <div className={styles.lock}></div>
      </div>
      <div className={styles.screen}>
        <div className={styles.island}>
          <div className={styles.camera}></div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;

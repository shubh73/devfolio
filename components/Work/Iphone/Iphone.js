import styles from "./Iphone.module.scss";

const Iphone = () => {
  return (
    <div class={styles.iphoneFront}>
      <div class={styles.frame}></div>
      <div class={styles.antenas}>
        <div class={styles.tt}></div>
        <div class={styles.tr}></div>
        <div class={styles.tl}></div>
        <div class={styles.bb}></div>
        <div class={styles.br}></div>
        <div class={styles.bl}></div>
      </div>
      <div class={styles.keys}>
        <div class={styles.silent}></div>
        <div class={styles.volt}></div>
        <div class={styles.volb}></div>
        <div class={styles.lock}></div>
      </div>
      <div class={styles.screen}>
        <div class={styles.island}>
          <div class={styles.camera}></div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;

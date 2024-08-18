import styles from "./FooterBg.module.scss";
import { Meteors } from "./meteors";

export const FooterBackground = () => {
  return (
    <div className={styles.top}>
      <Meteors />
      <div className={styles.background}>
        <div className={styles.background__one} />
        <div className={styles.background__two} />
      </div>
    </div>
  );
};

import Meteors from "../Meteors/Meteors";
import styles from "./FooterBg.module.scss";

const FooterBg = () => {
  return (
    <div className={styles.top}>
      <Meteors />
      <div className={styles.background}>
        <div className={styles.background__one}></div>
        <div className={styles.background__two}></div>
      </div>
    </div>
  );
};

export default FooterBg;

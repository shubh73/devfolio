import { SOCIAL_LINKS } from "../../constants";
import { Icon } from "@/components/Icons";
import styles from "./Profiles.module.scss";

const Profiles = () => {
  return (
    <div className={styles.profile}>
      {SOCIAL_LINKS &&
        SOCIAL_LINKS.map(({ name, url }) => (
          <a
            href={url}
            key={name}
            className="link"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
            <Icon name={name} />
          </a>
        ))}
    </div>
  );
};

export default Profiles;

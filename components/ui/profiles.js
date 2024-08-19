import { Icon } from "../icon";
import { SOCIAL_LINKS } from "../../constants";

const Profile = ({ name, url }) => {
  return (
    <a
      href={url}
      key={name}
      rel="noreferrer"
      target="_blank"
      aria-label={name}
      className="link group"
    >
      <Icon
        name={name}
        className="transition-all group-hover:stroke-indigo-light group-hover:brightness-110 group-hover:drop-shadow-[0_0_1rem_theme('colors.indigo.light')] group-focus:stroke-indigo-light group-focus:brightness-110 group-focus:drop-shadow-[0_0_1rem_theme('colors.indigo.light')]"
      />
    </a>
  );
};

export const Profiles = () => {
  return (
    <div className="inline-flex gap-6 pb-4 pt-6">
      {SOCIAL_LINKS.map((socialLink) => (
        <Profile key={socialLink.name} {...socialLink} />
      ))}
    </div>
  );
};

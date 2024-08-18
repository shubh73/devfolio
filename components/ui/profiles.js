import { Icon } from "./icon";
import { SOCIAL_LINKS } from "../../constants";

const Profile = ({ name, url }) => (
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
      className="transition-all group-hover:brightness-110 group-focus:brightness-110 group-hover:drop-shadow-[0_0_1rem_theme('colors.indigo.light')] group-focus:drop-shadow-[0_0_1rem_theme('colors.indigo.light')] group-hover:stroke-indigo-light group-focus:stroke-indigo-light"
    />
  </a>
);

export const Profiles = () => (
  <div className="inline-flex py-6 gap-6">
    {SOCIAL_LINKS.map((socialLink) => (
      <Profile key={socialLink.name} {...socialLink} />
    ))}
  </div>
);

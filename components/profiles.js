import Link from "next/link";
import { Icon } from "./icon";
import { Button } from "./ui/button";
import { SOCIAL_LINKS } from "../constants";

const Profile = ({ name, url }) => {
  return (
    <Button
      asChild
      className="link"
      variant="icon"
      size="icon"
      aria-label={name}
    >
      <Link href={url} rel="noopener noreferrer" target="_blank">
        <Icon name={name} />
      </Link>
    </Button>
  );
};

export const Profiles = () => {
  return (
    <div className="flex gap-4 py-4">
      {SOCIAL_LINKS.map((socialLink) => (
        <Profile key={socialLink.name} {...socialLink} />
      ))}
    </div>
  );
};

import {
  ExternalLinkIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

export const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <MailIcon />;
    case "github":
      return <GithubIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "twitter":
      return <TwitterIcon />;
    default:
      return <ExternalLinkIcon />;
  }
};

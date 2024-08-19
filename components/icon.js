import {
  ExternalLinkIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

export function Icon({ name, className }) {
  switch (name) {
    case "mail":
      return <MailIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
    default:
      return <ExternalLinkIcon className={className} />;
  }
}

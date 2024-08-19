"use client";

import { cn } from "utils/cn";
import styles from "./button.module.scss";
import PropTypes from "prop-types";

export const Button = ({
  href,
  onClick,
  children,
  className,
  type = "primary",
  disabled,
  ...otherProps
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        styles[`${type}__button`],
        disabled && styles[`${type}__disabledButton`],
        className,
      )}
      {...otherProps}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

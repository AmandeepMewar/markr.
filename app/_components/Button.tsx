import React from "react";
import Link from "next/link";

type Props = React.ComponentPropsWithoutRef<"button"> &
  React.ComponentPropsWithoutRef<"a"> & {
    href?: string;
  };

function Button({ children, href, className, ...props }: Props) {
  const classes = className ?  className : `flex justify-center items-center bg-tertiary-1 hover:bg-accent-1 transition-all px-8 py-3 text-xl rounded-lg`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;

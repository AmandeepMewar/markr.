import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
};

function LinkButton({ href, target, className, children }: Props) {
  const classes = className
    ? className
    : `flex justify-center items-center bg-tertiary-1 hover:bg-accent-1 transition-all px-8 py-3 text-xl rounded-lg`;

  return (
    <Link
      href={href}
      target={target}
      className={classes}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

export default LinkButton;

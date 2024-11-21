import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

function Button({ children, className, ...props }: Props) {
  const classes = className
    ? className
    : `flex justify-center items-center bg-tertiary-1 hover:bg-accent-1 transition-all px-8 py-3 text-xl rounded-lg`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;

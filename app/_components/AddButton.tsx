import React from "react";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  icon: React.ElementType;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

function AddButton({ icon: Icon, children, className, ...props }: Props) {
  return (
    <Button className={className} {...props}>
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </Button>
  );
}

export default AddButton;

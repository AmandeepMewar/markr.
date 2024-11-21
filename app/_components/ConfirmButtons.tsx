import { Check, X } from "lucide-react";
import React from "react";
import Button from "./Button";

type Props = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConfirmButtons({ setIsEditing }: Props) {
  return (
    <div className="flex gap-10">
      <Button
        type="submit"
        className="group rounded-full p-1 hover:bg-primary-1"
      >
        <Check className="h-5 w-5 group-hover:text-secondary-1" />
      </Button>
      <Button
        className="group rounded-full p-1 hover:bg-primary-1"
        onClick={() => setIsEditing(false)}
      >
        <X className="h-5 w-5 group-hover:text-secondary-1" />
      </Button>
    </div>
  );
}

export default ConfirmButtons;

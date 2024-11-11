import { Pencil, Trash2 } from "lucide-react";
import Button from "./Button";
type Props = {
  title: string;
  count: number;
};

function Collection({ title, count }: Props) {
  return (
    <Button className="group flex flex-col justify-center gap-2 rounded-xl px-4 py-3 hover:bg-tertiary-1">
      <div className="flex flex-col items-start">
        <h3 className="text-start text-2xl font-medium">{title}</h3>
        <p className="text-accent-2">{count} marks</p>
      </div>

      <div className="invisible flex gap-2 group-hover:visible">
        <Button className="rounded-full p-1 transition-all hover:bg-primary-1">
          <Pencil className="h-4 w-4 text-accent-2" />
        </Button>
        <Button className="rounded-full p-1 transition-all hover:bg-primary-1">
          <Trash2 className="h-4 w-4 text-accent-1" />
        </Button>
      </div>
    </Button>
  );
}

export default Collection;

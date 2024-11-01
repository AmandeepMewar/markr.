import { Pencil, Trash2 } from "lucide-react";
import Button from "./Button";

type Props = {
  title: string;
  bookmarks: number;
};

function Collection({ title, bookmarks }: Props) {
  return (
    <Button className="flex flex-col justify-center gap-3 rounded-xl bg-tertiary-1 px-4 py-5">
      <div>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-accent-2">{bookmarks} marks</p>
      </div>

      <div className="flex gap-2">
        <Button className="rounded-full p-1 transition-all hover:bg-primary-1">
          <Pencil className="h-5 w-5 text-accent-2" />
        </Button>
        <Button className="rounded-full p-1 transition-all hover:bg-primary-1">
          <Trash2 className="h-5 w-5 text-accent-1" />
        </Button>
      </div>
    </Button>
  );
}

export default Collection;

import Button from "./Button";

type Props = {
  title: string;
  bookmarks: number;
};

function Collection({ title, bookmarks }: Props) {
  return (
    <Button className="flex flex-col justify-center rounded-xl bg-tertiary-1 px-4 py-5">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-accent-2">{bookmarks} marks</p>
    </Button>
  );
}

export default Collection;

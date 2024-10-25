import Button from "./Button";
import Collection from "./Collection";

function Sidebar() {
  return (
    <aside className="relative w-96 border-r-2 border-tertiary-1 px-8 py-4">
      <h3 className="text-3xl font-semibold tracking-wide">Marks</h3>

      <ul className="mt-4 grid grid-cols-2 gap-4">
        <Collection title="Github" bookmarks={10} />
        <Collection title="Dev.to" bookmarks={20} />
        <Collection title="Medium" bookmarks={30} />
      </ul>

      <Button className="fixed bottom-10 translate-x-1/2 rounded-2xl bg-tertiary-1 px-6 py-2 text-lg">
        Add a mark
      </Button>
    </aside>
  );
}

export default Sidebar;

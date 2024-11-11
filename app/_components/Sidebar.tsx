import { getCollections, getUser } from "@/app/_lib/service";
import { BookmarkPlus } from "lucide-react";
import { auth } from "../_lib/auth";
import Button from "./Button";
import Collection from "./Collection";

async function Sidebar() {
  const session = await auth();

  if (!session?.user?.email) return null;

  const user = await getUser(session.user.email);

  const collections = await getCollections(user.user_id);

  if (!collections) return <h1>No Collections</h1>;

  return (
    <aside className="relative w-96 border-r-2 border-tertiary-1 px-8 py-4">
      <h3 className="text-3xl font-semibold tracking-wide">Marks</h3>

      <ul className="mt-4 grid grid-cols-2 gap-4">
        {collections.map((collection, ind) => (
          <Collection
            title={collection.collection}
            count={collection.count}
            key={`${collection}-${ind}`}
          />
        ))}
      </ul>

      <Button className="fixed bottom-10 flex translate-x-1/2 items-center gap-2 rounded-2xl bg-tertiary-1 px-6 py-2 text-lg">
        <BookmarkPlus className="h-5 w-5" />
        <span>Add a mark</span>
      </Button>
    </aside>
  );
}

export default Sidebar;

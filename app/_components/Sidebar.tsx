import { getCollections, getUser } from "@/app/_lib/actions";
import { auth } from "../_lib/auth";
import Collection from "./Collection";

async function Sidebar() {
  const session = await auth();

  if (!session?.user?.email) return null;

  const user = await getUser(session.user.email);

  const collections = await getCollections(user.user_id);

  if (!collections) return <h1>No Collections</h1>;

  return (
    <aside className="relative w-[500px] border-r-2 border-tertiary-1 px-8 py-4">
      <h3 className="text-3xl font-semibold tracking-wide">Collection</h3>

      <Collection collections={collections} user_id={user.user_id} />
    </aside>
  );
}

export default Sidebar;

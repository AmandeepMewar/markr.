import Bookmarks from "@/app/_components/Bookmarks";
import { getBookmarks } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";

async function page({ params }: { params: { collection_id: string } }) {
  const { collection_id } = params;

  const session = await auth();

  if (!session?.user?.email) return null;

  const bookmarks = await getBookmarks(collection_id);

  if (!bookmarks) return <h1>No Bookmarks</h1>;

  return (
    <main>
      <Bookmarks collection_id={collection_id} bookmarks={bookmarks} />
    </main>
  );
}

export default page;

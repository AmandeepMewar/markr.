import { auth } from "@/app/_lib/auth";
import { getBookmarks, getUser } from "@/app/_lib/service";
import BookmarkCard from "./BookmarkCard";

async function Bookmarks() {
  const session = await auth();

  if (!session?.user?.email) return null;

  const user = await getUser(session.user.email);

  const bookmarks = await getBookmarks(user.user_id);

  if (!bookmarks) return <h1>No Bookmarks</h1>;

  return (
    <div className="mx-10 grid grid-cols-4 gap-12">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          url={bookmark.url}
          title={bookmark.title}
          key={bookmark.id}
        />
      ))}
    </div>
  );
}

export default Bookmarks;

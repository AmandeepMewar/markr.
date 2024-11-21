"use client";
import { BookmarkPlus } from "lucide-react";
import { useState } from "react";
import AddButton from "./AddButton";
import BookmarkCard from "./BookmarkCard";
import BookmarkInput from "./BookmarkInput";

type props = {
  collection_id: string;
  bookmarks: {
    bookmark_id: string;
    created_at: string;
    title: string;
    url: string;
    collection_id: string;
  }[];
};

function Bookmarks({ collection_id, bookmarks }: props) {
  const [createBookmark, setCreateBookmark] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      <div className="mx-10 flex justify-between">
        <h2 className="text-3xl font-semibold tracking-wide">Bookmarks</h2>
        <AddButton
          icon={BookmarkPlus}
          className="flex items-center gap-2 rounded-2xl bg-tertiary-1 px-6 py-2 text-lg"
          onClick={() => setCreateBookmark(true)}
        >
          Add bookmark
        </AddButton>
      </div>
      <div className="mx-10 grid grid-cols-4 gap-10">
        {bookmarks.map((bookmark) => (
          <BookmarkCard
            bookmark_id={bookmark.bookmark_id}
            url={bookmark.url}
            title={bookmark.title}
            key={bookmark.bookmark_id}
            collection_id={collection_id}
          />
        ))}
        {createBookmark && (
          <div className="relative flex h-[12rem] w-[20rem] items-center rounded-lg bg-tertiary-1">
            <BookmarkInput
              setIsEditing={setCreateBookmark}
              title=""
              url=""
              bookmark_id=""
              collection_id={collection_id}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;

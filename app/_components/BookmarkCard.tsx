"use client";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { deleteBookmark } from "../_lib/actions";
import BookmarkInput from "./BookmarkInput";
import Button from "./Button";
import LinkButton from "./LinkButton";

type Props = {
  url: string;
  title: string;
  bookmark_id: string;
  collection_id: string;
};

function BookmarkCard({ url, title, bookmark_id, collection_id }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleEditClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsEditing(true);
  }

  function handleDelete() {
    startTransition(() => deleteBookmark(bookmark_id));
  }

  return (
    <div className="relative flex h-[12rem] w-[20rem] items-center rounded-lg bg-tertiary-1">
      {isEditing ? (
        <BookmarkInput
          bookmark_id={bookmark_id}
          title={title}
          url={url}
          setIsEditing={setIsEditing}
          collection_id={collection_id}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-between py-5">
          <LinkButton
            href={url}
            target="_blank"
            className="flex flex-col items-center justify-center gap-1 px-5"
          >
            <div className="flex items-center justify-center gap-2">
              <img
                src={`http://www.google.com/s2/favicons?domain=${url}`}
                alt="favicon"
                className="h-5 w-5 object-cover"
              />
              <h3 className="text-2xl font-medium"> {title}</h3>
            </div>
            <p className="break-all text-center">{url}</p>
          </LinkButton>
          <div className="flex gap-10">
            <Button
              onClick={handleEditClick}
              className="z-10 rounded-full p-1 transition-all hover:bg-primary-1"
            >
              <Pencil className="h-5 w-5 text-accent-2" />
            </Button>
            <Button
              onClick={handleDelete}
              className="rounded-full p-1 transition-all hover:bg-primary-1"
              disabled={isPending}
            >
              <Trash2 className="h-5 w-5 text-accent-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookmarkCard;

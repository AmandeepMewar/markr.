"use client";
import { Pencil, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { deleteCollection } from "../_lib/actions";
import Button from "./Button";
import CollectionInput from "./CollectionInput";
import LinkButton from "./LinkButton";

type Props = {
  title: string;
  collection_id: string;
  user_id: string;
};

function CollectionCard({ title, collection_id, user_id }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const collection = title.replaceAll(" ", "-");

  const pathname = usePathname();

  function handleDeleteCollection() {
    startTransition(() => deleteCollection(collection_id));
  }

  return (
    <div className="h-[9rem] w-[10rem]">
      {isEditing ? (
        <CollectionInput
          title={title}
          setIsEditing={setIsEditing}
          user_id={user_id}
          collection_id={collection_id}
        />
      ) : (
        <LinkButton
          href={`/marks/${collection_id}`}
          className={`${pathname === `/marks/${collection}` ? "bg-tertiary-1" : ""} group flex h-full w-full flex-col justify-between rounded-xl px-4 py-3 hover:bg-tertiary-1`}
        >
          <div className="flex flex-col items-start">
            <h3 className="text-start text-2xl font-medium">{title}</h3>
          </div>

          <div
            className={`${pathname === `/marks/${collection}` ? "visible" : "invisible"} flex gap-2 group-hover:visible`}
          >
            <Button
              onClick={() => setIsEditing(true)}
              className="rounded-full p-1 transition-all hover:bg-primary-1"
            >
              <Pencil className="h-5 w-5 text-accent-2" />
            </Button>
            <Button
              onClick={handleDeleteCollection}
              className="rounded-full p-1 transition-all hover:bg-primary-1"
              disabled={isPending}
            >
              <Trash2 className="h-5 w-5 text-accent-1" />
            </Button>
          </div>
        </LinkButton>
      )}
    </div>
  );
}

export default CollectionCard;

"use client";
import { PackagePlus } from "lucide-react";
import { useState } from "react";
import AddButton from "./AddButton";
import CollectionCard from "./CollectionCard";
import CollectionInput from "./CollectionInput";

type Props = {
  collections: {
    collection_id: string;
    created_at: string;
    collection: string;
    user_id: string;
  }[];
  user_id: string;
};

function Collection({ collections, user_id }: Props) {
  const [createCollection, setCreateCollection] = useState(false);
  return (
    <div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {collections.map((collection, ind) => (
          <CollectionCard
            title={collection.collection}
            count={collection.count}
            key={`${collection}-${ind}`}
            collection_id={collection.collection_id}
            user_id={collection.user_id}
          />
        ))}
        {createCollection && (
          <CollectionInput
            title=""
            setIsEditing={setCreateCollection}
            user_id={user_id}
          />
        )}
      </div>

      <AddButton
        icon={PackagePlus}
        className="fixed bottom-10 left-0 flex translate-x-1/2 items-center gap-2 rounded-2xl bg-tertiary-1 px-6 py-2 text-lg"
        onClick={() => setCreateCollection(true)}
      >
        Add Collection
      </AddButton>
    </div>
  );
}

export default Collection;

import { useState } from "react";
import { createCollection, updateCollection } from "../_lib/actions";
import ConfirmButtons from "./ConfirmButtons";

type Props = {
  title: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  user_id: string;
  collection_id?: string;
};

function CollectionInput({
  title,
  setIsEditing,
  user_id,
  collection_id,
}: Props) {
  const [inputTitle, setInputTitle] = useState(title);

  async function handleSubmit() {
    if (title === "" && inputTitle !== "") {
      await createCollection(inputTitle, user_id);
    } else if (title !== "" && inputTitle !== "" && collection_id) {
      await updateCollection(inputTitle, collection_id);
    }

    setIsEditing(false);
  }

  return (
    <form
      action={handleSubmit}
      className="flex h-[9rem] w-[10rem] flex-col items-center justify-between rounded-xl bg-tertiary-1 px-2 py-4"
    >
      <input
        type="text"
        placeholder="Collection name"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        className="w-full rounded-lg bg-secondary-2 px-3 py-1"
      />
      <ConfirmButtons setIsEditing={setIsEditing} />
    </form>
  );
}

export default CollectionInput;

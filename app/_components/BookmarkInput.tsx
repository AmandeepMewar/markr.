"use client";
import { useState } from "react";
import { createBookmark, updateBookmark } from "../_lib/actions";
import ConfirmButtons from "./ConfirmButtons";

type Props = {
  title: string;
  url: string;
  bookmark_id: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  collection_id: string;
};

function BookmarkInput({
  title,
  url,
  setIsEditing,
  bookmark_id,
  collection_id,
}: Props) {
  const [inputValue, setInputValue] = useState({
    title: title,
    url: url,
  });

  function handleInputChange(field: string, value: string) {
    setInputValue((prev: { title: string; url: string }) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    if (title === "" && inputValue.title !== "" && inputValue.url !== "") {
      await createBookmark(inputValue.title, inputValue.url, collection_id);
    } else if (inputValue.title !== "" && inputValue.url !== "") {
      await updateBookmark(bookmark_id, inputValue.title, inputValue.url);
    }
    setIsEditing(false);
  }

  return (
    <form
      action={handleSubmit}
      className="flex h-full w-full flex-col items-center justify-between py-5"
    >
      <div className="flex w-full flex-col gap-2 px-3">
        <input
          type="text"
          value={inputValue.title}
          className="w-full rounded-lg bg-secondary-2 px-3 py-1"
          placeholder="Enter title"
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <input
          type="text"
          value={inputValue.url}
          className="w-full rounded-lg bg-secondary-2 px-3 py-1"
          placeholder="Enter url"
          onChange={(e) => handleInputChange("url", e.target.value)}
        />
      </div>
      <ConfirmButtons setIsEditing={setIsEditing} />
    </form>
  );
}

export default BookmarkInput;

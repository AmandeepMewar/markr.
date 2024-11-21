"use server";

import { auth, signIn } from "./auth";

import { UserType } from "@/app/types";
import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

export async function createUser(newUser: UserType) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) throw new Error("User creation failed");

  return data;
}

export async function createBookmark(
  title: string,
  url: string,
  collection_id: string,
) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("bookmarks")
    .insert([{ title: title, url: url, collection_id: collection_id }]);

  if (error) throw new Error("Bookmark creation failed");

  revalidatePath(`/marks/`);
}

export async function createCollection(collection: string, user_id: string) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("collections")
    .insert([{ collection: collection, user_id: user_id }]);

  if (error) throw new Error("Collection creation failed");

  revalidatePath(`/marks/`);
}

export async function updateCollection(
  collection: string,
  collection_id: string,
) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("collections")
    .update({ collection })
    .eq("collection_id", collection_id);

  if (error) throw new Error("Collection update failed");

  revalidatePath(`/marks/`);
}

export async function getUser(email: string) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function getBookmarks(collection_id: string) {
  const { data } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("collection_id", collection_id);

  return data;
}

export async function updateBookmark(
  bookmark_id: string,
  title: string,
  url: string,
) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("bookmarks")
    .update({ title, url })
    .eq("bookmark_id", bookmark_id);

  if (error) throw new Error("Bookmark update failed");

  revalidatePath(`/marks/`);
}

export async function getCollections(userId: string) {
  const { data } = await supabase
    .from("collections")
    .select("*")
    .eq("user_id", userId);

  return data;
}

export async function deleteBookmark(bookmark_id: string) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("bookmarks")
    .delete()
    .eq("bookmark_id", bookmark_id);

  if (error) throw new Error("Bookmark deletion failed");
  revalidatePath(`/marks/`);
}

export async function deleteCollection(id: string) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase
    .from("collections")
    .delete()
    .eq("collection_id", id);

  if (error) throw new Error("Collection deletion failed");

  revalidatePath(`/marks/`);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/marks" });
}

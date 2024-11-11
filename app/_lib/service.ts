import { UserType } from "@/app/types";
import { supabase } from "./supabase";

export async function createUser(newUser: UserType) {
  console.log(newUser);
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) throw new Error("User creation failed");

  return data;
}

export async function getUser(email: string) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function getBookmarks(userId: string) {
  const { data } = await supabase
    .from("marks")
    .select("*")
    .eq("user_id", userId);

  return data;
}

export async function getCollections(userId: string) {
  const { data } = await supabase
    .from("collections")
    .select("*")
    .eq("user_id", userId);

  return data;
}


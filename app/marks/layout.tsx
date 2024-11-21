import { redirect } from "next/navigation";
import React from "react";
import Sidebar from "../_components/Sidebar";
import { auth } from "../_lib/auth";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Bookmarks",
};

async function layout({ children }: Props) {
  const session = await auth();

  if (!session) return redirect("/login");

  return (
    <main className="relative flex h-screen w-full">
      <Sidebar />
      <div className="w-full">{children}</div>
    </main>
  );
}

export default layout;

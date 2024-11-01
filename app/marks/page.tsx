import { redirect } from "next/navigation";
import Bookmarks from "../_components/Bookmarks";
import Sidebar from "../_components/Sidebar";
import { auth } from "../_lib/auth";

async function page() {
  const session = await auth();

  if (!session) return redirect("/login");
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div>
        <Bookmarks />
      </div>
    </main>
  );
}

export default page;

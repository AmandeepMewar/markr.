import Bookmarks from "../_components/Bookmarks";
import Sidebar from "../_components/Sidebar";

function page() {
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

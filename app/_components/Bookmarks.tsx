import BookmarkCard from "./BookmarkCard";

function Bookmarks() {
  return (
    <div className="mx-10 grid grid-cols-4 gap-12">
      <BookmarkCard url="https://amandeepmewar.netlify.app/" title="Porfolio" />

      <BookmarkCard url="https://amandeepmewar.netlify.app/" title="Porfolio" />

      <BookmarkCard url="https://wttodoappts.netlify.app/" title="Todo app" />

      <BookmarkCard url="https://ponsonbys.netlify.app/" title="Ponsonbys" />
    </div>
  );
}

export default Bookmarks;

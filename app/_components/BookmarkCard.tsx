import Link from "next/link";

type Props = {
  url: string;
  title: string;
};

function BookmarkCard({ url, title }: Props) {
  return (
    <div className="h-[18rem] w-[20rem] rounded-lg bg-tertiary-1 py-3">
      <Link
        href={url}
        target="_blank"
        className="flex h-full flex-col items-center gap-4"
      >
        <iframe src={url} scrolling="no" />
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2">
            <img
              src={`https://icon.horse/icon/amandeepmewar.netlify.app/`}
              alt="favicon"
              className="h-5 w-5 object-cover"
            />
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <p>{url}</p>
        </div>
      </Link>
    </div>
  );
}

export default BookmarkCard;

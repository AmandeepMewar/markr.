import Button from "./_components/Button";
import MarkGraphicText from "./_components/MarkGraphicText";

export default function Home() {
  return (
    <main className="flex flex-col mt-16 items-center justify-center">
      <div className="relative -z-10 ">
        <MarkGraphicText />
        <p className="text-lg -mt-16 text-center">
          Markr. is a web app build to manage and store your bookmarks at one
          place in an organized manner.
        </p>
      </div>
      <div className="mt-16 ">
        <Button href="/marks">Get Started</Button>
      </div>
    </main>
);
}

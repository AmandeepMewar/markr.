import LinkButton from "./_components/LinkButton";
import MarkGraphicText from "./_components/MarkGraphicText";

export default function Home() {
  return (
    <main className="mt-16 flex flex-col items-center justify-center">
      <div className="relative -z-10">
        <MarkGraphicText />
        <p className="-mt-16 text-center text-lg">
          Markr. is a web app build to manage and store your bookmarks at one
          place in an organized manner.
        </p>
      </div>
      <div className="mt-16">
        <LinkButton href="/marks">Get Started</LinkButton>
      </div>
    </main>
  );
}

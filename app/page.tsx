import Button from "./_components/Button";
import Footer from "./_components/Footer";
import MarkGraphicText from "./_components/MarkGraphicText";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
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
      <Footer />
    </div>
  );
}

import LinkButton from "./_components/LinkButton";

function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-semibold">
          This page could not be found :(
        </h1>

        <LinkButton href="/">Go back home</LinkButton>
      </div>
    </main>
  );
}

export default NotFound;

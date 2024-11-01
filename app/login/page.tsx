import GoogleLoginButton from "../_components/GoogleLoginButton";

export const metadata = {
  title: "Login",
};

function page() {
  return (
    <div className="mt-20 flex w-full justify-center">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-3xl">Login to access your bookmarks</h3>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

export default page;

"use client";
import Image from "next/image";
import { signInAction } from "../_lib/actions";
import Button from "./Button";

function GoogleLoginButton() {
  return (
    <Button
      onClick={() => signInAction()}
      className="flex items-center gap-4 rounded-lg bg-tertiary-1 px-8 py-3 text-xl transition-all hover:bg-accent-1"
    >
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Sign in with Google</span>
    </Button>
  );
}

export default GoogleLoginButton;

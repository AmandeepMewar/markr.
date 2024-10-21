import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        width="100"
        height="60"
        className="object-cover"
        alt="markr logo"
      />
    </Link>
  );
}

export default Logo;

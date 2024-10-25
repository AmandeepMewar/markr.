import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

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

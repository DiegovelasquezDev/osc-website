import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={130} height={54} priority alt="logo osc" />
    </Link>
  );
};

export default Logo;

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={`${theme === "dark" ? "/logoWhite.png" : "/logoBlack.png"}`}
        width={130}
        height={54}
        priority
        alt="logo osc"
      />
    </Link>
  );
};

export default Logo;

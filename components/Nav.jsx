// link ( nextjs)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// motion
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "inicio" },
  { path: "/aboutUs", name: "¿Quiénes  somos?" },
  { path: "/clients", name: "Clientes" },
  { path: "/businessLine", name: "Líneas  de negocio" },
  { path: "/services", name: "Servicios" },
  { path: "/contactUs", name: "Contáctanos" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${
              link.path === path
                ? "bg-gradient-to-r from-[#3A349A] to-[#EB2566] text-transparent bg-clip-text"
                : ""
            } ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "react-bootstrap";
import { DarkModeButton } from "@/components";
import css from "./jam.module.scss";

export default function TFT() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  return (
    <div className={`${css.container} `}>
      <DarkModeButton />
      <Link classname="ml-5" href={isHomePage ? "/about" : "/"} passHref>
        <Navbar.Brand>
          <span className={css.jam}></span>
        </Navbar.Brand>
      </Link>
    </div>
  );
}

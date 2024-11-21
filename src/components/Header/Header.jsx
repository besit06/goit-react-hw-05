import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
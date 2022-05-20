import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="App-header">
        <Link to="/">Главное</Link>
        <Link to="/Portfolio">Персонаж</Link>
        <Link to="/Country">Страны</Link>
        <Link to="/Tasks">Задачи</Link>
      </header>

      <Outlet />

      <footer>nasway</footer>
    </div>
  );
};

export default Layout;

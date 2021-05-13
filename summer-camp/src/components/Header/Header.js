import React from "react";

function Header() {
  const [isBurgerButtonClicked, setIsBurgerButtonClicked] =
    React.useState(false);

  function handleOpenMenuBurger() {
    if (isBurgerButtonClicked) {
      setIsBurgerButtonClicked(false);
    }
    if (!isBurgerButtonClicked) {
      setIsBurgerButtonClicked(true);
    }
  }

  const mobileHeader = (
    <>
      <button
        className={`header__burger-menu ${
          isBurgerButtonClicked ? "header__burger-menu_active" : ""
        }`}
        type="button"
        onClick={handleOpenMenuBurger}
      ></button>
      <nav
        className={`header__burger-nav ${
          isBurgerButtonClicked ? "header__burger-nav_active" : ""
        }`}
      >
        <a className="header__burger-link" href="# ">
          Главная
        </a>
        <a className="header__burger-link" href="# ">
          О нас
        </a>
        <a className="header__burger-link" href="# ">
          Команда
        </a>
        <a className="header__burger-link" href="# ">
          Обучения
        </a>
        <a className="header__burger-link" href="# ">
          Где нас найти?
        </a>
        <a className="header__burger-link" href="# ">
          Контакты
        </a>
      </nav>
    </>
  );

  const header = (
    <nav className="header__nav">
      <a className="header__link" href="# ">
        Главная
      </a>
      <a className="header__link" href="# ">
        О нас
      </a>
      <a className="header__link" href="# ">
        Команда
      </a>
      <a className="header__link" href="# ">
        Обучения
      </a>
      <a className="header__link" href="# ">
        Где нас найти?
      </a>
      <a className="header__link" href="# ">
        Контакты
      </a>
    </nav>
  );

  return (
    <header className="header">
      <div
        className={`header__name-box ${
          isBurgerButtonClicked ? "header__name-box_active" : ""
        }`}
      >
        <h2
          className={`header__name ${
            isBurgerButtonClicked ? "header__name_active" : ""
          }`}
        >
          GENIUS
        </h2>
        <p
          className={`header__subtitle ${
            isBurgerButtonClicked ? "header__subtitle_active" : ""
          }`}
        >
          Лингво-математический центр
        </p>
      </div>
      {mobileHeader}
      {header}
    </header>
  );
}

export default Header;

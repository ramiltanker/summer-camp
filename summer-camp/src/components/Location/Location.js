import React from "react";

// Картинки
import logo from "../../images/лого.png";
// Картинки

function Location() {
  const [isShowMoreClicked, setIsShowMoreClicked] = React.useState(false);

  function handleShowMore() {
    if (isShowMoreClicked) {
      setIsShowMoreClicked(false);
    }
    if (!isShowMoreClicked) {
      setIsShowMoreClicked(true);
    }
  }

  return (
    <section className="location">
      <h2 className="location__title">ГДЕ НАС НАЙТИ?</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.40330171518!2d78.35243231493273!3d45.01673787121059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427efe3c7fff5257%3A0x29e81f8b8a613da6!2z0YPQu9C40YbQsCDQkNC70LTQsNCx0LXRgNCz0LXQvdC-0LLQsCAxMTksINCi0LDQu9C00YvQutC-0YDQs9Cw0L0gMDQwMDAw!5e0!3m2!1sru!2skz!4v1620874149853!5m2!1sru!2skz"
        className="location__map"
        loading="lazy"
        title="map"
      ></iframe>
      <div className="location__container">
        <img className="location__logo" src={logo} alt="Логотип" />
        <ul className="location__social">
          <li>
            <a className="location__social-link" href="#">
              whatsapp
            </a>
          </li>
          <li>
            <a className="location__social-link" href="#">
              instagram
            </a>
          </li>
          <li>
            <a className="location__social-link" href="#" id="telegram">
              Телеграмм
            </a>
          </li>
        </ul>
        <button
          className={`location__button ${isShowMoreClicked ? "location__button_active" : ""}`}
          type="button"
          onClick={handleShowMore}
        ></button>
        <div
          className={`location__box ${
            isShowMoreClicked ? "location__box_active" : ""
          }`}
        >
          <p className="location__adress">Республика Казахстан,</p>
          <p className="location__adress">
            Алматинская область, г. Талдыкорган,
          </p>
          <p className="location__adress">улица Алдабергенова 119,<br></br>2 этаж, кабинеты 5, 7, 9 и 3/4</p>
        </div>
      </div>
    </section>
  );
}

export default Location;

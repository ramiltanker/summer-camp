import React from "react";

// Каритнки
import telegram from "../../images/telegram.svg";
import telegramActive from "../../images/telegram-active.svg";
import whatsapp from "../../images/whatsapp.svg";
import whatsappActive from "../../images/whatsappActive.svg";
import instagram from "../../images/instagram.svg";
import instagramActive from "../../images/instagram-active.svg";

import ramil from "../../images/Ramil.png";
import emir from "../../images/Emir.png";
import yura from "../../images/Yura.png";
// Каритнки
function AboutUs() {
  return (
    <>
      <section className="about-us">
        <h2 className="about-us__header">О НАС</h2>
        <div className="about-us__container">
          <h2 className="about-us__title">Учебный лагерь GENIUS</h2>
          <p className="about-us__text">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона
          </p>
          <p className="about-us__text">
            Здесь ваш текст. Здесь ваш текст. Многие программы электронной
            вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по
            умолчанию
          </p>
          <div className="about-us__image-box">
            <img src={ramil} alt="Рамиль" className="about-us__image" id="ramil" />
            <img src={emir} alt="Эмир" className="about-us__image" id="emir" />
            <img src={yura} alt="Юра" className="about-us__image" id="yura" />
          </div>
        </div>
      </section>
      <section className="about-us__social-box">
        <h2 className="about-us__social-title">Мы в социальных сетях:</h2>
        <ul className="about-us__social-networks">
          <li>
            <a className="about-us__social-network" href="#">
              <img
                src={instagram}
                alt="instagram"
                onMouseOver={(event) => {
                  event.target.src = instagramActive;
                }}
                onMouseLeave={(event) => {
                  event.target.src = instagram;
                }}
              />
            </a>
          </li>
          <li>
            <a className="about-us__social-network" href="#">
              <img
                src={telegram}
                alt="telegram"
                onMouseOver={(event) => {
                  event.target.src = telegramActive;
                }}
                onMouseLeave={(event) => {
                  event.target.src = telegram;
                }}
              />
            </a>
          </li>
          <li>
            <a className="about-us__social-network" href="#" id="whatsapp">
              <img
                src={whatsapp}
                alt="whatsapp"
                onMouseOver={(event) => {
                  event.target.src = whatsappActive;
                }}
                onMouseLeave={(event) => {
                  event.target.src = whatsapp;
                }}
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutUs;

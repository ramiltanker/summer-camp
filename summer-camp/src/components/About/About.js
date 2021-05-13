import React from "react";

// Картинки
import yura from "../../images/Юра.png";
// Картинки
function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__header">Образовательный лагерь GENIUS</h1>
        <p className="about__promo">
          Получай необходимые знания. Посещай полезные тренинги. Заводи новые
          знакомства. Наслаждайся любимым делом
        </p>
        <div className="about__courses">
            <h2 className="about__name-of-courses">Направления обучения:</h2>
            <div className="about__courses-box">
                <p className="about__course">Видеография</p>
                <p className="about__course">Веб-разработка</p>
                <p className="about__course">Soft-Skills</p>
            </div>
        </div>
      </div>
      <img src={yura} alt="Юра" className="about__image" />
    </section>
  );
}

export default About;

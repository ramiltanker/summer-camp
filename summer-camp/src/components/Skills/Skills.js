import React from "react";

// Картинки
import photo from "../../images/фото2.png";
// Картинки
function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title">
        В результате нашей совместной работы, вы освоите:
      </h2>
      <div className="skills__container">
        <img src={photo} alt="Фото" className="skills__image" />
        <div className="skills__box">
          <div className="skills__skill-box">
            <h3 className="skills__skill-title">
              Навыки продвижения личного бренда
            </h3>
            <p className="skills__skill-text">
              По окончанию двух недель обучения вы освоите азы программирования
              и уже сможете написать свой первый код
            </p>
          </div>
          <div className="skills__skill-box">
            <h3 className="skills__skill-title">
              Навыки видеосъемки, монтажа и фотошопа
            </h3>
            <p className="skills__skill-text">
              По окончанию двух недель обучения вы освоите азы программирования
              и уже сможете написать свой первый код
            </p>
          </div>
          <div className="skills__skill-box">
            <h3 className="skills__skill-title">
              Базовые навыки программирования
            </h3>
            <p className="skills__skill-text">
              По окончанию двух недель обучения вы освоите азы
              веб-программирования и уже сможете написать свой первый код
            </p>
          </div>
        </div>
      </div>
      <div className="skills__better-box">
          <p className="skills__better-text">Не упускай шанс стать лучше!</p>
      </div>
    </section>
  );
}

export default Skills;

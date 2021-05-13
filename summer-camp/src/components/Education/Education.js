import React from "react";

function Education() {
  return (
    <section className="education">
      <h2 className="education__header">ОБУЧЕНИЕ</h2>
      <div className="education__container">
        <h2 className="education__title">Чему мы обучаем?</h2>
        <div className="education__box">
          <h3 className="education__name">Веб-разработка</h3>
          <p className="education__text">
            “Написание кода” - считается одним из самых востребованных навыков в
            эпоху информационных технологий. На курсе вы получите все
            необходимое, чтобы начать развиваться в отрасли веб-разработки
          </p>
        </div>
        <div className="education__box">
          <h3 className="education__name">Видеография</h3>
          <p className="education__text">
            Видеография — современная разновидность кинематографа, использующая
            в качестве техники производства фильмов видеокамеры и монтажные
            системы, а для их воспроизведения — мультимедийные устройства. Иными
            словами - искусство снимать движущиеся изображения на видеоплёнку
            или иные носители информации посредством видеокамеры.
          </p>
        </div>
        <div className="education__box">
          <h3 className="education__name">Soft-Skills</h3>
          <p className="education__text">
            Soft skills в переводе с английского — это гибкие навыки. Говоря
            простыми словами это личные качества человека, не связанные с
            конкретной профессией, которые помогают ему взаимодействовать с
            окружающей средой, чувствовать себя комфортно в ней, развиваться и
            добиваться результатов.
          </p>
        </div>
        <div className="education__box">
          <h3 className="education__name">Продвижение личного бренда</h3>
          <p className="education__text">
            Это совокупность из раннее перечисленных навыков, основной целью
            которой является помощь в продвижении и развитии идей наших
            учеников.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;

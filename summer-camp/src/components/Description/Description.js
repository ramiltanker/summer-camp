import React from "react";

function Description() {
  const [isHtmlButtonOpen, setIsHtmlButtonOpen] = React.useState(false);
  const [isCssButtonOpen, setIsCssButtonOpen] = React.useState(false);
  const [isGitButtonOpen, setIsGitButtonOpen] = React.useState(false);

  const [isWebDevelopmentButtonCliked, setIsWebDevelopmentButtonCliked] =
    React.useState(true);
  const [isSoftSkillsButtonCliked, setIsSoftSkillsButtonCliked] =
    React.useState(false);
  const [isVideoButtonCliked, setIsVideoButtonCliked] = React.useState(false);

  function handleShowMore(event) {
    if (event.target.id === "html") {
      setIsHtmlButtonOpen(true);
    }
    if (event.target.id === "css") {
      setIsCssButtonOpen(true);
    }
    if (event.target.id === "git") {
      setIsGitButtonOpen(true);
    }
  }

  function handleCloseMore(event) {
    if (event.target.id === "html") {
      setIsHtmlButtonOpen(false);
    }
    if (event.target.id === "css") {
      setIsCssButtonOpen(false);
    }
    if (event.target.id === "git") {
      setIsGitButtonOpen(false);
    }
  }

  function handleShowCourse(event) {
    if (event.target.id === "web-development") {
      setIsWebDevelopmentButtonCliked(true);
      setIsSoftSkillsButtonCliked(false);
      setIsVideoButtonCliked(false);
    }
    if (event.target.id === "soft-skills") {
      setIsSoftSkillsButtonCliked(true);
      setIsWebDevelopmentButtonCliked(false);
      setIsVideoButtonCliked(false);
    }
    if (event.target.id === "video") {
      setIsVideoButtonCliked(true);
      setIsSoftSkillsButtonCliked(false);
      setIsWebDevelopmentButtonCliked(false);
    }
  }

  const webDevelopment = (
    <div
      className={`description__container ${
        isWebDevelopmentButtonCliked ? "description__container_active" : ""
      }`}
    >
      <div className="description__about-box">
        <div className="description__about">
          <h3 className="description__title">О курсе:</h3>
          <p className="description__about-text">
            Вы научитесь создавать структуру сайта на HTML и использовать CSS
            для его стилизации; ознакомитесь с основными HTML-тегами и
            CSS-свойствами; сможете использовать свои знания, как инструмент для
            заработка.
          </p>
        </div>
        <div className="description__pluses">
          <h3 className="description__title">Что даст вам курс:</h3>
          <ul className="description__list">
            <li className="description__li">
              Умение создавать сайты, используя HTML и CSS
            </li>
            <li className="description__li">
              Умение читать и редактировать код страницы
            </li>
            <li className="description__li">
              Навыки адаптировать вашу верстку под любое разрешение экрана
            </li>
            <li className="description__li">
              Навыки использования GIT, как инструмента для работы в команде
            </li>
            <li className="description__li">
              Умение выгружать проект на хостинг на примере GitHub Pages
            </li>
            <li className="description__li">
              Возможность заработка посредством создания сайтов
            </li>
          </ul>
        </div>
        <div className="description__time">
          <h3 className="description__title" id="time">
            Длительность курса:
          </h3>
          <p className="description__hours">20 часов</p>
        </div>
      </div>
      <div className="description__course-program">
        <h3 className="description__title">Программа курса:</h3>
        <ul className="description__program-list">
          <div className="description__program-container">
            <ul
              className={`description__program-ul ${
                isHtmlButtonOpen ? "description__program-ul_active" : ""
              }`}
            >
              HTML без воды
              <li className="description__program-li">Разделы веб-страницы</li>
              <li className="description__program-li">
                Структура HTML-документа
              </li>
              <li className="description__program-li">
                HTML-теги и их атрибуты
              </li>
              <li className="description__program-li">Содержимое в HTML</li>
              <li className="description__program-li">Семантическая верстка</li>
              <li className="description__program-li">Валидная верстка</li>
              <li className="description__program-li">Блоки в HTML</li>
            </ul>
            <button
              className={`description__show-more ${
                isHtmlButtonOpen ? "description__show-more_active" : ""
              }`}
              type="button"
              id="html"
              onClick={isHtmlButtonOpen ? handleCloseMore : handleShowMore}
            ></button>
          </div>
          <div className="description__program-container">
            <ul
              className={`description__program-ul ${
                isCssButtonOpen ? "description__program-ul_active" : ""
              }`}
            >
              CSS-стили
              <li className="description__program-li">Основы CSS</li>
              <li className="description__program-li">
                Связь CSS и HTML (Тег style)
              </li>
              <li className="description__program-li">
                Связь CSS и HTML (CSS-файл)
              </li>
              <li className="description__program-li">Базовые CSS-свойства</li>
              <li className="description__program-li">Flexbox-модель</li>
              <li className="description__program-li">Валидная верстка</li>
            </ul>
            <button
              className={`description__show-more ${
                isCssButtonOpen ? "description__show-more_active" : ""
              }`}
              type="button"
              id="css"
              onClick={isCssButtonOpen ? handleCloseMore : handleShowMore}
            ></button>
          </div>
          <div className="description__program-container">
            <ul
              className={`description__program-ul ${
                isGitButtonOpen ? "description__program-ul_active" : ""
              }`}
            >
              Сервис GitHub
              <li className="description__program-li">Знакомство с GIT</li>
              <li className="description__program-li">
                Консольные команды GIT
              </li>
              <li className="description__program-li">
                Хостинг - GitHub Pages
              </li>
            </ul>
            <button
              className={`description__show-more ${
                isGitButtonOpen ? "description__show-more_active" : ""
              }`}
              type="button"
              id="git"
              onClick={isGitButtonOpen ? handleCloseMore : handleShowMore}
            ></button>
          </div>
          <ul className="description__program-ul">Верстка лендинга</ul>
        </ul>
      </div>
    </div>
  );

  const softSkills = (
    <div className="description__container">
      <div className="description__about-box">
        <div className="description__about">
          <h3 className="description__title">О курсе:</h3>
          <p className="description__about-text">
            Начнем с того, что такое soft skill. Это комплекс навыков и умений,
            которые помогают в создании успешной личности, в работе в коллективе
            и в общении с людьми. Таким образом, на нашем курсе, мы будем
            развивать ваши лидерские качества, а также прокачивать и улучшать
            различные навыки. Это будет происходит с помощью, так называемых
            тренингов, лекций, практик и различных ролевых игр
          </p>
        </div>
        <div className="description__pluses">
          <h3 className="description__title">Что даст вам курс:</h3>
          <ul className="description__list">
            <li className="description__li">Развитие лидерских качеств</li>
            <li className="description__li">Умение работать в команде</li>
            <li className="description__li">
              Умение создавать эффективную и продуктивную атмосферу в команде
            </li>
            <li className="description__li">
              Умение решать конфликты внутри коллектива
            </li>
            <li className="description__li">
              Правильное расставление приоритетов
            </li>
            <li className="description__li">
              Умение принимать эффективные решения
            </li>
            <li className="description__li">Навыки публичного выступления</li>
            <li className="description__li">Основы SMM</li>
          </ul>
        </div>
        <div className="description__time">
          <h3 className="description__title" id="time">
            Длительность курса:
          </h3>
          <p className="description__hours">20 часов</p>
        </div>
      </div>
      <div className="description__course-program">
        <h3 className="description__title">Программа курса:</h3>
        <ul className="description__program-list">
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Кто такой лидер?<br></br>И как им стать?
            </ul>
          </div>
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Основы успешной и продуктивной работы в команде
            </ul>
          </div>
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Решение конфликтов
            </ul>
          </div>
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Принятие решений
            </ul>
          </div>
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Навыки публичного выступления
            </ul>
          </div>
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Тайм менджмент
            </ul>
          </div>
          <div className="description__program-container description__program-container_soft-skills">
            <ul className="description__program-ul description__program-ul_soft-skills">
              Продвижение собственного продукта
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );

  return (
    <section className="description">
      <div className="description__requirements-container">
        <h2 className="description__requirements-title">
          Что требуется от вас:
        </h2>
        <div className="description__requirements">
          <div className="description__requirement">
            <p className="description__requirement-name">
              Идея для вашего проекта
            </p>
            <p className="description__requirement-text">
              Благодаря профессионализму наших преподавателей мы сможем
              выстроить четкий план действий для достижения первых результатов в
              короткие сроки.
            </p>
          </div>
          <div className="description__requirement">
            <p className="description__requirement-name">
              Наличие “инструментов”
            </p>
            <p className="description__requirement-text">
              Для комфортного прохождения нашего интенсива вам понадобится
              ноутбук, а также тетрадь/блокнот для составления конспектов и
              выполнения ДЗ
            </p>
          </div>
          <div className="description__requirement">
            <p className="description__requirement-name">
              Желание и креативность
            </p>
            <p className="description__requirement-text">
              Желание - внутреннее стремление к осуществлению чего-либо, поэтому
              это первоочередной фактор, который ведет к достижению высоких
              результатов.
            </p>
          </div>
        </div>
      </div>
      <div className="description__program">
        <p className="description__program-text">
          Программа лагеря расчитана на 2 недели. Занятия проводятся ежедневно
          на протяжении 10 рабочих дней. Длительность одного занятия - 120
          минут. Максимально допустимое количество студентов в одной группе - 7.
          Группы формируются исходя из возраста участников.{" "}
        </p>
      </div>
      <div className="description__courses">
        <div className="description__courses-buttons">
          <button
            className={`description__course-button ${
              isWebDevelopmentButtonCliked
                ? "description__course-button_active"
                : ""
            }`}
            type="button"
            id="web-development"
            onClick={handleShowCourse}
          >
            Веб-разработка
          </button>
          <button
            className={`description__course-button ${
              isSoftSkillsButtonCliked
                ? "description__course-button_active"
                : ""
            }`}
            type="button"
            id="soft-skills"
            onClick={handleShowCourse}
          >
            Soft-Skills
          </button>
          <button
            className={`description__course-button ${
              isVideoButtonCliked ? "description__course-button_active" : ""
            }`}
            type="button"
            id="video"
            onClick={handleShowCourse}
          >
            Видеография
          </button>
        </div>
        {isWebDevelopmentButtonCliked ? webDevelopment : ""}
        {isSoftSkillsButtonCliked ? softSkills : ""}
      </div>
    </section>
  );
}

export default Description;

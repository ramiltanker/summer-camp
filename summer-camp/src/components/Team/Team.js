import React from "react";

// Картинки
import yuri from "../../images/Юра1.png";
import ramil from "../../images/Рамиль.png";
import emir from "../../images/Эмир.png";
// Картинки

function Team() {
  return (
    <section className="team">
      <h2 className="team__header">КОМАНДА</h2>
      <div className="team__container">
        <h2 className="team__title">Профессионалы своего дела</h2>
        <div className="team__team-list">
          <div className="team__teammate">
            <img src={yuri} alt="Юра" className="team__image" />
            <p className="team__teammate-name">Юра</p>
            <p className="team__proffesion">Soft-Skills тренер</p>
          </div>
          <div className="team__teammate">
            <img src={ramil} alt="Рамиль" className="team__image" />
            <p className="team__teammate-name">Рамиль</p>
            <p className="team__proffesion">Веб-разработчик</p>
          </div>
          <div className="team__teammate">
            <img src={emir} alt="Эмир" className="team__image" />
            <p className="team__teammate-name">Эмир</p>
            <p className="team__proffesion">Видеограф</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

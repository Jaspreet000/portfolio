import React, { useState } from "react";
import Close from "../assets/close.svg";
const Portfolioitem = ({ img, title, details }) => {
  const [modal, setmodal] = useState(false);

  const toggleModal = () => {
    setmodal(!modal);
  };
  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                const isLink = desc.includes("https");
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>

                    <div>
                      <span className="item__title">{title}</span>
                      {/* <span className="item__details">{desc}</span> */}
                      {isLink ? (
                        <a
                          href={desc}
                          className="item__details"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {desc}
                        </a>
                      ) : (
                        <span className="item__details">{desc}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="modal__img-cont">
              <img src={img} alt="" className="modal__img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolioitem;

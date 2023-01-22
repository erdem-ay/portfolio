import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Çanakkale 18 Mart University
                </h3>
                <span className="qualification__subtitle">Bachelor Degree</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Taşdelen IMKB Highschool
                </h3>
                <span className="qualification__subtitle">Database</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2009 - 2013
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelance</h3>
                <span className="qualification__subtitle">React Developer</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Personel Projects</h3>
                <span className="qualification__subtitle">
                  Javascript Developer
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT Support</h3>
                <span className="qualification__subtitle">Koçtaş</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

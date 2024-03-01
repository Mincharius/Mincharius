import React, { useState } from "react";
import McBlog from "../../assets/mc-blog.jpg";
import Sal1 from "../../assets/sal1.jpg";
import Sal2 from "../../assets/sal2.jpg";
import "./project.css";

const Project = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <i className="uil uil-arrow projects__icon"></i>
            <h3 className="projects__title">
              CoupleTx <br /> Clone
            </h3>
          </div>

          <span className="projects__button" onClick={() => toggleTab(1)}>
            View More
            <i className="bx bx-right-arrow-alt project__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">CoupleTx Clone</h3>

              <p className="projects__modal-describtion">
                I am responsible for the frontend part. We are cloning the
                CoupleTx e-commerce website, which includes functionalities such
                as user authentication, registration, allowing buyers to view
                products, make purchases, and provide reviews.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-github"></i>
                  <p className="projects__modal-info">
                    <span
                      className="projects__button"
                      onClick={() =>
                        window.open(
                          "https://github.com/BDucky/couple-tx",
                          "_blank"
                        )
                      }
                    >
                      View More
                      <i className="bx bx-right-arrow-alt project__button-icon"></i>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              Mincharius <br /> Blog
            </h3>
          </div>

          <span className="projects__button" onClick={() => toggleTab(2)}>
            View More
            <i className="bx bx-right-arrow-alt project__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Mincharius Blog</h3>
              <div className="projects__modal-image">
                <img
                  src={McBlog}
                  alt="Mincharius Blog"
                  width={500}
                  height={300}
                />
              </div>
              <p className="projects__modal-describtion">
                I used Nextjs, Firebase to make this blog.
              </p>
              This blog is about my life but i haven't update anything yet.
              <i className="uil uil-github"></i>
              <span
                className="projects__button"
                onClick={() =>
                  window.open("https://github.com/Mincharius/mincharius-blog", "_blank")
                }
              >
                View More
                <i className="bx bx-right-arrow-alt project__button-icon"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-edit projects__icon"></i>
            <h3 className="projects__title">
              Snake and Ladder <br /> Game
            </h3>
          </div>

          <span className="projects__button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">Snake and Ladder</h3>

              <p className="projects__modal-describtion">
              <div className="projects__modal-image">
                <img
                  src={Sal1}
                  alt="Mincharius Blog"
                  width={500}
                  height={300}
                />
                <img
                  src={Sal2}
                  alt="Mincharius Blog"
                  width={500}
                  height={300}
                />
              </div>
              Snake and Ladder is a game played by 2 people online, it is made with PhaserJS and Colyseus.
              </p>

              

              <i className="uil uil-github"></i>
              <span
                className="projects__button"
                onClick={() =>
                  window.open("https://github.com/Mincharius/Ran-va-Thang", "_blank")
                }
              >
                View More
                <i className="bx bx-right-arrow-alt project__button-icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

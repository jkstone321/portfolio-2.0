import "./style.css";
import Contact from "../../components/contact";
import HomeBtn from "../../house.svg";
import CloseBtn from "../../x.svg";
import React, { useState } from "react";

function Projects() {
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [plantedModal, setPlantedUpModal] = useState(false);
  const [idunnoModal, setIdunnoModal] = useState(false);

  const handleLevelUpShow = (project) => {
    switch (project) {
      case "levelUp":
        setLevelUpModal(!levelUpModal);
        break;
      case "planted":
        setPlantedUpModal(!plantedModal);
        break;
      case "idunno":
        setIdunnoModal(!idunnoModal);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div id="box" className="project-box">
        <ul id="link-list-projects">
          <li>
            <div id="project-box" onClick={() => handleLevelUpShow("levelUp")}>
              <h1 id="project-title">Level Up</h1>
            </div>
          </li>
          <li>
            <div
              id="project-box"
              onClick={() => handleLevelUpShow("planted")}
              className="planted-box"
            >
              <h1 id="project-title">Planted</h1>
            </div>
          </li>
          <li>
            <div id="project-box" onClick={() => handleLevelUpShow("idunno")}>
              <h1 id="project-title">iDunno</h1>
            </div>
          </li>
        </ul>
        <Contact />
      </div>

      {/* LEVEL UP MODAL */}
      <div
        id="modal"
        style={!levelUpModal ? { display: "none" } : { display: "inline" }}
      >
        <div id="test-modal" onClick={() => handleLevelUpShow("levelUp")}></div>
        <div id="modal-info">
          <img
            src={CloseBtn}
            id="close-btn"
            alt="close button"
            onClick={() => handleLevelUpShow("levelUp")}
          />
          <h1>Level Up</h1>
          <div id="like-a-line-break-or-something-2"></div>
        </div>
      </div>

      {/* PLANTED MODAL */}
      <div
        id="modal"
        style={
          !plantedModal
            ? {
                visibility: "hidden",
                opacity: "0",
                transition: "visibility 0s, opacity 3s ease !important",
              }
            : {
                visibility: "visible",
                opacity: "1",
                transition: "visibility 0s, opacity 3s ease !important",
              }
        }
      >
        <div id="test-modal" onClick={() => handleLevelUpShow("planted")}></div>
        <div id="modal-info">
          <img
            src={CloseBtn}
            id="close-btn"
            alt="close button"
            onClick={() => handleLevelUpShow("planted")}
          />
          <h1>Planted</h1>
          <div id="like-a-line-break-or-something-2"></div>
          <div id="planted-text">
            <div id="planted-sum">
              Planted is the second project I did for the UCF Bootcamp. We were
              tasked with making an app that utilizes a database using Node
              packages MySQL2 and Sequellize. When the user creates an account
              on Planted, they are given a grid they can use to plan out their
              garden and their layout and plants are saved to their user in the
              database.
            </div>
            <div id="planted-tech">
              <div id="planted-tech-title">Technologies Used</div>
              <ol>
                <li></li>
              </ol>
            </div>
            <div id="planted-links"></div>
          </div>
        </div>
      </div>

      {/* IDUNNO MODAL */}
      <div
        id="modal"
        style={!idunnoModal ? { display: "none" } : { display: "inline" }}
      >
        <div id="test-modal" onClick={() => handleLevelUpShow("idunno")}></div>
        <div id="modal-info">
          <img
            src={CloseBtn}
            id="close-btn"
            alt="close button"
            onClick={() => handleLevelUpShow("idunno")}
          />
          <h1>iDunno</h1>
          <div id="like-a-line-break-or-something-2"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;

import "./style.css";
import Contact from "../../components/contact";
import Navigation from "../../components/navigation";
import CloseBtn from "../../x.svg";
import React, { useState } from "react";

function Projects() {
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [plantedModal, setPlantedModal] = useState(false);
  const [idunnoModal, setIdunnoModal] = useState(false);

  const [levelUpLinks, setLevelUpLinks] = useState(false);
  const [plantedLinks, setPlantedLinks] = useState(false);
  const [idunnoLinks, setIdunnoLinks] = useState(false);

  const handleLevelUpShow = (project) => {
    switch (project) {
      case "levelUp":
        setLevelUpModal(!levelUpModal);
        break;
      case "planted":
        setPlantedModal(!plantedModal);
        break;
      case "idunno":
        setIdunnoModal(!idunnoModal);
        break;
      default:
        return;
    }
  };

  const handleLinksShow = (project) => {
    switch (project) {
      case "levelup":
        setLevelUpLinks(!levelUpLinks);
        break;
      case "planted":
        setPlantedLinks(!plantedLinks);
        break;
      case "idunno":
        setIdunnoLinks(!idunnoLinks);
        break;
    }
  };

  return (
    <>
      <div id="box" className="project-box">
        <ul id="link-list-projects">
          <li>
            <div
              id="project-box"
              className="levelup-box"
            >
              <h1 id="project-title">Level Up</h1>

              <div
                id="project-links"
              >
                <a
                  id="link-button"
                  onClick={() => handleLevelUpShow("levelUp")}
                >
                  About
                </a>
                <a
                  href="https://garden-boys-missing-their-popp.herokuapp.com/"
                  target="_blank"
                  id="link-button"
                >
                  Link
                </a>
                <a
                  href="https://github.com/Drago9082/Level-Up"
                  target="_blank"
                  id="link-button"
                >
                  Repo
                </a>
              </div>
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
            <div
              id="project-links"
              style={plantedLinks ? { height: "15rem" } : { height: "0" }}
            >
              <a
                href="https://agile-wildwood-01808.herokuapp.com/"
                target="_blank"
                id="link-button"
              >
                Link
              </a>
              <a
                href="https://github.com/jkstone321/planted"
                target="_blank"
                id="link-button"
              >
                Repo
              </a>
            </div>
          </li>
          <li>
            <div
              id="project-box"
              onClick={() => handleLevelUpShow("idunno")}
              onMouseEnter={() => handleLinksShow("idunno")}
              onMouseLeave={() => handleLinksShow("idunno")}
            >
              <h1 id="project-title">iDunno</h1>
            </div>
            <div
              id="project-links"
              style={idunnoLinks ? { height: "15rem" } : { height: "0" }}
            >
              <a
                href="https://droessling94.github.io/IDunno/"
                target="_blank"
                id="link-button"
              >
                Link
              </a>
              <a
                href="https://github.com/Droessling94/IDunno"
                target="_blank"
                id="link-button"
              >
                Repo
              </a>
            </div>
          </li>
        </ul>
        <Navigation page="projects" />
        <Contact page="projects" />
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
          <p id="levelup-sum">
            Level Up is the third and final project assigned in the UCF
            bootcamp. We were tasked with creating an app that uses the full
            MERN stack. Our group decided we wanted to build a clone of a
            popular flash games site called MiniClip. Users, along with their
            favorited games, are stored in a database using MongoDB. The games
            on the website are open source JavaScript games from CodePen. We
            also wanted it to be more social so we added a chatroom when the
            user logs in they are able to chat with other people playing games
            on the site.
          </p>
          <div id="planted-tech">
            <h3 id="planted-tech-title">Technologies Used</h3>
            <ul>
              <li>Mongoose</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
              <li>Axios</li>
              <li>React-Bootstrap</li>
              <li>jQuery</li>
              <li>Socket.io</li>
              <li>Reveal.js (for our class presentation)</li>
            </ul>
          </div>
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
              }
            : {
                visibility: "visible",
                opacity: "1",
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
          <div id="planted-text">
            <p id="planted-sum">
              Planted is the second project I did for the UCF Bootcamp. We were
              tasked with making an app that utilizes a database using Node
              packages MySQL2 and Sequellize. When the user creates an account
              on Planted, they are given a grid they can use to plan out their
              garden and their layout and plants are saved to their user in the
              database.
            </p>
            <div id="planted-tech">
              <h3 id="planted-tech-title">Technologies Used</h3>
              <ul>
                <li>BCrypt</li>
                <li>DotEnv</li>
                <li>Express</li>
                <li>Handlebars (Express)</li>
                <li>MySQL2</li>
                <li>Sequellize</li>
                <li>JQuery</li>
                <li>JQueryUI</li>
              </ul>
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
          <p id="idunno-sum">
            iDunno is the first project that was assigned in the UCF bootcamp.
            We were instructed with creating an app that is able to get
            information from two third party APIs. The premise of the app is to
            reccomend random movies or video games based on the criteria the
            user fills out in the form nad then the user is able to save a game
            or movie to their favorites list using local storage. We used The
            Movie Database (TMDB) and Internet Game Database (IGDB) for our
            third party APIs. This was our first time collaborating on a project
            together using GitHub branches so its not as polished as we would
            like it to be, but it shows the amount of growth ive had as a web
            developer.
          </p>
          <div id="idunno-tech">
            <h3 id="idunno-tech-title">Technologies Used</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

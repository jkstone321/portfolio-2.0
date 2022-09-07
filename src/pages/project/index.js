import "./style.css";
import Contact from "../../components/contact";
import Navigation from "../../components/navigation";
import React, { useState } from "react";

function Projects() {
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [levelUpLinks, setLevelUpLinks] = useState(false);
  const [plantedModal, setPlantedModal] = useState(false);
  const [idunnoModal, setIdunnoModal] = useState(false);

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
  const handleMouseEnter = () => {
    setLevelUpLinks(true);
  };
  const handleMouseLeave = () => {
    setLevelUpLinks(false);
  };

  return (
    <>
      <div id="box" className="project-box">
        <ul id="link-list-projects">
          <li
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div id="project-box" className="levelup-box">
              <h1 id="project-title">Level Up</h1>
            </div>
          </li>
          <li>
            <div id="project-box" className="planted-box">
              <h1 id="project-title">Planted</h1>
            </div>
          </li>
          <li>
            <div id="project-box" className="idunno-box">
              <h1 id="project-title">iDunno</h1>
            </div>
          </li>
        </ul>
        <div id="link-group">
          <div
            id="project-links"
            className="levelup-links"
            style={levelUpLinks ? { opacity: "1" } : { opacity: "0" }}
          >
            <a id="link-button" onClick={() => handleLevelUpShow("levelUp")}>
              About
            </a>
            <a
              href="https://garden-boys-missing-their-popp.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              id="link-button"
            >
              Link
            </a>
            <a
              href="https://github.com/Drago9082/Level-Up"
              target="_blank"
              rel="noreferrer"
              id="link-button"
            >
              Repo
            </a>
          </div>
          <div id="project-links">
            <a id="link-button" onClick={() => handleLevelUpShow("planted")}>
              About
            </a>
            <a
              href="https://agile-wildwood-01808.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              id="link-button"
            >
              Link
            </a>
            <a
              href="https://github.com/jkstone321/planted"
              target="_blank"
              rel="noreferrer"
              id="link-button"
            >
              Repo
            </a>
          </div>
          <div id="project-links">
            <a id="link-button" onClick={() => handleLevelUpShow("idunno")}>
              About
            </a>
            <a
              href="https://droessling94.github.io/IDunno/"
              target="_blank"
              rel="noreferrer"
              id="link-button"
            >
              Link
            </a>
            <a
              href="https://github.com/Droessling94/IDunno"
              target="_blank"
              rel="noreferrer"
              id="link-button"
            >
              Repo
            </a>
          </div>
        </div>
        <Navigation page="projects" />
        <Contact page="projects" />
      </div>

      {/* <div
        id="modal"
        style={
          !levelUpModal
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
        <div id="test-modal" onClick={() => handleLevelUpShow("levelUp")}></div>
        <div id="modal-info">
          <img
            src={CloseBtn}
            id="close-btn"
            alt="close button"
            onClick={() => handleLevelUpShow("levelUp")}
          />
          <h1 id="levelup-title">Level Up</h1>
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
          <div id="levelup-tech">
            <h3 id="levelup-tech-title">Technologies Used</h3>
            <ul id="levelup-tech-list">
              <li id="tech">Mongoose</li>
              <li id="tech">MongoDB</li>
              <li id="tech">Express</li>
              <li id="tech">React</li>
              <li id="tech">Node</li>
              <li id="tech">Axios</li>
              <li id="tech">React-Bootstrap</li>
              <li id="tech">jQuery</li>
              <li id="tech">Socket.io</li>
              <li id="tech">Reveal.js (for our class presentation)</li>
            </ul>
          </div>
          <div id="levelup-link-group">
            <a id="levelup-link">LINK</a>
            <a id="levelup-link">REPO</a>
          </div>
        </div>
      </div>

    
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
          <h1 id="levelup-title">Planted</h1>

          <p id="levelup-sum">
            Planted is the second project I did for the UCF Bootcamp. We were
            tasked with making an app that utilizes a database using Node
            packages MySQL2 and Sequellize. When the user creates an account on
            Planted, they are given a grid they can use to plan out their garden
            and their layout and plants are saved to their user in the database.
          </p>
          <div id="levelup-tech" style={{ top: "-16rem" }}>
            <h3 id="levelup-tech-title">Technologies Used</h3>
            <ul>
              <li id="tech">BCrypt</li>
              <li id="tech">DotEnv</li>
              <li id="tech">Express</li>
              <li id="tech">Handlebars (Express)</li>
              <li id="tech">MySQL2</li>
              <li id="tech">Sequellize</li>
              <li id="tech">JQuery</li>
              <li id="tech">JQueryUI</li>
            </ul>
          </div>
          <div id="levelup-link-group" style={{ bottom: "5rem" }}>
            <a id="levelup-link">LINK</a>
            <a id="levelup-link">REPO</a>
          </div>
        </div>
      </div>

      
      <div
        id="modal"
        style={
          !idunnoModal
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
        <div id="test-modal" onClick={() => handleLevelUpShow("idunno")}></div>
        <div id="modal-info">
          <img
            src={CloseBtn}
            id="close-btn"
            alt="close button"
            onClick={() => handleLevelUpShow("idunno")}
          />
          <h1 id="levelup-title">iDunno</h1>
          <p id="levelup-sum" style={{ lineHeight: "1.9rem" }}>
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
          <div id="levelup-tech" style={{ top: "-28rem" }}>
            <h3 id="levelup-tech-title">Technologies Used</h3>
            <ul>
              <li id="tech">HTML</li>
              <li id="tech">CSS</li>
              <li id="tech">JavaScript</li>
            </ul>
          </div>
          <div id="levelup-link-group" style={{ bottom: "7rem" }}>
            <a id="levelup-link">LINK</a>
            <a id="levelup-link">REPO</a>
          </div>
         </div>
      </div>*/}
    </>
  );
}

export default Projects;

import "./style.css";
import HomeBtn from "../../house.svg";

function Projects() {
  return (
    <>
      <div id="box" className="project-box">
        <h1 id="title-name">My Projects</h1>
        <a href="/" id="home-link">
          <img src={HomeBtn} id="home-btn" />
        </a>
        <ul id="link-list-projects">
          <div >
            <li>
              <div id="project-box"></div>
            </li>
            <li>
              <div id="project-box"></div>
            </li>
          </div>
          <div>
            <li>
              <div id="project-box"></div>
            </li>
            <li>
              <div id="project-box"></div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Projects;

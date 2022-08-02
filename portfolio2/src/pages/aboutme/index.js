import "./style.css";
import HomeBtn from "../../house.svg";

function About() {
  return (
    <>
      <div id="box">
        <h1 id="title-name">About Me</h1>
        <a href="/" id="home-link">
          <img src={HomeBtn} id="home-btn" />
        </a>
        <ul id="link-list">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;

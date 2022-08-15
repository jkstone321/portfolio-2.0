import "./style.css";
import HomeBtn from "../../house.svg";
import Contact from "../../components/contact";

function About() {
  return (
    <>
      <div id="box" className="aboutme-box">
        <h1 id="aboutme-title">About Me</h1>
        <a href="/" id="home-link">
          <img src={HomeBtn} id="home-btn" alt="home button" />
        </a>
      </div>
      <Contact page="aboutme" />
    </>
  );
}

export default About;

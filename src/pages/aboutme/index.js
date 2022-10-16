import "./style.css";
import Contact from "../../components/contact";
import Navigation from "../../components/navigation";
import selfie from "./mypic.jpeg";

function About() {
  return (
    <>
      <div id="box" className="aboutme-box">
        <h1 id="aboutme-title">About Me</h1>
        <p id="aboutme-sum">
          Full-Stack web developer who highly values communication, not only
          with other team members but with potential end users and project
          leaders to get the best possible product. Successful problem solving
          is a major reward for me and I am committed to tackling anything that
          is handed to me. I know the value of learning and growing in this
          fast-paced environment and am not afraid to seek out assistance and
          resources. My goal is to bring the end user the best possible product
          and one that I am proud of.
        </p>
        <img id="selfie" src={selfie} alt="picture of myself" />
        <Contact page="aboutme" />
        <Navigation page="aboutme" />
      </div>
    </>
  );
}

export default About;

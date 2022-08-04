import Contact from "../../components/contact";
import "./style.css";

function Home() {
  return (
    <>
      <div id="box">
        <h1 id="title-name" className="my-name">
          Jordan Stone
        </h1>
        <h3 id="title-name">MERN Developer</h3>
        <Contact />
        <ul id="link-list">
          <a href="/projects">
            <li id="homepage-btns">Projects</li>
          </a>
          <a href="/about-me">
            <li id="homepage-btns">About Me</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Home;

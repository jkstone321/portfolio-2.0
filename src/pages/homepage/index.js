import Contact from "../../components/contact";
import "./style.css";

function Home() {
  return (
    <>
      <div id="box">
        <div id="alittleflexboxaction">
          <div id="first-letter">J</div>
          <div id="my-name" className="my-name">
            ordan Stone
          </div>
        </div>
        <h3 id="title-name">MERN developer</h3>
        <ul id="link-list">
          <a href="/projects">
            <li className="btn btn-2">Projects</li>
          </a>
          <a href="/about-me" >
            <li className="btn btn-2">About Me</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Home;

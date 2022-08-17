import Contact from "../../components/contact";
import Navigation from "../../components/navigation";
import "./style.css";

function Home() {
  return (
    <>
      <div id="box">
        <div id="alittleflexboxaction">
          <div id="first-letter">J</div>
          <div id="my-name" className="my-name">
            ordan
          </div>
          <div id="last-name">Stone</div>
        </div>
        <h3 id="title-name">MERN Developer</h3>
        <Navigation page="homepage" />
        <Contact />
      </div>
    </>
  );
}

export default Home;

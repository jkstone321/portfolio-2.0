import "./style.css";
import { useMediaQuery } from "react-responsive";
function Navigation(props) {
  let navBoxStyling = {};
  let btnStyling = {};
  let text = "";
  let text2 = "";
  let goesHome = false;
  let goesAbout = true;
  const isMobile = useMediaQuery({ query: `(max-width: 730px)` });
  switch (props.page) {
    case "homepage":
      text = "Projects";
      text2 = "About Me";
      goesHome = false;
      goesAbout = true;
      isMobile
        ? (navBoxStyling = {
            justifyContent: "space-evenly",
            position: "absolute",
            width: "100%",
            bottom: "25%",
          })
        : (navBoxStyling = {
            justifyContent: "space-evenly",
            bottom: "2rem",
          });
      btnStyling = { margin: "0" };
      break;
    case "projects":
      text = "Home";
      text2 = "About Me";
      isMobile
        ? (navBoxStyling = {
            justifyContent: "space-between",
            bottom: "30rem",
          })
        : (navBoxStyling = {
            justifyContent: "space-between",
            bottom: "10.5rem",
          });
      btnStyling = { margin: "0 1rem 0 1rem" };
      goesHome = true;
      goesAbout = true;
      break;
    case "aboutme":
      text = "Home";
      text2 = "Projects";
      navBoxStyling = {
        justifyContent: "space-evenly",
        bottom: "20rem",
      };
      btnStyling = { margin: "0 1rem 0 1rem" };
      goesHome = true;
      goesAbout = false;
      break;
  }
  return (
    <>
      <ul id="nav-box" style={navBoxStyling}>
        <li className="button button-2" style={btnStyling}>
          <a href={goesHome ? "/" : "/projects"} id="links">
            {text}
          </a>
        </li>

        <li className="button button-2" style={btnStyling}>
          <a href={goesAbout ? "/about-me" : "/projects"} id="links">
            {text2}
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

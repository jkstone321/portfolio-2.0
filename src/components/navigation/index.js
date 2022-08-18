import "./style.css";

function Navigation(props) {
  let navBoxStyling = {};
  let btnStyling = {};
  let text = "";
  let goesHome = false;
  switch (props.page) {
    case "homepage":
      text = "Projects";
      goesHome = false;
      navBoxStyling = {
        justifyContent: "space-evenly",
        bottom: "2rem",
      };
      btnStyling = { margin: "0" };
      break;
    case "projects":
      text = "Home";
      navBoxStyling = {
        justifyContent: "space-between",
        bottom: "0.5rem",
      };
      btnStyling = { margin: "0 1rem 0 1rem" };
      goesHome = true;
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
          <a href="/about-me" id="links">
            About Me
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

import "./style.css";

function Navigation(props) {
  const homepageNavBox = {
    marginBottom: "8rem",
    justifyContent: "space-evenly",
  };
  const projectNavBox = { marginBottom: "0", justifyContent: "space-between" };
  const homepageButton = { margin: "0" };
  const projectButton = { margin: "1rem" };
  let navBoxStyling;
  let btnStyling;
  let text = "";
  let goesHome = false;
  switch (props.page) {
    case "homepage":
      text = "Projects";
      goesHome = false;
      navBoxStyling = homepageNavBox;
      btnStyling = homepageButton;
      break;
    case "projects":
      text = "Home";
      navBoxStyling = projectNavBox;
      btnStyling = projectButton;
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

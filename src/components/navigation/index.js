import "./style.css";

function Navigation(props) {
  return (
    <>
      <ul id="nav-box">
        <li className="button button-2">
          <a href="/" id="links">
            
          </a>
        </li>

        <li className="button button-2">
          <a href="/about-me" id="links">
            About Me
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

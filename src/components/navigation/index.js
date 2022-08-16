import "./style.css";

function Navigation() {
  return (
    <>
      <ul id="link-list">
        <li className="btn btn-2">
          <a href="/projects" id="links">
            Projects
          </a>
        </li>

        <li className="btn btn-2">
          <a href="/about-me" id="links">
            About Me
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

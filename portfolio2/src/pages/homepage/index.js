import "./style.css";

function Home() {
  return (
    <>
      <div id="box">
        <h1 id="title-name">Jordan Stone</h1>
        <h3>MERN Developer</h3>
        <ul id="link-list">
          <li>
            <a href="/projects" id="links">Projects</a>
          </li>
          <li>
            <a href="/about-me" id="links">About Me</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;

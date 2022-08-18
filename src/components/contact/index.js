import "./style.css";
import LinkedLogo from "./linkedin.png";
import GithubLogo from "./github.png";
import EmailLogo from "./at.png";
function Contact(props) {
  let containerStyle = {};
  switch (props.page) {
    case "homepage":
      containerStyle = { bottom: "-1rem" };
      break;
    case "projects":
      containerStyle = { bottom: "4rem" };
      break;
  }
  return (
    <>
      <div id="contact-container" style={containerStyle}>
        <div id="contact-link">
          <img
            src={LinkedLogo}
            className="linkedin-logo"
            id="contact-logos"
          ></img>
        </div>
        <div id="contact-link">
          <img src={GithubLogo} alt="github logo" id="contact-logos"></img>
        </div>
        <div id="contact-link">
          <img src={EmailLogo} alt="at sign" id="contact-logos"></img>
        </div>
      </div>
    </>
  );
}

export default Contact;

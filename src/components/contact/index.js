import "./style.css";
import LinkedLogo from "../../linkedin.svg";
import GithubLogo from "../../github.svg";
import EmailLogo from "../../at.svg";
function Contact(props) {
  let contactStyle = {};
  let contactLinkStyle = {};
  switch (props.page) {
    case "projects": {
      contactStyle = {
        position: "fixed",
        right: "50%",
        bottom: "1rem",
        transform: "translateX(50%)",
      };
      contactLinkStyle = {
        border: "2px solid black",
      };
      break;
    }
    case "aboutme": {
      contactStyle = {
        position: "fixed",
        right: "50%",
        bottom: "-0.5rem",
        transform: "translateX(50%)",
      };
      contactLinkStyle = {
        border: "2px solid black",
      };
      break;
    }
    case "homepage": {
      contactLinkStyle = {
        border: "2px solid grey",
      };
    }
  }
  return (
    <>
      <div id="contact-container" style={contactStyle}>
        <div id="contact-link" style={contactLinkStyle}>
          <img src={LinkedLogo} alt="linkedin logo" id="contact-logos"></img>
        </div>
        <div id="contact-link" style={contactLinkStyle}>
          <img src={GithubLogo} alt="github logo" id="contact-logos"></img>
        </div>
        <div id="contact-link" style={contactLinkStyle}>
          <img src={EmailLogo} alt="at sign" id="contact-logos"></img>
        </div>
      </div>
    </>
  );
}

export default Contact;

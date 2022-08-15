import "./style.css";
import LinkedLogo from "../../linkedin.svg";
import GithubLogo from "../../github.svg";
import EmailLogo from "../../at.svg";
function Contact(props) {
  
  return (
    <>
      <div id="contact-container">
        <div id="contact-link">
          <img src={LinkedLogo} alt="linkedin logo" id="contact-logos"></img>
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

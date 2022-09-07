import "./style.css";
import LinkedLogo from "./linkedin.png";
import GithubLogo from "./github.png";
import EmailLogo from "./at.png";
import { useMediaQuery } from "react-responsive";
function Contact(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 730px)` });
  console.log(isMobile);
  let containerStyle = {};
  switch (props.page) {
    case "homepage":
      isMobile
        ? (containerStyle = {
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          })
        : (containerStyle = { bottom: "-1rem", position: "relative" });
      break;
    case "projects":
      isMobile
        ? (containerStyle = {
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
          })
        : (containerStyle = { bottom: "14rem", position: "relative" });
      break;
    case "aboutme":
      containerStyle = { bottom: "13rem" };
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

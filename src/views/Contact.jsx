import NavBar from "../components/NavBar";
import linkedIn from "../assets/images/linkedin_logo.png";
import email from "../assets/images/email.png";
import malt from "../assets/images/malt_logo.png";
import Frame from "../components/Frame";
import './contact.css';

const Contact = () => {
  return (
    <div className="main_view_container frame contact">
      <Frame />
      <NavBar />
      <div className="title_text_social_container">
        <h1>CONTACT</h1>
        <p>
          Tell us about your project, arrange a meeting with us and let&apos;s start
          creating together.
        </p>
        <div className="social_container">
          <p>You can also contact us through:</p>
          <div className="icons">
          <img src={malt} alt="malt-icon" />
          <img src={email} alt="email-icon" />
            <img src={linkedIn} alt="linkedin-icon" />
            </div>
        </div>
      </div>
      <div className="contact_form_container">
        <form>
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="EMAIL" />
          <textarea type="text" placeholder="MESSAGE" rows="8"/>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

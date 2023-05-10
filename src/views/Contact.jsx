import NavBar from "../components/NavBar";
import linkedIn from "../assets/images/linkedin_logo.png";
import email from "../assets/images/email.png";
import malt from "../assets/images/malt_logo.png";

const Contact = () => {
  return (
    <div className="contact">
      <NavBar />
      <h1>Contact</h1>
      <p>
        Tell us about your project, arrange a meeting with us and let&apos;s start
        creating together.
      </p>
      <div>
        <p>You can also contact us through:</p>
        <img src={malt} alt="malt-icon" />
        <img src={email} alt="email-icon" />
        <img src={linkedIn} alt="linkedin-icon" />
      </div>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;

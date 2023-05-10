import NavBar from "../components/NavBar";

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
        {/* Social Links  */}
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

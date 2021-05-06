import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eck0j67",
        "bright_flash",
        e.target,
        "user_tiJzqT1DSJDfcaGluuKTG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  
   
  }

  return (
    <div>
      <div className="contact-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/octavian2111/image/upload/v1620217706/card-yellow-contact_gxf6fg.jpg"
            alt="imgcontactus"
            className="contact-image"
          />
        </div>
        <div className="form-page">
          <h1 className="contact-us">CONTACT US</h1>
          <h2 className="contact-text">
            Tell us about inspiring women you know, or just say hi!
          </h2>
          <br></br>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's your name beautiful?"
                  name="name"
                />
              </div>
              <div className="input-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="What's your email superstar?"
                  name="email"
                />
              </div>
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's up?"
                  name="subject"
                />
              </div>
              <div className="input-form">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Tell me everything..."
                  name="message"
                />
              </div>
              <div className="input-form">
                <input className="button-contact" type="submit" value="Send"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

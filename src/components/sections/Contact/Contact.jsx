import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

 const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

 emailjs
  .sendForm(
    "service_15022005",
    "template_uqd67ge",
    form.current,
    "zsTw-6zENCIXbypbU"
  )
  .then(() => {
    setLoading(false);
    setStatus("✅ Your message has been sent successfully!");

    form.current.reset();

    setTimeout(() => {
      setStatus("");
    }, 5000);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);

    setLoading(false);
    setStatus(error.text || "❌ Failed to send message.");
  });
};

  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <p className="section-subtitle">CONTACT ME</p>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            I'm open to discussing software development opportunities,
            internships, freelance projects, and collaborations.
            Feel free to reach out!
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <FaEnvelope />

              <a href="mailto:archanavelu1522@gmail.com">
                archanavelu1522@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaPhone />

              <a href="tel:+919629393571">
                +91 9629393571
              </a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />

              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/in/archana-v-31b99a265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/archana22042004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

          </div>
        </div>

        {/* Contact Form */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
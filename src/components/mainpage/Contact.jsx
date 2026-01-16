import { Form } from "react-router-dom";
import "./Contact.css";

export const handleForm = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <div className="contact-container">

     
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Let’s start a conversation.</p>
      </section>

    
      <section className="contact-content">

        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p><strong>Name:</strong> Lakshya Ghanghoriya</p>
          <p><strong>Email:</strong> contact@lakshya.com</p>
          <p><strong>Phone:</strong> +91 1234567890</p>
          <p><strong>Address:</strong> Mumbai, India</p>

          <div className="social-links">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

     
        <div className="contact-card">
          <h2>Why Contact Us?</h2>
          <ul>
            <li>✔ Product inquiries & support</li>
            <li>✔ Bulk & corporate orders</li>
            <li>✔ Fragrance recommendations</li>
            <li>✔ Partnership opportunities</li>
          </ul>
        </div>

 
        <div className="contact-card">
          <h2>Send a Message</h2>
{/* directly uploading data in database with Action */}
          <Form method="POST" action="http://localhost:5000/contact" className="contact-form">
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

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </Form>
        </div>

      </section>
    </div>
  );
};

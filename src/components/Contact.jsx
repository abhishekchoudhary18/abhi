import { useState } from "react";

export default function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to control the success/error notification
  const [notification, setNotification] = useState("");
  const [error, setError] = useState({});

  // Email validation function using a regular expression
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // Clear error for the specific field when user starts typing
    setError((prevState) => ({
      ...prevState,
      [e.target.name]: "",
    }));
  };

  const handleContact = (e) => {
    e.preventDefault();

    // Check for empty fields and invalid email
    const newError = {};
    if (!formData.name) newError.name = "Name is required";
    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newError.email = "Please enter a valid email address";
    }
    if (!formData.message) newError.message = "Message is required";

    // If there are errors, show them and prevent form submission
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    // If all fields are filled and email is valid, show success notification
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setNotification("Message sent, I'll be in contact.");

    // Hide success notification after 3 seconds
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <>
      <h1>Contact.</h1>
      <p>
        Shoot me an email directly at
        <strong>
          <a href="mailto:abhishek.choudhary@gmail.com">
            {" "}
            abhishekchoudhary18898@gmail.com{" "}
          </a>
        </strong>
        or get in touch
      </p>

      <form className="contactForm" onSubmit={handleContact}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.name}
        />
        {error.name && <p style={{ color: "white" }}>{error.name}</p>}

        <input
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={formData.email}
        />
        {error.email && <p style={{ color: "white" }}>{error.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          onChange={handleChange}
          value={formData.message}
        />
        {error.message && <p style={{ color: "white" }}>{error.message}</p>}

        <button type="submit">Send</button>
      </form>

      {/* Show success notification when all fields are filled */}
      {notification && (
        <p style={{ color: "white", marginTop: "10px" }}>{notification}</p>
      )}
    </>
  );
}

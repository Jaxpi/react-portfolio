import { validateEmail } from "../../utils/helpers";
import React, { useState } from "react";

function Contact() {
  const [email] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {

    if (event.target.value === "") {
      setErrorMessage(`${event.target.name} is required`);
    }
    else (
      setErrorMessage("")
    )
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      
      return;
    }
  };

  return (
    <section className="contact-submission" id="contact">
      <h2>Contact Me</h2>
      <section id="form">
        <form onSubmit={handleFormSubmit}>
        { errorMessage !== "" ? <p>{errorMessage}</p> : ""}
          <label for="Name">Name:</label>
          <input
            id="name"
            type="text"
            name="Name:"
            size="50"
            onBlur={handleInputChange}
            placeholder="Enter your name"
          ></input>

          <br></br>
          <label for="Email">Email:</label>
          <input
            id="email"
            type="email"
            name="Email:"
            size="50"
            onBlur={handleInputChange}
            placeholder="Enter your email"
          />
          <br></br>
          <label for="Message">Message:</label>
          <input
            id="message"
            type="text"
            name="Message:"
            size="50"
            onBlur={handleInputChange}
            placeholder="Enter your message"
          ></input>
          <br></br>
          <button type="submit">SEND</button>
        </form>{" "}
      </section>
    </section>
  );
}

export default Contact;

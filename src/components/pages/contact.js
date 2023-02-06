// import { validateEmail } from "../../utils/helpers.js"
import React, { useState } from "react";
import { getDefaultNormalizer } from "@testing-library/react";

function Contact() {
  const [email] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      setErrorMessage(`${event.target.name} is required`);
    } else setErrorMessage("");
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   if (!validateEmail(email)) {
  //     setErrorMessage("Email is invalid");
  //     return;
  //   }
  // };

  return (
    <section className="contact-submission" id="contact">
      <h2>Contact Me</h2>
      <p>Use the form to pre-populate a message to send from your mail server to x.jaxpi@gmail.com</p>
      <section id="form">
        <form action="mailto:x.jaxpi@gmail.com" method="POST" encType="text/plain">
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
          <textarea
            id="message"
            type="text"
            name="Message:"
            size="50"
            onBlur={handleInputChange}
            placeholder="Enter your message"
          ></textarea>
          <br></br>
          {errorMessage !== "" ? <p>{errorMessage}</p> : ""}
          <br></br>
          <button type="submit">SEND</button>
        </form>{" "}
      </section>
    </section>
  );
}

export default Contact;

{/* <button type="submit" onClick={handleFormSubmit}>SEND</button> */}
import { validateEmail } from "../../utils/helpers";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email] = useState("");
  //const [name] = useState("");
  //const [message] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    // const { target } = e;
    // const inputType = target.name;
    // const inputValue = target.value;

    if (event.target.value === "") {
      setErrorMessage("this is required");
      return (
        <div>
          {/* <ErrorMessage errors={errors} name="singleErrorInput"></ErrorMessage>
          <ErrorMessage
            errors={errors}
            name="singleErrorInput"
            render={({ message }) => <p>{message}</p>}
          ></ErrorMessage> */}
        
        </div>
      );
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
            onBlur={handleFormSubmit}
            placeholder="Enter your email"
          />
          { errorMessage !== "" ? <p>{errorMessage}</p> : ""}
          <br></br>
          <label for="Message">Message:</label>
          <input
            id="message"
            type="text"
            name="Message:"
            size="50"
            onBlur={handleInputChange}
            placeholder="Enter your message"
            {...register("singleErrorInput", { required: "This is required." })}
          ></input>
          <br></br>
          <button type="submit">SEND</button>
        </form>{" "}
      </section>
    </section>
  );
}

export default Contact;

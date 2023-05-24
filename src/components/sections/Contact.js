import React, { useState } from "react";

// import a helper function that will check if the email is valid
import { validateEmail } from "../assets/utils/helper";

function Contact() {
  // Creates name,email,message,and errorMessage variables which are states. This means that when the state is updated, the value of the variable will be updated
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Updates the appropriate state variable to whatever is currently placed on the form fields
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    // Open the email client with the pre-filled fields
    window.location.href = `mailto:abdelrahman.ahmed605@hotmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      emailBody
    )}`;

    // If successful, we want to clear out the input after registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="container">
      <h2>Contact</h2>
      <form className="form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            className="form-control"
            id="message"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleFormSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text text-danger mt-3">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

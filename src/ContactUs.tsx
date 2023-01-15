import React, { SyntheticEvent, useState } from "react";
// import axios from "axios";

const ContactUs: React.FC = () => {
  const [submitError, setSubmitError] = useState<string>("");

  const getIsFormValid = (): Boolean => {
    const formInputs = document.getElementsByClassName("cfi") as HTMLCollectionOf<HTMLInputElement>;
    console.log(formInputs);
    
    for (const input of formInputs) {
      if (!input.value.length) {
        setSubmitError("Please fill out the entire form!")
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  const handleSubmit = async (e: SyntheticEvent): Promise<any> => {
    e.preventDefault();
    if (getIsFormValid()) {
      const { value: user } = document.getElementById("cf-name")! as HTMLInputElement;
      const { value: email } = document.getElementById("cf-email")! as HTMLInputElement;
      const { value: message } = document.getElementById("cf-msg")! as HTMLInputElement;
      const response = await fetch(
        "https://gmail.googleapis.com/upload/gmail/v1/users/dev.cjfritz@gmail.com/messages/send",
        {method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          user,
          email,
          message
        })
      });
      const result = response.json();
      return result;
    }
  }

  const resetError = (): void => {
    setSubmitError("");
  }

  document.addEventListener("mousedown", resetError);

  return (
    <div>
      <form className="contact-form" onSubmit={(e: SyntheticEvent) => handleSubmit(e)}>
        <input id="cf-name" className="cfi" placeholder="Your Name"></input>
        <input id="cf-email" className="cfi" placeholder="Your Email"></input>
        <input id="cf-msg" className="cfi" placeholder="Ask Us Anything!"></input>
        <button className="cf-submit">Send</button>
      </form>
      <div>{submitError}</div>
    </div>
  )
}

export default ContactUs;
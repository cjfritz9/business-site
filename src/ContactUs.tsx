import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";

const ContactUs: React.FC = () => {
  const [submitError, setSubmitError] = useState<string>('');

  const getIsFormValid = (): Boolean => {
    const formInputs = document.getElementsByClassName(
      'cfi'
    ) as HTMLCollectionOf<HTMLInputElement>;

    for (const input of formInputs) {
      if (!input.value.length) {
        setSubmitError('Please fill out the entire form!');
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async (e: SyntheticEvent): Promise<any> => {
    e.preventDefault();
    // if (getIsFormValid()) {
    //   const { value: name } = document.getElementById(
    //     'cf-name'
    //   )! as HTMLInputElement;
    //   const { value: email } = document.getElementById(
    //     'cf-email'
    //   )! as HTMLInputElement;
    //   const { value: message } = document.getElementById(
    //     'cf-msg'
    //   )! as HTMLInputElement;
    // }
  };

  const resetError = (): void => {
    setSubmitError('');
  };

  document.addEventListener('mousedown', resetError);

  return (
    <div>
      <form
        className='contact-form'
        onSubmit={(e: SyntheticEvent) => handleSubmit(e)}
      >
        <input id='cf-name' className='cfi' placeholder='Your Name'></input>
        <input id='cf-email' className='cfi' placeholder='Your Email'></input>
        <input
          id='cf-msg'
          className='cfi'
          placeholder='Ask Us Anything!'
        ></input>
        <button className='cf-submit'>Send</button>
      </form>
      <form
        action='mailto:dev.cjfritz@gmail.com'
        method='get'
        encType='text/plain'
      >
        <div>
        <label htmlFor="name">Name:
          <input type="text" name="name" id="name" />
        </label>
      </div>
      <div>
        <label htmlFor="email">Email:
          <input type="text" name="email" id="email" />
        </label>
      </div>
      <div>
        <label>Comments:</label>
        <br />
        <input name="comments"></input>
      </div>
      <div>
        <input type="submit" name="submit" value="Send" />
        <input type="reset" name="reset" value="Clear Form" />
      </div>
      </form>
      <div>{submitError}</div>
    </div>
  );
};

export default ContactUs;

import * as React from 'react';
import '../css/contact-us.css';
import * as CF from '../models/ContactForm';

const ContactUs: React.FC = () => {
  const checkFields = (): void => {
    const formInputs = document.getElementsByClassName(
      'cfi'
    ) as HTMLCollectionOf<HTMLInputElement>;
    const submitButton = document.getElementById(
      'submit-btn'
    )! as HTMLButtonElement;
    const buttonContainer = document.getElementById(
      'cf-btn-container'
    )! as HTMLButtonElement;

    for (const input of formInputs) {
      if (!input.value.length) {
        submitButton.classList.add('cf-restricted');
        buttonContainer.classList.add('pointer-events-none');
      } else {
        submitButton.classList.remove('cf-restricted');
        buttonContainer.classList.remove('pointer-events-none');
      }
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const { value: name } = document.getElementById(
      'name'
    )! as HTMLInputElement;
    const { value: email } = document.getElementById(
      'email'
    )! as HTMLInputElement;
    const { value: message } = document.getElementById(
      'message'
    )! as HTMLInputElement;

    const userInputData = new CF.InputData(name, email, message);

    window.location.href = `mailto:dev.cjfritz@gmail.com?subject=Inquiry%20From%20${userInputData.name}&body=${userInputData.message}%0AEmail:%20${userInputData.email}`;
  };

  return (
    <div id='contact-us-page'>
      <h1 id='cf-header'>Send Us A Message!</h1>
      <form
        id='contact-form'
        method='get'
        encType='text/plain'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='cf-top-container'>
          <div className='cf-name-container'>
            <div>Name:</div>
            <input
              onChange={checkFields.bind(this)}
              type='text'
              name='name'
              id='name'
              className='cf-name-email cfi'
              required
            />
          </div>
          <div className='cf-email-container'>
            <div>Email:</div>
            <input
              onChange={checkFields.bind(this)}
              type='email'
              name='email'
              id='email'
              className='cf-name-email cfi'
              required
            />
          </div>
        </div>
        <div>
          <div>Message:</div>
          <input
            onChange={checkFields.bind(this)}
            id='message'
            className='cf-message cfi'
            name='comments'
            required
          />
        </div>
        <div id='cf-btn-container'>
          <button id='submit-btn' className='cf-restricted' type='submit'>
            Send
          </button>
        </div>
      </form>
      <div>
        Not working? E-mail us directly at dev.cjfritz@gmail.com
      </div>
      <div>Alternatively to fix the issue, try <a href='/mail-help'>this</a></div>
    </div>
  );
};

export default ContactUs;

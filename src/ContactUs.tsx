import React, { SyntheticEvent, useState } from 'react';
import './css/contact-us.css';

const ContactUs: React.FC = () => {
  const [submitError, setSubmitError] = useState<string>('');

  // const getIsFormValid = (): Boolean => {
  //   const formInputs = document.getElementsByClassName(
  //     'cfi'
  //   ) as HTMLCollectionOf<HTMLInputElement>;

  //   for (const input of formInputs) {
  //     if (!input.value.length) {
  //       setSubmitError('Please fill out the entire form!');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // const handleSubmit = async (e: SyntheticEvent): Promise<any> => {
  //   e.preventDefault();
  //   // if (getIsFormValid()) {
  //   //   const { value: name } = document.getElementById(
  //   //     'cf-name'
  //   //   )! as HTMLInputElement;
  //   //   const { value: email } = document.getElementById(
  //   //     'cf-email'
  //   //   )! as HTMLInputElement;
  //   //   const { value: message } = document.getElementById(
  //   //     'cf-msg'
  //   //   )! as HTMLInputElement;
  //   // }
  // };

  const resetError = (): void => {
    setSubmitError('');
  };

  document.addEventListener('mousedown', resetError);

  return (
    <div id='contact-us-page'>
      <h1 id='cf-header'>Send Us A Message!</h1>
      <form
        id='contact-form'
        action='mailto:dev.cjfritz@gmail.com'
        method='get'
        encType='text/plain'
      >
        <div className='cf-top-container'>
          <div className='cf-name'>
            <div>Name:</div>
            <input type='text' name='name' id='name' className='cf-name-email' required />
          </div>
          <div className='cf-email'>
            <div>Email:</div>
            <input type='text' name='email' id='email' className='cf-name-email' required />
          </div>
        </div>
        <div>
          <div>Message:</div>
          <input className='cf-message' name='comments' required />
        </div>
        <div>
          <input type='submit' name='submit' value='Send' />
        </div>
      </form>
      <div>{submitError}</div>
    </div>
  );
};

export default ContactUs;

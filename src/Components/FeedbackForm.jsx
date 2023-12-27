import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Components/styles/feedback.css"

const FeedbackForm = () => {
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("wHg0LFwiG6LjAeftA");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      emailRef.current &&
      firstNameRef.current &&
      lastNameRef.current &&
      messageRef.current
    ) {
      const serviceId = 'service_wclvdhb';
      const templateId = 'contactform01';
      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          message: messageRef.current.value,
          recipient: emailRef.current.value,
        });
        alert('Thanks for contacting us ');
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container containerr">
      <div className="text">
        Contact us Form
      </div>
      <form action="#" onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-row">
          <div className="input-data">
            <input ref={firstNameRef} type="text" required />
            <div className="underline"></div>
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-data">
            <input ref={lastNameRef} type="text" required />
            <div className="underline"></div>
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input ref={emailRef} type="email" required />
            <div className="underline"></div>
            <label htmlFor="email">Email Address</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea ref={messageRef} rows="8" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="message">Write your message</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input disabled={loading} type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;

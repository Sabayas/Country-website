import React from "react";

const Contact = () => {

  const handleFormSubmit = (formData) => {
    const formInputs = Object.fromEntries(formData.entries());
    console.log(formInputs);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title"> Contact us</h2>

      <div className="container contact-wrapper">
        <form action={handleFormSubmit} className="contact-form">
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
          />

          <input
            type="email"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email "
          />

          <textarea
            type="text "
            rows="10"
            required
            autoComplete="false"
            placeholder="Enter your message"
            name="message"
          />

          <button type="submit"
           className="btn btn-darken bg-yellow-box bt-inline">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

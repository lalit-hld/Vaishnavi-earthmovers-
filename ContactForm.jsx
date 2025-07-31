import React from 'react';

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="email" placeholder="Email Address" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;

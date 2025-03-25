import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">Contact Us</h1>
      <div className="max-w-3xl text-center mb-8">
        <p className="text-lg text-gray-700 mb-4">
          We’d love to hear from you! Whether you have a question about our books, services, or anything else, our team is ready to help.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          You can reach us via email, phone, or by visiting our store. Please find our contact details below:
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between max-w-4xl w-full mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact Information</h2>
          <ul className="text-lg text-gray-700">
            <li>📍 <strong>Address:</strong> 123 Book Street, Olcut St, Colombo 07</li>
            <li>📞 <strong>Phone:</strong> 0702334419</li>
            <li>📧 <strong>Email:</strong> support@whisperingpages.com</li>
            <li>⏰ <strong>Hours:</strong> Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 5pm</li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Send Us a Message</h2>
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
              <input type="text" id="name" className="border rounded-lg p-2 w-full" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
              <input type="email" id="email" className="border rounded-lg p-2 w-full" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
              <textarea id="message" className="border rounded-lg p-2 w-full" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Find Us Here</h2>
        <iframe
          title="Bookshop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093186!2d144.95373531531585!3d-37.817209979751686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f75ab5d%3A0x5045675218cd1a0!2sBookshop!5e0!3m2!1sen!2sus!4v1630739895755!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;

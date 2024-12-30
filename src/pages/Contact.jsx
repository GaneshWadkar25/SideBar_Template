import React from 'react';

function Contact() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md rounded-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you! Reach out to us with your queries, feedback, or project requirements.
        </p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form className="bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-900 transition-all"
            >
              Send Message
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            <strong>Email:</strong> contact@xyzsolutions.com <br />
            <strong>Phone:</strong> +91 6920238538 <br />
            <strong>Address:</strong> 123 Software Street, Tech City, Mumbai 
          </p>
        </section>
      </main>
    </div>
  );
}

export default Contact;

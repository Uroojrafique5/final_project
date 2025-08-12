import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions or need support? We’d love to hear from you. Our team is here to help you on your wellness journey.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            You can reach us through any of the following methods. We’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="text-green-600">📍 Address:</strong> 123 Wellness Street, Healthy City, HC 45678
            </li>
            <li>
              <strong className="text-green-600">📞 Phone:</strong> +92 300 1234567
            </li>
            <li>
              <strong className="text-green-600">✉ Email:</strong> support@wellmind.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13281.21123710838!2d73.04788469999999!3d33.68442065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDInNTIuMCJF!5e0!3m2!1sen!2s!4v1691242155555!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

function Contact() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-[#00A758] mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-6">
        We’d love to hear from you! Whether you have a question, need assistance, or simply want to learn more about our school, feel free to reach out to us. Our team is always ready to assist you with any information you need.
      </p>

      <h2 className="text-2xl font-semibold text-[#00A758] mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-6">
        You can contact us through the following methods:
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=50&id=9730&format=png"
            alt="Phone Icon"
          />
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> 01945918448, 0172554415
          </p>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=50&id=Ww1lcGqgduif&format=gif"
            alt="Email Icon"
          />
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> helppnkm@gmail.com
          </p>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=50&id=o2FUebZ9P1nM&format=gif"
            alt="Location Icon"
          />
          <p className="text-lg text-gray-700">
            <strong>Location:</strong> [Insert Address Here]
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#00A758] mb-4 mt-6">Contact Form</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have a specific question or inquiry, please use the form below to send us a message. We’ll get back to you as soon as possible.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-lg text-gray-700 mb-2" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A758]"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-lg text-gray-700 mb-2" htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A758]"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-lg text-gray-700 mb-2" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A758]"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#00A758] text-white px-6 py-2 rounded-md hover:bg-[#00a758] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

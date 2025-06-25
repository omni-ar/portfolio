"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Functionality not implemented)");
  };

  return (
    <section id="contact" className="py-20 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                required
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className="space-y-6 text-lg">
            <p>
              <strong>Email:</strong> arjittripathi3103@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Vellore, India
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/arjit-tripathi-213b4a292/"
                target="_blank"
                className="text-indigo-600 underline"
              >
                arjit-tripathi
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/omni-ar"
                target="_blank"
                className="text-indigo-600 underline"
              >
                Arjit
              </a>
            </p>
            <p>
              Feel free to reach out for collaborations, internships, or any queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

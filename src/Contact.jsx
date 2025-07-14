import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending message...");
        emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
       .then(
        () => {
          toast.success("✅ Message sent successfully!", { id: loadingToast });
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message!", { id: loadingToast });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
   <div className="min-h-screen flex items-center justify-center px-4 py-12   from-gray-900 via-gray-800 to-gray-900">
  <form
    ref={form}
    onSubmit={sendEmail}
    className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-[0_0_40px_5px_rgba(0,255,255,0.05)] border border-cyan-500/30 text-white space-y-6"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Let's Make It Happen!
    </h2>

    {/* Name Field */}
    <div>
      <label className="block text-cyan-200 mb-1">Name</label>
      <input
        type="text"
        name="user_name"
        required
        className="w-full px-4 py-3 bg-transparent border border-cyan-400 rounded-md text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        placeholder="Your name"
      />
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-cyan-200 mb-1">Email</label>
      <input
        type="email"
        name="user_email"
        required
        className="w-full px-4 py-3 bg-transparent border border-cyan-400 rounded-md text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        placeholder="Your email"
      />
    </div>

    {/* Message Field */}
    <div>
      <label className="block text-cyan-200 mb-1">Message</label>
      <textarea
        name="message"
        rows="5"
        required
        className="w-full px-4 py-3 bg-transparent border border-cyan-400 rounded-md text-white placeholder-cyan-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        placeholder="Write your message..."
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 mt-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-md text-white transition-all duration-300 shadow-md"
    >
      Send Message
    </button>
  </form>
</div>

  )
}

export default Contact
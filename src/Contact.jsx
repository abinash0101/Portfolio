
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';

function Contact() {

  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
     const loadingToast = toast.loading('Sending message...');
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); 
          toast.success('✅ Message sent successfully!', { id: loadingToast });
        },
        (error) => {
          toast.error('❌ Failed to send message!', { id: loadingToast });
          console.log('FAILED...', error.text);
        },
      );
  };
return (
   
 

  <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 bg-transparent backdrop-blur-sm">
    
    {/* OUTSIDE HEADING */}
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
  Let's Make It Happen
</h2>


    {/* CONTACT FORM BOX */}
    <div className="w-full max-w-2xl p-10 border border-cyan-500/30 rounded-3xl bg-white/5 shadow-[0_0_80px_5px_rgba(0,255,255,0.05)] backdrop-blur-md mt-7">
      <form className="space-y-10" ref={form} onSubmit={sendEmail}>
        {/* Name Field */}
        <div className="relative group">
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full bg-transparent text-blue-200 py-3 px-0 placeholder-transparent focus:outline-none focus:ring-0 border-b border-cyan-500 focus:border-cyan-400 transition-all duration-300"
          />
          <label className="absolute left-0 top-3 text-cyan-300 text-sm pointer-events-none transition-all duration-300 group-focus-within:top-[-14px] group-focus-within:text-xs group-focus-within:text-cyan-400">
            Your Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative group">
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full bg-transparent text-blue-200 py-3 px-0 placeholder-transparent focus:outline-none focus:ring-0 border-b border-cyan-500 focus:border-cyan-400 transition-all duration-300"
          />
          <label className="absolute left-0 top-3 text-cyan-300 text-sm pointer-events-none transition-all duration-300 group-focus-within:top-[-14px] group-focus-within:text-xs group-focus-within:text-cyan-400">
            Your Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative group">
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full bg-transparent text-blue-200 py-3 px-0 placeholder-transparent focus:outline-none focus:ring-0 border-b border-cyan-500 focus:border-cyan-400 transition-all duration-300 resize-none"
          />
          <label className="absolute left-0 top-3 text-cyan-300 text-sm pointer-events-none transition-all duration-300 group-focus-within:top-[-14px] group-focus-within:text-xs group-focus-within:text-cyan-400">
            Your Message
          </label>
        </div>

        {/* Send Button */}
        <div className="relative group w-fit">
          <button
            type="submit"
            className="px-6 py-2 text-cyan-300 hover:text-white bg-cyan-500/10 tracking-wide font-medium transition-all duration-300 hover:bg-cyan-400/20 hover:shadow-[0_0_10px_cyan] rounded-md"
          >
            Send Message
          </button>
          <div className="absolute inset-0 group-hover:animate-ping bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 blur-sm rounded-md"></div>
        </div>
      </form>
    </div>
  </div>
   
);









}

export default Contact
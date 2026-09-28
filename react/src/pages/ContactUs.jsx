import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from './Footer'

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
    <div className="bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 font-sans transition-colors duration-200 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Get in <span className="text-[#d65a83] dark:text-[#e8799f]">Touch</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Have a question about your order, shipping, or our products? We're here to help!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Contact Info Card */}
          <div className="bg-[#faf5f5] dark:bg-zinc-900 border border-[#f0e1e1] dark:border-zinc-800 p-8 rounded-2xl shadow-sm space-y-8 lg:col-span-1">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Contact Information</h3>
            
            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] border border-[#f0e1e1] dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Our Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">Phnom Penh, Cambodia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] border border-[#f0e1e1] dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Phone Number</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">+855 12 345 678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] border border-[#f0e1e1] dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Email Address</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">support@kuykun.com</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f0e1e1] dark:border-zinc-800">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Working Hours: Monday - Sunday (8:00 AM - 9:00 PM)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 border border-[#f0e1e1] dark:border-zinc-800 p-8 rounded-2xl shadow-sm lg:col-span-2">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#faf5f5] dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] rounded-full flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Message Sent!</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Thank you for reaching out. We will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#d65a83] hover:bg-[#c24972] dark:bg-[#e8799f] dark:hover:bg-[#d65a83] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your name..."
                      className="w-full bg-[#faf5f5]/50 dark:bg-zinc-800 text-sm text-zinc-800 dark:text-zinc-100 px-4 py-3 rounded-xl border border-[#f0e1e1] dark:border-zinc-700 focus:outline-none focus:border-[#d65a83] transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Your Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="Enter your email..."
                      className="w-full bg-[#faf5f5]/50 dark:bg-zinc-800 text-sm text-zinc-800 dark:text-zinc-100 px-4 py-3 rounded-xl border border-[#f0e1e1] dark:border-zinc-700 focus:outline-none focus:border-[#d65a83] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Subject</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="How can we help you?"
                    className="w-full bg-[#faf5f5]/50 dark:bg-zinc-800 text-sm text-zinc-800 dark:text-zinc-100 px-4 py-3 rounded-xl border border-[#f0e1e1] dark:border-zinc-700 focus:outline-none focus:border-[#d65a83] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                  <textarea 
                    rows="5" 
                    required 
                    placeholder="Write your message here..."
                    className="w-full bg-[#faf5f5]/50 dark:bg-zinc-800 text-sm text-zinc-800 dark:text-zinc-100 px-4 py-3 rounded-xl border border-[#f0e1e1] dark:border-zinc-700 focus:outline-none focus:border-[#d65a83] transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-[#d65a83] hover:bg-[#c24972] dark:bg-[#e8799f] dark:hover:bg-[#d65a83] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors cursor-pointer shadow-sm flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    
    </div> 
  <Footer/>
  </div>
  );
}
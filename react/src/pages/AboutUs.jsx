import React from 'react';
import { ShoppingBag, Truck, ShieldCheck, HeartHandshake } from 'lucide-react';
import AboutImage from '../assets/website/about.JPG'
import Footer from './Footer';

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 font-sans transition-colors duration-200">
      
      <section className="bg-[#faf5f5] dark:bg-zinc-900 border-b border-[#f0e1e1] dark:border-zinc-800 pt-20 pb-28 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Welcome to <span className="text-[#d65a83] dark:text-[#e8799f]">kuy-kun</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Your trusted destination for fast & reliable shopping, offering trendy lifestyle pieces curated just for you.
          </p>
        </div>
      </section>

    
      <div className="max-w-4xl mx-auto px-6 -mt-16 sm:-mt-20 relative z-10 mb-12">
        <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-zinc-950">
          <img 
            src={AboutImage}
            alt="About kuy-kun store" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

   
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Our Story</h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Founded with a passion for quality and convenience, <strong className="text-[#d65a83] dark:text-[#e8799f]">kuy-kun</strong> began as a simple vision: to make stylish, high-quality fashion and lifestyle items accessible to everyone seamlessly. 
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We prioritize our customers above everything else, ensuring that every piece in our collection meets high standards of trendiness, comfort, and reliability.
          </p>
        </div>
        
        <div className="bg-[#faf5f5] dark:bg-zinc-900 border border-[#f0e1e1] dark:border-zinc-800 p-8 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Our Mission</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            To bridge the gap between style and swift delivery. We strive to provide a frictionless online shopping experience backed by exceptional customer support.
          </p>
        </div>
      </section>


      <section className="bg-[#faf5f5]/60 dark:bg-zinc-900/40 py-16 px-6 border-y border-[#f0e1e1] dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Why Shop With Us?</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">What makes kuy-kun your favorite online boutique.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-[#f0e1e1] dark:border-zinc-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#faf5f5] dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Fast & Reliable Shipping</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We get your orders delivered to your doorstep swiftly and securely.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-[#f0e1e1] dark:border-zinc-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#faf5f5] dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Curated Collection</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Hand-picked selections of clothing and lifestyle accessories tailored for you.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-[#f0e1e1] dark:border-zinc-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#faf5f5] dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Quality Guarantee</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Every item is carefully checked to ensure durability and comfort.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-[#f0e1e1] dark:border-zinc-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#faf5f5] dark:bg-zinc-800 text-[#d65a83] dark:text-[#e8799f] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Customer Support</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Friendly assistance whenever you need help with your shopping journey.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#faf5f5] dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-sans border-t border-[#f0e1e1] dark:border-zinc-800 pt-16 pb-8 px-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-baseline space-x-2">
            <h3 className="text-xl font-bold text-[#d65a83] dark:text-[#e8799f]">គយ-គន់</h3>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">kuy-kun</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Fast & Reliable Shopping for all your lifestyle needs.
          </p>
          <div className="flex space-x-3 pt-2">
            <a 
              href="#" 
              aria-label="Website" 
              className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-[#f0e1e1] dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#d65a83] dark:hover:text-[#e8799f] hover:border-[#d65a83] transition-colors shadow-sm"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              aria-label="Social Chat" 
              className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-[#f0e1e1] dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#d65a83] dark:hover:text-[#e8799f] hover:border-[#d65a83] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a 
              href="https://t.me/pheaktrathorn" 
              aria-label="Telegram" 
              className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-[#f0e1e1] dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#d65a83] dark:hover:text-[#e8799f] hover:border-[#d65a83] transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

    
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">Home</Link></li>
            <li><Link to="/shop" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">Shop</Link></li>
            <li><Link to="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">Contact</Link></li>
            <li><Link to="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">About us</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Customer Care</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/bestseller" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">Best Seller</Link></li>
            <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#d65a83] dark:hover:text-[#e8799f] transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Stay Updated</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Subscribe to get special offers and updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              required 
              className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-sm px-4 py-2.5 rounded-l-full border border-r-0 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-[#d65a83] w-full shadow-sm"
            />
            <button 
              type="submit" 
              className="bg-[#d65a83] hover:bg-[#c24972] dark:bg-[#e8799f] dark:hover:bg-[#d65a83] text-white text-sm font-medium px-5 py-2.5 rounded-r-full transition-colors cursor-pointer whitespace-nowrap shadow-sm"
            >
              Join
            </button>
          </form>
        </div>

      </div>

  
      <div className="flex justify-between max-w-7xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800 pt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} kuy-kun. All rights reserved.</p>
        <p>Develop by Thorn Chansopheaktra</p>
      </div>
    </footer>
  );
}
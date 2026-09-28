import React, { useState } from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import dress3 from '../assets/cloth/dress3.jpg'
import jean from '../assets/cloth/jean.png'
import jean1 from '../assets/cloth/jean1.png'
import jean2 from '../assets/cloth/jean2.jpg'
import pant1 from '../assets/cloth/pant1.jpg'
import pant from '../assets/cloth/pant.jpg'
import set1 from '../assets/cloth/set1.jpg'
import Tshirt from '../assets/cloth/Tshirt.jpg'
import tshirt from '../assets/cloth/tshirt1.jpg'
import tshirt1 from '../assets/cloth/tshirt2.jpg'
import Footer from './Footer';

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: "Dress",
      category: "Dresses",
      price: "10$",
      image: dress3
    },
    {
      id: 2,
      name: "T-Shirt",
      category: "Croptop",
      price: "9$",
      image: Tshirt
    },
    {
      id: 3,
      name: "Jean",
      category: "Pant",
      price: "3$",
      image: jean
    },
    {
      id: 4,
      name: "Pant",
      category: "Pant",
      price: "9$",
      image: pant
    },
    {
      id: 5,
      name: "Jean",
      category: "Pant",
      price: "15$",
      image: jean1
    },
    {
      id: 6,
      name: "Skirt & green Shirt",
      category: "set",
      price: "12$",
      image: set1
    },
    {
      id: 7,
      name: "T-shirt",
      category: "T-Shirts",
      price: "10$",
      image: tshirt
    },
    {
      id: 8,
      name: "T-Shirt",
      category: "T-Shirts",
      price: "12$",
      image: tshirt1
    },
    
  ];

  const categories = ['All', 'T-Shirts', 'Dresses', 'Croptop', 'Pant'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
    <div className="bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 font-sans transition-colors duration-200 py-12 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#f0e1e1] dark:border-zinc-800 pb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Shop Our <span className="text-[#d65a83] dark:text-[#e8799f]">Collection</span>
            </h1>
          </div>   
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-zinc-400 shrink-0 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                selectedCategory === category 
                  ? 'bg-[#d65a83] text-white dark:bg-[#e8799f]' 
                  : 'bg-[#faf5f5] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-[#f0e1e1] dark:hover:bg-zinc-800 border border-[#f0e1e1] dark:border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 space-y-2">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">No products found</h3>
            <p className="text-sm text-zinc-500">Try searching for something else or pick a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-[#f0e1e1] dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
     
                <div className="w-full h-64 bg-[#faf5f5] dark:bg-zinc-950 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                <div className="p-5 space-y-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                      {product.name}
                    </h3>
                  </div>

       
                  <div className="flex items-center justify-between pt-3 border-t border-[#f0e1e1]/60 dark:border-zinc-800">
                    <span className="text-[#d65a83] dark:text-[#e8799f] font-bold text-base">
                      {product.price}
                    </span>
                    <button 
                      className="bg-white dark:bg-zinc-800 border border-[#f0e1e1] dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-[#d65a83] hover:text-white dark:hover:bg-[#e8799f] dark:hover:text-white px-4 py-1.5 rounded-lg text-xs font-medium transition-colors shadow-sm cursor-pointer flex items-center space-x-1.5"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
    <Footer/>
    </div>
  );
}
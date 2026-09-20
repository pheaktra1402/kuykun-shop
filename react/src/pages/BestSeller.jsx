import React, { useState } from "react";
import dress1 from "../assets/cloth/dress1.jpg";
import dress2 from "../assets/cloth/dress2.jpg";
import Sweater  from "../assets/cloth/Sweater.jpg";
import Sweater1 from "../assets/cloth/Sweater1.jpg";


const BestSeller = () => {
  const [products, setProducts] = useState([
    { id: 1, img: dress1, name: "Dress", category: "dress", size: "S,M,L", price: "20$" },
    { id: 2, img: Sweater1, name: "sweeter", category: "sweeter", size: "S,M,L", price: "10$" },
    { id: 3, img: dress2, name: "Dress", category: "dress", size: "S,M,L", price: "16$" },
    { id: 4, img: Sweater, name: "sweeter", category: "sweeter", size: "S,M,L", price: "13$" },
  ]);

  return (
    <div className="py-10 container mx-auto px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Our Best Seller</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
          >
           
            <div className="h-60 rounded mb-3 overflow-hidden flex items-center justify-center bg-gray-100">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-60 h-60 object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-pink-500 font-bold mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={`/products/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg
                className="w-5 h-5 text-warm-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </motion.button>
          </div>
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-forest-green text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="font-quicksand font-semibold text-lg text-forest-green mb-2 hover:text-warm-orange transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-warm-orange">¥{price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 ml-1">（税込）</span>
          </div>
        </div>
        <Button variant="primary" size="small" className="w-full">
          カートに追加
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [sortBy, setSortBy] = useState<string>('popularity');

  const products = [
    {
      id: 1,
      name: 'アウトドア ドームテント 4人用',
      price: 32800,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400',
      category: 'tent',
    },
    {
      id: 2,
      name: 'プレミアム ダウン寝袋',
      price: 18900,
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=400',
      category: 'sleeping',
    },
    {
      id: 3,
      name: 'ポータブル ガスバーナー',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1598764557991-b9f211b73b81?w=400',
      category: 'cooking',
    },
    {
      id: 4,
      name: 'LED ランタン 充電式',
      price: 4800,
      image: 'https://images.unsplash.com/photo-1508497162170-609ae5c35a32?w=400',
      category: 'lighting',
    },
    {
      id: 5,
      name: 'ワンタッチテント 2人用',
      price: 15800,
      image: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=400',
      category: 'tent',
    },
    {
      id: 6,
      name: '3シーズン寝袋',
      price: 12800,
      image: 'https://images.unsplash.com/photo-1520095972714-909e91b038e5?w=400',
      category: 'sleeping',
    },
    {
      id: 7,
      name: 'キャンプクッカーセット',
      price: 6800,
      image: 'https://images.unsplash.com/photo-1550830820-4040ed85d926?w=400',
      category: 'cooking',
    },
    {
      id: 8,
      name: 'ソーラーランタン',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=400',
      category: 'lighting',
    },
  ];

  const categories = [
    { value: 'all', label: 'すべて' },
    { value: 'tent', label: 'テント' },
    { value: 'sleeping', label: '寝袋' },
    { value: 'cooking', label: '調理器具' },
    { value: 'lighting', label: 'ランタン' },
  ];

  const sortOptions = [
    { value: 'popularity', label: '人気順' },
    { value: 'price-low', label: '価格の低い順' },
    { value: 'price-high', label: '価格の高い順' },
    { value: 'newest', label: '新着順' },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const categoryLabels: { [key: string]: string } = {
    tent: 'テント',
    sleeping: '寝袋',
    cooking: '調理器具',
    lighting: 'ランタン',
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-quicksand font-bold text-forest-green mb-4">
            商品一覧
          </h1>
          <p className="text-gray-600">最高のキャンプ体験を実現する、厳選されたギア</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
              <h2 className="font-quicksand font-bold text-xl text-forest-green mb-6">
                フィルター
              </h2>

              <div className="mb-8">
                <h3 className="font-nunito font-semibold text-forest-green mb-4">
                  カテゴリー
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.value}
                      className="flex items-center p-3 rounded-2xl hover:bg-sand-beige/20 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-warm-orange rounded-full focus:ring-warm-orange"
                      />
                      <span className="ml-3 text-gray-700">{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-nunito font-semibold text-forest-green mb-4">
                  価格帯
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      最小: ¥{priceRange[0].toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-sand-beige rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      最大: ¥{priceRange[1].toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-sand-beige rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <Button variant="secondary" className="w-full">
                フィルターをリセット
              </Button>
            </div>
          </motion.aside>

          <div className="lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-between items-center mb-6"
            >
              <p className="text-gray-600">
                {filteredProducts.length}件の商品
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-warm-orange"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard
                    {...product}
                    category={categoryLabels[product.category]}
                  />
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-500 text-lg">
                  該当する商品が見つかりませんでした。
                </p>
                <Button
                  variant="secondary"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 100000]);
                  }}
                >
                  フィルターをリセット
                </Button>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-warm-orange text-white rounded-full hover:bg-warm-orange/80 transition-colors">
                  1
                </button>
                <button className="w-10 h-10 bg-white text-forest-green rounded-full hover:bg-sand-beige/20 transition-colors">
                  2
                </button>
                <button className="w-10 h-10 bg-white text-forest-green rounded-full hover:bg-sand-beige/20 transition-colors">
                  3
                </button>
                <button className="px-4 h-10 bg-white text-forest-green rounded-full hover:bg-sand-beige/20 transition-colors">
                  次へ
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: 'アウトドア ドームテント 4人用',
    price: 32800,
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800',
    ],
    category: 'テント',
    description: '家族やグループでのキャンプに最適な4人用ドームテント。設営が簡単で、耐久性に優れています。',
    features: [
      '防水・防風設計',
      'UVカット加工',
      '通気性の高いメッシュ窓',
      '収納袋付き',
    ],
    specifications: {
      '収容人数': '4人',
      'サイズ': '270cm × 270cm × 150cm',
      '重量': '5.2kg',
      '素材': 'ポリエステル（PU防水コーティング）',
    },
  };

  const reviews = [
    {
      id: 1,
      name: '田中一郎',
      rating: 5,
      date: '2024年1月15日',
      comment: '設営がとても簡単で、家族でのキャンプに重宝しています。雨の日でも中は快適でした。',
    },
    {
      id: 2,
      name: '鈴木花子',
      rating: 4,
      date: '2024年1月10日',
      comment: '広さも十分で、品質も良いです。ただ、もう少し軽いとさらに良いかなと思います。',
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'プレミアム ダウン寝袋',
      price: 18900,
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=400',
      category: '寝袋',
    },
    {
      id: 3,
      name: 'ポータブル ガスバーナー',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1598764557991-b9f211b73b81?w=400',
      category: '調理器具',
    },
    {
      id: 4,
      name: 'LED ランタン 充電式',
      price: 4800,
      image: 'https://images.unsplash.com/photo-1508497162170-609ae5c35a32?w=400',
      category: 'ランタン',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-4 rounded-3xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg
                  className="w-6 h-6 text-warm-orange"
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
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-2xl overflow-hidden ${
                    selectedImage === index
                      ? 'ring-4 ring-warm-orange'
                      : 'ring-2 ring-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-1 bg-forest-green text-white text-sm font-medium rounded-full mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl font-quicksand font-bold text-forest-green mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-warm-orange">
                ¥{product.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">（税込）</span>
            </div>

            <div>
              <h3 className="font-nunito font-semibold text-forest-green mb-3">特徴</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-warm-orange mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">数量：</span>
                <div className="flex items-center bg-sand-beige/20 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-forest-green hover:bg-sand-beige/40 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 font-semibold text-forest-green">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-forest-green hover:bg-sand-beige/40 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button size="large" className="w-full">
                カートに追加
              </Button>
              <Button variant="secondary" size="large" className="w-full">
                今すぐ購入
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-nunito font-semibold transition-colors relative ${
                    activeTab === tab
                      ? 'text-warm-orange'
                      : 'text-gray-500 hover:text-forest-green'
                  }`}
                >
                  {tab === 'description' && '商品説明'}
                  {tab === 'specifications' && '仕様'}
                  {tab === 'reviews' && 'レビュー'}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-warm-orange rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="prose max-w-none"
              >
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  このテントは、初心者から経験豊富なキャンパーまで、幅広い方々にお使いいただけます。
                  簡単な設営手順と高い耐久性により、どんな天候でも快適なキャンプ体験を提供します。
                </p>
              </motion.div>
            )}

            {activeTab === 'specifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-sand-beige/10 rounded-2xl p-6">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="border-b border-sand-beige/30 last:border-0">
                          <td className="py-3 pr-4 font-nunito font-semibold text-forest-green">
                            {key}
                          </td>
                          <td className="py-3 text-gray-600">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-nunito font-semibold text-forest-green">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex text-warm-orange">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? 'fill-current' : 'fill-gray-300'
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-quicksand font-bold text-forest-green mb-6">
            関連商品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
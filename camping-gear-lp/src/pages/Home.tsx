import React from 'react';
import { motion } from 'framer-motion';
import PanoramaViewerCSS from '../components/home/PanoramaViewerCSS';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';

const Home: React.FC = () => {
  const popularProducts = [
    {
      id: 1,
      name: 'アウトドア ドームテント 4人用',
      price: 32800,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400',
      category: 'テント',
    },
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

  const categories = [
    { name: 'テント', icon: '⛺', color: 'bg-warm-orange' },
    { name: '寝袋', icon: '🛏️', color: 'bg-forest-green' },
    { name: '調理器具', icon: '🍳', color: 'bg-sand-beige' },
    { name: 'ランタン', icon: '💡', color: 'bg-warm-orange' },
  ];

  const testimonials = [
    {
      name: '山田太郎',
      comment: '品質の高い商品ばかりで、キャンプがさらに楽しくなりました！',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: '佐藤花子',
      comment: 'スタッフの方の対応が丁寧で、初心者でも安心して買い物できました。',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: '鈴木一郎',
      comment: '配送も早く、商品の状態も完璧でした。また利用します！',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-screen">
        <PanoramaViewerCSS
          imageUrl="https://images.unsplash.com/photo-1496947850313-7743325fa58c?q=80&w=4096"
          className="absolute inset-0 w-full h-full"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-quicksand font-bold text-white text-center mb-4"
          >
            自然と共に、心地よい時間を
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 text-center mb-8"
          >
            最高のキャンプ体験をサポートする、こだわりのギアをお届けします
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="商品を検索..."
                className="w-full px-6 py-4 pr-12 bg-white/90 backdrop-blur-sm rounded-full text-forest-green placeholder-forest-green/60 focus:outline-none focus:ring-4 focus:ring-warm-orange/30"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-warm-orange/80 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 space-x-4"
          >
            <Button size="large">商品を見る</Button>
            <Button variant="secondary" size="large">
              店舗について
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-forest-green mb-4">
              人気商品
            </h2>
            <p className="text-gray-600">お客様に愛される、おすすめのキャンプギア</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="large">すべての商品を見る</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand-beige/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-forest-green mb-4">
              カテゴリー
            </h2>
            <p className="text-gray-600">お探しの商品をカテゴリーから選択</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <div className={`${category.color} rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-white font-quicksand font-semibold text-lg">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-forest-green mb-4">
              お客様の声
            </h2>
            <p className="text-gray-600">CampGearをご利用いただいたお客様からの評価</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-quicksand font-semibold text-forest-green">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-warm-orange">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
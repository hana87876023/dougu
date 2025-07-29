import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

const About: React.FC = () => {
  const staff = [
    {
      name: '山田太郎',
      role: '店長',
      image: 'https://i.pravatar.cc/300?img=1',
      message: 'キャンプの魅力を多くの方に伝えたいと思っています。',
    },
    {
      name: '佐藤花子',
      role: 'ギアスペシャリスト',
      image: 'https://i.pravatar.cc/300?img=5',
      message: '最適なギア選びのお手伝いをさせていただきます。',
    },
    {
      name: '鈴木一郎',
      role: 'アウトドアアドバイザー',
      image: 'https://i.pravatar.cc/300?img=3',
      message: '初心者の方でも安心してキャンプを楽しめるようサポートします。',
    },
  ];

  const timeline = [
    { year: '2010', event: 'CampGear創業' },
    { year: '2015', event: 'オンラインストア開設' },
    { year: '2018', event: '実店舗をオープン' },
    { year: '2023', event: '取扱商品1000点突破' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=400',
    'https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?w=400',
    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400',
    'https://images.unsplash.com/photo-1496545672447-f699b503d270?w=400',
    'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400',
    'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=400',
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] mb-16"
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden mx-4">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600"
            alt="CampGear店舗"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-forest-green font-bold text-4xl">C</span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-quicksand font-bold mb-4"
            >
              CampGearについて
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl"
            >
              自然と共に歩む、キャンプギアの専門店
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-quicksand font-bold text-forest-green mb-6">
              私たちのストーリー
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                CampGearは、アウトドアを愛する仲間たちによって2010年に創業されました。
                私たちは、自然の中で過ごす時間の素晴らしさを多くの人々に伝えたいという
                思いから、厳選されたキャンプギアを提供しています。
              </p>
              <p>
                創業から10年以上、私たちは常にお客様の声に耳を傾け、
                最高品質の商品とサービスを提供することを心がけてきました。
                初心者の方から経験豊富なキャンパーまで、すべての方に
                満足いただけるような品揃えとサポートを目指しています。
              </p>
              <p>
                これからも、自然と共に歩み、お客様の素敵なアウトドアライフを
                サポートし続けることが私たちの使命です。
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800"
              alt="創業者"
              className="rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-warm-orange rounded-full flex items-center justify-center">
              <span className="text-white font-quicksand font-bold text-xl text-center">
                Since<br />2010
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-sand-beige/10 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-quicksand font-bold text-forest-green text-center mb-12"
          >
            私たちの歩み
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sand-beige"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-end pr-8 md:pr-1/2' : 'justify-start pl-8 md:pl-1/2'
                }`}
              >
                <div
                  className={`bg-white rounded-2xl p-6 shadow-lg max-w-sm ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}
                >
                  <span className="text-warm-orange font-quicksand font-bold text-2xl">
                    {item.year}
                  </span>
                  <p className="text-forest-green font-nunito mt-2">{item.event}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-warm-orange rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-quicksand font-bold text-forest-green text-center mb-12"
        >
          スタッフ紹介
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 bg-warm-orange text-white px-4 py-1 rounded-full text-sm">
                  {member.role}
                </div>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-forest-green mb-2">
                {member.name}
              </h3>
              <div className="bg-white rounded-3xl p-4 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                <p className="text-gray-600 text-sm">{member.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-quicksand font-bold text-forest-green mb-6">
              アクセス情報
            </h2>
            <div className="bg-white rounded-3xl p-6 shadow-lg space-y-4">
              <div>
                <h3 className="font-nunito font-semibold text-forest-green mb-2">住所</h3>
                <p className="text-gray-600">
                  〒123-4567<br />
                  東京都渋谷区キャンプ1-2-3
                </p>
              </div>
              <div>
                <h3 className="font-nunito font-semibold text-forest-green mb-2">営業時間</h3>
                <p className="text-gray-600">
                  平日: 11:00 - 20:00<br />
                  土日祝: 10:00 - 19:00<br />
                  定休日: 毎週水曜日
                </p>
              </div>
              <div>
                <h3 className="font-nunito font-semibold text-forest-green mb-2">お問い合わせ</h3>
                <p className="text-gray-600">
                  TEL: 03-1234-5678<br />
                  Email: info@campgear.jp
                </p>
              </div>
              <Button size="medium" className="w-full">
                お問い合わせフォーム
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-96 rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.70080931525882!3d35.65858298019945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5c5e3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sShibuya%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-quicksand font-bold text-forest-green text-center mb-12"
        >
          ギャラリー
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={image}
                alt={`ギャラリー画像 ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
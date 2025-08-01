import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-green text-white mt-20">
      <div className="relative">
        <svg
          className="absolute top-0 w-full h-20 -mt-20 text-forest-green"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-forest-green font-bold text-xl">C</span>
              </div>
              <span className="ml-2 font-quicksand font-bold text-xl">
                CampGear
              </span>
            </div>
            <p className="text-sm opacity-80">
              自然と共に、心地よい時間を。
              最高のキャンプ体験をサポートします。
            </p>
          </div>
          
          <div>
            <h3 className="font-quicksand font-bold text-lg mb-4">商品カテゴリー</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=tent" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  テント
                </Link>
              </li>
              <li>
                <Link to="/products?category=sleeping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  寝袋・マット
                </Link>
              </li>
              <li>
                <Link to="/products?category=cooking" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  調理器具
                </Link>
              </li>
              <li>
                <Link to="/products?category=lighting" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ランタン・照明
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-quicksand font-bold text-lg mb-4">お客様サポート</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guide" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ご利用ガイド
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  配送について
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  返品・交換
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-quicksand font-bold text-lg mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>〒123-4567</p>
              <p>東京都渋谷区キャンプ1-2-3</p>
              <p>TEL: 03-1234-5678</p>
              <p>営業時間: 10:00-19:00</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-60">
          <p>&copy; 2024 CampGear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
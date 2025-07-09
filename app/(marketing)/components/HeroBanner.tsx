'use client'

import { useState, useEffect } from 'react'

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "台湾プロ野球の熱狂を体感せよ",
      subtitle: "6チームが織りなす白熱の戦い",
      image: "/hero-slide-1.jpg"
    },
    {
      title: "リアルタイムで試合を追跡",
      subtitle: "最新スコアと詳細データ",
      image: "/hero-slide-2.jpg"
    },
    {
      title: "CPBLの歴史と伝統",
      subtitle: "1989年から続く台湾野球の軌跡",
      image: "/hero-slide-3.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 animate-fade-in-up">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 animate-fade-in-up animation-delay-200">
          {slides[currentSlide].subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-lg transition-colors">
            今日の試合を見る
          </button>
          <button className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg font-bold text-lg transition-colors">
            チケット購入
          </button>
        </div>

        <div className="absolute bottom-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
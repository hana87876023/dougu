'use client'

import { useState } from 'react'

interface GalleryImage {
  id: string
  src: string
  title: string
  description: string
  category: 'game' | 'player' | 'stadium'
}

export default function LightboxGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<'all' | 'game' | 'player' | 'stadium'>('all')

  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/gallery/game-1.jpg',
      title: '中信兄弟 優勝決定戦',
      description: '2023年シーズン優勝の瞬間',
      category: 'game'
    },
    {
      id: '2',
      src: '/gallery/player-1.jpg',
      title: '王威晨 MVP受賞',
      description: '年間MVP受賞セレモニー',
      category: 'player'
    },
    {
      id: '3',
      src: '/gallery/stadium-1.jpg',
      title: '台中洲際棒球場 満員',
      description: '2万人の観客で埋まるスタジアム',
      category: 'stadium'
    },
    {
      id: '4',
      src: '/gallery/game-2.jpg',
      title: '台湾シリーズ第7戦',
      description: '延長12回の激闘',
      category: 'game'
    },
    {
      id: '5',
      src: '/gallery/player-2.jpg',
      title: '張育成 本塁打王',
      description: 'シーズン28本塁打達成',
      category: 'player'
    },
    {
      id: '6',
      src: '/gallery/stadium-2.jpg',
      title: '桃園國際棒球場 夜景',
      description: 'ナイトゲームの美しい照明',
      category: 'stadium'
    },
    {
      id: '7',
      src: '/gallery/game-3.jpg',
      title: '完全試合達成',
      description: 'CPBL史上3人目の快挙',
      category: 'game'
    },
    {
      id: '8',
      src: '/gallery/player-3.jpg',
      title: '新人王 林承飛',
      description: '新人王受賞インタビュー',
      category: 'player'
    },
    {
      id: '9',
      src: '/gallery/stadium-3.jpg',
      title: '新北市立新莊棒球場',
      description: '富邦ガーディアンズの本拠地',
      category: 'stadium'
    }
  ]

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <div>
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full transition-colors ${
            filter === 'all' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          すべて
        </button>
        <button
          onClick={() => setFilter('game')}
          className={`px-6 py-2 rounded-full transition-colors ${
            filter === 'game' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          試合
        </button>
        <button
          onClick={() => setFilter('player')}
          className={`px-6 py-2 rounded-full transition-colors ${
            filter === 'player' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          選手
        </button>
        <button
          onClick={() => setFilter('stadium')}
          className={`px-6 py-2 rounded-full transition-colors ${
            filter === 'stadium' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          スタジアム
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-bold">{image.title}</h4>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
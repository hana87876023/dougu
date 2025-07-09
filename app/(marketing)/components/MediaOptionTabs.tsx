'use client'

import { useState } from 'react'

type TabType = 'tv' | 'streaming' | 'tickets'

export default function MediaOptionTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('tv')

  const tvChannels = [
    {
      name: 'ELEVEN SPORTS',
      logo: '/logos/eleven-sports.png',
      description: '全試合生中継',
      schedule: '毎日 18:35〜',
      channels: ['ELEVEN SPORTS 1', 'ELEVEN SPORTS 2']
    },
    {
      name: 'VIDEOLAND',
      logo: '/logos/videoland.png',
      description: '週末試合中継',
      schedule: '土日 14:00〜',
      channels: ['體育台']
    },
    {
      name: '中華電信MOD',
      logo: '/logos/mod.png',
      description: 'ホーム試合中継',
      schedule: '各チームホーム試合',
      channels: ['チャンネル500番台']
    }
  ]

  const streamingServices = [
    {
      name: 'CPBL TV',
      logo: '/logos/cpbl-tv.png',
      price: 'NT$ 699/月',
      features: ['全試合ライブ配信', 'ハイライト見放題', 'マルチアングル'],
      url: 'https://www.cpbltv.com'
    },
    {
      name: 'Hami Video',
      logo: '/logos/hami.png',
      price: 'NT$ 149/月',
      features: ['主要試合配信', 'モバイル視聴可', '7日間見逃し配信'],
      url: 'https://hamivideo.hinet.net'
    },
    {
      name: 'LINE TV',
      logo: '/logos/line-tv.png',
      price: '無料（一部有料）',
      features: ['週末試合配信', 'ハイライト無料', '選手インタビュー'],
      url: 'https://www.linetv.tw'
    }
  ]

  const ticketPlatforms = [
    {
      name: '全家FamiTicket',
      logo: '/logos/famiticket.png',
      description: 'コンビニ発券可能',
      fee: '手数料 NT$ 30',
      availability: '全球場対応'
    },
    {
      name: 'tixCraft拓元',
      logo: '/logos/tixcraft.png',
      description: 'オンライン専用',
      fee: '手数料 10%',
      availability: '人気試合即売'
    },
    {
      name: '各球場窓口',
      logo: '/logos/stadium-ticket.png',
      description: '当日券販売',
      fee: '手数料なし',
      availability: '試合開始2時間前から'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('tv')}
          className={`flex-1 py-4 px-6 font-medium transition-colors ${
            activeTab === 'tv' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          テレビ放送
        </button>
        <button
          onClick={() => setActiveTab('streaming')}
          className={`flex-1 py-4 px-6 font-medium transition-colors ${
            activeTab === 'streaming' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          ストリーミング
        </button>
        <button
          onClick={() => setActiveTab('tickets')}
          className={`flex-1 py-4 px-6 font-medium transition-colors ${
            activeTab === 'tickets' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          チケット購入
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'tv' && (
          <div className="space-y-6">
            {tvChannels.map((channel) => (
              <div key={channel.name} className="flex gap-6 items-start p-4 bg-gray-50 rounded-lg">
                <img 
                  src={channel.logo} 
                  alt={channel.name}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">{channel.name}</h4>
                  <p className="text-gray-600 mb-2">{channel.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-500">放送時間: {channel.schedule}</span>
                    <span className="text-gray-500">チャンネル: {channel.channels.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'streaming' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streamingServices.map((service) => (
              <div key={service.name} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <img 
                  src={service.logo} 
                  alt={service.name}
                  className="w-full h-16 object-contain mb-4"
                />
                <h4 className="text-lg font-bold mb-2">{service.name}</h4>
                <p className="text-2xl font-bold text-red-600 mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-red-600 text-white text-center rounded hover:bg-red-700 transition-colors"
                >
                  視聴開始
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="space-y-6">
            {ticketPlatforms.map((platform) => (
              <div key={platform.name} className="flex gap-6 items-center p-4 border rounded-lg">
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">{platform.name}</h4>
                  <p className="text-gray-600">{platform.description}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>{platform.fee}</span>
                    <span>•</span>
                    <span>{platform.availability}</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                  購入サイトへ
                </button>
              </div>
            ))}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="text-blue-800 font-medium">チケット価格帯</p>
              <p className="text-blue-700 text-sm mt-1">
                内野席: NT$ 350-800 / 外野席: NT$ 200-350 / VIP席: NT$ 1,200-2,000
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
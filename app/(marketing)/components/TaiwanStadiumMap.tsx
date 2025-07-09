'use client'

import { useState } from 'react'

interface Stadium {
  id: string
  name: string
  city: string
  capacity: number
  teams: string[]
  coordinates: {
    x: string
    y: string
  }
  address: string
  transport: string[]
}

export default function TaiwanStadiumMap() {
  const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null)

  const stadiums: Stadium[] = [
    {
      id: 'taichung',
      name: '台中洲際棒球場',
      city: '台中市',
      capacity: 20000,
      teams: ['中信兄弟'],
      coordinates: { x: '50%', y: '40%' },
      address: '台中市北屯區崇德路三段835號',
      transport: ['台鉄「松竹駅」徒歩15分', 'バス 58、65、701番']
    },
    {
      id: 'tainan',
      name: '台南市立棒球場',
      city: '台南市',
      capacity: 12000,
      teams: ['統一7-ELEVEn獅'],
      coordinates: { x: '40%', y: '70%' },
      address: '台南市南區健康路一段257號',
      transport: ['台鉄「台南駅」からバス15分', 'バス 0左、0右番']
    },
    {
      id: 'xinzhuang',
      name: '新北市立新莊棒球場',
      city: '新北市',
      capacity: 12500,
      teams: ['富邦ガーディアンズ'],
      coordinates: { x: '60%', y: '20%' },
      address: '新北市新莊區和興街66號',
      transport: ['MRT「新莊駅」徒歩10分', 'バス 99、299番']
    },
    {
      id: 'taoyuan',
      name: '桃園國際棒球場',
      city: '桃園市',
      capacity: 20000,
      teams: ['楽天モンキーズ'],
      coordinates: { x: '55%', y: '25%' },
      address: '桃園市中壢區領航北路一段1號',
      transport: ['高鉄「桃園駅」からバス20分', 'MRT A19駅建設中']
    },
    {
      id: 'tianmu',
      name: '天母棒球場',
      city: '台北市',
      capacity: 10000,
      teams: ['味全ドラゴンズ'],
      coordinates: { x: '60%', y: '15%' },
      address: '台北市士林區忠誠路二段77號',
      transport: ['MRT「芝山駅」徒歩15分', 'バス 285、606番']
    },
    {
      id: 'douliu',
      name: '斗六棒球場',
      city: '雲林県',
      capacity: 15000,
      teams: ['TSGホークス'],
      coordinates: { x: '45%', y: '55%' },
      address: '雲林縣斗六市雲林路二段265號',
      transport: ['台鉄「斗六駅」徒歩20分', 'バス 701番']
    }
  ]

  return (
    <div className="relative bg-gray-50 rounded-lg p-6">
      <div className="relative mx-auto max-w-2xl">
        <svg viewBox="0 0 400 600" className="w-full h-auto">
          <path
            d="M200 50 L250 100 L280 150 L290 250 L280 350 L250 450 L200 550 L150 500 L120 400 L110 300 L120 200 L150 100 Z"
            fill="#e5e7eb"
            stroke="#9ca3af"
            strokeWidth="2"
          />
          <text x="200" y="300" textAnchor="middle" className="fill-gray-600 text-lg font-bold">
            台湾
          </text>
          
          {stadiums.map((stadium) => (
            <g key={stadium.id}>
              <circle
                cx={stadium.coordinates.x}
                cy={stadium.coordinates.y}
                r="10"
                className="fill-red-600 cursor-pointer hover:fill-red-700 transition-colors"
                onClick={() => setSelectedStadium(stadium)}
              />
              <text
                x={stadium.coordinates.x}
                y={`calc(${stadium.coordinates.y} + 25px)`}
                textAnchor="middle"
                className="fill-gray-700 text-xs font-medium pointer-events-none"
              >
                {stadium.city}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {selectedStadium && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{selectedStadium.name}</h3>
              <p className="text-gray-600">{selectedStadium.city}</p>
            </div>
            <button
              onClick={() => setSelectedStadium(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">収容人数</p>
              <p className="font-bold">{selectedStadium.capacity.toLocaleString()}人</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ホームチーム</p>
              <p className="font-bold">{selectedStadium.teams.join(', ')}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">住所</p>
            <p className="font-medium">{selectedStadium.address}</p>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">アクセス</p>
            <ul className="mt-1 space-y-1">
              {selectedStadium.transport.map((method, index) => (
                <li key={index} className="text-sm">• {method}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
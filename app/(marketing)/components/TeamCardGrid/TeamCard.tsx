'use client'

import { teams } from './team-data'

export default function TeamCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <div 
          key={team.id} 
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div 
            className="h-32 relative"
            style={{ 
              background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.secondaryColor} 100%)`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="h-20 w-20 object-contain filter drop-shadow-lg"
              />
            </div>
            <div className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1 text-sm font-bold">
              #{team.currentRank}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">{team.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{team.englishName}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-gray-600">本拠地:</span>
                <p className="font-medium">{team.stadium}</p>
              </div>
              <div>
                <span className="text-gray-600">創設:</span>
                <p className="font-medium">{team.founded}年</p>
              </div>
              <div>
                <span className="text-gray-600">優勝回数:</span>
                <p className="font-medium">{team.championships}回</p>
              </div>
              <div>
                <span className="text-gray-600">今季成績:</span>
                <p className="font-medium">{team.record.wins}勝{team.record.losses}敗</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-sm font-bold text-gray-700 mb-2">主力選手</p>
              <div className="space-y-1">
                {team.keyPlayers.map((player) => (
                  <div key={player.number} className="flex items-center text-sm">
                    <span className="font-mono font-bold mr-2">#{player.number}</span>
                    <span className="flex-1">{player.name}</span>
                    <span className="text-gray-500">{player.position}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
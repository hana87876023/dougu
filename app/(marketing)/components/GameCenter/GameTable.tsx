'use client'

import { useLiveGame } from './useLiveGame'
import InningChart from './InningChart'

export default function GameTable() {
  const { gameData, isLoading } = useLiveGame('game-1')

  if (isLoading || !gameData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{gameData.awayTeam}</div>
          <div className="text-4xl font-bold">{gameData.awayScore}</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-2xl font-bold">{gameData.homeTeam}</div>
          <div className="text-4xl font-bold">{gameData.homeScore}</div>
        </div>
        <div className="text-center mt-4 text-lg">
          {gameData.inning} | {gameData.outs} アウト
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3">打席情報</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">打者</span>
                <span className="font-bold">
                  #{gameData.currentBatter.number} {gameData.currentBatter.name}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">打率</span>
                <span className="font-mono">{gameData.currentBatter.avg}</span>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{gameData.balls}</div>
                  <div className="text-sm text-gray-600">ボール</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{gameData.strikes}</div>
                  <div className="text-sm text-gray-600">ストライク</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">投手情報</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">投手</span>
                <span className="font-bold">
                  #{gameData.currentPitcher.number} {gameData.currentPitcher.name}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">防御率</span>
                <span className="font-mono">{gameData.currentPitcher.era}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">球数</span>
                <span className="font-bold text-lg">{gameData.currentPitcher.pitchCount}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">走者状況</h3>
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border-2 border-gray-300 transform rotate-45"></div>
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${
                gameData.runners.second ? 'bg-red-600' : 'bg-gray-300'
              }`}></div>
              <div className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${
                gameData.runners.third ? 'bg-red-600' : 'bg-gray-300'
              }`}></div>
              <div className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${
                gameData.runners.first ? 'bg-red-600' : 'bg-gray-300'
              }`}></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white border-2 border-gray-400 transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="font-bold text-yellow-800">最新プレー</p>
          <p className="text-yellow-700 mt-1">{gameData.lastPlay}</p>
        </div>

        <InningChart scores={gameData.inningScores} />
      </div>
    </div>
  )
}
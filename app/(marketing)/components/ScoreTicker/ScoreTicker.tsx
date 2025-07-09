'use client'

import { useScores } from './useScores'
import { useRef, useEffect } from 'react'

export default function ScoreTicker() {
  const { scores, isConnected } = useScores()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 1
      if (position <= -element.scrollWidth / 2) {
        position = 0
      }
      element.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [scores])

  const ScoreCard = ({ score }: { score: any }) => (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-4 mx-2 min-w-[300px]">
      <div className="flex-1 text-center">
        <div className="flex items-center justify-end gap-2">
          <span className="font-medium">{score.awayTeam}</span>
          <img src={score.awayTeamLogo} alt={score.awayTeam} className="w-8 h-8" />
        </div>
        <div className="text-2xl font-bold mt-1">{score.awayScore}</div>
      </div>
      
      <div className="px-4">
        <div className={`text-xs font-medium px-2 py-1 rounded ${
          score.status === 'live' ? 'bg-red-500 text-white animate-pulse' :
          score.status === 'upcoming' ? 'bg-gray-500 text-white' :
          'bg-gray-700 text-white'
        }`}>
          {score.inning}
        </div>
      </div>
      
      <div className="flex-1 text-center">
        <div className="flex items-center gap-2">
          <img src={score.homeTeamLogo} alt={score.homeTeam} className="w-8 h-8" />
          <span className="font-medium">{score.homeTeam}</span>
        </div>
        <div className="text-2xl font-bold mt-1">{score.homeScore}</div>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-100 py-4 overflow-hidden relative">
      <div className="absolute top-2 right-4 z-10">
        <div className={`flex items-center gap-2 text-sm ${isConnected ? 'text-green-600' : 'text-gray-500'}`}>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-600 animate-pulse' : 'bg-gray-500'}`} />
          {isConnected ? 'リアルタイム更新中' : '接続中...'}
        </div>
      </div>
      
      <div className="flex" ref={scrollRef}>
        {[...scores, ...scores].map((score, index) => (
          <ScoreCard key={`${score.id}-${index}`} score={score} />
        ))}
      </div>
    </div>
  )
}
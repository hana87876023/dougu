import { useEffect, useState } from 'react'

export interface LiveGameData {
  gameId: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  inning: string
  outs: number
  balls: number
  strikes: number
  runners: {
    first: boolean
    second: boolean
    third: boolean
  }
  currentBatter: {
    name: string
    number: number
    avg: string
  }
  currentPitcher: {
    name: string
    number: number
    era: string
    pitchCount: number
  }
  inningScores: {
    inning: number
    home: number | null
    away: number | null
  }[]
  lastPlay: string
}

export function useLiveGame(gameId: string) {
  const [gameData, setGameData] = useState<LiveGameData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const mockGameData: LiveGameData = {
      gameId,
      homeTeam: '中信兄弟',
      awayTeam: '統一7-ELEVEn獅',
      homeScore: 5,
      awayScore: 3,
      inning: '7回表',
      outs: 1,
      balls: 2,
      strikes: 1,
      runners: {
        first: true,
        second: false,
        third: true
      },
      currentBatter: {
        name: '王威晨',
        number: 98,
        avg: '.315'
      },
      currentPitcher: {
        name: '呂彦青',
        number: 28,
        era: '3.42',
        pitchCount: 87
      },
      inningScores: [
        { inning: 1, home: 0, away: 1 },
        { inning: 2, home: 2, away: 0 },
        { inning: 3, home: 0, away: 0 },
        { inning: 4, home: 1, away: 1 },
        { inning: 5, home: 0, away: 1 },
        { inning: 6, home: 2, away: 0 },
        { inning: 7, home: null, away: 0 },
        { inning: 8, home: null, away: null },
        { inning: 9, home: null, away: null }
      ],
      lastPlay: '王威晨が四球を選ぶ。1、3塁のチャンス！'
    }

    setTimeout(() => {
      setGameData(mockGameData)
      setIsLoading(false)
    }, 500)

    const interval = setInterval(() => {
      setGameData((prev) => {
        if (!prev) return prev
        
        const plays = [
          '空振り三振！',
          'センター前ヒット！',
          'ファウルボール',
          'ボール',
          'ストライク！',
          'レフトフライでアウト',
          'ダブルプレー！',
          'ホームラン！！'
        ]
        
        return {
          ...prev,
          balls: Math.floor(Math.random() * 4),
          strikes: Math.floor(Math.random() * 3),
          outs: Math.floor(Math.random() * 3),
          lastPlay: plays[Math.floor(Math.random() * plays.length)],
          currentPitcher: {
            ...prev.currentPitcher,
            pitchCount: prev.currentPitcher.pitchCount + 1
          }
        }
      })
    }, 15000)

    return () => {
      clearInterval(interval)
    }
  }, [gameId])

  return { gameData, isLoading }
}
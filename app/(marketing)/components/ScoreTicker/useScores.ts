import { useEffect, useState } from 'react'

export interface GameScore {
  id: string
  homeTeam: string
  homeTeamLogo: string
  homeScore: number
  awayTeam: string
  awayTeamLogo: string
  awayScore: number
  inning: string
  status: 'upcoming' | 'live' | 'final'
  startTime?: string
}

export function useScores() {
  const [scores, setScores] = useState<GameScore[]>([])
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const mockScores: GameScore[] = [
      {
        id: '1',
        homeTeam: '中信兄弟',
        homeTeamLogo: '/logos/brothers.png',
        homeScore: 5,
        awayTeam: '統一7-ELEVEn獅',
        awayTeamLogo: '/logos/lions.png',
        awayScore: 3,
        inning: '7回表',
        status: 'live'
      },
      {
        id: '2',
        homeTeam: '富邦ガーディアンズ',
        homeTeamLogo: '/logos/guardians.png',
        homeScore: 0,
        awayTeam: '楽天モンキーズ',
        awayTeamLogo: '/logos/monkeys.png',
        awayScore: 0,
        inning: '18:35',
        status: 'upcoming',
        startTime: '18:35'
      },
      {
        id: '3',
        homeTeam: '味全ドラゴンズ',
        homeTeamLogo: '/logos/dragons.png',
        homeScore: 7,
        awayTeam: 'TSGホークス',
        awayTeamLogo: '/logos/hawks.png',
        awayScore: 4,
        inning: '試合終了',
        status: 'final'
      }
    ]

    setScores(mockScores)
    setIsConnected(true)

    // WebSocket接続のシミュレーション
    const ws = {
      onmessage: null as any,
      close: () => {}
    }

    const interval = setInterval(() => {
      const updatedScores = mockScores.map((score) => {
        if (score.status === 'live') {
          const innings = ['1回表', '1回裏', '2回表', '2回裏', '3回表', '3回裏', 
                          '4回表', '4回裏', '5回表', '5回裏', '6回表', '6回裏',
                          '7回表', '7回裏', '8回表', '8回裏', '9回表', '9回裏']
          const currentIndex = innings.indexOf(score.inning)
          if (currentIndex < innings.length - 1 && Math.random() > 0.7) {
            return {
              ...score,
              inning: innings[currentIndex + 1],
              homeScore: score.homeScore + (Math.random() > 0.5 ? 1 : 0),
              awayScore: score.awayScore + (Math.random() > 0.5 ? 1 : 0)
            }
          }
        }
        return score
      })
      setScores(updatedScores)
    }, 10000)

    return () => {
      clearInterval(interval)
      ws.close()
      setIsConnected(false)
    }
  }, [])

  return { scores, isConnected }
}
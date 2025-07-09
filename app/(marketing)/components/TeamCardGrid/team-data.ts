export interface Team {
  id: string
  name: string
  englishName: string
  logo: string
  primaryColor: string
  secondaryColor: string
  stadium: string
  founded: number
  championships: number
  currentRank: number
  record: {
    wins: number
    losses: number
  }
  keyPlayers: {
    name: string
    position: string
    number: number
  }[]
}

export const teams: Team[] = [
  {
    id: 'brothers',
    name: '中信兄弟',
    englishName: 'Chinatrust Brothers',
    logo: '/logos/brothers.png',
    primaryColor: '#FFD700',
    secondaryColor: '#000000',
    stadium: '台中洲際棒球場',
    founded: 1990,
    championships: 8,
    currentRank: 1,
    record: { wins: 75, losses: 48 },
    keyPlayers: [
      { name: '王威晨', position: 'SS', number: 98 },
      { name: '岳東華', position: 'OF', number: 41 },
      { name: '艾士特', position: 'P', number: 52 }
    ]
  },
  {
    id: 'lions',
    name: '統一7-ELEVEn獅',
    englishName: 'Uni-President 7-Eleven Lions',
    logo: '/logos/lions.png',
    primaryColor: '#FF6600',
    secondaryColor: '#000080',
    stadium: '台南市立棒球場',
    founded: 1989,
    championships: 10,
    currentRank: 3,
    record: { wins: 68, losses: 55 },
    keyPlayers: [
      { name: '陳傑憲', position: 'CF', number: 24 },
      { name: '蘇智傑', position: '1B', number: 68 },
      { name: '猛威爾', position: 'P', number: 11 }
    ]
  },
  {
    id: 'guardians',
    name: '富邦ガーディアンズ',
    englishName: 'Fubon Guardians',
    logo: '/logos/guardians.png',
    primaryColor: '#003DA5',
    secondaryColor: '#C4CED4',
    stadium: '新北市立新莊棒球場',
    founded: 1993,
    championships: 4,
    currentRank: 5,
    record: { wins: 58, losses: 65 },
    keyPlayers: [
      { name: '張進德', position: 'C', number: 55 },
      { name: '林哲瑄', position: 'OF', number: 31 },
      { name: '羅力', position: 'P', number: 99 }
    ]
  },
  {
    id: 'monkeys',
    name: '楽天モンキーズ',
    englishName: 'Rakuten Monkeys',
    logo: '/logos/monkeys.png',
    primaryColor: '#8B0000',
    secondaryColor: '#FFD700',
    stadium: '桃園國際棒球場',
    founded: 2003,
    championships: 1,
    currentRank: 4,
    record: { wins: 62, losses: 61 },
    keyPlayers: [
      { name: '陳俊秀', position: 'DH', number: 9 },
      { name: '林立', position: '3B', number: 8 },
      { name: '布雷克', position: 'P', number: 54 }
    ]
  },
  {
    id: 'dragons',
    name: '味全ドラゴンズ',
    englishName: 'Wei Chuan Dragons',
    logo: '/logos/dragons.png',
    primaryColor: '#C8102E',
    secondaryColor: '#FFFFFF',
    stadium: '天母棒球場',
    founded: 1990,
    championships: 4,
    currentRank: 2,
    record: { wins: 71, losses: 52 },
    keyPlayers: [
      { name: '張育成', position: 'SS', number: 11 },
      { name: '江坤宇', position: '2B', number: 17 },
      { name: '徳保拉', position: 'P', number: 44 }
    ]
  },
  {
    id: 'hawks',
    name: 'TSGホークス',
    englishName: 'TSG Hawks',
    logo: '/logos/hawks.png',
    primaryColor: '#003366',
    secondaryColor: '#F5A623',
    stadium: '斗六棒球場',
    founded: 2022,
    championships: 0,
    currentRank: 6,
    record: { wins: 45, losses: 78 },
    keyPlayers: [
      { name: '林承飛', position: 'SS', number: 7 },
      { name: '申皓瑋', position: 'OF', number: 29 },
      { name: '施子謙', position: 'P', number: 18 }
    ]
  }
]
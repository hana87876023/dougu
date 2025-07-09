'use client'

interface MetricCard {
  title: string
  data: {
    rank: number
    name: string
    team: string
    value: string | number
  }[]
}

export default function MetricCardList() {
  const metrics: MetricCard[] = [
    {
      title: '本塁打王',
      data: [
        { rank: 1, name: '張育成', team: '味全', value: 28 },
        { rank: 2, name: '陳俊秀', team: '楽天', value: 25 },
        { rank: 3, name: '岳東華', team: '中信', value: 23 },
        { rank: 4, name: '林安可', team: '富邦', value: 22 },
        { rank: 5, name: '蘇智傑', team: '統一', value: 20 }
      ]
    },
    {
      title: '打率ランキング',
      data: [
        { rank: 1, name: '王威晨', team: '中信', value: '.342' },
        { rank: 2, name: '陳傑憲', team: '統一', value: '.338' },
        { rank: 3, name: '林立', team: '楽天', value: '.325' },
        { rank: 4, name: '張進德', team: '富邦', value: '.318' },
        { rank: 5, name: '江坤宇', team: '味全', value: '.315' }
      ]
    },
    {
      title: '防御率リーダー',
      data: [
        { rank: 1, name: '徳保拉', team: '味全', value: '2.45' },
        { rank: 2, name: '羅力', team: '富邦', value: '2.67' },
        { rank: 3, name: '布雷克', team: '楽天', value: '2.89' },
        { rank: 4, name: '猛威爾', team: '統一', value: '3.12' },
        { rank: 5, name: '艾士特', team: '中信', value: '3.24' }
      ]
    },
    {
      title: 'チーム順位',
      data: [
        { rank: 1, name: '中信兄弟', team: '', value: '75勝-48敗' },
        { rank: 2, name: '味全ドラゴンズ', team: '', value: '71勝-52敗' },
        { rank: 3, name: '統一7-ELEVEn獅', team: '', value: '68勝-55敗' },
        { rank: 4, name: '楽天モンキーズ', team: '', value: '62勝-61敗' },
        { rank: 5, name: '富邦ガーディアンズ', team: '', value: '58勝-65敗' }
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
            {metric.title}
          </h3>
          <div className="space-y-3">
            {metric.data.map((item) => (
              <div key={item.rank} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  item.rank === 1 ? 'bg-yellow-500' :
                  item.rank === 2 ? 'bg-gray-400' :
                  item.rank === 3 ? 'bg-orange-600' :
                  'bg-gray-600'
                }`}>
                  {item.rank}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  {item.team && (
                    <div className="text-sm text-gray-500">{item.team}</div>
                  )}
                </div>
                <div className="font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
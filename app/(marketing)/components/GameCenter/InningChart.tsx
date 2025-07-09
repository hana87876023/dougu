interface InningScore {
  inning: number
  home: number | null
  away: number | null
}

interface InningChartProps {
  scores: InningScore[]
}

export default function InningChart({ scores }: InningChartProps) {
  const totalHome = scores.reduce((sum, s) => sum + (s.home || 0), 0)
  const totalAway = scores.reduce((sum, s) => sum + (s.away || 0), 0)

  return (
    <div>
      <h3 className="font-bold text-lg mb-3">イニング別スコア</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 px-3">チーム</th>
              {scores.map((s) => (
                <th key={s.inning} className="text-center py-2 px-3 min-w-[40px]">
                  {s.inning}
                </th>
              ))}
              <th className="text-center py-2 px-3 font-bold bg-gray-100">R</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3 font-medium">統一</td>
              {scores.map((s) => (
                <td key={`away-${s.inning}`} className="text-center py-2 px-3">
                  {s.away !== null ? s.away : '-'}
                </td>
              ))}
              <td className="text-center py-2 px-3 font-bold bg-gray-100">{totalAway}</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-medium">兄弟</td>
              {scores.map((s) => (
                <td key={`home-${s.inning}`} className="text-center py-2 px-3">
                  {s.home !== null ? s.home : '-'}
                </td>
              ))}
              <td className="text-center py-2 px-3 font-bold bg-gray-100">{totalHome}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
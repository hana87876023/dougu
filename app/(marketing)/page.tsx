import HeroBanner from './components/HeroBanner'
import ScoreTicker from './components/ScoreTicker/ScoreTicker'
import GameCenter from './components/GameCenter/GameTable'
import MetricCardList from './components/MetricCardList'
import TeamCardGrid from './components/TeamCardGrid/TeamCard'
import TaiwanStadiumMap from './components/TaiwanStadiumMap'
import MediaOptionTabs from './components/MediaOptionTabs'
import LightboxGallery from './components/LightboxGallery'
import PrimaryCTA from './components/PrimaryCTA'
import FooterNav from './components/FooterNav'

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroBanner />
      <ScoreTicker />
      
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">今日の試合</h2>
        <GameCenter />
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">リーグ統計</h2>
          <MetricCardList />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">全6チーム</h2>
        <TeamCardGrid />
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">スタジアムマップ</h2>
          <TaiwanStadiumMap />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">視聴方法</h2>
        <MediaOptionTabs />
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">フォトギャラリー</h2>
          <LightboxGallery />
        </div>
      </section>

      <PrimaryCTA />
      <FooterNav />
    </main>
  )
}
export default function FooterNav() {
  const footerLinks = {
    about: [
      { name: 'CPBLについて', href: '#' },
      { name: '歴史', href: '#' },
      { name: 'ルール説明', href: '#' },
      { name: 'よくある質問', href: '#' }
    ],
    teams: [
      { name: '中信兄弟', href: '#' },
      { name: '統一7-ELEVEn獅', href: '#' },
      { name: '富邦ガーディアンズ', href: '#' },
      { name: '楽天モンキーズ', href: '#' },
      { name: '味全ドラゴンズ', href: '#' },
      { name: 'TSGホークス', href: '#' }
    ],
    services: [
      { name: 'ニュース', href: '#' },
      { name: '試合日程', href: '#' },
      { name: '順位表', href: '#' },
      { name: '個人成績', href: '#' },
      { name: 'チケット情報', href: '#' },
      { name: 'ファンクラブ', href: '#' }
    ],
    contact: [
      { name: 'お問い合わせ', href: '#' },
      { name: 'プレスリリース', href: '#' },
      { name: 'スポンサーシップ', href: '#' },
      { name: '採用情報', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">CPBL</h3>
            <p className="text-gray-400 text-sm">
              中華職業棒球大聯盟<br />
              Chinese Professional<br />
              Baseball League
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">CPBLについて</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">チーム</h4>
            <ul className="space-y-2">
              {footerLinks.teams.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Chinese Professional Baseball League. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie設定
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
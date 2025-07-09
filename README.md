# Roto Transitions - 3D Web Experience

Giulio Cuscito / DribbbleのRoto-transitions Conceptを再現した、3D回転トランジション付きのモダンなランディングページです。

## 🚀 特徴

- **3D回転トランジション**: Y軸方向に90°回転するスロット型セクション切り替え
- **スムーズアニメーション**: Framer Motion 11による高品質なアニメーション
- **レスポンシブデザイン**: デスクトップ・モバイル両対応
- **マルチ入力対応**: スクロール、キーボード、タッチ、ナビゲーションボタン
- **パフォーマンス最適化**: 60FPS維持を目指した最適化
- **アクセシビリティ**: WCAG AAレベルのアクセシビリティ対応

## 🛠️ 技術スタック

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion 11**
- **Zustand** (状態管理)

## 📦 セットアップ手順

### 1. 依存関係インストール

```bash
pnpm install
```

### 2. 開発サーバー起動

```bash
pnpm dev
```

### 3. ブラウザでアクセス

[http://localhost:3000](http://localhost:3000) を開く

## 🎮 操作方法

### キーボード
- `↓` / `Space`: 次のセクション
- `↑`: 前のセクション
- `Home`: 最初のセクション
- `End`: 最後のセクション
- `?`: キーボードショートカット表示

### マウス
- **ホイール**: セクション切り替え
- **右側ドット**: 直接セクションジャンプ
- **右下矢印**: 前後セクション移動

### タッチ
- **スワイプ（縦）**: セクション切り替え

## 📁 プロジェクト構成

```
app/
├── layout.tsx          # メインレイアウト（3D perspective設定）
├── page.tsx           # ホームページ（セクション統合）
├── globals.css        # グローバルスタイル
├── components/
│   ├── SectionWrapper.tsx    # 3D回転セクション
│   ├── StickyNav.tsx        # ナビゲーション要素
│   ├── useSectionStore.ts   # Zustand状態管理
│   └── useWheelSnapping.ts  # スクロールスナッピング
└── libs/
    └── framerConfigs.ts     # Motion variant定義
```

## 🎨 カラーパレット

```css
--dark-bg: #0d0e0a      /* 背景（墨色） */
--light-text: #c5c4c4   /* メインテキスト */
--accent-cyan: #00e6e6  /* アクセントカラー */
--glass-bg: rgba(255, 255, 255, 0.05)    /* ガラスモーフィズム */
--glass-border: rgba(255, 255, 255, 0.1) /* ガラス境界線 */
```

## 🚀 本番デプロイ

### Vercel
```bash
pnpm build
```

### 他のプラットフォーム
```bash
pnpm build
pnpm start
```

## 📝 カスタマイズ

### セクション追加
`app/components/useSectionStore.ts`のdefaultSectionsを編集

### アニメーション調整
`app/libs/framerConfigs.ts`のvariantを編集

### スタイル変更
`tailwind.config.ts`とglobals.cssを編集

## 🐛 トラブルシューティング

### 3Dアニメーションが動かない
- ブラウザのハードウェアアクセラレーションを確認
- CSS transformsがサポートされているか確認

### スクロールスナッピングが効かない
- 他のスクロールライブラリとの競合を確認
- イベントリスナーの重複登録を確認

## 📄 ライセンス

MIT License

## 👨‍💻 開発者

Roto Transitions Team

---

**パフォーマンス最適化のため、画像は`/public/images/`フォルダに配置してください:**
- `hero-bg.jpg`
- `services-bg.jpg` 
- `portfolio-bg.jpg`
- `cta-bg.jpg`
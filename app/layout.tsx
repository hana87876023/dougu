import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// Metadata configuration
export const metadata: Metadata = {
  title: 'Roto Transitions | Modern 3D Web Experience',
  description: 'Experience the future of web design with stunning 3D transitions and immersive animations. Built with Next.js and Framer Motion.',
  keywords: ['3D transitions', 'web design', 'animations', 'framer motion', 'next.js'],
  authors: [{ name: 'Roto Transitions Team' }],
  creator: 'Roto Transitions',
  publisher: 'Roto Transitions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roto-transitions.vercel.app',
    title: 'Roto Transitions | Modern 3D Web Experience',
    description: 'Experience the future of web design with stunning 3D transitions and immersive animations.',
    siteName: 'Roto Transitions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roto Transitions - 3D Web Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roto Transitions | Modern 3D Web Experience',
    description: 'Experience the future of web design with stunning 3D transitions and immersive animations.',
    images: ['/og-image.jpg'],
    creator: '@rototransitions',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00e6e6' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0e0a' },
  ],
}

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Meta tags for better mobile experience */}
        <meta name="theme-color" content="#0d0e0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Roto Transitions',
              description: 'Modern 3D web experience with stunning transitions and animations',
              url: 'https://roto-transitions.vercel.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://roto-transitions.vercel.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      
      <body className={`
        font-sans 
        antialiased 
        overflow-x-hidden 
        bg-dark-bg 
        text-light-text
        selection:bg-accent-cyan 
        selection:text-dark-bg
      `}>
        {/* Main perspective container for 3D effects */}
        <div 
          className="
            perspective-1200 
            min-h-screen 
            w-full 
            relative 
            overflow-hidden
          "
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* 3D preserve container */}
          <div 
            className="
              preserve-3d 
              w-full 
              min-h-screen 
              relative
            "
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {children}
          </div>
        </div>
        
        {/* Background gradient overlay for depth */}
        <div 
          className="
            fixed 
            inset-0 
            pointer-events-none 
            z-[-1]
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center, 
                rgba(0, 230, 230, 0.03) 0%, 
                rgba(13, 14, 10, 0.8) 50%, 
                rgba(13, 14, 10, 1) 100%
              )
            `,
          }}
        />
        
        {/* Performance monitoring (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div 
            className="
              fixed 
              bottom-4 
              left-4 
              text-xs 
              text-light-text/50 
              font-mono 
              z-50 
              pointer-events-none
            "
          >
            {/* Performance stats could be added here */}
          </div>
        )}
        
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="
            sr-only 
            focus:not-sr-only 
            fixed 
            top-4 
            left-4 
            z-[9999] 
            bg-accent-cyan 
            text-dark-bg 
            px-4 
            py-2 
            rounded 
            font-semibold 
            focus:outline-none 
            focus:ring-2 
            focus:ring-accent-cyan
          "
        >
          Skip to main content
        </a>
      </body>
    </html>
  )
}
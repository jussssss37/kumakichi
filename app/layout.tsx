import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ラーメン熊きち - 大阪府吹田市のラーメン店',
  description: '大阪府吹田市にあるラーメン熊きち。1976年創業の老舗ラーメン店です。みそ味ちゃんぽんが人気です。',
  keywords: 'ラーメン,熊きち,吹田市,大阪,ワンタン麺,ちゃんぽん',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKP36CQQ');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-japanese">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKP36CQQ"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
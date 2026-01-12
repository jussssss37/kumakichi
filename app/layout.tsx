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
      <body className="font-japanese">{children}</body>
    </html>
  )
}
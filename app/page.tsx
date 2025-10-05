import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuItemCard from '@/components/MenuItemCard'
import Link from 'next/link'
import { getPopularItems } from '@/lib/menu'

export default function Home() {
  const popularItems = getPopularItems()

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/menu/ramen/men_misotya.jpg"
            alt="みそ味チャンポン"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container-wide text-center text-white">
          <div className="animate-fadeIn">
            
            {/* Main Title */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-shadow-elegant animate-slideUp">
                ラーメン熊きち
              </h1>
              <div className="h-1 w-24 bg-kumakichi-gold mx-auto mb-8 animate-scaleUp animate-delay-300"></div>
              <p className="text-xl md:text-3xl font-japanese font-light mb-4 animate-slideUp animate-delay-200">
                創業1976年の老舗ラーメン店
              </p>
              <p className="text-lg md:text-xl font-japanese opacity-90 animate-slideUp animate-delay-400">
                大阪府吹田市で愛され続ける本格の味
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="animate-slideUp animate-delay-600">
              <Link href="/menu" className="btn-primary inline-block">
                メニューを見る
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-japanese mb-2">スクロール</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="animate-slideUp">
                <h2 className="text-4xl md:text-5xl heading-display mb-8">
                  お<span className="text-accent">知らせ</span>
                </h2>
                <div className="h-1 w-16 bg-kumakichi-gold mx-auto"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-kumakichi-cream rounded-2xl p-6 animate-slideUp animate-delay-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-kumakichi-red text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    2025.01.07
                  </div>
                  <div>
                    <p className="text-kumakichi-dark font-semibold mb-2">年始営業のお知らせ</p>
                    <p className="text-kumakichi-gray-800 text-sm leading-relaxed">
                      1月4日より通常営業を開始いたします。今年もよろしくお願いいたします。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-kumakichi-cream rounded-2xl p-6 animate-slideUp animate-delay-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-kumakichi-gold text-kumakichi-dark px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    2024.12.28
                  </div>
                  <div>
                    <p className="text-kumakichi-dark font-semibold mb-2">年末年始休業のお知らせ</p>
                    <p className="text-kumakichi-gray-800 text-sm leading-relaxed">
                      12月31日〜1月3日まで年末年始休業とさせていただきます。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-kumakichi-cream rounded-2xl p-6 animate-slideUp animate-delay-400">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    2024.12.01
                  </div>
                  <div>
                    <p className="text-kumakichi-dark font-semibold mb-2">冬季限定メニュー登場</p>
                    <p className="text-kumakichi-gray-800 text-sm leading-relaxed">
                      体の温まる冬季限定ラーメンを12月より提供開始いたします。ぜひお試しください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-padding bg-kumakichi-gray-100">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="animate-slideUp">
                <h2 className="text-4xl md:text-5xl heading-display mb-8">
                  Instagram <span className="text-accent">投稿</span>
                </h2>
                <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-6"></div>
                <p className="text-xl text-kumakichi-gray-800">@kumakichi1976 の最新情報をチェック！</p>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <a 
                href="https://instagram.com/kumakichi1976" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-elegant hover:shadow-elegant-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@kumakichi1976をフォロー</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-elegant animate-slideUp animate-delay-200">
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold mb-6 text-kumakichi-dark">
                  最新のラーメン情報をお届け中！
                </h3>
                
                {/* Instagram Embed Placeholder */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-kumakichi-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-kumakichi-gray-800">最新投稿</p>
                    </div>
                  </div>
                  
                  <div className="bg-kumakichi-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🍜</span>
                      </div>
                      <p className="text-sm text-kumakichi-gray-800">限定メニュー</p>
                    </div>
                  </div>
                  
                  <div className="bg-kumakichi-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📸</span>
                      </div>
                      <p className="text-sm text-kumakichi-gray-800">店内の様子</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-kumakichi-gray-800 text-sm">
                  ※ 最新の投稿やメニュー情報は
                  <a href="https://instagram.com/kumakichi1976" target="_blank" rel="noopener noreferrer" className="text-kumakichi-red hover:underline font-semibold">
                    @kumakichi1976
                  </a>
                  をご確認ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="section-padding bg-kumakichi-gray-100">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="animate-slideUp">
              <h2 className="text-4xl md:text-5xl heading-display mb-8">
                人気の<span className="text-accent">メニュー</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-8"></div>
              <p className="text-xl text-kumakichi-gray-800">創業30年の伝統の味をご堪能ください</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {popularItems.map((item, index) => (
              <div key={index} className={`animate-slideUp animate-delay-${(index + 2) * 100}`}>
                <MenuItemCard item={item} layout="vertical" showImage={true} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-slideUp animate-delay-600">
            <Link href="/menu" className="btn-primary">
              全メニューを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Store Info Section */}
      <section className="section-padding bg-section-dark text-white">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-slideUp">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  店舗<span className="text-kumakichi-gold">情報</span>
                </h2>
                <div className="h-1 w-16 bg-kumakichi-gold mx-auto"></div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="animate-slideInLeft">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-kumakichi-red rounded-full flex items-center justify-center mr-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">営業時間</h3>
                        <p className="text-white/80">毎日営業</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-white">11:00 - 23:00</p>
                      <p className="text-kumakichi-gold">(ラストオーダー 22:30)</p>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mt-4">
                        <p className="text-yellow-300 text-sm">⚠️ 麺がなくなれば終了する場合があります</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="animate-slideInLeft animate-delay-200">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-kumakichi-gold rounded-full flex items-center justify-center mr-6">
                        <svg className="w-8 h-8 text-kumakichi-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">お電話</h3>
                        <p className="text-white/80">出前・予約承ります</p>
                      </div>
                    </div>
                    <a href="tel:06-6875-1430" className="text-3xl font-bold text-white hover:text-kumakichi-gold transition-colors duration-300">
                      06-6875-1430
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="animate-slideInRight">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">所在地</h3>
                        <p className="text-white/80">アクセス良好</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg text-white">大阪府吹田市新芦屋下9-6</p>
                      <p className="text-kumakichi-gold">JR千里丘駅より北へ徒歩12分</p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-slideInRight animate-delay-200">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.92,6.01C18.72,5.42 18.16,5 17.5,5H16V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5H6.5C5.84,5 5.28,5.42 5.08,6.01L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6.01M10,4H14V5H10V4M6.5,7H17.5L19,11H5L6.5,7Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">駐車場</h3>
                        <p className="text-white/80">お車でも安心</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-white">10台完備</p>
                      <p className="text-kumakichi-gold">店舗斜め向かい・無料</p>
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mt-4">
                        <p className="text-green-300 text-sm">🎉 ご家族連れも安心してお越しください</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-kumakichi-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="animate-slideUp">
              <h2 className="text-4xl md:text-5xl heading-display mb-8">
                アクセス<span className="text-accent">マップ</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto"></div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-4 shadow-elegant-lg animate-slideUp animate-delay-200">
              <div className="aspect-video w-full bg-kumakichi-gray-200 rounded-2xl flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.8!2d135.5!3d34.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ2JzQ4LjAiTiAxMzXCsDMwJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-lg text-kumakichi-gray-800 mb-4">
                  JR千里丘駅から北へ徒歩12分、駐車場も完備しております。
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    🚶‍♂️ 駅から徒歩12分
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    🚗 駐車場10台
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                    🏪 出前可能
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
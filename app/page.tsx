import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuItemCard from '@/components/MenuItemCard'
import Link from 'next/link'
import { getPopularItems } from '@/lib/menu'

export default function Home() {
  const popularItems = getPopularItems()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${basePath}/images/menu/ramen/men_misotya.jpg`}
            alt="みそ味チャンポン"
            className="w-full h-full object-cover"
            loading="eager"
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

      {/* YouTube Video Section */}
      <section className="section-padding bg-kumakichi-gray-100">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="animate-slideUp">
                <h2 className="text-4xl md:text-5xl heading-display mb-8">
                  店舗<span className="text-accent">紹介動画</span>
                </h2>
                <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-6"></div>
                <p className="text-xl text-kumakichi-gray-800">熊きちの魅力をご覧ください</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-elegant-lg animate-slideUp animate-delay-200">
              <div className="aspect-video w-full bg-kumakichi-gray-200 rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/MPf505R3zu8"
                  title="ラーメン熊きち 店舗紹介"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-2xl border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="section-padding bg-kumakichi-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="animate-slideUp">
              <h2 className="text-4xl md:text-5xl heading-display mb-8">
                人気の<span className="text-accent">メニュー</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-8"></div>
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
                          <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">営業時間</h3>
                        <p className="text-white/80">毎日営業</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-white">11:00 - 14:00 / 17:00 - 21:00</p>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mt-4">
                        <p className="text-yellow-300 text-sm">⚠️ 火曜日のみ 11:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-slideInLeft animate-delay-200">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-kumakichi-gold rounded-full flex items-center justify-center mr-6">
                        <svg className="w-8 h-8 text-kumakichi-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">お電話</h3>
                        <p className="text-white/80">出前承ります</p>
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
                          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
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
                          <path d="M18.92,6.01C18.72,5.42 18.16,5 17.5,5H16V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5H6.5C5.84,5 5.28,5.42 5.08,6.01L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6.01M10,4H14V5H10V4M6.5,7H17.5L19,11H5L6.5,7Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-kumakichi-gold mb-2">駐車場</h3>
                        <p className="text-white/80">お車でも安心</p>
                      </div>
                    </div>
                    <div className="space-y-2">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1638.1409682385051!2d135.5532223165285!3d34.79884809744906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e33d28c1c3eb%3A0x434f9760c71a59f2!2z44Op44O844Oh44Oz54aK44GN44Gh!5e0!3m2!1sja!2sus!4v1759667009206!5m2!1sja!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
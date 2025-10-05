import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuItemCard from '@/components/MenuItemCard'
import { getMenuData } from '@/lib/menu'

export default function Menu() {
  const menuData = getMenuData()

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-chopstick-pattern bg-wood-texture">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 container-wide text-center text-white">
          <div className="animate-fadeIn">
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-elegant animate-slideUp">
              メニュー
            </h1>
            <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-8 animate-scaleUp animate-delay-300"></div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block animate-slideUp animate-delay-200">
              <p className="text-xl md:text-2xl font-japanese font-light mb-4">
                創業30年の伝統の味
              </p>
              <p className="text-lg text-white/90">
                職人が心を込めて作る本格ラーメンをお楽しみください
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-kumakichi-cream">
        <div className="container-wide section-padding">
          
          {/* Ramen Menu */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl heading-display mb-6">
                {menuData.ramen.title.replace('メニュー', '')}<span className="text-accent">メニュー</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-6"></div>
              <p className="text-xl text-kumakichi-gray-800">{menuData.ramen.subtitle}</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {menuData.ramen.items.map((item, index) => (
                <div key={index} className={`animate-delay-${(index + 1) * 100}`}>
                  <MenuItemCard item={item} layout="horizontal" showImage={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Rice Menu */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl heading-display mb-6">
                {menuData.rice.title.split('もの')[0]}<span className="text-accent">もの</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-6"></div>
              <p className="text-xl text-kumakichi-gray-800">{menuData.rice.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {menuData.rice.items.map((item, index) => (
                <div key={index} className={`animate-delay-${(index + 1) * 100}`}>
                  <MenuItemCard item={item} layout="vertical" showImage={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Side Menu */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl heading-display mb-6">
                {menuData.side.title.replace('メニュー', '')}<span className="text-accent">メニュー</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-6"></div>
              <p className="text-xl text-kumakichi-gray-800">{menuData.side.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {menuData.side.items.map((item, index) => (
                <div key={index} className={`animate-delay-${(index + 1) * 100}`}>
                  <MenuItemCard item={item} layout="vertical" showImage={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Drink Menu */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl heading-display mb-6">
                {menuData.drink.title.replace('メニュー', '')}<span className="text-accent">メニュー</span>
              </h2>
              <div className="h-1 w-16 bg-kumakichi-gold mx-auto mb-6"></div>
              <p className="text-xl text-kumakichi-gray-800">{menuData.drink.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {menuData.drink.items.map((item, index) => (
                <div key={index} className={`animate-delay-${(index + 1) * 100}`}>
                  <MenuItemCard item={item} layout="vertical" showImage={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Order Information */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-section-dark text-white rounded-3xl p-8 md:p-12 shadow-elegant-lg animate-slideUp">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-display font-bold mb-4">
                    ご注文<span className="text-kumakichi-gold">について</span>
                  </h3>
                  <div className="h-1 w-16 bg-kumakichi-gold mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {menuData.metadata.notes.map((note, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-kumakichi-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-kumakichi-dark font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-2xl font-display font-bold text-kumakichi-gold mb-4">
                      ご予約・お問い合わせ
                    </h4>
                    <a href="tel:06-6875-1430" className="text-4xl font-bold text-white hover:text-kumakichi-gold transition-colors duration-300">
                      06-6875-1430
                    </a>
                    <p className="text-white/80 mt-2">営業時間：11:00-23:00（L.O.22:30）</p>
                    <div className="mt-4 text-sm text-kumakichi-gold">
                      最終更新: {menuData.metadata.last_updated}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>

      <Footer />
    </main>
  )
}
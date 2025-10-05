export default function Footer() {
  return (
    <footer className="bg-section-dark text-white">
      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-kumakichi-red rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-4xl font-display font-bold text-white">熊</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">ラーメン熊きち</h3>
                <p className="text-kumakichi-gold text-sm">創業1976年の老舗ラーメン店</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              大阪府吹田市で1976年創業、長年愛され続ける本格ラーメン店。
              職人が心を込めて作る一杯をご堪能ください。
            </p>
            
            <div className="flex space-x-4">
              <a href="tel:06-6875-1430" className="btn-primary text-sm px-4 py-2">
                📞 電話注文
              </a>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-kumakichi-gold font-semibold text-sm">出前可能</span>
              </div>
            </div>
          </div>
          
          {/* Store Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-kumakichi-gold mb-4">店舗情報</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-kumakichi-gold">📍</span>
                <div>
                  <p className="text-white">大阪府吹田市新芦屋下9-6</p>
                  <p className="text-white/70">JR千里丘駅より北へ徒歩12分</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-kumakichi-gold">🚗</span>
                <p className="text-white/80">駐車場10台完備（無料）</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-kumakichi-gold">📅</span>
                <p className="text-white/80">定休日: 不定休</p>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-kumakichi-gold mb-4">営業案内</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-kumakichi-gold">🕐</span>
                <div>
                  <p className="text-white font-semibold">11:00 - 23:00</p>
                  <p className="text-white/70">(L.O. 22:30)</p>
                  <p className="text-yellow-300 text-xs mt-1">※麺がなくなれば終了</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-kumakichi-gold">📞</span>
                <a href="tel:06-6875-1430" className="text-white hover:text-kumakichi-gold transition-colors font-semibold">
                  06-6875-1430
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-kumakichi-gold">🏪</span>
                <p className="text-white/80">出前承ります</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                &copy; 2024 ラーメン熊きち All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <span>💳</span>
                <span>現金のみ</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🍜</span>
                <span>手作りワンタン</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏆</span>
                <span>創業1976年</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
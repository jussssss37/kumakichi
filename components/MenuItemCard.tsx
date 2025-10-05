'use client'

import Image from 'next/image'
import { MenuItem } from '@/lib/menu'

interface MenuItemCardProps {
  item: MenuItem
  layout?: 'horizontal' | 'vertical'
  showImage?: boolean
}

export default function MenuItemCard({
  item,
  layout = 'vertical',
  showImage = true
}: MenuItemCardProps) {
  // カテゴリが未設定の場合はラーメンとして扱う
  const category = item.category || 'ramen'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const imagePath = `${basePath}/images/menu/${category}/${item.image}`
  
  // 空の説明文にデフォルトテキストを設定
  const description = item.description || '店主が心を込めて作る一品です'
  
  // 空のアイコンにカテゴリ別のデフォルトアイコンを設定
  const getDefaultIcon = (category: string): string => {
    switch (category) {
      case 'ramen': return '🍜'
      case 'rice': return '🍛'
      case 'side': return '🥟'
      case 'drink': return '🍺'
      default: return '🍜'
    }
  }
  
  const icon = item.icon || getDefaultIcon(category)
  
  if (layout === 'horizontal') {
    return (
      <div className="card-elegant group animate-slideUp">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            {showImage ? (
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-elegant">
                <Image
                  src={imagePath}
                  alt={item.name}
                  width={192}
                  height={192}
                  className="object-cover"
                  onError={(e) => {
                    // 画像が見つからない場合は絵文字を表示
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-48 h-48 bg-gradient-to-br from-kumakichi-red to-red-600 rounded-2xl flex items-center justify-center">
                        <span class="text-7xl">${icon}</span>
                      </div>`
                    }
                  }}
                />
              </div>
            ) : (
              <div className="w-48 h-48 bg-gradient-to-br from-kumakichi-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-elegant">
                <span className="text-7xl">{icon}</span>
              </div>
            )}
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-kumakichi-dark">{item.name}</h3>
                {item.pieces && (
                  <p className="text-sm text-kumakichi-gray-800">({item.pieces}個入り)</p>
                )}
                {item.size && (
                  <p className="text-sm text-kumakichi-gray-800">({item.size})</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-kumakichi-gold">¥{item.price}</p>
                {item.popular && (
                  <span className="bg-kumakichi-red text-white px-2 py-1 rounded-full text-xs font-semibold mt-1 inline-block">
                    人気
                  </span>
                )}
              </div>
            </div>
            <p className="text-kumakichi-gray-800 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card-elegant text-center group animate-slideUp">
      {showImage ? (
        <div className="relative w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-elegant-lg">
          <Image
            src={imagePath}
            alt={item.name}
            width={224}
            height={224}
            className="object-cover"
            onError={(e) => {
              // 画像が見つからない場合は絵文字を表示
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<div class="w-56 h-56 bg-gradient-to-br from-kumakichi-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span class="text-8xl">${icon}</span>
                </div>`
              }
            }}
          />
        </div>
      ) : (
        <div className="w-56 h-56 bg-gradient-to-br from-kumakichi-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-elegant-lg">
          <span className="text-8xl">{icon}</span>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-display font-bold mb-3 text-kumakichi-dark">{item.name}</h3>
        {item.pieces && (
          <p className="text-sm text-kumakichi-gray-800 mb-1">({item.pieces}個入り)</p>
        )}
        {item.size && (
          <p className="text-sm text-kumakichi-gray-800 mb-1">({item.size})</p>
        )}
        <p className="text-2xl font-bold text-kumakichi-gold mb-4">¥{item.price}</p>
      </div>
      
      <p className="text-kumakichi-gray-800 text-sm leading-relaxed mb-4">{description}</p>
      
      {item.popular && (
        <div className="flex justify-center">
          <span className="bg-kumakichi-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            人気メニュー
          </span>
        </div>
      )}
    </div>
  )
}
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
  // セットメニューの画像はsideディレクトリにある
  const imageCategory = category === 'set' ? 'side' : category
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const imagePath = `${basePath}/images/menu/${imageCategory}/${item.image}`

  // 空の説明文にデフォルトテキストを設定
  const description = item.description || ''

  // 空のアイコンにカテゴリ別のデフォルトアイコンを設定
  const getDefaultIcon = (category: string): string => {
    switch (category) {
      case 'ramen': return '🍜'
      case 'rice': return '🍛'
      case 'side': return '🥟'
      case 'set': return '🍱'
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
                <p className="text-2xl font-bold text-kumakichi-gold">
                  {category === 'set' ? `+${item.price}円` : `${item.price}円`}
                </p>
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

  // 画像がない場合はシンプルな表示
  if (!item.image) {
    return (
      <div className="card-elegant group animate-slideUp h-full flex flex-col justify-center py-6 px-4 min-h-[140px]">
        <div className="text-center">
          <h3 className="text-base md:text-lg font-display font-bold mb-2 text-kumakichi-dark break-words">{item.name}</h3>
          {item.pieces && (
            <p className="text-xs text-kumakichi-gray-800 mb-1">({item.pieces}個入り)</p>
          )}
          {item.size && (
            <p className="text-xs text-kumakichi-gray-800 mb-1">({item.size})</p>
          )}
          {description && (
            <p className="text-kumakichi-gray-800 text-xs leading-relaxed mt-1 mb-1">{description}</p>
          )}
          <p className="text-xl font-bold text-kumakichi-gold mt-2">
            {category === 'set' ? `+${item.price}円` : `${item.price}円`}
          </p>
        </div>

        {item.popular && (
          <div className="flex justify-center mt-3">
            <span className="bg-kumakichi-red text-white px-2 py-1 rounded-full text-xs font-semibold">
              人気メニュー
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="card-elegant text-center group animate-slideUp">
      {showImage ? (
        <div className="relative w-full aspect-square mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-elegant-lg">
          <Image
            src={imagePath}
            alt={item.name}
            width={224}
            height={224}
            className="object-cover w-full h-full"
            onError={(e) => {
              // 画像が見つからない場合は絵文字を表示
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<div class="w-full aspect-square bg-gradient-to-br from-kumakichi-red to-red-600 rounded-2xl flex items-center justify-center">
                  <span class="text-8xl">${icon}</span>
                </div>`
              }
            }}
          />
        </div>
      ) : (
        <div className="w-full aspect-square bg-gradient-to-br from-kumakichi-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-elegant-lg">
          <span className="text-8xl">{icon}</span>
        </div>
      )}

      <div>
        <h3 className="text-lg md:text-xl font-display font-bold mb-3 text-kumakichi-dark break-words">{item.name}</h3>
        {item.pieces && (
          <p className="text-sm text-kumakichi-gray-800 mb-1">({item.pieces}個入り)</p>
        )}
        {item.size && (
          <p className="text-sm text-kumakichi-gray-800 mb-1">({item.size})</p>
        )}
        <p className="text-2xl font-bold text-kumakichi-gold mt-2">
          {category === 'set' ? `+${item.price}円` : `${item.price}円`}
        </p>
      </div>

      {description && (
        <p className="text-kumakichi-gray-800 text-sm leading-relaxed mt-4">{description}</p>
      )}

      {item.popular && (
        <div className="flex justify-center mt-4">
          <span className="bg-kumakichi-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            人気メニュー
          </span>
        </div>
      )}
    </div>
  )
}
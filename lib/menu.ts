import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export interface MenuItem {
  name: string
  price: number
  description: string
  icon: string
  image: string
  category?: string
  popular?: boolean
  pieces?: number
  size?: string
}

export interface MenuCategory {
  title: string
  subtitle: string
  items: MenuItem[]
}

export interface MenuData {
  ramen: MenuCategory
  rice: MenuCategory
  side: MenuCategory
  set: MenuCategory
  drink: MenuCategory
  metadata: {
    last_updated: string
    currency: string
    tax_included: boolean
    notes: string[]
  }
}

let cachedMenuData: MenuData | null = null

export function getMenuData(): MenuData {
  if (cachedMenuData) {
    return cachedMenuData
  }

  try {
    const menuFilePath = path.join(process.cwd(), 'data', 'menu.yaml')
    const fileContents = fs.readFileSync(menuFilePath, 'utf8')
    const menuData = yaml.load(fileContents) as MenuData
    
    cachedMenuData = menuData
    return menuData
  } catch (error) {
    console.error('Failed to load menu data:', error)
    // フォールバック用のダミーデータを返す
    return getFallbackMenuData()
  }
}

function getFallbackMenuData(): MenuData {
  return {
    ramen: {
      title: "ラーメンメニュー",
      subtitle: "熊きち自慢の本格ラーメン",
      items: [
        {
          name: "ワンタン麺",
          price: 850,
          description: "職人手作りのプリプリワンタンがたっぷり入った人気No.1メニュー",
          icon: "🍜",
          image: "wonton-ramen.jpg",
          category: "ramen",
          popular: true
        }
      ]
    },
    rice: {
      title: "ご飯もの",
      subtitle: "ラーメンとの相性抜群",
      items: []
    },
    side: {
      title: "サイドメニュー",
      subtitle: "お酒のお供にも最適",
      items: []
    },
    set: {
      title: "セットメニュー",
      subtitle: "お得なセット",
      items: []
    },
    drink: {
      title: "ドリンクメニュー",
      subtitle: "お食事のお供に",
      items: []
    },
    metadata: {
      last_updated: "2024-08-24",
      currency: "JPY",
      tax_included: true,
      notes: []
    }
  }
}

export function getMenuItemsByCategory(category: keyof Omit<MenuData, 'metadata'>): MenuItem[] {
  const menuData = getMenuData()
  return menuData[category].items
}

export function getPopularItems(): MenuItem[] {
  const menuData = getMenuData()
  const allItems = [
    ...menuData.ramen.items,
    ...menuData.rice.items,
    ...menuData.side.items,
    ...menuData.set.items,
    ...menuData.drink.items
  ]
  return allItems.filter(item => item.popular)
}

export function getMenuMetadata() {
  const menuData = getMenuData()
  return menuData.metadata
}

export interface BackgroundConfig {
  background_image: string
  background_overlay: string
  description: string
}

export interface BackgroundData {
  pages: {
    home: BackgroundConfig
    menu: BackgroundConfig
  }
}

let cachedBackgroundData: BackgroundData | null = null

export function getBackgroundData(): BackgroundData {
  if (cachedBackgroundData) {
    return cachedBackgroundData
  }

  try {
    const backgroundFilePath = path.join(process.cwd(), 'data', 'background.yaml')
    const fileContents = fs.readFileSync(backgroundFilePath, 'utf8')
    const backgroundData = yaml.load(fileContents) as BackgroundData

    cachedBackgroundData = backgroundData
    return backgroundData
  } catch (error) {
    console.error('Failed to load background data:', error)
    return {
      pages: {
        home: {
          background_image: "images/menu/ramen/men_misotya.jpg",
          background_overlay: "bg-black/70",
          description: "トップページの背景画像"
        },
        menu: {
          background_image: "images/menu/ramen/men_tya.jpg",
          background_overlay: "bg-black/50",
          description: "メニューページの背景画像"
        }
      }
    }
  }
}

export function getPageBackground(page: 'home' | 'menu'): BackgroundConfig {
  const backgroundData = getBackgroundData()
  return backgroundData.pages[page]
}
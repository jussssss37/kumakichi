import { Notice } from '@/lib/menu'

interface NoticeCardProps {
  notice: Notice
}

const noticeTypeStyles = {
  important: {
    bg: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
    textColor: 'text-red-800',
    badgeBg: 'bg-red-500',
    badgeText: 'text-white'
  },
  info: {
    bg: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    textColor: 'text-blue-800',
    badgeBg: 'bg-blue-500',
    badgeText: 'text-white'
  },
  warning: {
    bg: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    badgeBg: 'bg-yellow-500',
    badgeText: 'text-white'
  },
  event: {
    bg: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
    textColor: 'text-green-800',
    badgeBg: 'bg-green-500',
    badgeText: 'text-white'
  }
}

const noticeTypeLabels = {
  important: '重要',
  info: 'お知らせ',
  warning: '注意',
  event: 'イベント'
}

export default function NoticeCard({ notice }: NoticeCardProps) {
  const styles = noticeTypeStyles[notice.type]
  const label = noticeTypeLabels[notice.type]

  // 日付をフォーマット（YYYY-MM-DD → YYYY年MM月DD日）
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}年${month}月${day}日`
  }

  return (
    <div className={`${styles.bg} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-102`}>
      <div className="flex items-start gap-4">
        {/* アイコン */}
        <div className={`${styles.iconBg} rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0`}>
          <span className="text-3xl">{notice.icon}</span>
        </div>

        {/* コンテンツ */}
        <div className="flex-1 min-w-0">
          {/* バッジと日付 */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`${styles.badgeBg} ${styles.badgeText} text-xs font-bold px-3 py-1 rounded-full`}>
              {label}
            </span>
            <span className="text-sm text-gray-600">{formatDate(notice.date)}</span>
          </div>

          {/* タイトル */}
          <h3 className={`text-lg font-bold ${styles.textColor} mb-2`}>
            {notice.title}
          </h3>

          {/* 内容 */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {notice.content}
          </p>
        </div>
      </div>
    </div>
  )
}

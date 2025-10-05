#!/bin/bash

# 画像最適化スクリプト
# 使い方: ./scripts/optimize-images.sh

echo "画像を最適化しています..."

# ImageMagickがインストールされているか確認
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick がインストールされていません"
    echo "インストール: brew install imagemagick"
    exit 1
fi

# 最適化前のバックアップディレクトリ作成
BACKUP_DIR="public/images_backup_$(date +%Y%m%d_%H%M%S)"
echo "バックアップを作成中: $BACKUP_DIR"
cp -r public/images "$BACKUP_DIR"

# 画像を最適化（幅800px、品質85%に圧縮）
find public/images -type f \( -name "*.jpg" -o -name "*.JPG" \) | while read file; do
    echo "最適化中: $file"
    convert "$file" -resize '800x800>' -quality 85 "$file"
done

find public/images -type f \( -name "*.png" -o -name "*.PNG" \) | while read file; do
    echo "最適化中: $file"
    convert "$file" -resize '800x800>' "$file"
done

echo "✓ 最適化完了！"
echo "バックアップ: $BACKUP_DIR"

# 最適化後のサイズ確認
echo ""
echo "最適化後のファイルサイズ:"
find public/images -type f \( -name "*.jpg" -o -name "*.JPG" -o -name "*.png" -o -name "*.PNG" \) -exec ls -lh {} \; | awk '{print $5, $9}' | sort -hr | head -10

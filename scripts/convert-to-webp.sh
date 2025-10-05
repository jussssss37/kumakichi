#!/bin/bash

# WebP変換スクリプト（macOS用）
# 使い方: ./scripts/convert-to-webp.sh

echo "WebP形式に変換しています..."

# cwebpがインストールされているか確認
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp がインストールされていません"
    echo "インストール: brew install webp"
    exit 1
fi

# JPG/PNGをWebPに変換
find public/images -type f \( -name "*.jpg" -o -name "*.JPG" \) | while read file; do
    output="${file%.*}.webp"
    if [ ! -f "$output" ]; then
        echo "変換中: $file -> $output"
        cwebp -q 85 -resize 800 0 "$file" -o "$output"
    fi
done

echo "✓ WebP変換完了！"
echo ""
echo "元の画像とWebP画像のサイズ比較:"
find public/images/menu/ramen -name "*.jpg" -o -name "*.JPG" | head -5 | while read file; do
    webp="${file%.*}.webp"
    if [ -f "$webp" ]; then
        orig_size=$(ls -lh "$file" | awk '{print $5}')
        webp_size=$(ls -lh "$webp" | awk '{print $5}')
        echo "$(basename $file): $orig_size -> $(basename $webp): $webp_size"
    fi
done

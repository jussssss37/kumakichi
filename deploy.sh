#!/bin/bash

set -e

echo "🍜 ラーメン熊きち ホームページ デプロイスクリプト"
echo "================================================"

# プロジェクトルートに移動
cd "$(dirname "$0")"

echo "📦 アプリケーションをビルド中..."
npm run build

echo "☁️  S3バケット名を取得中..."
if ! BUCKET_NAME=$(cd terraform && terraform output -raw s3_bucket_name 2>/dev/null); then
    echo "❌ エラー: Terraformの出力が取得できません。先にインフラを構築してください。"
    echo "   cd terraform && terraform apply"
    exit 1
fi

echo "📤 S3にファイルをアップロード中... (バケット: $BUCKET_NAME)"
aws s3 sync out/ s3://$BUCKET_NAME --delete --exclude "*.DS_Store"

echo "🔄 CloudFrontのキャッシュを無効化中..."
if DISTRIBUTION_ID=$(cd terraform && terraform output -raw cloudfront_distribution_id 2>/dev/null); then
    INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --query 'Invalidation.Id' --output text)
    echo "   無効化ID: $INVALIDATION_ID"
else
    echo "⚠️  警告: CloudFront Distribution IDが取得できませんでした"
fi

echo ""
echo "✅ デプロイが完了しました！"
echo ""
echo "🌐 ウェブサイトURL:"
if WEBSITE_URL=$(cd terraform && terraform output -raw website_url 2>/dev/null); then
    echo "   $WEBSITE_URL"
else
    echo "   URL の取得に失敗しました"
fi

echo ""
echo "📋 次のステップ:"
echo "   - CloudFrontの無効化完了まで数分お待ちください"
echo "   - ブラウザでウェブサイトにアクセスして確認してください"
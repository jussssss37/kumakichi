# ラーメン熊きち ホームページ

大阪府吹田市にあるラーメン熊きちの公式ホームページです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データ管理**: YAML
- **デプロイ**: AWS (S3 + CloudFront)
- **インフラ**: Terraform

## プロジェクト構成

```
kumakichi/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # レイアウトコンポーネント
│   ├── page.tsx           # トップページ
│   └── menu/
│       └── page.tsx       # メニューページ
├── components/            # 共通コンポーネント
│   ├── Header.tsx         # ヘッダー
│   ├── Footer.tsx         # フッター
│   └── MenuItemCard.tsx   # メニューアイテムカード
├── lib/                   # ユーティリティライブラリ
│   └── menu.ts            # メニューデータ処理
├── data/                  # データファイル
│   └── menu.yaml          # メニューデータ（YAML）
├── public/images/         # 画像ファイル
│   ├── menu/              # メニュー画像
│   │   ├── ramen/         # ラーメン画像
│   │   ├── rice/          # ご飯もの画像
│   │   ├── side/          # サイドメニュー画像
│   │   └── drink/         # ドリンク画像
│   ├── store/             # 店舗画像
│   └── hero/              # ヒーロー画像
├── terraform/             # インフラ構成
└── package.json          # 依存関係
```

## ✨ 新デザインの特徴

### 🎨 参考サイト分析による洗練されたデザイン
参考にした3つのラーメン店サイト（町田商店、馬力屋、無尽蔵）の優れた要素を取り入れて完全リニューアル：

**デザインコンセプト**
- **ダークモダン**: 黒を基調とした洗練されたUI（町田商店風）
- **和モダン**: 日本的な美意識と現代性の融合（無尽蔵風）
- **感情訴求**: 味の体験を重視したコンテンツ設計（馬力屋風）

**色彩設計**
- **メインカラー**: 深紅（#C41E3A）- 情熱と伝統を表現
- **アクセント**: ゴールド（#D4AF37）- 高級感と特別感
- **ベース**: ダークグレー（#1F1F1F）- モダンで洗練された印象
- **サブ**: クリーム（#F8F5F0）- 温かみと親しみやすさ

### 🚀 最新技術・UX要素
- **スクロール連動ヘッダー**: 透明→ダーク背景への自然な変化
- **アニメーション**: fadeIn、slideUp、float効果で滑らかな表現
- **レスポンシブ**: モバイルファースト設計
- **アクセシビリティ**: aria-label、適切なコントラスト比
- **パフォーマンス**: CSS-in-JSによる最適化

### 🍜 ラーメン店専用UI
- **店主メッセージ**: 人間味あふれるストーリーテリング
- **こだわり3本柱**: 職人の技、厳選素材、伝統の味
- **詳細メニューカード**: 絵文字アイコン、詳細説明、人気度表示
- **注文情報セクション**: 6段階の注文ガイド

### 📊 YAML ベースのメニュー管理システム
- **データ駆動**: メニューデータをYAMLファイルで一元管理
- **画像対応**: カテゴリ別の画像ディレクトリ構造
- **メタデータ**: 更新日、価格情報、注意事項を含む
- **型安全**: TypeScriptによる型定義で開発効率向上

## 開発環境のセットアップ

### 1. 必要なツールのインストール

```bash
# Node.js依存関係のインストール
npm install

# 画像最適化ツール（ImageMagick）のインストール
brew install imagemagick
```

### 2. 画像の最適化

画像を追加した後は、必ず最適化してください（ページ読み込み速度向上のため）：

```bash
# 画像を最適化（リサイズ・圧縮）
./scripts/optimize-images.sh
```

**重要**: 画像最適化により、ファイルサイズが70-80%削減されます（例: 800KB → 150KB）

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてアクセスできます。

### 4. ビルドの確認

```bash
npm run build
npm run start
```

## メニュー管理

### YAMLファイルでのメニュー管理

メニューデータは `data/menu.yaml` で管理されています：

```yaml
ramen:
  title: "ラーメンメニュー"
  subtitle: "熊きち自慢の本格ラーメン"
  items:
    - name: "ワンタン麺"
      price: 850
      description: "職人手作りのプリプリワンタン..."
      popular: true
      icon: "🍜"
      image: "wonton-ramen.jpg"
      category: "ramen"
```

### 画像管理

画像ファイルは以下のディレクトリ構造で管理：

```
public/images/menu/
├── ramen/          # ラーメン画像
├── rice/           # ご飯もの画像  
├── side/           # サイドメニュー画像
└── drink/          # ドリンク画像
```

### メニューの追加・変更

1. `data/menu.yaml` を編集
2. 対応する画像を適切なディレクトリに配置
3. 開発サーバーを再起動

## デプロイ手順

**推奨**: GitHub Pagesへのデプロイ（無料、簡単）

詳細は [GITHUB_PAGES_DEPLOY.md](./GITHUB_PAGES_DEPLOY.md) を参照してください。

**カスタムドメイン設定**: 独自ドメイン（例: `kumakichi-ramen.jp`）を使用する場合は、GITHUB_PAGES_DEPLOY.md の「カスタムドメインの設定」セクションを参照してください。

---

### 1. Terraform による AWS インフラ構築（オプション）

#### 前提条件
- AWS CLI が設定されていること
- Terraform がインストールされていること

#### インフラ構築手順

1. terraform ディレクトリに移動
```bash
cd terraform
```

2. terraform.tfvars ファイルを作成（terraform.tfvars.example を参考）
```bash
cp terraform.tfvars.example terraform.tfvars
# terraform.tfvars を編集してバケット名を設定
```

3. Terraform 初期化
```bash
terraform init
```

4. プランの確認
```bash
terraform plan
```

5. インフラ構築
```bash
terraform apply
```

### 2. アプリケーションのデプロイ

1. プロジェクトルートに戻る
```bash
cd ..
```

2. 本番用ビルド
```bash
npm run build
```

3. S3バケットにファイルをアップロード
```bash
# Terraform の出力からバケット名を取得
BUCKET_NAME=$(cd terraform && terraform output -raw s3_bucket_name)

# ビルドファイルをS3にアップロード
aws s3 sync out/ s3://$BUCKET_NAME --delete

# CloudFrontのキャッシュを無効化
DISTRIBUTION_ID=$(cd terraform && terraform output -raw cloudfront_distribution_id)
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
```

### 3. カスタムドメイン設定（オプション）

カスタムドメインを使用する場合：

1. Route53 でホストゾーンを作成
2. ACM で SSL証明書を取得（us-east-1 リージョン）
3. terraform.tfvars にドメイン情報を追加
```hcl
domain_name = "your-domain.com"
hosted_zone_id = "Z123456789"
ssl_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/..."
```
4. terraform apply を再実行

## 自動デプロイスクリプト

便利なデプロイスクリプトを作成することもできます：

```bash
#!/bin/bash
# deploy.sh

echo "Building application..."
npm run build

echo "Uploading to S3..."
BUCKET_NAME=$(cd terraform && terraform output -raw s3_bucket_name)
aws s3 sync out/ s3://$BUCKET_NAME --delete

echo "Invalidating CloudFront cache..."
DISTRIBUTION_ID=$(cd terraform && terraform output -raw cloudfront_distribution_id)
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment completed!"
echo "Website URL: $(cd terraform && terraform output -raw website_url)"
```

## メニュー画像の追加方法

### 1. 画像の準備
- **推奨サイズ**: 400x400px以上の正方形
- **ファイル形式**: JPG, PNG
- **ファイルサイズ**: 500KB以下

### 2. 画像の配置
```bash
# 例：ワンタン麺の画像を追加する場合
public/images/menu/ramen/wonton-ramen.jpg
```

### 3. YAMLファイルの更新
```yaml
- name: "ワンタン麺"
  image: "wonton-ramen.jpg"  # ファイル名のみ指定
```

### 4. フォールバック機能
画像が見つからない場合は、自動的に絵文字アイコンが表示されます。

## 開発時の注意事項

### 仮想環境について
要件通り、ローカル開発時は以下のように仮想環境を使用することを推奨：

```bash
# Node.js の場合（nodenv や nvm を使用）
nodenv local 18.17.0

# または Docker を使用
docker run -it --rm -v $(pwd):/app -w /app -p 3000:3000 node:18-alpine npm run dev
```

### TypeScript 型安全性
- メニューデータの型定義は `lib/menu.ts` で管理
- 新しいプロパティを追加する場合は型定義も更新

### パフォーマンス最適化
- Next.js の Static Export を使用
- 画像最適化のため next/image を使用
- CSS-in-JS による効率的なスタイリング

## トラブルシューティング

### ビルドエラー
```bash
# 依存関係のクリーンインストール
rm -rf node_modules package-lock.json
npm install
```

### YAML読み込みエラー
```bash
# YAML構文チェック
npx js-yaml data/menu.yaml
```

### 画像表示されない場合
1. ファイルパスが正しいか確認
2. ファイル名の大文字小文字が一致しているか確認
3. ファイル権限が適切か確認

## ライセンス

このプロジェクトはラーメン熊きちの公式ホームページです。

## お問い合わせ

ラーメン熊きち
- 住所: 大阪府吹田市新芦屋下9-6
- 電話: 06-6875-1430
- 営業時間: 11:00-23:00 (L.O.22:30)
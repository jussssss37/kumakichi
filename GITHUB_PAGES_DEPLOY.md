# GitHub Pages デプロイ手順

このドキュメントでは、ラーメン熊きちのホームページをGitHub Pagesで公開する手順を説明します。

## 前提条件

- GitHubアカウントを持っていること
- Git がインストールされていること
- Node.js 18以上がインストールされていること

## 手順

### 1. GitHubリポジトリの作成

1. [GitHub](https://github.com) にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ設定:
   - Repository name: `kumakichi` (または任意の名前)
   - Description: `ラーメン熊きち 公式ホームページ`
   - **Public** を選択（重要: GitHub Pages無料プランはpublicのみ）
   - 「Add a README file」は**チェックしない**
4. 「Create repository」をクリック

### 2. ローカルリポジトリとGitHubを連携

GitHubリポジトリ作成後に表示される手順に従って、ターミナルで以下を実行:

```bash
# プロジェクトディレクトリに移動
cd /Users/kitakosaku/workspace/kumakichi

# 全ファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: Add ramen kumakichi website"

# GitHubリモートリポジトリを追加（<username>は自分のGitHubユーザー名に変更）
git remote add origin https://github.com/<username>/kumakichi.git

# masterブランチにpush
git push -u origin master
```

### 3. GitHub Pages の有効化

1. GitHubのリポジトリページにアクセス
2. 「Settings」タブをクリック
3. 左サイドバーの「Pages」をクリック
4. **Source** セクションで:
   - 「Source」を **GitHub Actions** に変更
5. 自動的にワークフローが実行されます

### 4. デプロイの確認

1. リポジトリの「Actions」タブをクリック
2. 「Deploy to GitHub Pages」ワークフローの実行状況を確認
3. ✅ 緑のチェックマークが表示されたらデプロイ完了
4. Settings → Pages に戻ると、公開URLが表示されます:
   ```
   https://<username>.github.io/kumakichi/
   ```

### 5. サイトの動作確認

表示されたURLにアクセスして、ホームページが正しく表示されることを確認してください。

---

## カスタムドメインの設定（オプション）

独自ドメイン（例: `kumakichi-ramen.jp`）を使用する場合の手順です。

### 事前準備

カスタムドメインを使用する場合、`basePath`設定を削除する必要があります。

**重要**: カスタムドメインを使う場合のみ以下の設定変更を行ってください。

#### next.config.jsの変更

`next.config.js` を以下のように変更:

```javascript
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// カスタムドメイン使用時は空文字列に
const basePath = ''  // 変更: isProd ? '/kumakichi' : '' から '' に

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
}

module.exports = nextConfig
```

変更をコミット:

```bash
git add next.config.js
git commit -m "Remove basePath for custom domain"
git push
```

### 1. ドメインの購入

お名前.comなどのドメインレジストラで `.jp` または `.com` ドメインを購入します。

**推奨ドメイン**:
- お名前.com: `.jp` ドメイン（年間約¥3,000）
- Google Domains: `.com` ドメイン（年間約$12）

### 2. CNAME ファイルの作成

プロジェクトの `public/CNAME` ファイルに購入したドメインを記載:

```bash
echo "kumakichi-ramen.jp" > public/CNAME
```

### 3. DNS設定

#### お名前.com の場合:

1. お名前.com Navi にログイン
2. 「DNS設定」→「DNSレコード設定」を選択
3. 以下のレコードを追加:

**Apexドメイン（kumakichi-ramen.jp）の場合:**

| タイプ | ホスト名 | VALUE | TTL |
|--------|----------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**wwwサブドメインも使う場合:**

| タイプ | ホスト名 | VALUE | TTL |
|--------|----------|-------|-----|
| CNAME | www | \<username\>.github.io. | 3600 |

4. 「追加」→「確認画面へ進む」→「設定する」

### 4. GitHub でカスタムドメインを設定

1. リポジトリの Settings → Pages
2. 「Custom domain」に `kumakichi-ramen.jp` を入力
3. 「Save」をクリック
4. 「Enforce HTTPS」にチェック（SSL証明書の発行には最大24時間かかる場合があります）

### 5. 変更をpush

```bash
git add public/CNAME
git commit -m "Add custom domain configuration"
git push
```

### 6. DNS反映の確認

DNS設定が反映されるまで10分〜1時間ほどかかります。以下のコマンドで確認:

```bash
# Aレコードの確認
dig kumakichi-ramen.jp

# CNAMEレコードの確認
dig www.kumakichi-ramen.jp
```

### 7. HTTPS の有効化

1. DNS設定が反映された後、GitHubのPages設定に戻る
2. 「Enforce HTTPS」にチェックを入れる
3. SSL証明書が自動で発行されます（最大24時間）

### 完了

カスタムドメインでサイトにアクセスできることを確認してください:
- https://kumakichi-ramen.jp

---

## カスタムドメイン設定のまとめ

### 必要な変更ファイル

1. **next.config.js**: `basePath` を空文字列に変更
2. **public/CNAME**: カスタムドメインを記載

### 設定先

1. **ドメインレジストラ（お名前.comなど）**: DNS設定（Aレコード4つ）
2. **GitHub Pages**: カスタムドメインとHTTPS設定

### 所要時間

- DNS設定: 10分〜1時間
- SSL証明書発行: 最大24時間
- **合計**: 1〜24時間

### トラブルシューティング

**ドメインにアクセスできない場合**:
1. DNS設定が正しいか確認（`dig` コマンド）
2. GitHub Pagesの設定でドメインが保存されているか確認
3. ブラウザのキャッシュをクリア

**SSL証明書エラーが出る場合**:
1. DNS設定が完全に反映されるまで待つ（最大48時間）
2. GitHub Pagesの「Enforce HTTPS」を一度オフにして再度オンにする

**画像やCSSが表示されない場合**:
1. `next.config.js` の `basePath` が空文字列になっているか確認
2. 再ビルドしてpush

---

## 更新手順

ホームページを更新する場合:

```bash
# ファイルを編集後

# 変更をステージング
git add .

# コミット
git commit -m "Update menu items"

# push（自動的にデプロイされます）
git push
```

GitHub Actionsが自動的に実行され、2-3分でサイトが更新されます。

---

## トラブルシューティング

### デプロイが失敗する場合

1. Actions タブでエラーログを確認
2. ローカルでビルドが通るか確認:
   ```bash
   npm run build
   ```

### カスタムドメインが表示されない場合

1. DNS設定が正しいか確認
2. DNS反映を待つ（最大24-48時間）
3. ブラウザキャッシュをクリア

### SSL証明書エラーが出る場合

1. GitHub Pages設定で「Enforce HTTPS」を一度オフにしてから再度オンにする
2. 24時間待つ

---

## 参考リンク

- [GitHub Pages 公式ドキュメント](https://docs.github.com/ja/pages)
- [カスタムドメイン設定](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## コスト

- **GitHub Pages**: 無料
- **カスタムドメイン (.jp)**: 年間 ¥3,000前後（お名前.comの場合）
- **SSL証明書**: 無料（GitHub Pagesが自動発行）

**合計**: 年間 ¥3,000のみ

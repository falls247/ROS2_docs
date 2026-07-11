# ROS2 Jazzy チームドキュメント

ROS2 Jazzy Jalisco（LTS）を対象としたチーム共有の内部リファレンスサイト。
用語検索機能付きで、概念・CLIコマンド・用語集・サンプルコードを素早く参照できる。

## 機能

- **用語検索**: クライアントサイドJavaScript（simple-jekyll-search）による全文検索
- **カテゴリ別ドキュメント**: 概念 / CLIリファレンス / 用語集 / サンプルコード
- **GitHub Pages対応**: 追加サーバー不要でデプロイ可能
- **対象バージョン**: ROS2 Jazzy Jalisco（2024〜2029年LTSサポート）

## フォルダ構成

```
ROS2_docs/
├── _config.yml          # Jekyll設定（サイト名・URL・プラグイン等）
├── _layouts/            # HTMLレイアウトテンプレート
│   ├── default.html
│   └── doc.html
├── _includes/           # 共通パーツ
│   ├── header.html
│   ├── sidebar.html
│   └── search.html      # 検索UIコンポーネント
├── _docs/               # ドキュメント本体（Markdown）
│   ├── concepts/        # 概念説明（Node, Topic, Service, Action, TF2等）
│   ├── commands/        # CLIリファレンス（ros2 node, ros2 topic等）
│   ├── glossary/        # 用語集
│   └── examples/        # サンプルコード
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── search.js    # simple-jekyll-searchの設定
├── search.json          # 検索インデックス（Jekyllが自動生成）
├── index.md             # トップページ
├── Gemfile              # Ruby依存関係
└── README.md            # このファイル
```

## セットアップ

### 前提条件

- Ruby 3.1以上
- Bundler 2.x（`gem install bundler`）

### ローカル起動

```bash
# 依存関係のインストール
bundle install

# 開発サーバー起動
bundle exec jekyll serve

# ブラウザで確認
# http://localhost:4000
```

ファイルを変更すると自動でリビルドされる（`--livereload` オプションで自動リロードも可能）。

```bash
bundle exec jekyll serve --livereload
```

## ドキュメントの追加方法

### ファイルの作成

`_docs/` 配下の適切なカテゴリフォルダに `.md` ファイルを追加する。

```
_docs/concepts/node.md
_docs/commands/ros2-topic.md
_docs/glossary/qos.md
```

### Front Matter

各ドキュメントの先頭に以下のFront Matterを記載する。

```yaml
---
title: "Node（ノード）"
category: concepts
tags: [node, ros2-basics, jazzy]
description: "ROS2における計算の基本単位。Publisher/Subscriberとして機能する。"
order: 1
---
```

| フィールド | 説明 |
|---|---|
| `title` | ページタイトル（検索対象） |
| `category` | `concepts` / `commands` / `glossary` / `examples` |
| `tags` | 検索タグ（配列） |
| `description` | 検索結果に表示される説明文 |
| `order` | サイドバー内の表示順 |

### 検索インデックスへの反映

Front Matterの `title`・`tags`・`description` が `search.json` に自動的に含まれ、
サイトビルド時に検索インデックスとして生成される。追加作業は不要。

## GitHub Pagesへのデプロイ

### 初回設定

1. `_config.yml` の `baseurl` をリポジトリ名に設定する（個人リポジトリ直下の場合は空白）

```yaml
baseurl: "/ROS2_docs"   # リポジトリ名
url: "https://<organization>.github.io"
```

2. GitHubリポジトリの Settings > Pages > Source を `main` ブランチの `/docs` フォルダまたは `gh-pages` ブランチに設定する。

### デプロイフロー（GitHub Actions推奨）

`.github/workflows/deploy.yml` を用意してプッシュ時に自動ビルド・デプロイする構成を推奨。
詳細は `dev/docs/deploy.md` を参照（作成予定）。

## 貢献ガイドライン

### ブランチ運用

```
main        # 本番（GitHub Pagesにデプロイされる）
dev         # 開発統合ブランチ
feat/xxx    # 新規ドキュメント追加
fix/xxx     # 誤記・修正
```

`main` への直接プッシュ禁止。必ず `dev` または topicブランチ経由でPRを作成すること。

### コミットメッセージ規則

```
yyyyMMdd_{prefix}_{作業内容（英語30文字以内）}
```

| prefix | 用途 |
|---|---|
| `feat` | 新規ドキュメント追加 |
| `fix` | 誤記・リンク修正 |
| `docs` | README・ガイドラインの更新 |
| `refactor` | 構成変更・リネーム |
| `chore` | Jekyll設定・依存関係更新 |

例:
```
20260711_feat_add-ros2-topic-command-reference
20260711_fix_correct-qos-policy-description
```

### プルリクエスト

1. topicブランチで作業・コミット
2. `dev` ブランチへPRを作成
3. レビュー後マージ
4. リリースタイミングで `dev` → `main` へマージ（GitHub Pagesに反映）

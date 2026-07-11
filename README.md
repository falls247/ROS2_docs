# ROS 2 実践ドキュメント

ROS 2 Jazzyを基礎概念から産業用ロボット・シミュレーション活用まで段階的に学ぶ日本語ドキュメントサイト。

## 技術構成

- Astro 7
- Starlight
- Markdown / MDX
- GitHub Actions
- GitHub Pages

## ローカル開発

前提：Node.js 24

```bash
npm install
npm run dev
```

`http://localhost:4321/ROS2_docs/`を開く。

## ビルド

```bash
npm run build
npm run preview
```

## コンテンツ

ドキュメントは`src/content/docs/`配下へ配置する。

```text
src/content/docs/
├── index.mdx
├── start/
├── concepts/
├── installation/
├── workspace/
└── reference/
```

## 公開

`main`へのPushで`.github/workflows/deploy.yml`が実行され、GitHub Pagesへ公開される。

公開予定URL：`https://falls247.github.io/ROS2_docs/`

初回のみGitHubリポジトリの **Settings → Pages → Source** を **GitHub Actions** に設定する。

## 方針

- 基準環境：Ubuntu 24.04 / ROS 2 Jazzy
- 1ページ1テーマ
- 概念、手順、期待結果、失敗例をセットで記載
- 公式ドキュメントの転載ではなく、実践的な独自解説を作成
- 将来はMoveIt 2、Isaac Sim、cuRobo、FANUC CRXへ拡張

詳細は[CONTRIBUTING.md](./CONTRIBUTING.md)を参照。

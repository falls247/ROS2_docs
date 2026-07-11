import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://falls247.github.io',
  base: '/ROS2_docs',
  integrations: [
    starlight({
      title: 'ROS 2 実践ドキュメント',
      description:
        'ROS 2 Jazzyを基礎概念から産業用ロボット・シミュレーション活用まで段階的に学ぶ日本語ドキュメント',
      favicon: '/ROS2_docs/favicon.svg',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/falls247/ROS2_docs',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/falls247/ROS2_docs/edit/main/src/content/docs/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      sidebar: [
        { label: 'ホーム', slug: 'index' },
        {
          label: 'はじめに',
          items: [
            { label: 'このサイトについて', slug: 'start/about' },
            { label: '学習ロードマップ', slug: 'start/roadmap' },
          ],
        },
        {
          label: '01. ROS 2 基礎概念',
          items: [
            { label: '全体像', slug: 'concepts/overview' },
            { label: 'Node', slug: 'concepts/node' },
            { label: 'Topic', slug: 'concepts/topic' },
            { label: 'Service', slug: 'concepts/service' },
            { label: 'Action', slug: 'concepts/action' },
          ],
        },
        {
          label: '02. 環境構築',
          items: [{ label: 'Ubuntu 24.04 / Jazzy', slug: 'installation/jazzy' }],
        },
        {
          label: '03. CLIとワークスペース',
          items: [{ label: 'Workspaceとcolcon', slug: 'workspace/colcon' }],
        },
        {
          label: 'リファレンス',
          items: [{ label: '用語集', slug: 'reference/glossary' }],
        },
      ],
    }),
  ],
});

---
title: ROS 2の全体像
description: ROS 2の構成要素と通信モデルを俯瞰する
last_verified: 2026-07-11
---

ROS 2は単一アプリケーションではなく、複数のNodeが通信してロボットシステムを構成するためのミドルウェアと開発基盤。

## 基本構成

![センサー、認識、計画、制御、アクチュエータをROS 2通信で接続したシステム構成図](/ROS2_docs/diagrams/ros2-overview.svg)

*センサーから認識・計画・制御へ処理を分割し、Topic・Service・Actionで接続する代表的な構成。*

各Nodeを独立した責務に分けることで、センサー交換、認識アルゴリズム変更、実機とシミュレーションの切り替えを局所化できる。

## 通信方式の使い分け

![Topic、Service、Actionの用途と判断基準](/ROS2_docs/diagrams/communication-selection.svg)

| 方式 | 用途 | 例 |
|---|---|---|
| Topic | 継続的なデータ配信 | カメラ画像、Joint State |
| Service | 短時間の要求と応答 | 設定変更、状態取得 |
| Action | 時間のかかる処理 | ロボット移動、ナビゲーション |
| Parameter | Node設定値 | 周期、閾値、フレーム名 |

判断の目安：

- データを継続的に配る：Topic
- 短時間の処理結果を待つ：Service
- 進捗を確認しながら長時間処理を待つ：Action

## ROS 2が提供するもの

- Node間通信
- Interface定義
- Discovery
- QoS制御
- Launch
- Logging
- Bag記録
- TF座標変換
- パッケージとビルドの仕組み

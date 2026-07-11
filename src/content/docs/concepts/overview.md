---
title: ROS 2の全体像
description: ROS 2の構成要素と通信モデルを俯瞰する
---

ROS 2は単一アプリケーションではなく、複数のNodeが通信してロボットシステムを構成するためのミドルウェアと開発基盤。

## 基本構成

```mermaid
flowchart LR
  Sensor[センサーNode] -- Topic --> Perception[認識Node]
  Perception -- Topic --> Planner[計画Node]
  Planner -- Action --> Controller[制御Node]
  Config[設定UI] -- Service --> Controller
  Controller -- Topic --> Monitor[監視Node]
```

## 通信方式の使い分け

| 方式 | 用途 | 例 |
|---|---|---|
| Topic | 継続的なデータ配信 | カメラ画像、Joint State |
| Service | 短時間の要求と応答 | 設定変更、状態取得 |
| Action | 時間のかかる処理 | ロボット移動、ナビゲーション |
| Parameter | Node設定値 | 周期、閾値、フレーム名 |

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

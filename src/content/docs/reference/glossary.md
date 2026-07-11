---
title: ROS 2 用語集
description: ROS 2とロボット開発で頻出する用語の短い定義
---

| 用語 | 定義 |
|---|---|
| Node | ROS 2システム内の独立した処理単位 |
| Topic | PublisherからSubscriberへの非同期データ配信経路 |
| Service | RequestとResponseによる短時間の要求応答通信 |
| Action | Goal、Feedback、Resultを持つ長時間処理向け通信 |
| Interface | Message、Service、Actionのデータ型定義 |
| DDS | ROS 2の通信基盤として使われるデータ配信ミドルウェア |
| QoS | 信頼性、履歴、寿命など通信品質を調整する設定 |
| Discovery | Nodeや通信Endpointをネットワーク上で相互発見する仕組み |
| Domain ID | 同一ネットワーク内のROS 2通信グループを分離する識別値 |
| Workspace | ROS 2パッケージをまとめてビルドする作業領域 |
| colcon | 複数ROS 2パッケージを依存順にビルドするツール |
| Underlay | Overlayの基盤として先に読み込む既存環境 |
| Overlay | Underlayへ追加する自作・追加パッケージ環境 |
| URDF | ロボットのLink、Joint、形状、慣性などを表すXML形式 |
| TF2 | 座標フレーム間の時系列変換を管理する仕組み |
| ros2_control | Hardware InterfaceとControllerを分離する制御フレームワーク |

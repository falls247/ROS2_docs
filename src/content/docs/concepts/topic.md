---
title: Topic（トピック）
description: PublisherとSubscriberによる非同期データ配信
---

TopicはPublisherからSubscriberへ継続的にデータを配信する非同期通信方式。

## 特徴

- PublisherはSubscriberの処理完了を待たない
- 1対1、1対多、多対多の構成が可能
- QoSで信頼性、履歴、キュー深度などを調整する

## 動作確認

ターミナル1：

```bash
source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_cpp talker
```

ターミナル2：

```bash
source /opt/ros/jazzy/setup.bash
ros2 topic list
ros2 topic info /chatter
ros2 topic echo /chatter
```

## 判断基準

連続値やイベントを複数Nodeへ配信するならTopic。要求元が処理結果を待つ必要がある場合、ServiceまたはActionを検討する。

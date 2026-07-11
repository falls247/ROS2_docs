---
title: Node（ノード）
description: ROS 2における処理単位Nodeの役割と確認方法
last_verified: 2026-07-11
---

NodeはROS 2システム内の独立した処理単位。センサー入力、認識、計画、制御などを役割ごとに分割する。

## Nodeを分ける理由

- 障害範囲を限定できる
- 機能単位で再利用できる
- 別言語・別プロセスを組み合わせられる
- 通信状態を観察しやすい

## 確認コマンド

```bash
source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_cpp talker
```

別ターミナルから確認する。

```bash
source /opt/ros/jazzy/setup.bash
ros2 node list
ros2 node info /talker
```

## 期待結果

`ros2 node list`に`/talker`が表示される。`ros2 node info /talker`ではPublisher、Subscriber、Service、Actionの一覧を確認可能。

:::tip
Node名が見えない場合、両ターミナルの`ROS_DOMAIN_ID`とDDS設定を確認する。
:::

---
title: Service（サービス）
description: ROS 2の同期的なRequest/Response通信
last_verified: 2026-07-11
---

ServiceはClientがRequestを送り、ServerがResponseを返す通信方式。短時間で完了する処理に向く。

## 通信構造

![ClientがServerへRequestを送り、Responseを受け取る構成図](/ROS2_docs/diagrams/service-request-response.svg)

*ClientはResponseを待つため、処理時間が短く、途中経過やキャンセルが不要な用途に適する。*

## 適する処理

- 現在状態の取得
- 設定の変更
- センサーのリセット
- 短時間の計算要求

## 適さない処理

ロボット移動のように完了まで時間がかかり、途中経過やキャンセルが必要な処理。こうした処理にはActionを使う。

## CLI例

```bash
ros2 service list
ros2 service type /add_two_ints
ros2 interface show example_interfaces/srv/AddTwoInts
ros2 service call /add_two_ints example_interfaces/srv/AddTwoInts "{a: 2, b: 3}"
```

---
title: Ubuntu 24.04へROS 2 Jazzyを導入
description: ROS 2 Jazzyの導入前提とインストール後の確認項目
last_verified: 2026-07-11
---

:::caution
パッケージ配布手順は更新されるため、実行前にROS 2 Jazzy公式インストール手順を確認する。本ページは検証項目と作業の流れを示す。
:::

## 前提

- Ubuntu 24.04 LTS
- `sudo`権限
- UTF-8ロケール
- インターネット接続

## 導入後の確認

```bash
source /opt/ros/jazzy/setup.bash
printenv ROS_DISTRO
ros2 --help
```

期待値：

```text
jazzy
```

## Talker / Listener確認

ターミナル1：

```bash
source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_cpp talker
```

ターミナル2：

```bash
source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_py listener
```

文字列メッセージが継続的に受信されれば、基本的なDDS通信まで動作している。

## シェル起動時に読み込む

```bash
echo 'source /opt/ros/jazzy/setup.bash' >> ~/.bashrc
source ~/.bashrc
```

複数ディストリビューションを併用する環境では自動読み込みせず、作業ごとに明示的に`source`する方が安全。

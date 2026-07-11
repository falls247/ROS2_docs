---
title: Workspaceとcolcon
description: ROS 2ワークスペース、Underlay、Overlay、colcon buildの基本
---

## Workspace構成

```text
ros2_ws/
├── src/      # ソースパッケージ
├── build/    # ビルド中間生成物
├── install/  # 実行環境とsetupファイル
└── log/      # ビルドログ
```

## 最小手順

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

## UnderlayとOverlay

- `/opt/ros/jazzy`：基盤となるUnderlay
- `~/ros2_ws/install`：自作パッケージを追加するOverlay

Overlayの`setup.bash`は、ビルド時に参照したUnderlay情報を含む。異なるROSディストリビューションを混在させない。

## よくある問題

### 変更が反映されない

```bash
source ~/ros2_ws/install/setup.bash
```

新しいターミナルではOverlayが読み込まれていない可能性がある。

### Python編集のたびにビルドが必要

開発時は`--symlink-install`を使用する。Pythonファイル変更を`install`側へシンボリックリンクで反映できる。

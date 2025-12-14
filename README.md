# 休業・営業時間案内 作成ツール（MVP）

医療機関（クリニック・病院・薬局）向けの休業・営業時間案内を簡単に作成できる Web アプリケーションです。
Apple Design System に準拠したクリーンな UI で、印刷・PDF 保存に対応しています。

## ディレクトリ構成

```
skills-sample/
├── index.html              # メインアプリケーション
├── CLAUDE.md               # プロジェクト指示
├── README.md               # このファイル
├── docs/
│   ├── 2025-12-14-caveat-the-messages-below-were-generated-by-the-u.txt  # Claude Code やりとり履歴
│   └── images/
│       └── sample.png      # サンプル画像
└── .claude/
    └── skills/             # Claude Code スキル
        ├── apple-design/   # Apple Design System スキル
        └── claude-skill-creater/  # スキル作成用スキル
```

## 使い方

### 1. ファイルをブラウザで開く

以下のパスをコピーして、Google Chrome のアドレスバーに貼り付けてください。

```
/Users/akito/WorkSpace/skills-sample/index.html
```

または、Finder でファイルを見つけて右クリック > 開く > Google Chrome を選択してください。

### 2. 案内の作成手順

1. **医療機関種別を選択** - クリニック、病院、薬局から選択
2. **案内期間を設定** - 開始日と終了日を選択し、「日付一覧を生成」をクリック
3. **医療機関情報を入力** - 施設名、電話番号、FAX 番号などを入力
4. **タイトル・導入文を編集** - テンプレートから選択または自由に編集
5. **日付ごとの営業状態を編集** - 各日付の営業時間や備考を入力
6. **掲示物を生成** - 「掲示物を生成 / 更新」をクリックしてプレビューを更新
7. **印刷または PDF 保存** - 「印刷する」ボタンから印刷または PDF 保存

### 3. データの保存

「入力を保存」ボタンをクリックすると、入力内容がブラウザのローカルストレージに保存されます。
次回アクセス時に自動的に復元されます。

## 技術仕様

- **HTML5** - シングルページアプリケーション
- **CSS3** - Apple Design System 準拠のカスタムスタイル
- **JavaScript** - バニラ JS（フレームワーク不使用）

## 対応ブラウザ

- Google Chrome（推奨）
- Safari
- Microsoft Edge
- その他モダンブラウザ

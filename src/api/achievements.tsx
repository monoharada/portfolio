import { DescriptionListItem } from "../components/descriptionList"

export const achievements: DescriptionListItem[] = [
  {
    title: "中規模サイト構築",
    contents: 'フロントエンド歴４ヶ月程度のジュニアエンジニア4人とともにWCAG AA対応の700p超え大学webサイトの構築。Next.js + Story bookの組み合わせから静的HTMLを生成しCMSへ投入。実装についてはジュニアメンバーのフォローアップに徹し、環境構築、基本設計、コードレビュー、スケジュール管理・顧客とのコミュニケーション部分を担当した。'
  },
  {
    title: '運用スリム化',
    contents: '1000ページ超えのLPについて、コピペでページを複製し続けていた運用から、管理下のexcelファイルからAPIデータを生成し汎用ページ1枚に集約。API化する際にexcelの表記ゆれに対してバリデーションをかけデータの品質を担保しヒューマンエラーを抑止、作業時間もコーディングは0、リリースまでに関わるコミュニケーションも1/6に削減した。'
  },
  {
    title:'既存サイトアクセシビリティ改善',
    contents:'800p超えの既存サイト（築14年くらい？）のマークアップ調整。Siteimproveから項目と対象を抽出しスコア改善。'
  },
  {
    title: '既存webサイト高速化',
    contents:'静的資材で構成されている既存サイトの高速化。lighthouseをバッチで回し次世代規格に更新すべき画像の一覧を作成。画像の読み込み調整、スクリプトの遅延読み込み、不要スタイルの削除を行った、計測関連含むサードパーティースクリプトにより本番環境では少しの改善になってしまったが、開発ドメインではlighthouseのパフォーマンスにてモバイル90点超えをおおよそのページで達成した。'
  },
  {
    title: 'E2Eテストによる運用品質改善',
    contents:'保守運用業務にて、修正更新依頼部分については「実装者→ディレクター→品質管理チーム→クライアント」と4段階で人の目が入っていたが、複数ページの同時修正などで「修正すべきではない箇所」が誤って修正されてしまったことを検知できなかった。<br />0ベースからE2Eテストのフローを新規開発し、ビューベースで変更差分が発生している部分に目印を付けた状態でキャプチャを取得しテキストレベルで何件の差分が発生しているかのレポートを提供するように改善した。'
  }
 
]
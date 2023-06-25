import { DescriptionListItem } from "../components/descriptionList"

export const skillSets: DescriptionListItem[] = [
  {
    title: "HTML",
    contents:
      "マシンリーダブル、A11y、合理的な属性値を意識する。jsレスな新しい要素を積極的に使用する。カスタム要素を使用し静的HTMLでも宣言的なUIを実現する。ブラウザの読み込みを考慮しユーザビリティを高める。",
  },
  {
    title: "CSS",
    contents:
      "postCSS,その他プリプロセッサー（scssなど）を使用しつつ、モダンCSSを使用したセマンティクスなCSSを記述する",
  },
  {
    title: "JavaScript",
    contents:
      "browserに配信されるスクリプトは宣言的に記述する。状態の変化にはクラス属性よりもaria属性など意味合いのある属性を操作する。単一責任、YAGNIで開発する。",
  },
  {
    title: "開発手法",
    contents:
      "DXを意識し、「ファイルは可能な限り細かく、可能な限り少なく、可能な限り短く」というスタンスで構築する。高速なビルド時間と低依存な開発環境を構築する。",
  },
  {
    title: "TypeScript",
    contents:
      "NodeJS、browserJSどちらもTypeScriptで開発する。積極的に型推論を利用し開発速度を高める。",
  },
  {
    title: "GenerativeAI",
    contents:
      <>使用する。<br />質問ではなく、要求を投げる。<br />15分を20秒に、1週間を30分にするために使用する。</>,
    },
    {
        title: "マネジメント",
        contents:
          <>自分自身が今どこを向いているのかをチームへ伝え続ける。メンバーには高度な自治を要求する。</>,
    },
    {
        title: 'エンジニアリング・コミュニケーション',
        contents: '知っていることをすべて伝える。ローコンテクストに徹する。良くないものは良くないと伝える努力をする。'
    }
]

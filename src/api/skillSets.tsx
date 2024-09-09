import { DescriptionListItem } from "../components/descriptionList"

export const skillSets: DescriptionListItem[] = [
  {
    title: "HTML",
    contents:
      "マシンリーダブル、A11y、Divスープさせないマークアップを意識する。jsレスな新しい要素を積極的に使用する。カスタム要素を使用し静的HTMLでも宣言的なUIを実現する。ブラウザの読み込みを考慮しユーザビリティを高める。",
  },
  {
    title: "CSS",
    contents:
      "postCSSをすこしだけ、変数、@layer、css-nestなどモダンCSSで構築する。CSSフレームワークもSASSなどのレガシープリプロセッサーも必要が無いことを体現する",
  },
  {
    title: "JavaScript",
    contents:
      "browserに配信されるスクリプトは宣言的に記述する。状態の変化にはクラス属性よりもaria属性など意味合いのある属性を操作する。単一責任、YAGNIで開発する。Web Componentsが好き",
  },
  {
    title: "開発手法",
    contents:
      "DXを意識し、「ファイルは可能な限り細かく、可能な限り少なく、可能な限り短く」というスタンスで開発する。高速なビルド時間と低依存な開発環境を構築する。",
  },
  {
    title: "TypeScript",
    contents:
      <>NodeJS、browserJSどちらもTypeScriptを使用する。</>,
  },
  {
    title: "GenerativeAI",
    contents:
      <>15分を20秒に、1週間を30分にするために使用する。</>,
    },
    {
        title: "マネジメント",
        contents:
          <>自分自身が今どこを向いているのかをチームへ伝え続ける。（その上で）メンバーの判断を尊重する。</>,
    },
    {
        title: 'コミュニケーション',
        contents: <><p>知っていることをすべて伝える。ローコンテクストに徹する。良くないものは良くないと伝える努力をする。</p><p><i>人々があなたがどのように言っているかではなく、何を言っているかに集中できるようにする</i></p></>
    }
]

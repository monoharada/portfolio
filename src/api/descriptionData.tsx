import { DescriptionListItem } from "../components/descriptionList"

export const descriptionList: DescriptionListItem[] = [
  {
    title: "名前",
    contents: (
      <>
        原田 礼 <small>(Rei Harada)</small>
      </>
    ),
  },
  {
    title: "所属",
    contents: (
      <>
        <a href="https://www.monosus.co.jp/" target="_blank" rel="noreferrer">
          株式会社モノサス
        </a>
      </>
    ),
  },
  {
    title: "役割",
    contents: 'アクセシビリティアドボケイト、エンジニアリングマネージャー、フロントエンドエンジニア、テクニカルディレクター、etc.'
  },
  {
    title: "居住",
    contents: "東京",
  },
  { title: "家族", contents: "妻・長男（12歳）・長女（8歳）" },
]

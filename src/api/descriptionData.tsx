import { DescriptionListProps } from "../../components/descriptionList"

export const descriptionList: DescriptionListProps[] = [
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
    title: "居住",
    contents: "東京",
  },
  { title: "家族", contents: "妻・長男（10歳）・長女（7歳）" },
]

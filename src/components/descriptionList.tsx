import { ReactElement, ReactNode } from "react"

export interface DescriptionListProps {
  title: string
  contents: string | ReactNode
}

const DescriptionList = ({ data }) => {
  return (
    <dl>
      {data.map((item) => (
        <div key={item}>
          <dt>{item.title}</dt>
          <dd>{item.contents}</dd>
        </div>
      ))}
    </dl>
  )
}

export default DescriptionList

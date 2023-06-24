import { ReactNode, CSSProperties } from "react";

export interface DescriptionListItem {
  title: string;
  contents: string | ReactNode;
}

export interface DescriptionListProps {
  data: DescriptionListItem[];
  className?: string;
  // style?: CSSProperties;
}

const DescriptionList: React.FC<DescriptionListProps> = ({ data, className }) => {
  return (
    <dl>
      {data.map((item, index) => (
        <div key={index} className={className}>
          <dt>{item.title}</dt>
          <dd>{item.contents}</dd>
        </div>
      ))}
    </dl>
  );
}

export default DescriptionList;
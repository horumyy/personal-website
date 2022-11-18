import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ActionButton from "./ActionButton";

import SocialButton from "./SocialButton";

interface BlocksProps {
  blocks: {
    title: string;
    url?: string;
    icon: IconProp;
    size?: "lg";
    setAction?: () => void;
  }[];
  mobile?: boolean;
}

function Blocks(props: BlocksProps) {
  return (
    <div
      className={`flex items-center flex-col gap-[8px] landscape:gap-[16px] my-[16px]  ${
        props.mobile && "mx-4"
      }`}
    >
      {props.blocks.map((block, index) => {
        if (block.setAction) {
          return <ActionButton block={block} index={index} />;
        } else {
          return <SocialButton block={block} index={index} />;
        }
      })}
    </div>
  );
}

export default Blocks;

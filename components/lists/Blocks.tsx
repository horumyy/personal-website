import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import SocialButton from "./SocialButton";

interface BlocksProps {
  blocks: {
    title: string;
    url: string;
    icon: IconProp;
  }[];
  mobile?: boolean;
}

function Blocks(props: BlocksProps) {
  return (
    <div className={`flex flex-col gap-[8px] landscape:gap-[16px] my-[16px] ${props.mobile && "mr-4"}`}>
      {props.blocks.map((block, index) => (
        <SocialButton block={block} key={index} />
      ))}
    </div>
  );
}

export default Blocks;
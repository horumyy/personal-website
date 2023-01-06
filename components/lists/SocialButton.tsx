import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Mixpanel } from "../../utils/mixpanel";
interface BlocksProps {
  block: {
    title: string;
    url?: string;
    icon: IconProp;
    size?: "lg";
    rel?: string;
  };
  index?: number;
}

function SocialButton(props: BlocksProps) {
  return (
    <a
      className={`${
        props.block.size ? "w-[200]" : "w-[125px]"
      } group select-none cursor-none w-full items-center text-center justify-center flex`}
      href={props.block.url}
      key={props.index}
      target="_blank"
      rel={props.block.rel}
      onClick={() => {
        Mixpanel.track(`Retro:Block button pressed`, { Block: props.block.title });
      }}
    >
      <button className="cursor-none select-none text-black">{props.block.title}</button>
    </a>
  );
}

export default SocialButton;

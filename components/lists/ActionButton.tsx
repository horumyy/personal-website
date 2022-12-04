import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Mixpanel } from "../../utils/mixpanel";
import "98.css";

interface BlocksProps {
  block: {
    title: string;
    url?: string;
    icon: IconProp;
    size?: "lg";
    setAction?: () => void;
    rel?: string;
  };
  index?: number;
}

function ActionButton(props: BlocksProps) {
  return (
    <button
      className={`${
        props.block.size ? "w-[200]" : "w-[80px]"
      } group select-none cursor-none`}
      key={props.index}
      onClick={() => {
        Mixpanel.track(`Block button pressed`, { Block: props.block.title });
        props.block.setAction?.();
      }}
    >
      {props.block.title}
    </button>
  );
}

export default ActionButton;

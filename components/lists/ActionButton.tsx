import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Mixpanel } from "../../utils/mixpanel";
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
        props.block.size ? "w-[200]" : "w-[125px]"
      } group select-none `}
      key={props.index}
      onClick={() => {
        Mixpanel.track(`Block button pressed`, { Block: props.block.title });
        props.block.setAction?.();
      }}
    >
      <div className="flex transition-all duration-500 group-hover:transform group-hover:translate-y-[-.2rem] cursor-pointer">
        <div className="flex items-center rounded-l-md p-1 border-l border-t border-b group-hover:bg-gray-50 transition-all duration-350">
          <FontAwesomeIcon
            icon={props.block.icon}
            className="h-[25px] text-hotpink"
          />
        </div>
        <div className="select-none flex-grow text-center border-l-2 rounded-r-md border-r border-t border-b group-hover:bg-gray-100 transition-all duration-350">
          <div
            className={`select-none flex-grow-0 text-gray-800 text-center py-1 font-thin ${
              props.block.size && "px-1"
            }`}
          >
            <h4 className="select-none">{props.block.title}</h4>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ActionButton;

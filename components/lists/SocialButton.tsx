import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface BlocksProps {
  block: {
    title: string;
    url: string;
    icon: IconProp;
  };
  index?: number;
}

function SocialButton(props: BlocksProps) {
  return (
    <a
      className="w-[100px] group"
      href={props.block.url}
      key={props.index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex transition-all duration-500 group-hover:transform group-hover:translate-y-[-.2rem]">
        <div className="flex items-center rounded-l-md p-1 border-l border-t border-b group-hover:bg-gray-50 transition-all duration-350">
          <FontAwesomeIcon
            icon={props.block.icon}
            className="h-[25px] text-hotpink"
          />
        </div>
        <div className=" flex-grow text-center border-l-2 rounded-r-md border-r border-t border-b group-hover:bg-gray-100 transition-all duration-350">
          <div className="flex-grow-0 text-gray-800 text-center py-1 font-thin">
            {props.block.title}
          </div>
        </div>
      </div>
      {/* <FontAwesomeIcon icon={props.block.icon} className=" w-5 left-0"/>
      <span>{props.block.title}</span> */}
    </a>
  );
}

export default SocialButton;

import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    iphone: MdPhoneIphone,
    apple: FaApple,
    windows: FaWindows,
    xbox: FaXbox,
    linux: FaLinux,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

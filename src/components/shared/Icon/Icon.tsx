import { SvgXml } from "react-native-svg";
import { ColorValue } from "react-native";
import * as icons from "../../../constants/icons";

export type IconByKey = keyof typeof icons;

export interface IconProps {
  color: ColorValue;
  icon: IconByKey;
  size?: number;
}

const Icon = ({ icon, size = 32, color }: IconProps) => {
  return <SvgXml xml={icons[icon]} width={size} height={size} color={color} />;
};

export default Icon;

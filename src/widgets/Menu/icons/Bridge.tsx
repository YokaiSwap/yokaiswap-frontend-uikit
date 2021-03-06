import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path
        d="M918.8 400.3h-39.2V292.2H929c17 0 31-13.9 31-31 0-17-13.9-31-31-31H95.6c-17 0-31 13.9-31 31 0 17 13.9 31 31 31H144v108.1h-38.8c-22.7 0-41.2 18.4-41.2 41.2v311.1c0 22.7 18.4 41.2 41.2 41.2h95.6C243.7 662.4 367 567.5 512.7 567.5s269 95 311.9 226.3h94.2c22.7 0 41.2-18.4 41.2-41.2V441.5c0-22.8-18.4-41.2-41.2-41.2zM543.3 292.2H649v108.1H543.3V292.2z m-62 108.1H373.5V292.2h107.9v108.1z m-275.4 0V292.2h105.7v108.1H205.9z m505 0V292.2h106.9v108.1H710.9z"
        p-id="2841"
      />
    </Svg>
  );
};

export default Icon;

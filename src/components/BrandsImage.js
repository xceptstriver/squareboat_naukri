import React from "react";
import "antd/dist/antd.css";
import { Image } from "antd";

const BrandsImage = (props) => {
  return <Image width={200} src={props.src} />;
};

export default BrandsImage;

import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const SectionTitle = (props) => {
  return <Title level={5}>{props.title}</Title>;
};

export default SectionTitle;

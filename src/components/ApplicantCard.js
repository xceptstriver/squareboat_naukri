import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import CustomButton from "../components/CustomButton";

const ApplicantCard = (props) => {
  return (
    <Card style={{ width: 300 }}>
      <p style={{ color: "#303F60" }}>{props.name}</p>
      <p style={{ color: "#303F60" }}>{props.email}</p>
      <p style={{ color: "#303F60" }}>{props.skills}</p>
    </Card>
  );
};

export default ApplicantCard;

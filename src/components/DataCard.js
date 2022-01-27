import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import CustomButton from "../components/CustomButton";

const DataCard = (props) => {
  return (
    <Card
      title={props.title}
      style={{ width: 300, marginBottom: props.marginBottom ? "2rem" : 0 }}
    >
      <p style={{ color: "#303F60" }}>{props.description}</p>
      {props.fromJobs ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <EnvironmentOutlined />
            <span style={{ color: "" }}>{props.location}</span>
          </div>
          <CustomButton
            text="View Applications"
            fromApplicants
            setIsModalVisible={props.setIsModalVisible}
            jobId={props.jobId}
            setApplicants={props.setApplicants}
          />
        </div>
      ) : null}
    </Card>
  );
};

export default DataCard;

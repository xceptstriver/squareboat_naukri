import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

const FormInput = (props) => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h5 style={{ textAlign: "left" }}>{props.label}</h5>
        {props.children}
      </div>
      <Input placeholder={props.placeholder} onChange={props.onChangeText} />
    </div>
  );
};

export default FormInput;

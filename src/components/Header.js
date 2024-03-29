import React from "react";
import "antd/dist/antd.css";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  // const navigate = useNavigate();

  const navigateFn = async () => {
    const jsonValue = await localStorage.getItem("@token");
    const tasksObj = jsonValue != null ? jsonValue : "";
    if (tasksObj) {
      props.history.push("/jobs");
    } else {
      props.history.push("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e7e7e7",
        marginLeft: "4rem",
        marginRight: "4rem",
        padding: "1rem",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onClick={navigateFn}
      >
        <h2 style={{ color: "#FFFFFF" }}>My</h2>
        <h2 style={{ color: "#43AFFF" }}>Jobs</h2>
      </span>
      {props.fromJobs ? (
        <h2 style={{ color: "#fff" }}>Jobs Posted by you</h2>
      ) : null}

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {props.showPost ? (
          <h5
            style={{ color: "#FFFFFF", textAlign: "right" }}
            onClick={() => props.history.push("/postjobs")}
          >
            Post a Job
          </h5>
        ) : null}
        {props.showButton ? (
          <CustomButton
            text={props.fromJobs ? "Logout" : "Login/Signup"}
            fromHeader
            history={props.history}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Header;

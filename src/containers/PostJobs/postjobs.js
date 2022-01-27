import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Card } from "antd";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/FormInput";
import { emailRegex } from "../../constants/generic";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Postjobs = (props) => {
  const auth = useSelector((state) => state.auth || {}).auth;

  const [init, setInit] = useState(false);
  const [jobtitle, setJobTile] = useState("");
  const [description, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [jobtitleError, setJobTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [postError, setPostError] = useState(false);

  const jobInput = [
    {
      title: "Job title*",
      placeholder: "Enter job title",
      state: jobtitle,
      disabled: false,
      onChange: (text) => setJobTile(text),
      errorState: jobtitleError,
      errorText: "Kindly enter valid email",
    },
    {
      title: "Description*",
      placeholder: "Enter job description",
      state: description,
      disabled: false,
      onChange: (text) => setJobDescription(text),
      errorState: descriptionError,
      errorText: "Kindly enter valid dexription",
    },
    {
      title: "Location*",
      placeholder: "Enter location",
      state: location,
      disabled: false,
      onChange: (text) => setLocation(text),
      errorState: locationError,
      errorText: "Kindly enter valid location",
    },
  ];

  const renderInputText = ({
    title,
    placeholder,
    state,
    disabled,
    onChange,
    errorState,
    errorText,
    showForgotPassword,
  }) => {
    return (
      <div style={{ marginTop: "2rem" }}>
        <FormInput
          label={title}
          placeholder={placeholder}
          onChangeText={(text) => onChange(text.target.value)}
          value={state}
          disabled={disabled}
        ></FormInput>
        {/* {errorState ? <h5>{errorText}</h5> : null} */}
      </div>
    );
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "#303F60" }}>
        <Header showButton={false} history={props.history} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "8rem",
          }}
        ></div>
      </div>
      <div
        style={{
          width: "40rem",
          alignSelf: "center",
          borderRadius: "2rem",
          backgroundColor: "white",
          marginLeft: "calc((100% - 40rem)/2)",
          marginRight: "calc((100% - 40rem)/2)",
          marginTop: "-15rem",
          padding: "2rem",
          boxShadow: "0px 30px 36px #557da526",
        }}
      >
        <h2 style={{ color: "#303F60", textAlign: "left" }}>Post a job</h2>
        <div style={{ flexDirection: "column" }}>
          {jobInput.map((_, k) => renderInputText(_))}
          {successMsg && successMsg.length ? (
            <h5 style={{ color: "green", textAlign: "right" }}>{successMsg}</h5>
          ) : null}
          {postError && (
            <h5 style={{ color: "#FF0000", textAlign: "right" }}>
              All fields are mandatory
            </h5>
          )}
          <div style={{ marginTop: "2rem" }}>
            <CustomButton
              text="Post"
              fromPostjob
              title={jobtitle}
              description={description}
              location={location}
              setSuccessMsg={setSuccessMsg}
              setPostError={setPostError}
              history={props.history}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postjobs;

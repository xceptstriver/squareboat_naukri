import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/FormInput";
import { emailRegex } from "../../constants/generic";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const ResetPassword = (props) => {
  const token = useSelector((state) => state.tokenReducer || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [authError, setAuthError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const passwordInput = [
    {
      title: "Password",
      placeholder: "Enter your password",
      state: password,
      disabled: false,
      onChange: (text) => setPassword(text),
      errorState: passwordError,
      errorText: "Kindly enter valid password",
    },
    {
      title: "Confirm Password",
      placeholder: "Enter your password",
      state: confirmPassword,
      disabled: false,
      onChange: (text) => setConfirmPassword(text),
      errorState: confirmPasswordError,
      errorText: "Kindly enter valid password",
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
  }) => {
    return (
      <div style={{ marginTop: "2rem" }}>
        <FormInput
          label={title}
          placeholder={placeholder}
          onChangeText={(text) => onChange(text.target.value)}
          value={state}
          disabled={disabled}
        />
        {errorState ? <h5>{errorText}</h5> : null}
      </div>
    );
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "#303F60" }}>
        <Header showButton history={props.history} />
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
        <h2 style={{ color: "#303F60", textAlign: "left" }}>Reset Password</h2>
        <h5 style={{ color: "#303F60", textAlign: "left" }}>
          Enter your new password below.
        </h5>
        <div style={{ flexDirection: "column" }}>
          {passwordInput.map((_, k) => renderInputText(_))}
          {errorMessage && errorMessage.length ? (
            <h5 style={{ color: "#FF0000", textAlign: "right" }}>
              {errorMessage}
            </h5>
          ) : null}
          <div style={{ marginTop: "2rem" }}>
            <CustomButton
              text="Reset"
              fromReset
              password={password}
              confirmPassword={confirmPassword}
              setAuthError={setAuthError}
              setErrorMessage={setErrorMessage}
              history={props.history}
            />
          </div>
        </div>
      </div>
      {/* {authError ? <h5>Incorrect email or password</h5> : null} */}
    </div>
  );
};

export default ResetPassword;

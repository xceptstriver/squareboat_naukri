import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/FormInput";
import { emailRegex } from "../../constants/generic";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const ForgotPassword = () => {
  const auth = useSelector((state) => state.auth || {}).auth;

  const [init, setInit] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [authError, setAuthError] = useState(false);

  const forgotPasswordInput = [
    {
      title: "Email address",
      placeholder: "Enter your email",
      state: email,
      disabled: false,
      onChange: (text) => setEmail(text),
      errorState: emailError,
      errorText: "Kindly enter valid email",
    },
  ];

  //   useEffect(() => {
  //     setInit(true);
  //   }, []);

  //   useEffect(() => {
  //     if (init) {
  //       if (email && email.length && email.match(emailRegex)) {
  //         setEmailError(false);
  //       } else {
  //         setEmailError(true);
  //       }
  //     }
  //   }, [email]);

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
        <Header showButton={true} />
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
          marginTop: "-10rem",
          padding: "2rem",
          boxShadow: "0px 30px 36px #557da526",
        }}
      >
        <h2 style={{ color: "#303F60", textAlign: "left" }}>
          Forgot your password?
        </h2>
        <h5 style={{ color: "#303F60" }}>
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </h5>
        <div style={{ flexDirection: "column" }}>
          {forgotPasswordInput.map((_, k) => renderInputText(_))}
          {authError ? (
            <h5 style={{ color: "#FF0000", textAlign: "right" }}>
              No user found with the provided email
            </h5>
          ) : null}
          <div style={{ marginTop: "2rem" }}>
            <CustomButton
              text="Submit"
              fromForgot
              email={email}
              setAuthError={setAuthError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

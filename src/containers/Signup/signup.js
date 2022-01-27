import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";
import FormInput from "../../components/FormInput";
import { emailRegex } from "../../constants/generic";
import { Link } from "react-router-dom";
import { FileSearchOutlined, TeamOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Signup = () => {
  const auth = useSelector((state) => state.auth || {}).auth;

  const [init, setInit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setConfirmPasswordError] = useState(false);
  const [authError, setAuthError] = useState(false);

  const signupInput = [
    {
      title: "Full Name*",
      placeholder: "Enter your full name",
      state: name,
      disabled: false,
      onChange: (text) => setName(text),
      errorState: nameError,
    },
    {
      title: "Email address*",
      placeholder: "Enter your email",
      state: email,
      disabled: false,
      onChange: (text) => setEmail(text),
      errorState: emailError,
    },
    {
      title: "Password*",
      placeholder: "Enter your password",
      state: password,
      disabled: false,
      onChange: (text) => setPassword(text),
      errorState: passwordError,
    },
    {
      title: "Confirm Password*",
      placeholder: "Enter your password",
      state: confirmPassword,
      disabled: false,
      onChange: (text) => setConfirmPassword(text),
      errorState: confirmpasswordError,
    },
    {
      title: "Skills",
      placeholder: "Enter comma separted skills",
      state: skills,
      disabled: false,
      onChange: (text) => setSkills(text),
    },
  ];

  const errors = [
    { password: "Password must be greater than 6 characters." },
    { email: "Email invalid." },
    { name: "Name must be between 3 and 100 characters" },
  ];

  useEffect(() => {
    if (authError) {
      const fields = ["password", "email", "name"];
      let error = fields.map((_) => {
        let obj = (errors || []).find((__) => __.hasOwnProperty(_));
        return obj;
      });
      error.forEach((i) => {
        if (i["password"]) {
          setPasswordError(i["password"]);
        }
        if (i["name"]) {
          setNameError(i["name"]);
        }
        if (i["email"]) {
          setEmailError(i["email"]);
        }
      });
    }
  }, [authError]);

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
        ></FormInput>
        {errorState ? (
          <h5 style={{ color: "#FF0000", textAlign: "right" }}>{errorState}</h5>
        ) : null}
      </div>
    );
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "#303F60" }}>
        <Header showButton={false} />
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
        <h2 style={{ color: "#303F60", textAlign: "left" }}>Signup</h2>
        <div style={{ flexDirection: "column" }}>
          <h5 style={{ textAlign: "left" }}>I'm a*</h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              margin: "1rem",
            }}
          >
            <Button type="primary" icon={<FileSearchOutlined />} size={8}>
              Recruiter
            </Button>
            <Button
              type="default"
              icon={<TeamOutlined />}
              style={{ marginLeft: "1rem" }}
              size={8}
            >
              Candidate
            </Button>
          </div>

          {signupInput.map((_, k) => renderInputText(_))}

          <div style={{ marginTop: "2rem" }}>
            <CustomButton
              text="Signup"
              fromSignup
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              name={name}
              skills={skills}
              setAuthError={setAuthError}
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h5>
              Have an account?<Link to={`/login`}>Login</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useEffect } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../redux/actions/auth";
import { setToken } from "../redux/actions/token";

const CustomButton = (props) => {
  const token = useSelector((state) => state.tokenReducer || {}).token || "";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    if (props.fromHome) navigate("/login");

    if (props.fromLogin) {
      handleLogin(props.email, props.password);
    } else if (props.fromSignup) {
      handleSignup(
        props.email,
        props.name,
        props.password,
        props.confirmPassword,
        props.skills
      );
    } else if (props.fromForgot) {
      handleForgot(props.email);
    } else if (props.fromReset) {
      handleReset(props.password, props.confirmPassword);
    } else if (props.fromPostjob) {
      handlepostJob(props.title, props.description, props.location);
    } else if (props.navigatePostJobs) {
      navigate("/postjobs");
    } else if (props.fromApplicants) {
      handleApplicants(props.jobId);
    } else if (props.fromHeader) {
      await localStorage.clear();
      navigate("/login");
    }
  };

  const handleLogin = async (email, password) => {
    try {
      let payload = { email, password };
      let { data } = await axios.post(`${BASE_URL}auth/login`, { ...payload });
      if (data.success && data.data) {
        await localStorage.setItem("@token", data.data.token);
        dispatch(setAuth(data.data));
        dispatch(setToken(data.data.token));
        navigate("/jobs");
      } else {
        props.setAuthError(true);
      }
    } catch (error) {
      props.setAuthError(true);
    }
  };

  const handleSignup = async (
    email,
    name,
    password,
    confirmPassword,
    skills
  ) => {
    // let data = {};
    try {
      let payload = {
        email,
        userRole: 0,
        password,
        confirmPassword,
        name,
        skills,
      };
      let { data } = await axios.post(`${BASE_URL}auth/register`, {
        ...payload,
      });
      if (data.success && data.data) {
        await localStorage.setItem("@token", data.data.token);
        dispatch(setAuth(data.data));
        dispatch(setToken(data.data.token));
        navigate("/jobs");
      } else {
      }
    } catch (error) {
      props.setAuthError(true);
    }
  };

  const handleForgot = async (email) => {
    try {
      let { data } = await axios.get(
        `${BASE_URL}auth/resetpassword?email=${email}`
      );
      if (data.success && data.data) {
        await localStorage.setItem("@token", data.data.token);
        dispatch(setToken(data.data.token));
        navigate("/resetpassword");
      } else {
        props.setAuthError(true);
      }
    } catch (error) {
      props.setAuthError(true);
    }
  };

  const handleReset = async (password, confirmPassword) => {
    try {
      let payload = { password, confirmPassword, token };
      let { data, error } = await axios.post(`${BASE_URL}auth/resetpassword`, {
        ...payload,
      });
      if (data.success && data.data) {
        await localStorage.setItem("@token", data.data.token);
        dispatch(setToken(data.data.token));
        navigate("/jobs");
      } else {
        props.setErrorMessage(data.message);
      }
    } catch (e) {
      props.setErrorMessage(
        "The password you entered matches one of your previous passwords. Please create a new password"
      );
    }
  };

  const handlepostJob = async (title, description, location) => {
    try {
      const jsonValue = await localStorage.getItem("@token");
      const tasksObj = jsonValue != null ? jsonValue : "";
      let payload = { title, description, location };
      let { data } = await axios.post(`${BASE_URL}/jobs`, payload, {
        headers: {
          Authorization: tasksObj || token,
        },
      });
      if (data.success && data.data) {
        props.setPostError(false);
        props.setSuccessMsg("Job posted successfully");
      }
    } catch (error) {
      props.setPostError(true);
    }
  };

  const handleApplicants = async (jobId) => {
    try {
      const jsonValue = await localStorage.getItem("@token");
      const tasksObj = jsonValue != null ? jsonValue : "";
      let { data } = await axios.get(
        `${BASE_URL}recruiters/jobs/${jobId}/candidates`,
        {
          headers: {
            Authorization: tasksObj || token,
          },
        }
      );

      if (data.success && data.data) {
        props.setApplicants(data.data);
        props.setIsModalVisible(true);
      } else {
        props.setApplicants([]);
        props.setIsModalVisible(true);
      }
    } catch (error) {}
  };

  return (
    <Button type="primary" style={{ marginLeft: 8 }} onClick={onSubmit}>
      {props.text}
    </Button>
  );
};

export default CustomButton;

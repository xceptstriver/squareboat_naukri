import "./jobs.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setJobs } from "../../redux/actions/jobs";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";
import DataCard from "../../components/DataCard";
import { BASE_URL } from "../../constants/api";
import { brandLogos, homeData } from "../../constants/home";
import { InputNumber, Checkbox, Space, Modal } from "antd";
import ApplicantCard from "../../components/ApplicantCard";

const Jobs = () => {
  const token = useSelector((state) => state.tokenReducer || {}).token || "";

  const postedJobs = useSelector((state) => state.allJobs || {}).jobs || [];

  const [applicants, setApplicants] = useState([]);

  // const applicants = [
  //   {
  //     id: "1",
  //     name: "Eliza Lucas",
  //     email: "abc@gmail.com",
  //     skills: ["Coding", "designing", "graphics", "website", "app ui"],
  //   },
  //   {
  //     id: "2",
  //     name: "Eliza Lucas",
  //     email: "abc@gmail.com",
  //     skills: ["Coding", "designing", "graphics", "website", "app ui"],
  //   },
  //   {
  //     id: "3",
  //     name: "Eliza Lucas",
  //     email: "abc@gmail.com",
  //     skills: ["Coding", "designing", "graphics", "website", "app ui"],
  //   },
  //   {
  //     id: "4",
  //     name: "Eliza Lucas",
  //     email: "abc@gmail.com",
  //     skills: ["Coding", "designing", "graphics", "website", "app ui"],
  //   },
  //   {
  //     id: "5",
  //     name: "Eliza Lucas",
  //     email: "abc@gmail.com",
  //     skills: ["Coding", "designing", "graphics", "website", "app ui"],
  //   },
  //   {
  //     id: "6",
  //     name: "Eliza Lucas",
  //     email: "abc@gmail.com",
  //     skills: ["Coding", "designing", "graphics", "website", "app ui"],
  //   },
  // ];

  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, [pageNo]);

  const fetchJobs = async () => {
    try {
      const jsonValue = await localStorage.getItem("@token");
      const tasksObj = jsonValue != null ? jsonValue : "";
      const { data } = await axios.get(`${BASE_URL}recruiters/jobs`, {
        params: { page: pageNo },
        headers: {
          Authorization: tasksObj || token,
        },
      });
      if (data.data.data) {
        dispatch(setJobs(data.data && data.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "#303F60" }}>
        <Header showPost showButton fromJobs />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "8rem",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "#EDF6FF",
            // position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
              marginTop: "-6rem",
              marginLeft: "8rem",
              marginRight: "8rem",
              // position: "absolute",
            }}
          >
            {postedJobs && postedJobs.length ? (
              (postedJobs || []).map((_, i) => (
                <DataCard
                  fromJobs
                  jobId={_ && _.id}
                  title={_.title}
                  description={_.description}
                  location={_.location}
                  setIsModalVisible={setIsModalVisible}
                  marginBottom
                  setApplicants={setApplicants}

                  // parentStyle={{ margin: "2rem !important" }}
                />
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h4
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Your posted jobs will show here!
                  <CustomButton text="Post a job" navigatePostJobs />
                </h4>
              </div>
            )}
          </div>
          <div
            style={{
              paddingTop: "2rem",
              marginLeft: "8rem",
              marginRight: "8rem",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <Space>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setPageNo(e)}
              />
            </Space>
            <Modal
              title="Applicants for this job"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null}
            >
              {applicants && applicants.length ? (
                (applicants || []).map((_, i) => (
                  <ApplicantCard
                    key={_.id}
                    name={_.name}
                    email={_.email}
                    skills={_.skills}
                  />
                ))
              ) : (
                <h5 style={{ color: "#303F60" }}>No Applicants available!</h5>
              )}
            </Modal>
          </div>
        </div>
      </div>

      {/* <CustomButton /> */}
    </div>
  );
};

export default Jobs;

import React from "react";
import BrandsImage from "../../components/BrandsImage";
import CustomButton from "../../components/CustomButton";
import DataCard from "../../components/DataCard";
import SectionTitle from "../../components/SectionTitle";
import { brandLogos, homeData } from "../../constants/home";
import Header from "../../components/Header";

const Home = (props) => {
  console.log(props);

  return (
    <div className="App">
      <div style={{ backgroundColor: "#303F60" }}>
        <Header showButton history={props.history} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            margin: "8rem",
          }}
        >
          <div>
            <h1 style={{ color: "#FFFFFF" }}>
              Welcome to <br />
              My<span style={{ color: "#43AFFF" }}>Jobs</span>
            </h1>
            <CustomButton text="Get Started" fromHome history={props.history} />
          </div>
          <div>
            <img
              style={{
                borderRadius: "1rem",
                width: "40rem",
                height: "20rem",
                marginBottom: "-5rem",
              }}
              src="https://cdn.phenompeople.com/CareerConnectResources/UNISUS/images/corporate-1587511840500.jpg"
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-10rem", backgroundColor: "#EDF6FF" }}>
        <div
          style={{
            paddingTop: "10rem",
            marginLeft: "8rem",
            marginRight: "8rem",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <h2 style={{ color: "#303F60", textAlign: "left" }}>Why Us</h2>
          <div
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {homeData.map((_, i) => (
              <DataCard key={i} title={_.title} description={_.description} />
            ))}
          </div>
          {/* <h2 style={{ textAlign: "left", marginTop: "5rem" }}>
            Companies who trust Us
          </h2> */}
          <div
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* {brandLogos.map((_, i) => (
              <img key={i} src={_.src} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

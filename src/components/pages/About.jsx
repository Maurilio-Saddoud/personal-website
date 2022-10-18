import { Grid } from "@mui/material";
import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <Grid container spacing={5}>
                <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                  <div className="left" data-aos="fade-down-right">
                    <img
                      src={val.cover}
                      style={{ width: "100%" }}
                      alt="Profile picture of Maurilio"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={8}>
                  <div className="right" data-aos="fade-down-left">
                    <Heading title="About Me" />
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <p>{val.desc2}</p>
                    <button className="primaryBtn">Download CV</button>
                  </div>
                </Grid>
              </Grid>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

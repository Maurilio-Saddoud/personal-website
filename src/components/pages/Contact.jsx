import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";
import axios from "axios";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");

  const handleSend = async () => {
    setSent(true);
    try {
      await axios.post("http://localhost:3000/send_mail");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading className="heading" title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form onSubmit={() => handleSend()}>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setText(e.target.value)}
                    data-aos="flip-left"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                <input type="text" placeholder="Subject" data-aos="flip-up" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button type="submit" data-aos="zoom-in-up">Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

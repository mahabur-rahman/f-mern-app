import React, { useState, useEffect } from "react";
// style
import "./about.scss";
import { Tabs, Tab } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const About = () => {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      // main data
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <section id="aboutUs" className="py-5">
        <div className="container d-flex justify-content-between">
          <form className="row" method="GET">
            <div className="col">
              <img
                src="https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="about pic"
                width="200"
                height="100"
              />
              <h4>Mahabur Rahman</h4>
              <p>Web Developer</p>
              <span>Ranking : 1/10</span>
              <div>
                <button className="btn btn-warning mt-2">Edit Profile</button>
              </div>
              <div className="mt-5">
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
                <br />
                <a href="https://youtube.com" target="_blank">
                  Youtube
                </a>
              </div>
            </div>
            {/* tabs */}

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 mt-4"
            >
              <Tab eventKey="about" title="About">
                <span>User Id : 3454354</span>
                <br />
                <span>Name : mahabur </span> <br />
                <span>Email : a@gmail.com</span> <br />
                <span>Phone : 01626924395</span> <br />
                <span>Profession : web developer</span>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Timeline here
              </Tab>
            </Tabs>
          </form>
        </div>
      </section>
    </>
  );
};

export default About;

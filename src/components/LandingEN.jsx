import React from "react";
import "./Landing.css";

const LandingEN = () => {
  return (
    <div className="container">
      <img
        src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/LogoSB.png"
        className="app-logo"
        alt=""
      />
      <h1>Welcome to Solution Box Group</h1>
      <h2 className="mb-5">Computer and telecommunications wholesaler.</h2>
      <h6>
        We are a wholesaler from Argentina with a history of 20 years, we
        currently have 11 offices and represent more than 50 international
        brands such as: AMD, APC, DELL, INTEL, HUAWEI, CISCO, DELL TECHNOLOGIES,
        HP, HPE, SAMSUNG , FIBERHOME, PANDUIT, among others.
      </h6>
      <br></br>
      <h6>
        Our spirit and strength are based on constant training for the reseller,
        and the accompaniment of each of their projects with specialists in each
        brand and engineers who will know how to guide them to achieve the best
        results.
      </h6>
      <br></br>
      <h6>
        Thanks to the regionalization of our company, we achieved excellent
        alliances that allow us to have permanent stock of our brands and
        prospects for constant growth.
      </h6>
      <br></br>
      <h6>
        Our most recent achievement was the creation of our own brand for PC,
        gaming pc and notebook! We invite you to meet us and follow
        @nsxcomputers.
      </h6>
      <br></br>
      <h6>
        We have commercial offices and warehouses<br></br>
      </h6>

      <ul className="sb-site-list">
        <h4 className="titulo-pais">Select your country:</h4>
        <div className="wrapp">
          <li className="sb-site-sgAR">
            <a
              className="sb-site-link"
              id="AR"
              href="https://www.solutionbox.com.ar/"
            >
              Argentina
            </a>
          </li>
          <li className="sb-site-sgRD">
            <a
              className="sb-site-link"
              id="RD"
              href="https://www.solutionbox.com.do/"
            >
              Dominican Republic
            </a>
          </li>
          <li className="sb-site-sgUSA">
            <a
              className="sb-site-link"
              id="USA"
              href="https://www.solutionboxusa.com/"
            >
              United States
            </a>
          </li>
          <li className="sb-site-sgPa">
            <a
              className="sb-site-link"
              id="Pa"
              href="http://www.solutionbox.com.pa/"
            >
              Panama
            </a>
          </li>
          <li className="sb-site-sgHK">
            <a
              className="sb-site-linklast"
              id="HK"
              href="https://www.solutionbox.com.hk/"
            >
              Hong Kong
            </a>
          </li>
          <p></p>
          <li className="sb-site-sgGt">
            <a
              className="sb-site-link"
              id="Gt"
              href="http://www.solutionbox.com.gt/"
            >
              Guatemala
            </a>
          </li>
          <li className="sb-site-sgSv">
            <a
              className="sb-site-link"
              id="Sv"
              href="http://www.solutionbox.com.sv/"
            >
              El Salvador
            </a>
          </li>
          <li className="sb-site-sgHn">
            <a
              className="sb-site-link"
              id="Hn"
              href="http://www.solutionbox.com.hn/"
            >
              Honduras
            </a>
          </li>
          <li className="sb-site-sgPy">
            <a
              className="sb-site-link"
              id="Py"
              href="http://www.solutionbox.com.py/"
            >
              Paraguay
            </a>
          </li>
          <li className="sb-site-sgUr">
            <a
              className="sb-site-link"
              id="UR"
              href="https://www.solutionbox.com.uy/"
            >
              Uruguay
            </a>
          </li>
          <li className="sb-site-sgCR">
            <a
              className="sb-site-linklast"
              id="CR"
              href="https://www.solutionbox.cr/"
            >
              Costa Rica
            </a>
          </li>{" "}
        </div>
      </ul>
    </div>
  );
};

export default LandingEN;

import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <img
        src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/LogoSB.png"
        className="app-logo"
        alt=""
      />
      <h1>Bienvenidos a Solution Box</h1>
      <h2 className="mb-5">Mayorista de informática y telecomunicaciones.</h2>
      <h6>
        Somos un mayorista con origen Argentina con una trayectoria de 20 años,
        actualmente contamos con 11 sedes y representamos mas de 50 marcas de
        nivel internacional tales como: AMD, APC, DELL, INTEL, HUAWEI, CISCO,
        DELL TECHNOLOGIES, HP, HPE, SAMSUNG, FIBERHOME, PANDUIT, entre otras.
      </h6>

      <h6>
        Nuestro espíritu y fuerza están basadas en la capacitación constante al
        canal, y el acompañamiento a cada uno de sus proyectos con especialistas
        en cada marca e ingenieros que sabrán guiarlos para lograr los mejores
        resultados.
      </h6>

      <h6>
        Gracias a la regionalización de nuestra empresa, logramos excelentes
        alianzas donde nos permiten tener stock permanente de nuestras marcas y
        perspectivas de crecimiento constante.
      </h6>

      <h6>
        Nuestro logro mas reciente fue la creación de nuestra marca propia para
        pc, pc gamer y notebook! Te invitamos a que nos conozcas y siguas en
        redes @nsxcomputers.
      </h6>

      <h6>
        Contamos con oficinas comerciales y depósitos
      </h6>

      <ul className="sb-site-list">
        <h4 className="titulo-pais">Seleccione su país:</h4>
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
              Republica Dominicana
            </a>
          </li>
          <li className="sb-site-sgUSA">
            <a
              className="sb-site-link"
              id="USA"
              href="https://www.solutionboxusa.com/"
            >
              Estados Unidos
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

export default Landing;

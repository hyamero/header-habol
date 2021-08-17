/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";

import Navbar from "./components/Navbar";
import Content from "./components/Content";

import CondensedDisplay from "./fonts/Moniqa-CondensedDisplay.otf";
import MediumCondensedDisplay from "./fonts/Moniqa-MediumCondensedDisplay.otf";
import BoldCondensedDisplay from "./fonts/Moniqa-BoldCondensedDisplay.otf";
import BlackCondensedDisplay from "./fonts/Moniqa-BlackCondensedDisplay.otf";
import background from "./img/katsiaryna-endruszkiewicz-unsplash.jpg";

function App() {
  return (
    <div
      className="App"
      css={css`
        height: 100vh;
        background: url(${background});
        background-size: cover;
      `}
    >
      <Navbar />
      <Content />
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap");

          @font-face {
            font-family: moniqa;
            src: url(${CondensedDisplay});
            font-style: normal;
            font-weight: 200;
          }

          @font-face {
            font-family: moniqa;
            src: url(${MediumCondensedDisplay});
            font-style: normal;
            font-weight: 400;
          }

          @font-face {
            font-family: moniqa;
            src: url(${BoldCondensedDisplay});
            font-style: normal;
            font-weight: 600;
          }

          @font-face {
            font-family: moniqa;
            src: url(${BlackCondensedDisplay});
            font-style: normal;
            font-weight: 800;
          }

          * {
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 1280px;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default App;

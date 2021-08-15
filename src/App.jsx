/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";
import CondensedDisplay from "./fonts/Moniqa-CondensedDisplay.otf";
import MediumCondensedDisplay from "./fonts/Moniqa-MediumCondensedDisplay.otf";
import BoldCondensedDisplay from "./fonts/Moniqa-BoldCondensedDisplay.otf";
import BlackCondensedDisplay from "./fonts/Moniqa-BlackCondensedDisplay.otf";
import background from "./img/katsiaryna-endruszkiewicz-20SYlxMNiQA-unsplash.jpg";

function App() {
  return (
    <div
      className="App"
      css={css`
        height: 100vh;
        background: url(${background});
        background-size: cover;

        p {
          font-size: 10rem;
          font-family: moniqa;
          font-weight: 400;
          color: #dcedf2;
        }
      `}
    >
      <p>ALMOST BEFORE WE KNEW</p>
      <Global
        styles={css`
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
        `}
      />
    </div>
  );
}

export default App;

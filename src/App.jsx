/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";
import "./styles.css";

function App() {
  return (
    <div
      className="App"
      css={css`
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
            src: url("../fonts/Moniqa-CondensedDisplay.otf");
            font-style: normal;
            font-weight: 200;
          }

          @font-face {
            font-family: "moniqa";
            src: url("./fonts/Moniqa-MediumCondensedDisplay.otf");
            font-style: normal;
            font-weight: 400;
          }

          @font-face {
            font-family: moniqa;
            src: url("../fonts/Moniqa-BoldCondensedDisplay.otf");
            font-style: normal;
            font-weight: 600;
          }

          @font-face {
            font-family: moniqa;
            src: url("../fonts/Moniqa-BlackCondensedDisplay.otf");
            font-style: normal;
            font-weight: 800;
          }
        `}
      />
    </div>
  );
}

export default App;

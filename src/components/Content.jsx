/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Content = () => {
  return (
    <section
      className="Content container"
      css={css`
        font-family: moniqa;
        font-weight: 200;
        font-size: 6rem;
        color: #dcedf2;

        h1 {
          height: 80%;
        }

        .stxt {
          position: relative;
          left: 6rem;
        }
        p {
          line-height: 0.8;
        }
      `}
    >
      <div className="main-text">
        <p>
          BLANKET
          <div className="stxt">THE CENTURY</div>
          HABOLEON
        </p>
      </div>
    </section>
  );
};

export default Content;

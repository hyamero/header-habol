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
        font-size: 10rem;
        color: #dcedf2;
        height: 80vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

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

        .section-text {
          width: 30vw;
          text-align: left;
          position: relative;
          top: 8rem;

          h3 {
            font-size: 4rem;
            font-weight: 200;
          }

          p {
            font-family: "Montserrat", sans-serif;
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.1rem;
            opacity: 0.8;
            width: 70%;
          }
        }
      `}
    >
      <div className="main-text">
        <p>
          HABOLEON
          <div className="stxt">THE CENTURY</div>
          BLANKETOIS
        </p>
      </div>
      <div className="section-text">
        <h3>HABOLEON, WHAT IS IT?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id
          recusandae unde, vel dolores quasi reprehenderit ipsam. Doloribus
          recusandae voluptatibus quia minus est? Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
};

export default Content;

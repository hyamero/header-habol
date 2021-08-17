/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import logo from "../img/blanket1.svg";

const Navbar = () => {
  return (
    <nav
      className="Navbar container"
      css={css`
        padding: 20px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-family: moniqa;
          color: #dcedf2;
          font-weight: 400;
          font-size: 2rem;
        }

        ul {
          display: flex;
          justify-content: center;
          list-style: none;

          li {
            font-family: "Montserrat", sans-serif;
            font-size: 0.6rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: #dcedf2;
            opacity: 0.8;

            &:not(:last-child) {
              margin-right: 4rem;
            }
          }
        }
      `}
    >
      {/* <img src={logo} alt="logo" /> */}
      <h2>H</h2>
      <ul className="nav-btns">
        <li>HOMEPAGE</li>
        <li>PRODUCTS</li>
        <li>MARKET</li>
        <li>EVENTS</li>
      </ul>
    </nav>
  );
};

export default Navbar;

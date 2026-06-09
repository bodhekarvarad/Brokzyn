import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className=" text-center mt-5 ">People</h1>
      </div>
      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder and CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Brokzyn in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Brokzyn has changed the landscape of the Indian broking industry.
          </p>{" "}
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen. </p>
          <p>
            Connect on{" "}
            <Link to="/homepage" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{" "}
            <Link to="/tradingqnA" style={{ textDecoration: "none" }}>
              TradingQnA
            </Link>{" "}
            /
            <Link to="/twitter" style={{ textDecoration: "none" }}>
              Twitter
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container ">
      <div className="row text-center mt-5">
        <h3 className="mb-3">The Brokzyn Universe</h3>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ height: "44px" }}
            alt="smallcaseLogo"
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ height: "44px" }}
            alt="zerodhafundhouse"
          />
          <p className="text-small text-muted fs-6">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ height: "44px" }}
            alt="sensibullLogo"
          />
          <p className="text-small text-muted fs-6">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ height: "44px" }}
            alt="streakLogo"
          />
          <p className="text-small text-muted fs-6">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ height: "44px" }}
            alt="dittoLogo"
          />
          <p className="text-small text-muted fs-6">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            style={{ height: "44px" }}
            alt="tijori"
          />
          <p className="text-small text-muted fs-6">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center mt-5">
        <button
          className="p-2 btn btn-primary fs-5 mb-5 "
          style={{ width: "20%", margin: "auto" }}
        >
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            Sign up for free
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Universe;

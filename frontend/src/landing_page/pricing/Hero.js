import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div className="row border-bottom p-5 mt-5">
        <h2 className="text-center fs-2">Charges</h2>
        <p className="text-center text-muted fs-4 mt-2 ">
          List of all charges and taxes
        </p>
      </div>
      <div className="row  text-center">
        <div className="col-4 p-5 mt-5">
          <img src="media/images/pricing0.svg" alt="Pricing" />
          <h2 className=" fs-4 text-center mb-3">Free equity delivery</h2>
          <p className="text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/images/intradayTrades.svg" alt="Pricing" />
          <h2 className=" fs-4 text-center mb-3">Intraday and F&O trades</h2>
          <p className="text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades..
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/images/pricingEquity.svg" alt="Pricing" />
          <h2 className=" fs-4 text-center mb-3">Free direct MF</h2>
          <p className="text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;

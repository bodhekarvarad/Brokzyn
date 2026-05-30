import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h3 clasName="mt-5 text-muted">Open a Zerodha account</h3>
        <p className="text-muted mt-2 mb-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-2"
          style={{ width: "20%", margin: "auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
export default OpenAccount;

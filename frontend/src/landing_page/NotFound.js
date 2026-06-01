import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h3 clasName="mt-5 text-muted">404 Not Found</h3>
        <p className="text-muted mt-2 mb-3">
          Sorry, the page you are looking for does not exist. Please check the
          URL or return to the homepage.
        </p>
      </div>
    </div>
  );
}
export default NotFound;

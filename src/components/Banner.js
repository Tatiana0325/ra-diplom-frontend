import React from "react";
import banner from "../img/banner.jpg";
import onError from "../utils/onError.js";

export default function Banner() {
  return (
    <div className="banner">
      <img
        src={banner}
        className="img-fluid"
        onError={onError()}
        alt="К весне готовы!"
      />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

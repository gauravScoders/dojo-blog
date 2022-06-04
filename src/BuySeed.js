import React from 'react'

import logo from "./astronaut.svg";
export default function BuySeedScreen() {
  return (
    <>
      <div className="main-container">
        <div className="astro-box pr-1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="content-box">
          <h1 className="hero-heading">Buy S33D</h1>
          <p className="para-content">
            <span>
              We are delighted that you share the vision and dreams of creating
            </span>
            <span>a new future with us.</span>
          </p>
          <p className="para-content">
            <span className="content1">
              Our first goal is to raise $1,000,000 and you’re invited to
              participate
            </span>
            <span className="content1">
              as founding gardeners at S33D. To ensure a fair distribution in
              this
            </span>
            <span className="content1">
              first launch, each participant can acquire a maximum of{" "}
              <span className="txt-bold">100,000 S33D</span>.
            </span>
          </p>
          <p className="para-content">
            Please connect your wallet on Binance Smart Chain to begin.
          </p>
        </div>
      </div>
    </>
  );
}

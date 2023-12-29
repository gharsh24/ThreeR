import React from "react";
import "./styles/points.css";

function Points() {
  return (
    <div className="pointsComponent">
      <div className="card-wrapper one">
        <div className="card-header">
          <i className="fa-solid fa-user-plus"></i>
          <h2 className="card-header-text1 fw-bold">Sign </h2>
          <h1 className="card-header-text2">Up</h1>
          <p className="card-header-text3">
            Sign Up to our website and get 100 points as a welcome bonus. Dont
            worry its free and will always will be. Just go to the sign up page
            and fill in the details.
          </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>01</h1>
              <p>step</p>
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
      <div className="card-wrapper two">
        <div className="card-header">
          <i className="fas fa-cloud-download-alt"></i>
          <h2 className="card-header-text1 fw-bold">Earn </h2>
          <h1 className="card-header-text2">Points</h1>
          <p className="card-header-text3">
            Earn points by participating in activities such as planting or
            adopting trees, joining environmental education programs, taking
            quizzes, and signing up for newsletters.
          </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>02</h1>
              <p>step</p>
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
      <div className="card-wrapper three">
        <div className="card-header">
          <i className="fa-solid fa-gift"></i>
          <h2 className="card-header-text1 fw-bold">Redeem </h2>
          <h1 className="card-header-text2">Points</h1>
          <p className="card-header-text3">
            Redeem your points for rewards such as discounts, coupons, and
            freebies from our partner recycled product stores.
          </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>03</h1>
              <p>step</p>
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points;

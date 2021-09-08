import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HappyCustomer() {
  return (
    <div>
      <Container fluid className="p-0">
        <Row>
          <div className="review-container">
            <Col className="left" lg={6}>
              <img
                className="review_image"
                src="/happycustomer.jpg"
                alt=""></img>
            </Col>
            <Col className="right" lg={6}>
              <div className="text-box">
                <h3 className="review_text-box_h3">Happy customers</h3>
                <h5 className="review_text-box_h5 ">
                  "The best decision of our life"
                </h5>
                <p className="review_text-box_p">
                  This is a gorgeous place to stay, fantastic location, and
                  views to die for! Great amenities and very clean, would
                  definitely go back soon.
                </p>
                <Link href="/establishments">
                <button className="cta">book now</button>
                </Link>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <style global jsx>{`
        .review-container {
          display: flex;
          margin: 0 auto;
          width: 100%;
          padding: 0;
          flex-wrap: wrap;
          height: auto;
        }

        .review_text-box_h3 {
          color: #ff476f;
          font-size: 18px;
          text-transform: uppercase;
          font-weight: bold;
        }

        .review_text-box_p {
          font-style: italic;
          font-weight: 300;
          font-size: 16px;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .review_text-box_h5 {
          font-style: italic;
          font-size: 2.5em;
        }

        .col-lg-6 {
          background: #eee;
        }
        .right,
        .left {
          display: flex;
        }

        .text-box {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: 100%;
          max-height: 300px;
          padding-left: 5rem;
          padding-right: 5rem;
        }

        .review_image {
          width: 100%;
          height: 600px;
        }

        @media only screen and (max-width: 1190px) {
          .right {
            order: 1;
            height: auto;
            padding: 0;
            min-height: 400px;
          }

          .left {
            order: 2;
            height: auto;
            min-height: 400px;
          }

          .review_image {
            height: 100%;
          }
          .review_text-box_h5 {
            font-style: italic;
            font-size: 28px;
          }

          .review_text-box_p {
            font-style: italic;
            font-weight: 300;
            font-size: 1em;
            margin-bottom: 2.5rem;
          }

          .text-box {
            position: relative;
            text-align: left;
            width: 100%;
            height: auto;
            padding-left: 1.5rem;
            padding-right: 2rem;
            
          }
        }

        @media only screen and (max-width: 990px) {
          .text-box {
            padding-left: 3rem;
            padding-top: 3rem;
          }
        }

        @media only screen and (max-width: 590px) {
          .review_image {
            height: 50%;
            margin-top: 5rem;
          }
        }

      `}</style>
    </div>
  );
}

export default HappyCustomer;

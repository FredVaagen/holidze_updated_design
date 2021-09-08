import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";

function Category() {
  const router = useRouter();
  return (
    <>
      <Container fluid className="content">
        <Row className="content_row">
          <Col className="content_col content_col-1 ">   
              <a>
                <div
                  onClick={() =>
                    router.push({
                      pathname: "/establishments",
                      query: { category: "hotel" },
                    })
                  }>
                  <img src="/hotels.jpg" alt="" />
                  <h3>Hotels</h3>
                </div>
              </a>
          </Col>
          <Col className="content_col content_col-2 ">
              <a>
                <div
                  onClick={() =>
                    router.push({
                      pathname: "/establishments",
                      query: { category: "bnb" },
                    })
                  }>
                  <img src="/bnb.jpg" alt="" />
                  <h3>Bed and Breakfast</h3>
                </div>
              </a>
          </Col>
          <Col className="content_col content_col-3">
            <a>
              <div
                onClick={() =>
                  router.push({
                    pathname: "/establishments",
                    query: { category: "guesthouse" },
                  })
                }>
                <img src="/guesthouse.jpg" alt="" />
                <h3>Guesthouse</h3>
              </div>
            </a>
          </Col>
        </Row>
        <style global jsx>{`
          .content {
            width: 85vw;
            margin-bottom: 100px;
            margin-top: 120px;
            overflow-y: scroll;
            scrollbar-width: none;
            -ms-overflow-style: none;
            height: auto;
            min-height: 600px;
      
          }

          .content_row {
            display: flex;
            flex-wrap: nowrap;
            margin-left: 1rem;
          }
          .content::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
          .content h3 {
            font-size: 22px;
            font-weight: 300;
          }
          .content_col {
            transition: 0.3s;
            cursor: pointer;
          }
          .content_col:hover {
            transform: scale(1.1);
          }

          .content_col-1 {
            animation-name: moveInLeft;
            animation-duration: 1s;
            animation-timing-function: ease-out;
          }

          .content_col-2 {
            animation-name: moveInBottom;
            animation-duration: 1s;
            animation-timing-function: ease-out;
          }

          .content_col-3 {
            animation-name: moveInRight;
            animation-duration: 1s;
            animation-timing-function: ease-out;
          }

          .content img {
            max-width: 470px;
            margin-bottom: 10px;
          }
          @media only screen and (max-width: 990px) {
            .content {
              width: 100vw;
              margin-bottom: 50px;
              margin-top: 100px;
              min-height: auto;
            }
            .content_row {
              display: flex;
              flex-wrap: nowrap;
              margin-left: 0;
            }
          }
          @media only screen and (max-width: 550px) {
            .content img {
              max-width: 300px;
              margin-bottom: 10px;
            }
          }
        `}</style>
      </Container>
    </>
  );
}

export default Category;

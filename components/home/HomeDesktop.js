import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import SearchBar from "../establishments/search/SearchBar";
import Category from "./components/Category";
import HappyCustomer from "./components/HappyCustomer";

function HomeDesktop(establishments) {
  return (
    <>
      <Container fluid className="background-image">
        <Container className="text-container">
          <Link href="/establishments">
            <a>
              <h1>
                Bergen -
                <span className="h1_secondary"> where memories are made</span>
              </h1>
              <h2>
                We help <b>you</b> with accomedations.
              </h2>
            </a>
          </Link>
          <SearchBar {...establishments} />
        </Container>
      </Container>
      <Link href="/establishments">
        <button className="cta">Explore</button>
      </Link>
      <Category />
      <HappyCustomer />
      <style global jsx>
        {`
          @keyframes moveInLeft {
            0% {
              opacity: 0;
              transform: translateX(-10rem);
            }
            80% {
              opacity: 1;
              transform: translateX(1rem);
            }
            100% {
              opacity: 1;
              transform: translate(0);
            }
          }

          @keyframes moveInRight {
            0% {
              opacity: 0;
              transform: translateX(10rem);
            }
            80% {
              opacity: 1;
              transform: translateX(-1rem);
            }
            100% {
              opacity: 1;
              transform: translate(0);
            }
          }

          @keyframes moveInBottom {
            0% {
              opacity: 0;
              transform: translateY(3rem);
            }
            100% {
              opacity: 1;
              transform: translate(0);
            }
          }
          .main {
            display: flex;
            flex-direction: column;
            padding: 0;
            height: auto;
            overflow: hidden;
          }
          .background-image {
            height: 70vh;
            background: url("/background-desktop2.jpg") no-repeat;
            background-position: bottom;
            max-width: 100vw;
            margin: 0 auto;
          }

          .text-container {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            background: none;
          }

          h1 {
            display: block;
            font-size: 60px;
            font-weight: 400;
            font-style: italic;
            animation-name: moveInLeft;
            animation-duration: 1s;
            animation-timing-function: ease-out;
            color: white;
            background: none;
          }

          .h1_secondary {
            font-size: 50px;
          }

          h2 {
            display: block;
            font-size: 1.7rem;
            font-weight: 400;
            letter-spacing: 5px;
            animation: moveInRight 1s ease-out;
            color: white;
            background: none;
          }

          .searchbar {
            width: 700px;
            margin-top: 2rem;
            animation-name: moveInBottom;
            animation-duration: 1s;
            animation-timing-function: ease-out;
          }
          .cta {
            color: white;
            background: #ff1447;
            width: 200px;
            height: 50px;
            text-transform: lowercase;
            font-size: 24px;
            margin: 0 auto;
            margin-top: -1.5rem;
            border: none;
            letter-spacing: 0.3rem;
            animation-name: moveInBottom;
            animation-duration: 1s;
            animation-timing-function: ease-in;
          }
          .cta:hover {
            transform: scale(1.01);
          }
          @media only screen and (max-width: 990px) {
            h1,
            .h1_secondary {
              font-size: 30px;
              margin-top: -10rem;
            }

            h2 {
              display: block;
              font-size: 1rem;
              font-weight: 400;
              letter-spacing: 3px;

              color: white;
              background: none;
            }

            .searchbar {
              margin-left: 0;
              padding: 0;
              border-radius: 20px;
              width: 85vw;
              margin: 0 auto;
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default HomeDesktop;

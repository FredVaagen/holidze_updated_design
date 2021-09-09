import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "@material-ui/core/Button";
import Map from "./maps/Map";
import AppContext from "../../context/AppContext";
import RoomIcon from "@material-ui/icons/Room";
import { useRouter } from "next/router";

function Establishments({
  //Props from getServerSideProps
  establishments,
  sortByHotel,
  sortByGuesthouse,
  sortByBedAndBreakfast,
}) {
  // Checks if the admin is logged in ->
  const { user } = useContext(AppContext);
  // Set the state sortEstablishments used to map the establishment. If you wanna sort by hotels set state of establishments to sortByHotels for.ex. ->
  const [sortEstablishments, setSortEstablishments] = useState(establishments);

  const router = useRouter();
  let { category } = router.query;

  let activeHotel;
  let activeBnb;
  let activeGuesthouse;
  let exploreAll;

  if (category == "hotel" || "guesthouse" || "bnb") {
    useEffect(() => {
      if (category == "hotel") {
        activeHotel = setSortEstablishments(sortByHotel);
      } else if (category == "guesthouse") {
        activeGuesthouse = setSortEstablishments(sortByGuesthouse);
      } else if (category == "bnb") {
        activeBnb = setSortEstablishments(sortByBedAndBreakfast);
      } else setSortEstablishments(establishments);
    }, [category]);
  }

  return (
    <>
      <Container>
        <Container>
          <div className="sort">
            <button
              className={
                sortEstablishments == sortByHotel || activeHotel
                  ? "sort_button activeCategory"
                  : "sort_button "
              }
              onClick={() => {
                setSortEstablishments(sortByHotel);
                router.push(
                  {
                    pathname: "/establishments",
                    query: { category: "hotel" },
                  },
                  undefined,
                  { shallow: true }
                );
              }}>
              Hotels
            </button>
            <button
              className={
                sortEstablishments == sortByBedAndBreakfast || activeBnb
                  ? "sort_button activeCategory"
                  : "sort_button "
              }
              onClick={() => {
                setSortEstablishments(sortByBedAndBreakfast);
                router.push(
                  {
                    pathname: "/establishments",
                    query: { category: "bnb" },
                  },
                  undefined,
                  { shallow: true }
                );
              }}>
              Bed and breakfast
            </button>
            <button
              className={
                sortEstablishments == sortByGuesthouse || activeGuesthouse
                  ? "sort_button activeCategory"
                  : "sort_button "
              }
              onClick={() => {
                setSortEstablishments(sortByGuesthouse);
                router.push(
                  {
                    pathname: "/establishments",
                    query: { category: "guesthouse" },
                  },
                  undefined,
                  { shallow: true }
                );
              }}>
              Guesthouses
            </button>
            <button
              className={
                sortEstablishments == establishments || exploreAll
                  ? "sort_button activeCategory"
                  : "sort_button "
              }
              onClick={() => {
                setSortEstablishments(establishments);
                router.push(
                  {
                    pathname: "/establishments",
                  },
                  undefined,
                  { shallow: true }
                );
              }}>
              Explore all
            </button>
          </div>
        </Container>
      </Container>

      {sortEstablishments.map((establishment) => (
        //sortEstablishments value get set by the useState function [sortEstablishments, setSortEstaeblishments] = useState(establishments));
        // onClick functions above changes the state to the desired value (ex. sortByGuesthouse)
        <Link
          href="/establishment/[name]"
          as={`/establishment/${establishment.name}`}
          key={establishment.id}>
          <Container className="establishment-container">
            <Row className="establishment-specific">
              <Col
                s={12}
                md={6}
                lg={3}
                className="establishment-specific__image-col">
                <Carousel fade indicators={false} interval={null}>
                  {establishment.images.map((image) => (
                    <Carousel.Item key={image.id}>
                      <Image
                        className="d-block w-100"
                        src={image.formats.small.url}
                        alt={image.name}
                        width="1000"
                        height="185px"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col s={12} md={6} lg={4} className="details">
                <h3 className="establishment_name">{establishment.name}</h3>

                <p className="address">
                  {" "}
                  <RoomIcon className="details_mapPin" />{" "}
                  {establishment.address}
                </p>
                <Button variant="contained" className="button">
                  Read more <span className="arrow">&rarr;</span>
                </Button>
                {user ? (
                  <Link
                    href="/admin/edit/[name]"
                    as={`/admin/edit/${establishment.name}`}>
                    <Button variant="contained" className="button mt-2">
                      Edit
                    </Button>
                  </Link>
                ) : (
                  <></>
                )}
              </Col>
              <Col s={4} lg={5} className="map-container">
                <Map className="map" {...establishment} />
              </Col>
            </Row>
          </Container>
        </Link>
      ))}
      <style global jsx>
        {`
          .nav-container {
            background: #fff;
            position: fixed;
            z-index: 3;
            margin-top: -5rem;
          
          }

          .facilities-container {
            font-size: 10px !important;
          }

          .facilities svg {
            font-size: 10px;
          }

          .main {
            min-height: 1000px;

          }

          .details_mapPin {
            font-size: 14px;
            color: #ff1447;

          }

          .sort {
            margin-top: 5rem;
            display: flex;
            flex-wrap: wrap;
            margin-left: -2rem;
          }

          .sort_button {
            padding: .5rem 1.5rem;
            font-size: 1rem;
            font-weight: 300;
            border: 1px solid #141414;
            background-color: #fff;
            margin-right: 1rem;
            margin-top: 30px;
            transition: .3s;
          }

          .sort_button:hover {
            border: 1px solid #ff1447;
            color: #ff1447;

          }

          .activeCategory  {
            background-color: #ff1447;
            color: #fff;
            border: 1px solid #ff1447;
          }

          .activeCategory:hover {
            color: #fff;
            transform: scale(1.01);
          }

          .searchbar {
            background: white;
            box-shadow: 0 1px 3px rgb(41 51 57 / 50%);
            border-radius: 15px;
            border: none;
            align-self: center;
            width: 100%;
            max-width: 1280px;
            min-width: 200px;
            margin-top: 2rem;
            
          }
          .establishment-container {
            transition: 0.5s;
            padding: 0;
            margin-0;
            margin-top: 3rem;
            margin-bottom: 3rem;
            background: white;
          }
          .establishment-container:hover {
           
            cursor: pointer;
          }

          h1 {
            margin-top: 5rem;
            font-weight: 300;
            text-transform: uppercase;
          }
          .col-md-6, .col-lg-3, .col-lg-5 {
            padding: 0;
            margin: 0;
          }
          .details h3 {
            font-size: 20px;
            margin-bottom: 0;
            font-weight: 300;
            text-transform: uppercase;
          }
          .establishment-specific {
            box-shadow: 0 1px 3px rgb(41 51 57 / 50%);
            margin: 0 auto;
            padding-right: 0;
            padding-left: 0;
            margin-bottom: 2rem;
            padding: 0;
          }
          .details {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
    
          p {
            font-size: 12px;
          }
          .price, .address {
            font-size: 12px;
            font-weight: 300;
          }
          .button {
            background: #ff1447 !important;
            color: #fff !important;
            font-size: 11px !important;
            transition: .2s;
          }

          .button:hover {
            transform: scale(1.01);
           
          }
          .establishment-specific__image-col {
            padding-top: 10px;;
            padding-left: 10px;
          }
          .establishment-specific__image-col img {
            height: 200px;     
          }

          .bottom-footer {
            background: white;
          }

          @media only screen and (max-width: 768px) {
            .details h3 {
              margin-bottom: .5rem;
            }

            .facilities {
              margin-left: -.4rem;
          
            }

          }

          @media only screen and (max-width: 600px) {
            .sort {
              margin: 0 auto;
            } 

            .sort_button {
              padding: .4rem .8rem;
              font-size: .8rem;
              margin-right: 1rem;
              margin-top: 20px;
              transition: .3s;
            }

            .establishment-container {
              padding-right: 15px;
              padding-left: 5px;
            }
            
          }
        `}
      </style>
    </>
  );
}

export default Establishments;

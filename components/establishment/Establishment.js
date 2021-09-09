import { useState } from "react";
import Map from "../establishments/maps/Map";
import Facilities from "./facilities/Facilities";
import Modal from "react-bootstrap/Modal";
import Button from "@material-ui/core/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Enquiry from "./enquiry/EnquiryForm";
import RoomIcon from "@material-ui/icons/Room";

function EstablishmentCard({ establishment, images }) {
  //set modal show state to false ->
  const [show, setShow] = useState(false);
  //When you click close on the modal ->
  const handleClose = () => setShow(false);
  //When handleShow is called set modal to true ->
  const handleShow = () => setShow(true);

  const size = 4;
  const galleryImages = images.slice(0, size);
  return (
    <>
      <div className="parent">
        <div className="div1">
          <div className="establishment-gallery">
            <div className="establishment-gallery_box">
              {galleryImages.map((image) => (
                <img src={image.url} alt={image.name} />
              ))}
            </div>
          </div>
        </div>
        <div className=" establishment_info_container"></div>
        <div className="div2">
          <h1 className="mt-3">{establishment.name}</h1>

          <div className="establishment-name_right-rating">
            <h5>8.3</h5>
            <h5>191 reviews</h5>
          </div>
        </div>
        <div className="div3"> </div>
        <div className="div4">
          <div className="desc-map">
            <div className="description">{establishment.description}</div>
            <div className="map">
              <Map {...establishment} />
              <p>
                <RoomIcon className="description_address_pin" />{" "}
                {establishment.address}
              </p>
            </div>
          </div>
          <div className="facilities">
            {" "}
            <Facilities className="facilities" {...establishment} />
          </div>
          <div className="recommedation">
            <p>Lucy and other 3 friends recommend this hotel</p>
            <div className="recommedation_avatars">
              {" "}
              <img src="/female-1.jpg" />
              <img src="/female-2.jpg" />
              <img src="/male-1.jpg" />
              <img src="/male-2.jpg" />
            </div>
          </div>
        </div>

        <div className="div5">
          <div className="room">
            <div className="image-price-container">
              <img src="/standard.jpg" />
              <p className="room-price">{establishment.price} NOK</p>
            </div>
            <h5>Standard room</h5>
            <ul>
              <li>Two Persons</li>
              <li>Queensized Bed</li>
            </ul>
          </div>
          <div className="room">
            <div className="image-price-container">
              <img src="/superior.jpg" />
              <p className="room-price">499.99 NOK</p>
            </div>
            <h5>Superior room</h5>
            <ul>
              <li> Two Persons</li>
              <li>Queensized Bed</li>
            </ul>
          </div>
          <div className="room">
            <div className="image-price-container">
              <img src="/family.jpg" />
              <p className="room-price">599.99 NOK</p>
            </div>
            <h5>Family room</h5>
            <ul>
              <li> Two Persons</li>
              <li>Queensized Bed</li>
            </ul>
          </div>
        </div>
        <div className="div6">
          <div className="reviews">
            <div className="reviews_box-1">
              <div className="review_box_text">
                <p>
                  This is a lovely place, great location minutes from very
                  attractive high street with great independent shops, pubs,
                  restaurants and bars, interesting harbour and seafront/ beach.
                  The very attractive accommodation is spotless.
                </p>
              </div>
              <div className="review_box_person">
                <div className="review_box_person_image_name_date">
                  <img src="/male-1.jpg" />
                  <div className="review_name_date-container">
                    <div className="review_name">John Finley</div>
                    <div className="review_date">26 May 2018</div>
                  </div>
                </div>
                <div className="review_box_person_rating">8.5</div>
              </div>
            </div>
            <div className="reviews_box-2">
              <div className="review_box_text">
                <p>
                  A brilliant stay and a beautiful room! Spacious and
                  beautifully decorated. We had a lovely 2 nights and cant wait
                  to come back to explore Bergen more. We will definitely look
                  here again!
                </p>
              </div>
              <div className="review_box_person">
                <div className="review_box_person_image_name_date">
                  <img src="/female-2.jpg" />
                  <div className="review_name_date-container">
                    <div className="review_name">Alessandra Lim</div>
                    <div className="review_date">13 August 2020</div>
                  </div>
                </div>
                <div className="review_box_person_rating">9.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>
        {`
          .parent {
            display: grid;
            max-width: 1600px;
            width: 100%;
            margin: 0 auto;
            background: #eee;
          }

          .div4 {
            box-shadow: 0 0.5rem 1rem rgb(20 20 20 / 5%);
          }

          .room {
            box-shadow: 0 0.5rem 1rem rgb(20 20 20 / 5%);
          }

          .div6 .reviews .reviews_box-1,
          .div6 .reviews .reviews_box-2 {
            box-shadow: 0 0.5rem 1rem rgb(20 20 20 / 5%);
          }

          .desc-map {
            display: flex;
            margin-bottom: 2rem;
            border-bottom: 1px solid #eee;
            font-weight: 300;
          }

          .description_address_pin {
            color: #d2122e;
          }

          .div1 {
            grid-column: 1 / 7;
          }

          .recommedation {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
          }

          .recommedation p {
            font-weight: 300;
            margin-left: 2rem;
          }

          .recommedation_avatars {
            margin-right: 1rem;
          }

          .recommedation img {
            border-radius: 50%;
          }

          .recommedation img:not(:last-child) {
            margin-right: -1rem;
          }

          .establishment-gallery_box {
            flex-wrap: nowrap;
            display: flex;
            overflow-x: scroll;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .establishment-gallery_box img {
            width: 100%;
            max-height: 400px;
          }

          .establishment-gallery_box ::-webkit-scrollbar {
            width: 0;
            height: 0;
          }

          .div2 {
            grid-area: 2 / 1 / 3 / 7;
            display: flex;
            justify-content: space-between;
            margin-top: 0;
            background: white;
          }

          .div2 h1 {
            font-size: 30px;
            color: black;
            padding-top: 10px;
            margin-left: 1rem;
            font-family: "Playfair Display", serif;
          }

          .div2 .establishment-name_right-rating {
            background-color: #d2122e;
            color: white;
            padding: 0.5rem;
            text-align: center;
          }

          .establishment-name_right-rating h5 {
            font-size: 14px;
          }
          .div3 {
            grid-area: 3 / 1 / 5 / 7;
          }
          .div4 {
            grid-area: 3 / 1 / 5 / 5;
            background: white;
            margin: 3em;
            height: 630px;
            display: block;
          }

          .div4 .description {
            width: 50%;
            padding-top: 2rem;
            padding-left: 2rem;
            padding-right: 1rem;
          }

          .div4 .map {
            width: 50%;
            margin-top: 2rem;
            margin-right: 2rem;
            margin-bottom: 3rem;
          }
          .map {
            height: 200px;
          }

          .div5 {
            grid-area: 3 / 5 / 5 / 7;
            margin-right: 3rem;
            margin-top: 3rem;
            height: auto;
          }

          .div5 .room {
            width: 100%;
            background: white;
            margin-bottom: 2rem;
            height: 300px;
          }

          .image-price-container {
            display: flex;
            justify-content: space-between;
          }

          .div5 .room img {
            width: 200px;
            margin: 2rem;
          }

          .div5 .room p {
            margin: 2rem;
            font-weight: bold;
          }

          .div5 .room h5 {
            margin-left: 2rem;
          }

          .div5 .room li {
            margin-left: 1rem;
          }

          .div6 {
            grid-area: 4 / 1 / 5 / 5;
            height: 300px;
            margin-bottom: 2rem;
            width: 92%;
            margin-left: 3rem;
          }

          .div6 .reviews {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
          }

          .div6 .reviews .reviews_box-1,
          .reviews_box-2 {
            background: white;
            width: 50%;
            height: 100%;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;
            padding: 2rem;
          }

          .div6 .reviews .reviews_box-2 {
            height: 100%;
            margin-right: 5px;
            margin-left: 1rem;
          }

          .review_box_text {
            flex: 1 100px;
            font-size: 16px;
            font-weight: 300;
          }

          .review_box_person {
            display: flex;
            justify-content: space-between;
          }

          .review_box_person img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
          }

          .review_box_person_image_name_date {
            display: flex;
          }

          .review_box_person_rating {
            font-size: 30px;
            color: #ff1447;
          }

          .review_name_date-container {
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
          }

          .review_name {
            font-weight: 600;
            margin-top: 5px;
          }

          .review_date {
            font-size: 14px;
            font-weight: 300;
          }

          .book-now {
            width: 200px !important;
            display: flex !important;
            height: 50px !important;
            margin: 0 auto !important;
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
            color: #fff !important;
            justify-content: center;
            font-size: 12px !important;
            font-weight: 500 !important;
            background: #d2122e !important;
            transition: 0.4s !important;
            font-size: 20px !important;
          }

          .book-now:hover {
            transform: scale(1.01);
          }

          @media only screen and (max-width: 1200px) {
            .parent {
              display: flex;
              flex-direction: column;
            }

            .desc-map {
              display: block;
            }

            .div4 .description {
              width: 100%;
              margin: 0;
              padding: 15px;
            }
            .div4 .map {
              width: 100%;
              padding: 0 15px 0 15px;
            }

            .div4 {
              height: 800px;
              margin: 1.5rem;
            }

            .div5 {
              margin: 1.5rem;
            }
          }

          @media only screen and (max-width: 1000px) {
            .div5 {
              margin: 1.5rem;
            }
          }

          @media only screen and (max-width: 800px) {
            .div6 .reviews {
              display: block;
              height: auto;
              margin-left: -1rem;
            }

            .div6 {
              width: 92%;
              height: auto;
              margin-left: 2rem;
            }

            .div6 .reviews .reviews_box-1,
            .reviews_box-2 {
              width: 100%;
              margin-bottom: 2rem;
            }

            .div6 .reviews .reviews_box-2 {
              margin-left: 0;
            }
          }

          @media only screen and (max-width: 600px) {
            .div1 img {
              padding: 1rem 1rem 0 1rem;
              background: white;
            }
            .div2 {
              padding-right: 1rem;
            }

            .div2 h1 {
              font-size: 20px;
            }

            .div .establishment-name_right-rating {
              font-size: 10px;
            }

            .recommedation {
              display: block;
              padding-bottom: 1rem;
              background: white;
            }

            .recommedation img:nth-child(1) {
              margin-left: 1rem;
            }
          }

          @media only screen and (max-width: 489px) {
            .div5 {
              margin-top: 5rem;
            }

            .div5 .room {
              height: auto;
              background: white;
              padding: 1rem;
            }

            .image-price-container {
              display: block;
            }
          }

          @media only screen and (max-width: 400px) {
            .div5 {
              margin-top: 9rem;
            }

            .room .image-price-container img {
              width: 200px;
              height: 100px;
              margin-left: -0.2rem;
            }
          }
        `}
      </style>

      <Button
        className="book-now mt-3"
        variant="contained"
        onClick={handleShow}>
        book now
      </Button>

      <Modal show={show} size="xl" onHide={handleClose} keyboard={false}>
        <Modal.Body className="enquiry-modal">
          <Container className="modal-container">
            <Row className="modal-row">
              <Col className="modal-left-col" lg={5}>
                <div className="establishment_details">
                  <ul>
                    <li>
                      <div><RoomIcon /> <span>Address</span></div>
                     {establishment.address}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div><RoomIcon /> <span>Phone</span></div>
                     +47 123 12 123
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div><RoomIcon /> <span>Email</span></div>
                     {establishment.name}@support.com
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="modal-right-col">
                <Modal.Header className="mb-1" closeButton></Modal.Header>

                <Enquiry {...establishment} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <style global jsx>{`
        .modal-container,
        modal-row {
          padding: 0;
          margin: 0;
        }

        .modal-header {
          border: none;
        }

        .modal-header button {
          font-size: 44px;
          color: #ff1447;
        }

        .modal-header button:hover {
          color: #ff1447;
        }
        .enquiry-modal .modal-left-col {
          background: #eee;
          padding: 0;
          margin: 0;
          margin-top: -15px;
          display: flex;
          justify-content: center;
        }

        .enquiry-modal .modal-left-col .establishment_details {
          padding: 12rem 8rem 8rem 4rem;
        }

        .modal-right-col {
          margin-top: -15px;
        }

        .establishment_details ul {
          
          list-style-type: none;
          font-weight: 300;
        }

        .establishment_details ul li div {
          margin-left: -1.7rem;
         
        }
        .establishment_details ul li div span {
          font-weight: 500;
          text-transform: uppercase;
        }


        .establishment_details ul li div svg {
          color: red;
        }

        @media only screen and (max-width: 900px) {
          .enquiry-modal .modal-left-col {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default EstablishmentCard;

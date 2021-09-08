import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import Map from "../establishments/maps/Map";
import Enquiry from "./enquiry/EnquiryForm";
import Facilities from "./facilities/Facilities";
import RoomIcon from "@material-ui/icons/Room";

function SpecificEstablishmentCard({ establishment, images }) {
  //set modal show state to false ->
  const [show, setShow] = useState(false);
  //When you click close on the modal ->
  const handleClose = () => setShow(false);
  //When handleShow is called set modal to true ->
  const handleShow = () => setShow(true);

  const size = 5;
  const galleryImages = images.slice(0, size);
  return (
    <>
      <Container fluid className="establishment">
        <div className="establishment-gallery">
          <div className="establishment-gallery_box">
            {galleryImages.map((image) => (
              <img src={image.url} alt={image.name} />
            ))}
          </div>
        </div>
        <Container className="establishment-name" fluid>
          <h1>{establishment.name}</h1>
          <Button className="book-now" variant="contained" onClick={handleShow}>
            book now
          </Button>
          <div className="establishment-name_right">
            <h3>
              <RoomIcon />
              {establishment.address}
            </h3>
            <div className="establishment-name_right-rating">
              <h4>8.3</h4>
              <h5>191 reviews</h5>
            </div>
          </div>
        </Container>
        <Container fluid className="details-container">
          <Container>
            <Row className="details">
              <Col>
                <p className="description">{establishment.description}</p>
              </Col>
              <Col>
                <div className="map">
                  <Map {...establishment} />
                </div>
              </Col>
              <Facilities className="facilities" {...establishment} />
            </Row>
          </Container>
          <Container>
            <Row>
              {" "}
              <Col className="room-col">
                <Container className="room standard-room">1</Container>
                <Container className="room family-room">2</Container>
                <Container className="room superior-room">3</Container>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container>
          <div className="container_book-now">
            <Button
              className="book-now mt-5"
              variant="contained"
              onClick={handleShow}>
              book now
            </Button>
          </div>
        </Container>

        <Modal show={show} size="lg" onHide={handleClose} keyboard={false}>
          <Modal.Body className="enquiry-modal">
            <Container>
              <Row>
                <Col className="modal-left-col" lg={5}>
                  <p>{establishment.address}</p>
                </Col>
                <Col className="modal-right-col">
                  <Modal.Header closeButton></Modal.Header>
                  <Enquiry {...establishment} />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
        <style global jsx>
          {`
            .establishment-gallery {
              display: flex;
              flex-wrap: nowrap;
              margin: 0 auto;
              max-width: 1500px;
            }

            .establishment-gallery_box {
              flex-wrap: nowrap;
            }

            .establishment-gallery_box img {
              max-width: 500px;
              min-width: 400px;
              height: 400px;
            }

            .establishment-name {
              margin-top: 1rem;
              margin-bottom: 1rem;
              max-width: 1500px;
              display: flex;
              align-content: center;
              justify-content: space-between;
              color: #d2122e;
            }

            .establishment-name_right {
              display: flex;
            }

            .establishment-name_right h3 {
              margin-right: 1rem;
              padding-top: 0.5rem;
            }

            .establishment-name_right-rating {
              background-color: #d2122e;
              color: white;
              padding: 0.5rem;
              text-align: center;
              margin-top: -1rem;
              margin-bottom: -1rem;
              margin-right: -1rem;
            }

            .establishment-name_right-rating h5 {
              font-size: 12px;
            }

            .establishment-name h1 {
              font-size: 30px;
              font-weight: 500;
            }

            .establishment-name h3 {
              font-size: 14px;
            }

            .establishment {
              margin-top: 5rem;
              height: auto;
              margin-bottom: 3rem;
              color: black;
              display: flex;
              flex-direction: column;
            }

            .room-col {
              background: #eee;
              margin-top: 3rem;
            }

            .room {
              width: 400px;
              height: 300px;
              margin-bottom: 3rem;
              background: white;
            }

            .details-container {
              max-width: 1500px;
              background: #eee;
              height: auto;
              display: flex;
            }
            .details {
              background: white;
              margin-top: 3rem;
              margin-left: 2rem;
              padding: 1rem;
              width: 900px;
            }

            .details .description {
              font-size: 16px;
              font-weight: 300;
            }

            .facilities {
              border-top: 1px solid #d5d5d5;
              padding: 3rem;
              margin-top: 3rem;
              width: 95%;
              font-size: 20px;
            }

            .facilities svg {
              margin: 1rem;
            }

            .establishment-address {
              font-size: 10px;
              margin-top: 0.5rem;
              margin-bottom: 2rem;
            }

            .modal-title {
              font-weight: 400;
              font-size: 40px;
              color: #141414;
            }

            .modal-header {
              border-bottom: none;
            }
            .modal-body {
              padding: 0;
            }

            .modal-dialog {
              max-width: 1080px;
              margin-top: 100px;
            }

            .modal-left-col {
              background: #eee;
            }

            .map {
              height: 200px;
            }

            .MuiSvgIcon-root {
              opacity: 1;
            }
            .container_book-now {
              display: flex;
              justify-content: center;
              background: white;
            }
            .book-now {
              width: 200px !important;
              height: 50px;

              color: #fff !important;
              font-size: 12px !important;
              font-weight: 500 !important;
              background: #d2122e !important;
              transition: 0.4s;
              font-size: 20px !important;
            }

            .book-now:hover {
              transform: scale(1.01);
            }

            .map-address-panel {
              display: none;
            }
          `}
        </style>
      </Container>
    </>
  );
}

export default SpecificEstablishmentCard;

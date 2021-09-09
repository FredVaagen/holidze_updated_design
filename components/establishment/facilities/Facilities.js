import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//ICONS
import WifiIcon from "@material-ui/icons/Wifi";
import TvIcon from "@material-ui/icons/Tv";
import SmokeFreeIcon from "@material-ui/icons/SmokeFree";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccessibleIcon from "@material-ui/icons/Accessible";
import ComputerIcon from "@material-ui/icons/Computer";
import PoolIcon from "@material-ui/icons/Pool";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import KitchenIcon from "@material-ui/icons/Kitchen";

function Facilities(props) {
  const wifi = props.facilities.wifi;
  const tv = props.facilities.tv;
  const smokefree = props.facilities.smokefree;
  const airportshuttle = props.facilities.airportshuttle;
  const hotelbar = props.facilities.hotelbar;
  const gym = props.facilities.gym;
  const ac = props.facilities.ac;
  const accesible = props.facilities.accesible;
  const workstation = props.facilities.workstation;
  const pool = props.facilities.pool;
  const parking = props.facilities.parking;
  const kitchen = props.facilities.kitchen;

  //All these functions work the same way. If the (value) is there -> Return the icon + text -> 

  function Accessible() {
    if (accesible) {
      return (
        <div className="facilities-container">
          <AccessibleIcon /> Accsessible
        </div>
      );
    }
  }

  function WorkStation() {
    if (workstation) {
      return (
        <div className="facilities-container">
          <ComputerIcon /> Workstation
        </div>
      );
    }
  }

  function SmokeFree() {
    if (smokefree) {
      return (
        <div className="facilities-container">
          <SmokeFreeIcon /> Smokefree
        </div>
      );
    }
  }

  function AirCondition() {
    if (ac) {
      return (
        <div>
          <AcUnitIcon /> Aircondition
        </div>
      );
    }
  }
  function AirportShuttle() {
    if (airportshuttle) {
      return (
        <div className="facilities-container">
          <AirportShuttleIcon /> Airport Shuttle
        </div>
      );
    }
  }

  function Gym() {
    if (gym) {
      return (
        <div className="facilities-container">
          <FitnessCenterIcon /> Gym
        </div>
      );
    }
  }

  function Wifi() {
    if (wifi) {
      return (
        <div className="facilities-container">
          <WifiIcon /> Wifi
        </div>
      );
    }
  }

  function Tv() {
    if (tv) {
      return (
        <div className="facilities-container">
          <TvIcon /> TV
        </div>
      );
    }
  }
  function HotelBar() {
    if (hotelbar) {
      return (
        <div className="facilities-container">
          <LocalBarIcon /> Bar
        </div>
      );
    }
  }

  function Pool() {
    if (pool) {
      return (
        <div className="facilities-container">
          <PoolIcon /> Pool
        </div>
      );
    }
  }

  function Parking() {
    if (parking) {
      return (
        <div className="facilities-container">
          <LocalParkingIcon /> Parking
        </div>
      );
    }
  }
  function Kitchen() {
    if (kitchen) {
      return (
        <div className="facilities-container">
          <KitchenIcon /> Kitchen
        </div>
      );
    }
  }

  return (
    <Container fluid className="facilities">
     
      <Row>
        {Accessible()}
        {WorkStation()}
        {SmokeFree()}
        {AirCondition()}
        {AirportShuttle()}
        {Gym()}
        {Tv()}
        {Wifi()}
        {HotelBar()}
        {Pool()}
        {Parking()}
        {Kitchen()}
      </Row>

      <style global jsx>
        {`
             .facilities {
              display: flex;
              width: 100%;
              height: 220px;
              padding-left: 1rem;
            }
  
            .facilities div {
              margin: 1rem 1rem 1rem 0;
              font-size: 16px;
              text-align: left;
              
            }

          
            .facilities svg {
              font-size: 30px;
              opacity: 0.7;
           
            }

            @media only screen and (max-width: 400px) {
              .facilities div {
                padding: 0;
                font-size: 12px;
                text-align: left;
                display: block;
                margin: 0 auto;
              }

            }
     
        `}
      </style>
    </Container>
  );
}

export default Facilities;

import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HotelIcon from "@material-ui/icons/Hotel";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//My Imports
import { logout } from "../../lib/auth";
import AppContext from "../../context/AppContext";

function DesktopNavigation() {
  const { user, setUser } = useContext(AppContext);
  const router = useRouter();
  return (
    <Container className="nav-container" fluid>
      <Navbar>
        <Navbar.Brand href="/">
          <Image src="/logo2.svg" height="50px" width="60px" />
          <span>Holidaze</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link href="/establishments" passHref>
              <Nav.Link className="mr-5">
                <HotelIcon /> Find a place to stay
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className="mr-5 ml-5">
                <ContactSupportIcon />
                Contact us
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="mr login">
            <Nav.Item>
              {user ? (
                <Link href="/admin" passHref>
                  <Nav.Link>
                    <DashboardIcon />
                    Dashboard
                  </Nav.Link>
                </Link>
              ) : (
                <></>
              )}
            </Nav.Item>
            <Nav.Item className="login-link">
              {user ? (
                <Link href="/" passHref>
                  <Nav.Link 
                    className="logout"
                    onClick={() => {
                      logout();
                      setUser(null);
                      router.push("/");
                    }}>
                    <ExitToAppIcon /> Logout
                  </Nav.Link>
                </Link>
              ) : (
                <Link href="/login" passHref>
                  <Nav.Link>
                    <AccountCircleIcon /> Sign in
                  </Nav.Link>
                </Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <style global jsx>
        {`
          .navbar {
            height: 70px;
            display: flex;
            justify-content: space-between;
            max-width: 86%;
            margin: 0 auto;
            padding: 0;
          }

          @media only screen and (max-width:990px) {
            .navbar {
              width: 100%;
            }
          }


          .navbar-brand {
            display: flex;
            margin-left: -7px;
          }

          .navbar-brand span {
            display: inline;
            margin-top: 0.5rem;
            font-size: 24px;
          }

          .navbar .navbar-nav .nav-link {
            font-size: 12px;
            color: black;
            opacity: 0.8;
            transition: 0.3s;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
          }

          .navbar .navbar-nav .nav-link:hover {
            font-size: 12px;
            color: black;
            transform: scale(1.1);
          }

          .navbar svg {
            margin-right: 5px;
            color: #d2122e;
          }

          .login .nav-link {
            font-family: "Roboto", sans-serif;
            font-weight: 300;
            font-size: 12px;
          }
        `}
      </style>
    </Container>
  );
}

export default DesktopNavigation;

import { Navbar } from "flowbite-react";
import logo from "../assets/images/logo.png";


export default function FNavbar() {
  return (
    <Navbar className="sticky top-0 bg-white ">
      <Navbar.Brand>
        <img
          alt="Flowbite React Logo"
          style={{ width: "90px", height: "90px" }}
          className="mr-3 h-6 sm:h-9"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          my blogs
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

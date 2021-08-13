import "./Navbar.css";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { Guidelines } from "../Guidelines";

//Navbar Component
export const Navbar = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <ul className="nav-collection">
            <li className="navlists nav-left">
              <img
                src="https://res.cloudinary.com/project-assets/image/upload/v1628832136/logo_eyslto.png"
                alt="logo"
                className="logo"
              />
              <p className="logo-text">Minimal Editor</p>
            </li>
            <li className="navlists" onClick={() => setShowModal(true)}>
              Guidelines
            </li>
            <li className="navlists">
              <a
                href="https://github.com/suyashpradhan/minimal-text-editor"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="nav-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Modal to show guidelines */}
      {showModal && (
        <Guidelines
          modalTitle="Welcome to Minimal Text Editor"
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

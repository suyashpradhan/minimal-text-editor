import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <ul className="nav-collection">
            <li className="navlists nav-left">
              <p>Logo</p>
            </li>
            <li className="navlists">About</li>
            <li className="navlists">Github</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

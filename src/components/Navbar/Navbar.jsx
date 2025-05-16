import "./navbar.css";
import Logo from "../../assets/logo.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useRef, useState } from "react";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => (e) => {
    e.stopPropagation();
    if (menu === selectedMenu) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menu);
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <nav>
          <a href="#" className="navbar-logo">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="navbar-links">
            {["Platform", "Solutions", "Customers", "Partners", "Resources", "Company"].map((item, index) => (
              <li key={index}>
                <a className={`links ${selectedMenu === item ? "selected" : "unselected"}`} href="#" onClick={handleMenuClick(item)}>
                  {item}
                  <svg className="arrow-icon" width="12" height="11" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1282 14.8201C19.1838 15.8756 19.1838 17.5899 18.1282 18.6454L4.61702 32.1566C3.56146 33.2122 1.84723 33.2122 0.791671 32.1566C-0.26389 31.101 -0.26389 29.3868 0.791671 28.3313L12.3944 16.7285L0.800115 5.12581C-0.255446 4.07025 -0.255446 2.35602 0.800115 1.30046C1.85568 0.244899 3.56991 0.244899 4.62547 1.30046L18.1366 14.8116L18.1282 14.8201Z"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {selectedMenu && <DropdownMenu menu={selectedMenu} setSelectedMenu={setSelectedMenu} />}
        <div className="header-actions">
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.431 24.4397L14.2501 16.2588C13.5711 16.8472 12.7795 17.3055 11.8752 17.6336C10.971 17.9617 10.0087 18.1258 8.98846 18.1258C6.54071 18.1258 4.4691 17.2772 2.77365 15.5799C1.0782 13.8826 0.230469 11.8345 0.230469 9.43571C0.230469 7.03688 1.07911 4.98882 2.7764 3.29153C4.47368 1.59425 6.5274 0.745605 8.93755 0.745605C11.3477 0.745605 13.3958 1.59425 15.0817 3.29153C16.7677 4.98882 17.6107 7.03858 17.6107 9.4408C17.6107 10.4105 17.4523 11.348 17.1354 12.2532C16.8186 13.1584 16.3434 14.0071 15.7097 14.7991L23.9585 22.9801C24.1622 23.1711 24.264 23.4056 24.264 23.6834C24.264 23.9613 24.1519 24.2124 23.9275 24.4368C23.7219 24.6424 23.4695 24.7452 23.1702 24.7452C22.871 24.7452 22.6246 24.6434 22.431 24.4397ZM8.95452 16.0891C10.7932 16.0891 12.3562 15.4384 13.6433 14.1372C14.9304 12.8359 15.5739 11.2688 15.5739 9.43571C15.5739 7.60264 14.9304 6.03548 13.6433 4.73423C12.3562 3.43298 10.7932 2.78235 8.95452 2.78235C7.09694 2.78235 5.51799 3.43298 4.21766 4.73423C2.91736 6.03548 2.26721 7.60264 2.26721 9.43571C2.26721 11.2688 2.91736 12.8359 4.21766 14.1372C5.51799 15.4384 7.09694 16.0891 8.95452 16.0891Z"
                fill="#253143"
              ></path>
            </svg>
          </button>
          <button className="outlined">Start Free</button>
          <button className="solid">Talk to us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

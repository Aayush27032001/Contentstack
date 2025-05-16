import { useEffect, useRef } from "react";
import "./dropdownMenu.css";

const DropdownMenu = ({ menu, setSelectedMenu }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectedMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-menu-wrapper">
      <div className="menu-container">
        <div className="menu-sections" ref={dropdownRef}>
          <div className="menu-section primary">
            <p className="menu-title">{menu}</p>
          </div>
          <div className="menu-section"></div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

import React from "react";
import "./header.css";

/**
 * Header bar element for navigating different
 * sets of content in page.
 * TODO: clickable header items could be their
 * own components maybe, for ease of use 
 * @param {*} props props
 * @returns {JSX.Element} header bar
 */
export default function Header(props) {
  return (
    <div className="header-bar stick-to-top">
      <div className="header-item">
        Some header item
      </div>
      <div className="header-item">
        Some other header item
      </div>
    </div>
  );
}
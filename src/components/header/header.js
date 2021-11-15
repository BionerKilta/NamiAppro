import React, { useState } from "react";
import { LanguageToggle, HeaderItem } from "..";
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
  const [selected, setSelected] = useState("item-1");

  return (
    <div className="header-bar stick-to-top" data-testid="header-bar">
      <div className="header-link-container header-left">
        <HeaderItem
          id="item-1"
          data_testid="header-item-1"
          text="Some header item"
          onClick={setSelected}
          selected={selected === "item-1"}
        />
        <HeaderItem
          id="item-2"
          data_testid="header-item-2"
          text="Some other header item"
          onClick={setSelected}
          selected={selected === "item-2"}
        />
        <HeaderItem
          id="item-3"
          data_testid="header-item-3"
          text="Yet some other header item"
          onClick={setSelected}
          selected={selected === "item-3"}
        />
      </div>
      <div className="header-link-container header-right">
        <div className="header-item">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import "./headerItem.css";

export default function HeaderItem(props) {
  const {
    onClick,
    selected,
    text,
    id,
    data_testid
  } = props;

  function getClasses() {
    if (selected) return "header-item selected";
    return "header-item";
  }

  return (
    <div
      className={getClasses()}
      onClick={() => onClick(id)}
      data-testid={data_testid}
    >
      {text}
    </div>
  );
}

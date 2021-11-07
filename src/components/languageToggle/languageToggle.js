import React, { useContext } from "react";
import { LanguageContext } from "../../context";

/**
 * Language toggling element
 * @returns {JSX.Element} language toggle
 */
export default function LanguageToggle() {
  const langContext = useContext(LanguageContext);
  const language = langContext?.state?.language;

  /**
   * Handle the click event, change language by
   * calling language context reducer dispatch function
   */
  function handleClick() {
    switch(language) {
      case "fi":
        langContext.dispatch("en");
        break;
      case "en":
        langContext.dispatch("fi");
        break;
      default:
        langContext.dispatch("fi");
    }
  }

  return (
    <div onClick={handleClick}>
      {language?.toUpperCase()}
    </div>
  );
}

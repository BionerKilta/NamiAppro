import React, { createContext, useReducer } from "react";

export const LanguageContext = createContext();

/**
 * initial language is 'fi'
 */
const initialState = { language: "fi" };

/**
 * Reducer for language selection
 * @param {object} state current state
 * @param {string} action new target language
 * @returns {object} new language
 */
export function languageReducer(state, action) {
  switch(action) {
    case "fi":
      return { language: "fi" };
    case "en":
      return { language: "en" };
    default:
      return { language: "fi" };
  }
}

/**
 * Language context provider HOC
 * @param {*} props child components
 * @returns higher order component that wraps children in language context provider
 */
export function LanguageProvider(props) {
  const [state, dispatch] = useReducer(languageReducer, initialState);
  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

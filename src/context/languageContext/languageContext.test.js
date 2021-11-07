import { languageReducer } from "./languageContext";

describe("should return correct language state", () => {
  it("should change language to 'en'", () => {
    const newState = languageReducer({ language: "fi" }, "en");
    expect(newState.language).toBe("en");
  });

  it("should change language to 'fi'", () => {
    const newState = languageReducer({ language: "en" }, "fi");
    expect(newState.language).toBe("fi");
  });

  it("should change language to 'fi' upon unknown action", () => {
    const newState = languageReducer({ language: "fi" }, undefined);
    expect(newState.language).toBe("fi");
  });

  it("should change language to 'en' regardless of current state", () => {
    const newState = languageReducer(null, "en");
    expect(newState.language).toBe("en");
  });
});

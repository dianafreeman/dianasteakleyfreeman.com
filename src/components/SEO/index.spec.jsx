import React from "react";
import { render } from "@testing-library/react";
import Helmet from "react-helmet";
import SEO from ".";

describe("SEO Helmet", () => {
  beforeEach(() => {
    render(<SEO postNode={{}} />);
  });

  it("should have a title", () => {
    const helmet = Helmet.peek();
    expect(helmet.title).not.toBeUndefined();
  });

  describe("on the home page", () => {
    it.todo("the title should include my name (doesn't matter how)");
  });

  describe("on the blog page", () => {
    it.todo("the title should include the word blog");
  });
});

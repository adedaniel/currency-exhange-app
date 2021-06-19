import React from "react";
import { render } from "@testing-library/react";
import InputSelect from "./InputSelect";

describe("InputSelect", () => {
  it("renders without crashing", () => {
    const wrapper = render(<InputSelect inputProps={{ label: "You Send" }} />);

    expect(wrapper).toBeTruthy();
  });
});

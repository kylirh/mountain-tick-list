import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ticks from "./ticks/ticks.reducer";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("add mountain tick", () => {
  const initialState = [];
  const action = {
    type: "ADD_TICK",
    id: 0,
    text: "Grand Teton",
    date: "09-01-2017"
  };
  const finalState = [
    {
      id: 0,
      text: "Grand Teton",
      date: "09-01-2017"
    }
  ];

  expect(ticks(initialState, action)).toEqual(finalState);
});

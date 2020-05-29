import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  return render(<App />);
});

test("First Name field renders", () =>{
  const container = render(<App />);
  container.getByText(/first name/i);
});

test('All Placeholders Show Up', ()=>{
  const {getByPlaceholderText} = render(<App />);
  getByPlaceholderText("Burke");
  getByPlaceholderText("Edd");
  getByPlaceholderText(/bluebill1049@hotmail.com/i);
})

test("Make sure there's no length restrictions", ()=>{
  expect(maxLength).toBeGreaterThan(0);
})

import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a component Info", () => {
  describe("When rendered", () => {
    test("Then it should show text Calling...", () => {
      render(<Info />);
      const result = screen.getByText("Calling...");

      expect(result).toBeInTheDocument();
    });
  });
});

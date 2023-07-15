import { render, screen } from "@testing-library/react";

import Home from "../app/page";
import userEvent from "@testing-library/user-event";

test("Normalizes a list of numbers with common mistakes", async () => {
  render(<Home />);

  const input = screen.getByRole("textbox", {
    name: /ingresá la lista de teléfonos/i,
  });

  await userEvent.type(
    input,
    `1566190051
  1166190052
  166190053
  341151234567
  541166190054
  5491166190055
  5401166190056
  +5491166190057
  mi celu es 1566190058
  1166190059
  hola
  hola mi celu es 1234
  hace 2 días que perdí el celu
  hace 3 año tomé el curso mi celu es 1166190060`
  );

  await userEvent.click(screen.getByRole("button", { name: /convertir/i }));

  [
    "1166190051",
    "1166190052",
    /166190053 - número inválido/i,
    "3411234567",
    "1166190054",
    "1166190055",
    "1166190056",
    "1166190057",
    "1166190058",
    "1166190059",
    /^- número inválido/i,
    /1234 - número inválido/i,
    /2 - número inválido/i,
    /31166190060 - número inválido/i,
  ].forEach((result) => {
    expect(
      screen.getByRole("row", {
        name: result,
      })
    ).toBeInTheDocument();
  });
});

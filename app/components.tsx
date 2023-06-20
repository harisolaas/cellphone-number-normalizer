import React from "react";

const colors = {
  primary: "bg-emerald-400 hover:bg-emerald-600 active:bg-emerald-500",
  secondary: "bg-gray-400 hover:bg-gray-600 active:bg-gray-500",
};

type Props = { color?: "primary" | "secondary" } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({color = 'primary', ...props}: Props) {
  return <button className={`px-4 py-2 rounded ${colors[color]}`} {...props} />;
}

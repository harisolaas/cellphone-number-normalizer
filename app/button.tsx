import React from "react";

const colors = {
  green: "bg-emerald-400 hover:bg-emerald-600 active:bg-emerald-500",
  red: "bg-red-400 hover:bg-red-600 active:bg-red-500",
  gray: "bg-gray-400 hover:bg-gray-600 active:bg-gray-500",
};

type Props = { color?: "green" | "red" |"gray" } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ color = "green", ...props }: Props) {
  const styles = ["px-4", "py-2", "rounded", colors[color]];

  return <button className={styles.join(" ")} {...props} />;
}

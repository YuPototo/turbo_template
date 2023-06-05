"use client";

interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = ({ primary = false, label = "Boop", size = "small" }: Props) => {
  return (
    <button
      className="bg-gray-900 text-lg text-white"
      style={{
        // backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}>
      {label}
    </button>
  );
};

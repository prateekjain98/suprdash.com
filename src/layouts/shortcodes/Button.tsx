import React from "react";

const Button = ({
  label,
  link,
  style,
  rel,
  openChat = false,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  openChat?: boolean;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (openChat && typeof window !== "undefined") {
      e.preventDefault();
      const crispWindow = window as unknown as Window & {
        $crisp: any[];
      };
      if (crispWindow.$crisp) {
        crispWindow.$crisp.push(["do", "chat:open"]);
      }
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
      onClick={handleClick}
    >
      {style === "outline" ? <span>{label}</span> : label}
    </a>
  );
};

export default Button;

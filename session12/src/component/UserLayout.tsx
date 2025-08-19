import React from "react";

export const UserLayout = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
  return (
    <>
      <nav style={{ ...styleText, background: "#cbd5e1" }}>Header</nav>
      <div style={{ ...styleText, background: "#9ca3af" }}>Navigation</div>
      <div>
        <div style={{ ...styleText, background: "#16a34a" }}>Menu</div>
        {array.map((item) => {
          return cart();
        })}
        <div style={{ ...styleText, background: "#93c5fd" }}>Article</div>
      </div>
    </>
  );
};

const styleText = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const styleCart = {
  display: "flex",
  with: "25%",
};

function cart() {
  return <div style={{ ...styleText, ...styleCart }}>Cart</div>;
}

import React from "react";

export default function DefaultLayout({ header, children }) {
  return (
    <>
      <div>{header}</div>
      {children}
    </>
  );
}

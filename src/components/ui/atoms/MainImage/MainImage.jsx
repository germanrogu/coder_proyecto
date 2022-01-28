import React from "react";

export const MainImage = ({ src }) => {
  return <img src={src}  width="95%" alt="images" style={{objectFit:"contain"}} />;
};

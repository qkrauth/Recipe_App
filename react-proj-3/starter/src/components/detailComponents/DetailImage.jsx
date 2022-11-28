import React from "react";

const DetailImage = ({ image, title }) => {
  return (
    <div
      className="detail-banner"
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      <div className="detail-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;

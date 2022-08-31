import React from "react";

const City = ({ location, type }) => {
  return <div className="location">
      <b>{type} : </b><p>{location.city}, {location.country}</p>
    </div>;
};

export default City;
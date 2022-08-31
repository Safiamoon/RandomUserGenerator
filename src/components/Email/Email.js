import React from "react";


const Email = ({ email, type }) => {
    return <div className="email">
        <b>{type} : </b><p>{email}</p>
      </div>;
  };

export default Email;
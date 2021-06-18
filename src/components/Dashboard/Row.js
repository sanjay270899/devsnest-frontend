import React from 'react';

export const Row = ({ icon, value }) => {
  return (
    <div className="h6 text-muted my-2 d-flex align-items-center">
      <img src={icon} alt={icon} height="23px" width="23px" />
      <span className="px-3">{value}</span>
    </div>
  );
};

import React from 'react';

export default function Filter({ values, selected, onClick, verticle }) {
  return (
    <div
      className={`d-flex flex-wrap ${
        verticle && 'flex-column align-items-start'
      } my-1`}
    >
      {values.map((value, index) => (
        <span
          className={`${
            selected === index ? 'bg-devsnest-dark text-white' : 'bg-white'
          } p-2 my-1 mr-3 rounded shadow-sm cursor-pointer`}
          style={{ fontSize: '0.9rem' }}
          key={index}
          onClick={() => onClick(index)}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

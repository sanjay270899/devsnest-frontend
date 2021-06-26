import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

import icons from '../../utils/getIcons';

export const StarRating = ({ value, onChange, size }) => {
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <span style={{ cursor: 'pointer' }} key={i}>
            <FaStar
              onClick={(e) => {
                onChange(ratingValue);
              }}
              style={{ cursor: 'pointer' }}
              size={size}
              color={ratingValue <= (hover || value) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </span>
        );
      })}
    </div>
  );
};

export const YesNoButton = ({ value, onChange, size }) => {
  return (
    <div className="d-flex ">
      <Button
        size={size}
        style={{
          backgroundColor: value ? '#58D68D' : '#ddd',
          margin: '1px 6px',
        }}
        onClick={(e) => {
          onChange(true);
        }}
      >
        <span style={{ color: 'black', fontStyle: 'bold' }}>Yes</span>
      </Button>

      <Button
        size={size}
        style={{
          backgroundColor: !value ? '#F1948A' : '#ddd',
          margin: '1px 6px',
        }}
        onClick={(e) => {
          onChange(false);
        }}
      >
        <span style={{ color: 'black', fontStyle: 'bold' }}>No</span>
      </Button>
    </div>
  );
};

export const CheckButton = ({ onChange, isTeamOwner, value }) => {
  const [show, setShow] = useState({
    attend: value,
    absent: !value,
  });

  return (
    <div>
      {show.attend && (
        <button
          style={{ background: 'transparent', border: 'none' }}
          onClick={(e) => {
            setShow({ ...show, attend: false, absent: true });
            onChange(false);
          }}
          disabled={!isTeamOwner}
        >
          <img src={icons.scrums_attendence_true} alt="" />
        </button>
      )}

      {show.absent && (
        <button
          style={{ background: 'transparent', border: 'none' }}
          onClick={(e) => {
            setShow({ ...show, attend: true, absent: false });
            onChange(true);
          }}
          disabled={!isTeamOwner}
        >
          <img src={icons.scrums_attendence_false} alt="" />
        </button>
      )}
    </div>
  );
};

import React, { useState } from 'react';

import default_user from '../assets/images/default_user.png';

export default function UserImage({ src, ...props }) {
  const [error, setError] = useState(false);

  return (
    <img
      alt=""
      {...props}
      src={error ? default_user : src}
      onErrorCapture={(e) => setError(true)}
      onError={(e) => setError(true)}
    />
  );
}

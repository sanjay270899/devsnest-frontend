// Imports
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { login, useLoginState } from '../redux';
import myLog from '../utils/myLog';

// Other smaller components
function Input({ value, setValue }) {
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

// Main Component
function Example() {
  // State
  const [value, setValue] = useState(' ');

  // Redux state and actions
  const loginState = useLoginState();
  const dispatch = useDispatch();

  // Effects
  useEffect(() => {
    myLog('mounted');
  }, []);

  // return
  return (
    <div style={{ paddingTop: '92px' }}>
      <div className="mb-2">loginState: {JSON.stringify(loginState)}</div>
      <button onClick={() => dispatch(login({}))}>Login</button>

      <Input value={value} setValue={setValue} />
    </div>
  );
}

// Export main component
export default Example;

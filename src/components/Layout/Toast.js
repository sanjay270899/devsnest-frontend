import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Toastify() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      rtl={false}
      hideProgressBar
      draggable
      pauseOnHover
      pauseOnFocusLoss
    />
  );
}

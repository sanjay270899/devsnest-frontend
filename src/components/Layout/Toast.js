import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Toastify() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      rtl={false}
      hideProgressBar
      draggable
      pauseOnHover
      pauseOnFocusLoss
    />
  );
}

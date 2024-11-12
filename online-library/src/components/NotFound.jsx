import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{margin: '10px'}}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;

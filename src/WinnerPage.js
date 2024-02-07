// WinnerPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const WinnerPage = () => {
  const location = useLocation();
  const winner = location.state && location.state.winner;

  return (
    <div>
      <h1>Winner</h1>
      {winner && <p>The winner is: {winner}</p>}
    </div>
  );
};

export default WinnerPage;

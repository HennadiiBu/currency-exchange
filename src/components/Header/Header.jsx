import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectBaseCurrency } from 'redux/selectors';

const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/rates">Rates Page</Link>
            </li>
          </ul>
        </nav>
        {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      </header>
      <Outlet />
    </>
  );
};

export default Header;

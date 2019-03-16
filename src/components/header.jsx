import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header
    style={{
      background: `#0f2345`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.5rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          NTUEE<span style={{ color: '#00bfdf' }}>+</span>
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `auto`
          }}
        >
          <main style={{ backgroundColor: '#ebecee', padding: '3.5rem 0' }}>
            {children}
          </main>
          <footer
            style={{
              textAlign: 'center',
              fontFamily: 'sans-serif',
              background: `#0f2345`,
              color: 'rgb(209, 214, 222)',
              paddingTop: '20px',
              paddingBottom: '32px'
            }}
          >
            NTUEE+ © {new Date().getFullYear()}
          </footer>
        </div>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

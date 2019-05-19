import React from 'react';
import { Link, graphql } from 'gatsby';
import Preview from '../components/preview';
import Header from '../components/header';

export default class ArticleList extends React.Component {
  render() {
    const {
      currentPage,
      numberOfListingPage,
      pathPrefix
    } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfListingPage;
    const prevPage =
      currentPage - 1 === 1 ? pathPrefix : `${pathPrefix}/${currentPage - 1}`;
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <React.Fragment>
        <Header />
        {posts.map(({ node }) => {
          return (
            <Link to={node.frontmatter.path}>
              <Preview data={node} />
            </Link>
          );
        })}
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numberOfListingPage }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`${pathPrefix}/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={`${pathPrefix}/${currentPage + 1}`} rel="next">
            Next Page →
          </Link>
        )}
      </React.Fragment>
    );
  }
}

// https://www.gatsbyjs.org/docs/adding-pagination/
// https://nickymeuleman.netlify.com/blog/gatsby-pagination
// 把所有markdown query出來
export const pageQuery = graphql`
  query articleQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            path
          }
        }
      }
    }
  }
`;

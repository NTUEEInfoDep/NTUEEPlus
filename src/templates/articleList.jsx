import React from 'react';
import { navigate, graphql } from 'gatsby';
import { Icon, Pagination } from 'semantic-ui-react';
import Preview from '../components/preview';
import Layout from '../components/layout';

import './menu.css';
import './icon.css';

export default class ArticleList extends React.Component {
  render() {
    const {
      currentPage,
      numberOfListingPage,
      pathPrefix
    } = this.props.pageContext;
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        {posts.map(({ node }, index) => {
          return <Preview data={node} to={node.frontmatter.path} key={index} />;
        })}
        <Pagination
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
            left: '50%'
          }}
          onPageChange={(_, prevProps) =>
            navigate(`${pathPrefix}/${prevProps.activePage}`)
          }
          activePage={currentPage}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true,
            disabled: true
          }}
          firstItem={{
            content: <Icon name="angle double left" />,
            icon: true
          }}
          lastItem={{
            content: <Icon name="angle double right" />,
            icon: true
          }}
          prevItem={{
            content: <Icon name="angle left" />,
            icon: true,
            disabled: currentPage === 1
          }}
          nextItem={{
            content: <Icon name="angle right" />,
            icon: true,
            disabled: currentPage === numberOfListingPage
          }}
          totalPages={numberOfListingPage}
        />
      </Layout>
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

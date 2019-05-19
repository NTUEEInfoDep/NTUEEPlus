import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Preview from '../components/preview';

class IndexPage extends React.Component {
  constructor(props) {
    super();
    const markdowns = props.data.allMarkdownRemark;
    this.markdowns = markdowns;
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`ntu`, `NTUEE+`, `ntuee+`]} />
        <div style={{ backgroundColor: '#d1d3d9' }} />
        <div
          style={{
            margin: '0 auto',
            width: '80%',
            padding: '20px',
            color: 'rgb(14, 35, 69)'
          }}
        >
          <h1> 精選貼文 </h1>
          {this.markdowns.edges.map((item, i) => (
            <Preview
              data={item.node}
              to={`${item.node.frontmatter.path}`}
              key={i}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            tags
            title
            quote
          }
        }
      }
    }
  }
`;

export default IndexPage;

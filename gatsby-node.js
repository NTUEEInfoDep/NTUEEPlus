/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            htmlAst
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors; // 如果出錯直接丟出Error
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: path.resolve('src/templates/article.jsx'), // 用來處理markdown的Component,
        context: {
          htmlAst: edge.node.htmlAst
          // 要傳給components的prop，可以用來當graphql的argument
        }
      });
    });
  });
};

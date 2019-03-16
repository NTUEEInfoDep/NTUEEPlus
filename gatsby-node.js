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
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    // 用graphql拿到所有markdown的path以及html Abstract syntax tree（相當於markdown的內容轉換成html）
    if (result.errors) {
      throw result.errors; // 如果出錯直接丟出Error
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path, // 把markdown host在markdown自己提供的path上（沒有檢查重複）（應該）
        component: path.resolve('src/templates/article.jsx'), // 用來處理markdown的Component
        context: {
          htmlAst: edge.node.htmlAst,
          tags: edge.node.frontmatter.tags
          // 要傳給components的prop，可以用來當graphql的argument
        }
      });
    });
  });
};

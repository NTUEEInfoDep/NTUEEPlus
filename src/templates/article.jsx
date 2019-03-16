import React from 'react';
import rehypeReact from 'rehype-react';

import Header from '../components/header';
import Presenter from '../components/presenter';
import Foldable from '../components/foldable';
import style from './article.module.scss';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    presenter: Presenter,
    li: Foldable
  }
  // 在markdown裡用到的Component，presenter是用在markdown裡的名字，要記得在gatsby-config.js也加上
}).Compiler; // 用來Render htmlAst的東西

export default props => (
  <React.Fragment>
    <Header />
    <article className={style.article}>
      {renderAst(props.pathContext.htmlAst)}
      {/*pathContext: 在gatsby-node.js的constext */}
    </article>
  </React.Fragment>
);

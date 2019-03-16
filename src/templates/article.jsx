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
    <div className={style.tags}>
      {props.pathContext.tags.map((tag, index) => (
        <span key={index}>{tag}</span> // tag是寫好markdown就不變的，照理說不會因為state而有所改變，所以用index當key沒差
      ))}
    </div>
    <article className={style.article}>
      {renderAst(props.pathContext.htmlAst)}
      {/*pathContext: 在gatsby-node.js的constext */}
    </article>
  </React.Fragment>
);

import React from 'react';
import './preview.scss';

const Preview = props => (
  <div className="preview-container">
    <div>
      <h3> {props.data.frontmatter.title} </h3>
      <p>{props.data.frontmatter.quote}</p>
    </div>
    <img
      src="https://i.imgur.com/ZqvTrKU.jpg"
      alt={props.data.frontmatter.title}
      style={{ height: '180px' }}
    />
  </div>
);

export default Preview;

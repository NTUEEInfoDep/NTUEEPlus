(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(153),l=a(158),u=a(160),s=(a(148),function(e){return o.a.createElement("div",{className:"preview-container"},o.a.createElement("div",null,o.a.createElement("h3",null," ",e.data.frontmatter.title," "),o.a.createElement("p",null,e.data.frontmatter.quote)),o.a.createElement("img",{src:"https://i.imgur.com/ZqvTrKU.jpg",style:{height:"180px"}}))});a.d(t,"query",function(){return m});var d=function(e){function t(t){var a;a=e.call(this)||this;var n=t.data.allMarkdownRemark;return a.markdowns=n,console.log(n),a}return r()(t,e),t.prototype.render=function(){return o.a.createElement(l.a,null,o.a.createElement(u.a,{title:"Home",keywords:["ntu","NTUEE+","ntuee+"]}),o.a.createElement("div",{style:{backgroundColor:"#d1d3d9"}}),o.a.createElement("div",{style:{margin:"0 auto",width:"80%",padding:"20px",backgroundColor:"rgb(228, 228, 228)",color:"rgb(14, 35, 69)"}},o.a.createElement("h1",null," 精選貼文 "),this.markdowns.edges.map(function(e,t){return o.a.createElement(c.a,{to:""+e.node.frontmatter.path},o.a.createElement(s,{data:e.node,key:t}))})))},t}(o.a.Component),m="413109948";t.default=d},153:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(154);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r);t.a=function(){return i.a.createElement("header",{style:{background:"#0f2345",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{maxWidth:960,padding:"1.5rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},"NTUEE",i.a.createElement("span",{style:{color:"#00bfdf"}},"+")))))}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(153),u=a(155),s=(a(143),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"NTUEE+ © ",(new Date).getFullYear())))},data:n})});s.propTypes={children:c.a.node.isRequired},t.a=s},159:function(e){e.exports={data:{site:{siteMetadata:{title:"NTUEE+"}}}}},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(163),u=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},161:function(e){e.exports={data:{site:{siteMetadata:{title:"NTUEE+",description:"NTUEE+",author:"@NTUEE Info Dep."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-86bddeb37de4d9e6186e.js.map
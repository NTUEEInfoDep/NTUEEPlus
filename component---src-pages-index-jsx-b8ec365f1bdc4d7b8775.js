(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(222),l=a.n(c),s=a(176),d=a(220),u=a(199),m=function(e){function t(t){var a;a=e.call(this)||this;var n=t.data.allMarkdownRemark;return a.markdowns=n,a}return r()(t,e),t.prototype.render=function(){return o.a.createElement(s.a,null,o.a.createElement(l.a,{meta:[{name:"google-site-verification",content:"kd6f7vdD3Q81GN8XTMmDzETz_Iz6g8PSXb29EFAAEQA"}]}),o.a.createElement(d.a,{title:"Home",keywords:["ntu","NTUEE+","ntuee+"]}),o.a.createElement("div",{style:{backgroundColor:"#d1d3d9"}}),o.a.createElement("div",{style:{padding:"20px",color:"rgb(14, 35, 69)"}},o.a.createElement("h1",{style:{margin:"0 auto",width:"80%"}}," 精選貼文 "),this.markdowns.edges.map(function(e,t){return o.a.createElement(u.a,{data:e.node,to:""+e.node.frontmatter.path,key:t})})))},t}(o.a.Component),p="3906921662";t.default=m},156:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(32),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.navigate});a(157);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r);t.a=function(){return i.a.createElement("header",{style:{background:"#0f2345"}},i.a.createElement("div",{style:{maxWidth:960,padding:"1.5rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},"NTUEE",i.a.createElement("span",{style:{color:"#00bfdf"}},"+")))))}},164:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},176:function(e,t,a){"use strict";var n=a(177),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(156),s=a(163),d=(a(143),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"auto"}},i.a.createElement("main",{style:{backgroundColor:"#ebecee",padding:"3.5rem 0"}},t),i.a.createElement("footer",{style:{textAlign:"center",fontFamily:"sans-serif",background:"#0f2345",color:"rgb(209, 214, 222)",paddingTop:"20px",paddingBottom:"32px"}},"NTUEE+ © ",(new Date).getFullYear())))},data:n})});d.propTypes={children:c.a.node.isRequired},t.a=d},177:function(e){e.exports={data:{site:{siteMetadata:{title:"NTUEE+"}}}}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156);a(144);t.a=function(e){return r.a.createElement(i.a,{to:e.to,className:"preview-container"},r.a.createElement("div",null,r.a.createElement("h3",null," ",e.data.frontmatter.title," "),r.a.createElement("p",null,e.data.frontmatter.quote)),r.a.createElement("img",{src:"https://i.imgur.com/ZqvTrKU.jpg",alt:e.data.frontmatter.title,style:{height:"180px"}}))}},220:function(e,t,a){"use strict";var n=a(221),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(222),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},221:function(e){e.exports={data:{site:{siteMetadata:{title:"NTUEE+",description:"NTUEE+",author:"@NTUEE Info Dep."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-b8ec365f1bdc4d7b8775.js.map
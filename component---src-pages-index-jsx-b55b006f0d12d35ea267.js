(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){"use strict";a.r(t);var A=a(7),n=a.n(A),r=a(155),i=a(0),o=a.n(i),s=a(138),d=a(142),l=a(4),c=a.n(l),u=a(156),f=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.content,a=e.image;return o.a.createElement("article",{style:{backgroundColor:t.bgColour}},o.a.createElement(s.Link,{to:t.route},a&&o.a.createElement(f.a,{alt:t.title,fluid:a.childImageSharp.fluid}),o.a.createElement("h2",null,t.title)))},t}(o.a.Component);p.propTypes={content:c.a.object,image:c.a.object};var g=p,h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement(s.StaticQuery,{query:"933871283",render:function(e){var t=e.allProjectsJson.edges;return o.a.createElement(d.a,null,t.map(function(t){return o.a.createElement(g,{key:t.node.id,content:t.node,image:e[t.node.id]})}))},data:r})},t}(o.a.Component);t.default=h},138:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f});var A=a(0),n=a.n(A),r=a(4),i=a.n(r),o=a(137),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(139),l=a.n(d);a.d(t,"PageRenderer",function(){return l.a});var c=a(32);a.d(t,"parsePath",function(){return c.a});var u=n.a.createContext({}),f=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},139:function(e,t,a){var A;e.exports=(A=a(141))&&A.default||A},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Vicki Louise Ward",tagline:"UX/UI Designer",copyright:"Copyright © Vicki Louise Ward"}},allNavJson:{edges:[{node:{id:"14236",page:"Work",route:"/"}},{node:{id:"77466",page:"Contact",route:"/contact"}}]}}}},141:function(e,t,a){"use strict";a.r(t);a(33);var A=a(0),n=a.n(A),r=a(4),i=a.n(r),o=a(51),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},142:function(e,t,a){"use strict";var A=a(7),n=a.n(A),r=a(140),i=a(0),o=a.n(i),s=a(4),d=a.n(s),l=a(143),c=a.n(l),u=a(138),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tagline;return o.a.createElement("header",null,o.a.createElement("h1",null,t),o.a.createElement("p",null,a))},t}(o.a.Component);f.propTypes={title:d.a.string,tagline:d.a.string};var p=f,g=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.items;return o.a.createElement("nav",null,o.a.createElement("ul",null,e.map(function(e){return o.a.createElement("li",{key:e.node.id},o.a.createElement(u.Link,{to:e.node.route},e.node.page))})))},t}(o.a.Component);g.propTypes={items:d.a.array};var h=g,E=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.copyright;return o.a.createElement("footer",null,o.a.createElement("p",null,e))},t}(o.a.Component);E.propTypes={copyright:d.a.string};var y=E,m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(u.StaticQuery,{query:"4235615964",render:function(t){var a=t.site.siteMetadata,A=t.allNavJson.edges;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:a.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en-GB"})),o.a.createElement(p,{title:a.title,tagline:a.tagline}),o.a.createElement(h,{items:A}),o.a.createElement("section",null,e),o.a.createElement(y,{copyright:a.copyright}))},data:r})},t}(o.a.Component);m.propTypes={children:d.a.node.isRequired};t.a=m},155:function(e){e.exports={data:{allProjectsJson:{edges:[{node:{id:"yyw",title:"You & Your Wedding",bgColour:"#eee",route:"/"}},{node:{id:"beamly",title:"Beamly",bgColour:"#ccc",route:"/"}}]},yyw:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABrZSYazCJT//EABwQAAICAgMAAAAAAAAAAAAAAAIDAQQAExEUFf/aAAgBAQABBQKvVgw6qeXDANVa1B6GMPYz/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bp//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/Aaf/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIREiFBMTNhoeH/2gAIAQEABj8CqfeeV6nNGgKAuYxhbfaL4iV//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAIUHR/9oACAEBAAE/IbaAOBCaIG14d/N4nA0iJJ0GVv2I2b//2gAMAwEAAgADAAAAEOv/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBNRf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxB0xf/EAB8QAQACAgAHAAAAAAAAAAAAAAEAESFRMUFhcYGR0f/aAAgBAQABPxAxdM9kNrh1ERFQHMvKDZSkLbw3FQdLO4GL37hWYY6/k3sC115n/9k=",aspectRatio:1.348314606741573,src:"/static/a556bda3be34d72d735d16e61c2c4ef4/8484e/you-and-your-wedding.jpg",srcSet:"/static/a556bda3be34d72d735d16e61c2c4ef4/6ad16/you-and-your-wedding.jpg 200w,\n/static/a556bda3be34d72d735d16e61c2c4ef4/8f1ca/you-and-your-wedding.jpg 400w,\n/static/a556bda3be34d72d735d16e61c2c4ef4/8484e/you-and-your-wedding.jpg 800w,\n/static/a556bda3be34d72d735d16e61c2c4ef4/7560f/you-and-your-wedding.jpg 960w",sizes:"(max-width: 800px) 100vw, 800px"}}},beamly:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABrZSYazCJT//EABwQAAICAgMAAAAAAAAAAAAAAAIDAQQAExEUFf/aAAgBAQABBQKvVgw6qeXDANVa1B6GMPYz/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bp//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/Aaf/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIREiFBMTNhoeH/2gAIAQEABj8CqfeeV6nNGgKAuYxhbfaL4iV//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAIUHR/9oACAEBAAE/IbaAOBCaIG14d/N4nA0iJJ0GVv2I2b//2gAMAwEAAgADAAAAEOv/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBNRf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxB0xf/EAB8QAQACAgAHAAAAAAAAAAAAAAEAESFRMUFhcYGR0f/aAAgBAQABPxAxdM9kNrh1ERFQHMvKDZSkLbw3FQdLO4GL37hWYY6/k3sC115n/9k=",aspectRatio:1.348314606741573,src:"/static/a556bda3be34d72d735d16e61c2c4ef4/8484e/you-and-your-wedding.jpg",srcSet:"/static/a556bda3be34d72d735d16e61c2c4ef4/6ad16/you-and-your-wedding.jpg 200w,\n/static/a556bda3be34d72d735d16e61c2c4ef4/8f1ca/you-and-your-wedding.jpg 400w,\n/static/a556bda3be34d72d735d16e61c2c4ef4/8484e/you-and-your-wedding.jpg 800w,\n/static/a556bda3be34d72d735d16e61c2c4ef4/7560f/you-and-your-wedding.jpg 960w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},156:function(e,t,a){"use strict";var A=a(8);t.__esModule=!0,t.default=void 0;var n,r=A(a(7)),i=A(a(50)),o=A(a(145)),s=A(a(146)),d=A(a(0)),l=A(a(4)),c=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!u[a]||(u[a]=!0,!1)},p=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",A=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+A+n+"<img "+o+s+t+i+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=d.default.forwardRef(function(e,t){var a=e.style,A=e.onLoad,n=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({},r,{onLoad:A,onError:n,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});E.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var A=!0,n=!0,r=!1,o=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(A=!1,n=!1,r=!0),"undefined"==typeof window&&(A=!1,n=!1),t.critical&&(A=!0,n=!1,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:A,imgLoaded:n,IOSupported:r,fadeIn:o,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,A=e.className,n=e.style,r=void 0===n?{}:n,i=e.imgStyle,o=void 0===i?{}:i,l=e.placeholderStyle,u=void 0===l?{}:l,f=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,m=e.Tag,b="boolean"==typeof y?"lightgray":y,w=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),B=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),v={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return d.default.createElement(m,{className:(A||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(m,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&d.default.createElement(E,(0,s.default)({src:j.base64},v)),j.tracedSVG&&d.default.createElement(E,(0,s.default)({src:j.tracedSVG},v)),b&&d.default.createElement(m,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(E,{alt:a,title:t,src:j.src,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t},j))}}))}if(g){var S=g,R=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},r);return"inherit"===r.display&&delete R.display,d.default.createElement(m,{className:(A||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&d.default.createElement(E,(0,s.default)({src:S.base64},v)),S.tracedSVG&&d.default.createElement(E,(0,s.default)({src:S.tracedSVG},v)),b&&d.default.createElement(m,{title:t,style:{backgroundColor:b,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(E,{alt:a,title:t,width:S.width,height:S.height,src:S.src,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t,width:S.width,height:S.height},S))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var m=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),b=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});y.propTypes={resolutions:m,sizes:b,fixed:m,fluid:b,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,Tag:l.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-jsx-b55b006f0d12d35ea267.js.map
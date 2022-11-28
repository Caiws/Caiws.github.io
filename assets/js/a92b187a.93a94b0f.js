"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,m=h["".concat(p,".").concat(d)]||h[d]||l[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"Books/EffectiveJava3/Chapter-11/Chapter-11-Introduction",id:"Books/EffectiveJava3/Chapter-11/Chapter-11-Introduction",title:"Chapter-11-Introduction",description:"Chapter 11. Concurrency\uff08\u5e76\u53d1\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Introduction.md",sourceDirName:"Books/EffectiveJava3/Chapter-11",slug:"/Books/EffectiveJava3/Chapter-11/Chapter-11-Introduction",permalink:"/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-10-Item-77-Don\u2019t-ignore-exceptions",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-77-Don\u2019t-ignore-exceptions"},next:{title:"Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data",permalink:"/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data"}},p={},s=[{value:"Chapter 11. Concurrency\uff08\u5e76\u53d1\uff09",id:"chapter-11-concurrency\u5e76\u53d1",level:2},{value:"Chapter 11 Introduction\uff08\u7ae0\u8282\u4ecb\u7ecd\uff09",id:"chapter-11-introduction\u7ae0\u8282\u4ecb\u7ecd",level:3},{value:"Contents of the chapter\uff08\u7ae0\u8282\u76ee\u5f55\uff09",id:"contents-of-the-chapter\u7ae0\u8282\u76ee\u5f55",level:3}],u={toc:s};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"chapter-11-concurrency\u5e76\u53d1"},"Chapter 11. Concurrency\uff08\u5e76\u53d1\uff09"),(0,n.kt)("h3",{id:"chapter-11-introduction\u7ae0\u8282\u4ecb\u7ecd"},"Chapter 11 Introduction\uff08\u7ae0\u8282\u4ecb\u7ecd\uff09"),(0,n.kt)("p",null,"THREADS allow multiple activities to proceed concurrently. Concurrent programming is harder than single-threaded programming, because more things can go wrong, and failures can be hard to reproduce. You can\u2019t avoid concurrency. It is inherent in the platform and a requirement if you are to obtain good performance from multicore processors, which are now ubiquitous. This chapter contains advice to help you write clear, correct, well-documented concurrent programs."),(0,n.kt)("p",null,"\u7ebf\u7a0b\u5141\u8bb8\u591a\u4e2a\u6d3b\u52a8\u5e76\u53d1\u8fdb\u884c\u3002\u5e76\u53d1\u7f16\u7a0b\u6bd4\u5355\u7ebf\u7a0b\u7f16\u7a0b\u66f4\u56f0\u96be\uff0c\u5bb9\u6613\u51fa\u9519\u7684\u5730\u65b9\u66f4\u591a\uff0c\u800c\u4e14\u5931\u8d25\u5f88\u96be\u91cd\u73b0\u3002\u4f60\u65e0\u6cd5\u907f\u5f00\u5e76\u53d1\u3002\u5b83\u662f\u5e73\u53f0\u4e2d\u56fa\u6709\u7684\uff0c\u5e76\u4e14\u591a\u6838\u5904\u7406\u5668\u73b0\u5728\u4e5f\u662f\u65e0\u5904\u4e0d\u5728\uff0c\u800c\u4f60\u4f1a\u6709\u4ece\u591a\u6838\u5904\u7406\u5668\u83b7\u5f97\u826f\u597d\u7684\u6027\u80fd\u7684\u9700\u6c42\u3002\u672c\u7ae0\u5305\u542b\u4e00\u4e9b\u5efa\u8bae\uff0c\u5e2e\u52a9\u4f60\u7f16\u5199\u6e05\u6670\u3001\u6b63\u786e\u3001\u6587\u6863\u826f\u597d\u7684\u5e76\u53d1\u7a0b\u5e8f\u3002"),(0,n.kt)("h3",{id:"contents-of-the-chapter\u7ae0\u8282\u76ee\u5f55"},"Contents of the chapter\uff08\u7ae0\u8282\u76ee\u5f55\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data"},"Item 78: Synchronize access to shared mutable data\uff08\u5bf9\u5171\u4eab\u53ef\u53d8\u6570\u636e\u7684\u540c\u6b65\u8bbf\u95ee\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-79-Avoid-excessive-synchronization"},"Item 79: Avoid excessive synchronization\uff08\u907f\u514d\u8fc7\u5ea6\u540c\u6b65\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-80-Prefer-executors,-tasks,-and-streams-to-threads"},"Item 80: Prefer executors, tasks, and streams to threads\uff08Executor\u3001task\u3001\u6d41\u4f18\u4e8e\u76f4\u63a5\u4f7f\u7528\u7ebf\u7a0b\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-81-Prefer-concurrency-utilities-to-wait-and-notify"},"Item 81: Prefer concurrency utilities to wait and notify\uff08\u5e76\u53d1\u5b9e\u7528\u5de5\u5177\u4f18\u4e8e wait \u548c notify\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-82-Document-thread-safety"},"Item 82: Document thread safety\uff08\u6587\u6863\u5e94\u5305\u542b\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-83-Use-lazy-initialization-judiciously"},"Item 83: Use lazy initialization judiciously\uff08\u660e\u667a\u5730\u4f7f\u7528\u5ef6\u8fdf\u521d\u59cb\u5316\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Chapter-11/Chapter-11-Item-84-Don%E2%80%99t-depend-on-the-thread-scheduler"},"Item 84: Don\u2019t depend on the thread scheduler\uff08\u4e0d\u8981\u4f9d\u8d56\u7ebf\u7a0b\u8c03\u5ea6\u5668\uff09"))))}l.isMDXComponent=!0}}]);
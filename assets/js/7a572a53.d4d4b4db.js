"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2670],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(o),h=n,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return o?a.createElement(f,r(r({ref:t},p),{},{components:o})):a.createElement(f,r({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var m=2;m<i;m++)r[m]=o[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3394:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=o(7462),n=(o(7294),o(3905));const i={},r=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-9/Chapter-9-Item-67-Optimize-judiciously",id:"Books/EffectiveJava3/Chapter-9/Chapter-9-Item-67-Optimize-judiciously",title:"Chapter-9-Item-67-Optimize-judiciously",description:"Chapter 9. General Programming\uff08\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-67-Optimize-judiciously.md",sourceDirName:"Books/EffectiveJava3/Chapter-9",slug:"/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-67-Optimize-judiciously",permalink:"/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-67-Optimize-judiciously",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-67-Optimize-judiciously.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-9-Item-66-Use-native-methods-judiciously",permalink:"/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-66-Use-native-methods-judiciously"},next:{title:"Chapter-9-Item-68-Adhere-to-generally-accepted-naming-conventions",permalink:"/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-68-Adhere-to-generally-accepted-naming-conventions"}},l={},m=[{value:"Chapter 9. General Programming\uff08\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1\uff09",id:"chapter-9-general-programming\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1",level:2},{value:"Item 67: Optimize judiciously\uff08\u660e\u667a\u5730\u8fdb\u884c\u4f18\u5316\uff09",id:"item-67-optimize-judiciously\u660e\u667a\u5730\u8fdb\u884c\u4f18\u5316",level:3}],p={toc:m};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"chapter-9-general-programming\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1"},"Chapter 9. General Programming\uff08\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1\uff09"),(0,n.kt)("h3",{id:"item-67-optimize-judiciously\u660e\u667a\u5730\u8fdb\u884c\u4f18\u5316"},"Item 67: Optimize judiciously\uff08\u660e\u667a\u5730\u8fdb\u884c\u4f18\u5316\uff09"),(0,n.kt)("p",null,"There are three aphorisms concerning optimization that everyone should know:"),(0,n.kt)("p",null,"\u6709\u4e09\u6761\u5173\u4e8e\u4f18\u5316\u7684\u683c\u8a00\u662f\u6bcf\u4e2a\u4eba\u90fd\u5e94\u8be5\u77e5\u9053\u7684\uff1a"),(0,n.kt)("p",null,"More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason\u2014including blind stupidity."),(0,n.kt)("p",null,"\u6bd4\u8d77\u5176\u4ed6\u4efb\u4f55\u5355\u4e00\u7684\u539f\u56e0\uff08\u5305\u62ec\u76f2\u76ee\u7684\u611a\u8822\uff09\uff0c\u5f88\u591a\u8ba1\u7b97\u4e0a\u7684\u8fc7\u5931\u90fd\u88ab\u5f52\u661d\u4e8e\u6548\u7387\uff08\u4e0d\u4e00\u5b9a\u80fd\u5b9e\u73b0\uff09\u3002"),(0,n.kt)("p",null,"\u2014William A. Wulf ","[Wulf72]"),(0,n.kt)("p",null,"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil."),(0,n.kt)("p",null,"\u4e0d\u8981\u53bb\u8ba1\u8f83\u6548\u7387\u4e0a\u7684\u4e00\u4e9b\u5c0f\u5c0f\u7684\u5f97\u5931\uff0c\u5728 97% \u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u6210\u719f\u7684\u4f18\u5316\u624d\u662f\u4e00\u5207\u95ee\u9898\u7684\u6839\u6e90\u3002"),(0,n.kt)("p",null,"\u2014Donald E. Knuth ","[Knuth74]"),(0,n.kt)("p",null,"We follow two rules in the matter of optimization:\nRule 1. Don\u2019t do it.\nRule 2 (for experts only). Don\u2019t do it yet\u2014that is, not until you have a perfectly clear and unoptimized solution."),(0,n.kt)("p",null,"\u5728\u4f18\u5316\u65b9\u9762\uff0c\u6211\u4eec\u5e94\u8be5\u9075\u5b88\u4e24\u6761\u89c4\u5219\uff1a"),(0,n.kt)("p",null,"\u89c4\u5219 1\uff1a\u4e0d\u8981\u8fdb\u884c\u4f18\u5316\u3002"),(0,n.kt)("p",null,"\u89c4\u5219 2 \uff08\u4ec5\u9488\u5bf9\u4e13\u5bb6\uff09\uff1a\u8fd8\u662f\u4e0d\u8981\u8fdb\u884c\u4f18\u5316\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u4f60\u8fd8\u6ca1\u6709\u7edd\u5bf9\u6e05\u6670\u7684\u672a\u4f18\u5316\u65b9\u6848\u4e4b\u524d\uff0c\u8bf7\u4e0d\u8981\u8fdb\u884c\u4f18\u5316\u3002"),(0,n.kt)("p",null,"\u2014M. A. Jackson ","[Jackson75]"),(0,n.kt)("p",null,"All of these aphorisms predate the Java programming language by two decades. They tell a deep truth about optimization: it is easy to do more harm than good, especially if you optimize prematurely. In the process, you may produce software that is neither fast nor correct and cannot easily be fixed."),(0,n.kt)("p",null,"\u6240\u6709\u8fd9\u4e9b\u683c\u8a00\u90fd\u6bd4 Java \u7f16\u7a0b\u8bed\u8a00\u65e9\u4e86 20 \u5e74\u3002\u5b83\u4eec\u544a\u8bc9\u6211\u4eec\u5173\u4e8e\u4f18\u5316\u7684\u4e00\u4e2a\u6df1\u523b\u7684\u4e8b\u5b9e\uff1a\u5f88\u5bb9\u6613\u5f0a\u5927\u4e8e\u5229\uff0c\u5c24\u5176\u662f\u5982\u679c\u8fc7\u65e9\u5730\u8fdb\u884c\u4f18\u5316\u3002\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u751f\u6210\u65e2\u4e0d\u5feb\u901f\u4e5f\u4e0d\u6b63\u786e\u4e14\u65e0\u6cd5\u8f7b\u677e\u4fee\u590d\u7684\u8f6f\u4ef6\u3002"),(0,n.kt)("p",null,"Don\u2019t sacrifice sound architectural principles for performance. Strive to write ",(0,n.kt)("strong",{parentName:"p"},"good programs rather than fast ones.")," If a good program is not fast enough, its architecture will allow it to be optimized. Good programs embody the principle of information hiding: where possible, they localize design decisions within individual components, so individual decisions can be changed without affecting the remainder of the system (Item 15)."),(0,n.kt)("p",null,"\u4e0d\u8981\u4e3a\u4e86\u6027\u80fd\u800c\u727a\u7272\u5408\u7406\u7684\u67b6\u6784\u3002\u52aa\u529b\u7f16\u5199 ",(0,n.kt)("strong",{parentName:"p"},"\u597d\u7684\u7a0b\u5e8f\uff0c\u800c\u4e0d\u662f\u5feb\u901f\u7684\u7a0b\u5e8f\u3002")," \u5982\u679c\u4e00\u4e2a\u597d\u7684\u7a0b\u5e8f\u4e0d\u591f\u5feb\uff0c\u5b83\u7684\u67b6\u6784\u5c06\u5141\u8bb8\u5b83\u88ab\u4f18\u5316\u3002\u597d\u7684\u7a0b\u5e8f\u4f53\u73b0\u4e86\u4fe1\u606f\u9690\u85cf\u7684\u539f\u5219\uff1a\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u5728\u5355\u4e2a\u7ec4\u4ef6\u4e2d\u672c\u5730\u5316\u8bbe\u8ba1\u51b3\u7b56\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd\u7cfb\u7edf\u5176\u4f59\u90e8\u5206\u7684\u60c5\u51b5\u4e0b\u66f4\u6539\u5355\u4e2a\u51b3\u7b56\uff08",(0,n.kt)("a",{parentName:"p",href:"./Chapter-4-Item-15-Minimize-the-accessibility-of-classes-and-members"},"Item-15"),"\uff09\u3002"),(0,n.kt)("p",null,"This does not mean that you can ignore performance concerns until your program is complete. Implementation problems can be fixed by later optimization, but pervasive architectural flaws that limit performance can be impossible to fix without rewriting the system. Changing a fundamental facet of your design after the fact can result in an ill-structured system that is difficult to maintain and evolve. Therefore you must think about performance during the design process."),(0,n.kt)("p",null,"\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u5728\u7a0b\u5e8f\u5b8c\u6210\u4e4b\u524d\u53ef\u4ee5\u5ffd\u7565\u6027\u80fd\u95ee\u9898\u3002\u5b9e\u73b0\u4e0a\u7684\u95ee\u9898\u53ef\u4ee5\u901a\u8fc7\u4ee5\u540e\u7684\u4f18\u5316\u6765\u89e3\u51b3\uff0c\u4f46\u662f\u5bf9\u4e8e\u67b6\u6784\u7f3a\u9677\uff0c\u5982\u679c\u4e0d\u91cd\u5199\u7cfb\u7edf\uff0c\u5c31\u4e0d\u53ef\u80fd\u89e3\u51b3\u9650\u5236\u6027\u80fd\u7684\u95ee\u9898\u3002\u5728\u7cfb\u7edf\u5b8c\u6210\u4e4b\u540e\u518d\u6539\u53d8\u8bbe\u8ba1\u7684\u67d0\u4e2a\u57fa\u672c\u65b9\u9762\u53ef\u80fd\u5bfc\u81f4\u7ed3\u6784\u4e0d\u826f\u7684\u7cfb\u7edf\u96be\u4ee5\u7ef4\u62a4\u548c\u8fdb\u5316\u3002\u56e0\u6b64\uff0c\u4f60\u5fc5\u987b\u5728\u8bbe\u8ba1\u8fc7\u7a0b\u4e2d\u8003\u8651\u6027\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Strive to avoid design decisions that limit performance.")," The components of a design that are most difficult to change after the fact are those specifying interactions between components and with the outside world. Chief among these design components are APIs, wire-level protocols, and persistent data formats. Not only are these design components difficult or impossible to change after the fact, but all of them can place significant limitations on the performance that a system can ever achieve."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c3d\u91cf\u907f\u514d\u9650\u5236\u6027\u80fd\u7684\u8bbe\u8ba1\u51b3\u7b56\u3002")," \u8bbe\u8ba1\u4e2d\u6700\u96be\u4ee5\u66f4\u6539\u7684\u7ec4\u4ef6\u662f\u90a3\u4e9b\u6307\u5b9a\u7ec4\u4ef6\u4e4b\u95f4\u4ee5\u53ca\u4e0e\u5916\u90e8\u4e16\u754c\u7684\u4ea4\u4e92\u7684\u7ec4\u4ef6\u3002\u8fd9\u4e9b\u8bbe\u8ba1\u7ec4\u4ef6\u4e2d\u6700\u4e3b\u8981\u7684\u662f API\u3001\u7ebf\u8def\u5c42\u534f\u8bae\u548c\u6301\u4e45\u6570\u636e\u683c\u5f0f\u3002\u8fd9\u4e9b\u8bbe\u8ba1\u7ec4\u4ef6\u4e0d\u4ec5\u96be\u4ee5\u6216\u4e0d\u53ef\u80fd\u5728\u4e8b\u540e\u66f4\u6539\uff0c\u800c\u4e14\u6240\u6709\u8fd9\u4e9b\u7ec4\u4ef6\u90fd\u53ef\u80fd\u5bf9\u7cfb\u7edf\u80fd\u591f\u8fbe\u5230\u7684\u6027\u80fd\u9020\u6210\u91cd\u5927\u9650\u5236\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consider the performance consequences of your API design decisions.")," Making a public type mutable may require a lot of needless defensive copying (Item 50). Similarly, using inheritance in a public class where composition would have been appropriate ties the class forever to its superclass, which can place artificial limits on the performance of the subclass (Item 18). As a final example, using an implementation type rather than an interface in an API ties you to a specific implementation, even though faster implementations may be written in the future (Item 64)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8003\u8651API\u8bbe\u8ba1\u51b3\u7b56\u7684\u6027\u80fd\u7ed3\u679c\u3002")," \u4f7f\u516c\u5171\u7c7b\u578b\u8f6c\u5316\u4e3a\u53ef\u53d8\uff0c\u53ef\u80fd\u9700\u8981\u5927\u91cf\u4e0d\u5fc5\u8981\u7684\u9632\u5fa1\u6027\u590d\u5236\uff08",(0,n.kt)("a",{parentName:"p",href:"./Chapter-8-Item-50-Make-defensive-copies-when-needed"},"Item-50"),"\uff09\u3002\u7c7b\u4f3c\u5730\uff0c\u5728\u4e00\u4e2a\u516c\u5171\u7c7b\u4e2d\u4f7f\u7528\u7ee7\u627f\uff08\u5728\u8fd9\u4e2a\u7c7b\u4e2d\u7ec4\u5408\u5c06\u662f\u5408\u9002\u7684\uff09\u5c06\u8be5\u7c7b\u6c38\u8fdc\u7ed1\u5b9a\u5230\u5b83\u7684\u8d85\u7c7b\uff0c\u8fd9\u4f1a\u4eba\u4e3a\u5730\u9650\u5236\u5b50\u7c7b\u7684\u6027\u80fd\uff08",(0,n.kt)("a",{parentName:"p",href:"./Chapter-4-Item-18-Favor-composition-over-inheritance"},"Item-18"),"\uff09\u3002\u6700\u540e\u4e00\u4e2a\u4f8b\u5b50\u662f\uff0c\u5728 API \u4e2d\u4f7f\u7528\u5b9e\u73b0\u7c7b\u800c\u4e0d\u662f\u63a5\u53e3\u5c06\u4f60\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684\u5b9e\u73b0\uff0c\u5373\u4f7f\u5c06\u6765\u53ef\u80fd\u4f1a\u7f16\u5199\u66f4\u5feb\u7684\u5b9e\u73b0\u4e5f\u65e0\u6cd5\u4f7f\u7528\uff08",(0,n.kt)("a",{parentName:"p",href:"./Chapter-9-Item-64-Refer-to-objects-by-their-interfaces"},"Item-64"),"\uff09\u3002"),(0,n.kt)("p",null,"The effects of API design on performance are very real. Consider the getSize method in the java.awt.Component class. The decision that this performance-critical method was to return a Dimension instance, coupled with the decision that Dimension instances are mutable, forces any implementation of this method to allocate a new Dimension instance on every invocation. Even though allocating small objects is inexpensive on a modern VM, allocating millions of objects needlessly can do real harm to performance."),(0,n.kt)("p",null,"API \u8bbe\u8ba1\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u662f\u975e\u5e38\u5b9e\u9645\u7684\u3002\u8003\u8651 ",(0,n.kt)("inlineCode",{parentName:"p"},"java.awt.Component")," \u4e2d\u7684 getSize \u65b9\u6cd5\u3002\u8be5\u6027\u80fd\u5f88\u5173\u952e\u65b9\u6cd5\u8fd4\u56de Dimension \u5b9e\u4f8b\u7684\u51b3\u5b9a\uff0c\u52a0\u4e0a\u7ef4\u5ea6\u5b9e\u4f8b\u662f\u53ef\u53d8\u7684\u51b3\u5b9a\uff0c\u5f3a\u5236\u8be5\u65b9\u6cd5\u7684\u4efb\u4f55\u5b9e\u73b0\u5728\u6bcf\u6b21\u8c03\u7528\u65f6\u5206\u914d\u4e00\u4e2a\u65b0\u7684 Dimension \u5b9e\u4f8b\u3002\u5c3d\u7ba1\u5728\u73b0\u4ee3 VM \u4e0a\u5206\u914d\u5c0f\u5bf9\u8c61\u5e76\u4e0d\u6602\u8d35\uff0c\u4f46\u4e0d\u5fc5\u8981\u5730\u5206\u914d\u6570\u767e\u4e07\u4e2a\u5bf9\u8c61\u4e5f\u4f1a\u5bf9\u6027\u80fd\u9020\u6210\u5b9e\u9645\u635f\u5bb3\u3002"),(0,n.kt)("p",null,"Several API design alternatives existed. Ideally, Dimension should have been immutable (Item 17); alternatively, getSize could have been replaced by two methods returning the individual primitive components of a Dimension object. In fact, two such methods were added to Component in Java 2 for performance reasons. Preexisting client code, however, still uses the getSize method and still suffers the performance consequences of the original API design decisions."),(0,n.kt)("p",null,"\u5b58\u5728\u51e0\u79cd API \u8bbe\u8ba1\u66ff\u4ee3\u65b9\u6848\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0cDimension \u5e94\u8be5\u662f\u4e0d\u53ef\u53d8\u7684\uff08",(0,n.kt)("a",{parentName:"p",href:"./Chapter-4-Item-17-Minimize-mutability"},"Item-17"),"\uff09\uff1b\u6216\u8005\uff0cgetSize \u53ef\u4ee5\u88ab\u8fd4\u56de Dimension \u5bf9\u8c61\u7684\u539f\u59cb\u7ec4\u4ef6\u7684\u4e24\u4e2a\u65b9\u6cd5\u6240\u66ff\u4ee3\u3002\u4e8b\u5b9e\u4e0a\uff0c\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u5728 Java 2 \u7684\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u4e86\u4e24\u4e2a\u8fd9\u6837\u7684\u65b9\u6cd5\u3002\u7136\u800c\uff0c\u73b0\u6709\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\u4ecd\u7136\u4f7f\u7528 getSize \u65b9\u6cd5\uff0c\u5e76\u4e14\u4ecd\u7136\u53d7\u5230\u539f\u59cb API \u8bbe\u8ba1\u51b3\u7b56\u7684\u6027\u80fd\u5f71\u54cd\u3002"),(0,n.kt)("p",null,"Luckily, it is generally the case that good API design is consistent with good performance. ",(0,n.kt)("strong",{parentName:"p"},"It is a very bad idea to warp an API to achieve good performance.")," The performance issue that caused you to warp the API may go away in a future release of the platform or other underlying software, but the warped API and the support headaches that come with it will be with you forever."),(0,n.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u597d\u7684 API \u8bbe\u8ba1\u4e0e\u597d\u7684\u6027\u80fd\u662f\u4e00\u81f4\u7684\u3002",(0,n.kt)("strong",{parentName:"p"},"\u4e3a\u4e86\u83b7\u5f97\u826f\u597d\u7684\u6027\u80fd\u800c\u6539\u53d8 API \u662f\u4e00\u4e2a\u975e\u5e38\u7cdf\u7cd5\u7684\u60f3\u6cd5\u3002")," \u5bfc\u81f4\u4f60\u6539\u53d8 API \u7684\u6027\u80fd\u95ee\u9898\uff0c\u53ef\u80fd\u5728\u5e73\u53f0\u6216\u5176\u4ed6\u5e95\u5c42\u8f6f\u4ef6\u7684\u672a\u6765\u7248\u672c\u4e2d\u6d88\u5931\uff0c\u4f46\u662f\u6539\u53d8\u7684 API \u548c\u968f\u4e4b\u800c\u6765\u7684\u95ee\u9898\u5c06\u6c38\u8fdc\u4f34\u968f\u7740\u4f60\u3002"),(0,n.kt)("p",null,"Once you\u2019ve carefully designed your program and produced a clear, concise, and well-structured implementation, then it may be time to consider optimization, assuming you\u2019re not already satisfied with the performance of the program."),(0,n.kt)("p",null,"\u4e00\u65e6\u4f60\u4ed4\u7ec6\u5730\u8bbe\u8ba1\u4e86\u4f60\u7684\u7a0b\u5e8f\uff0c\u6210\u4e86\u4e00\u4e2a\u6e05\u6670\u3001\u7b80\u6d01\u3001\u7ed3\u6784\u826f\u597d\u7684\u5b9e\u73b0\uff0c\u90a3\u4e48\u53ef\u80fd\u662f\u65f6\u5019\u8003\u8651\u4f18\u5316\u4e86\uff0c\u5047\u8bbe\u6b64\u65f6\u4f60\u8fd8\u4e0d\u6ee1\u610f\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"Recall that Jackson\u2019s two rules of optimization were \u201cDon\u2019t do it,\u201d and \u201c(for experts only). Don\u2019t do it yet.\u201d He could have added one more: ",(0,n.kt)("strong",{parentName:"p"},"measure performance before and after each attempted optimization.")," You may be surprised by what you find. Often, attempted optimizations have no measurable effect on performance; sometimes, they make it worse. The main reason is that it\u2019s difficult to guess where your program is spending its time. The part of the program that you think is slow may not be at fault, in which case you\u2019d be wasting your time trying to optimize it. Common wisdom says that programs spend 90 percent of their time in 10 percent of their code."),(0,n.kt)("p",null,"\u8bb0\u5f97 Jackson \u7684\u4e24\u6761\u4f18\u5316\u89c4\u5219\u662f\u300c\u4e0d\u8981\u505a\u300d\u548c\u300c\uff08\u53ea\u9488\u5bf9\u4e13\u5bb6\uff09\u300d\u3002\u5148\u522b\u8fd9\u4e48\u505a\u3002\u4ed6\u672c\u53ef\u4ee5\u518d\u52a0\u4e00\u4e2a\uff1a",(0,n.kt)("strong",{parentName:"p"},"\u5728\u6bcf\u6b21\u5c1d\u8bd5\u4f18\u5316\u4e4b\u524d\u548c\u4e4b\u540e\u6d4b\u91cf\u6027\u80fd\u3002")," \u4f60\u53ef\u80fd\u4f1a\u5bf9\u4f60\u7684\u53d1\u73b0\u611f\u5230\u60ca\u8bb6\u3002\u901a\u5e38\uff0c\u8bd5\u56fe\u505a\u7684\u4f18\u5316\u901a\u5e38\u5bf9\u4e8e\u6027\u80fd\u5e76\u6ca1\u6709\u660e\u663e\u7684\u5f71\u54cd\uff1b\u6709\u65f6\u5019\uff0c\u8fd8\u8ba9\u4e8b\u60c5\u53d8\u5f97\u66f4\u7cdf\u3002\u4e3b\u8981\u539f\u56e0\u662f\u5f88\u96be\u731c\u6d4b\u7a0b\u5e8f\u5c06\u65f6\u95f4\u82b1\u8d39\u5728\u54ea\u91cc\u3002\u7a0b\u5e8f\u4e2d\u4f60\u8ba4\u4e3a\u5f88\u6162\u7684\u90e8\u5206\u53ef\u80fd\u5e76\u6ca1\u6709\u95ee\u9898\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u662f\u5728\u6d6a\u8d39\u65f6\u95f4\u6765\u4f18\u5316\u5b83\u3002\u4e00\u822c\u8ba4\u4e3a\uff0c\u7a0b\u5e8f\u5c06 90% \u7684\u65f6\u95f4\u82b1\u8d39\u5728\u4e86 10% \u7684\u4ee3\u7801\u4e0a\u3002"),(0,n.kt)("p",null,"Profiling tools can help you decide where to focus your optimization efforts. These tools give you runtime information, such as roughly how much time each method is consuming and how many times it is invoked. In addition to focusing your tuning efforts, this can alert you to the need for algorithmic changes. If a quadratic (or worse) algorithm lurks inside your program, no amount of tuning will fix the problem. You must replace the algorithm with one that is more efficient. The more code in the system, the more important it is to use a profiler. It\u2019s like looking for a needle in a haystack: the bigger the haystack, the more useful it is to have a metal detector. Another tool that deserves special mention is jmh, which is not a profiler but a microbenchmarking framework that provides unparalleled visibility into the detailed performance of Java code ","[JMH]","."),(0,n.kt)("p",null,"\u5206\u6790\u5de5\u5177\u53ef\u4ee5\u5e2e\u52a9\u4f60\u51b3\u5b9a\u5c06\u4f18\u5316\u5de5\u4f5c\u7684\u91cd\u70b9\u653e\u5728\u54ea\u91cc\u3002\u8fd9\u4e9b\u5de5\u5177\u63d0\u4f9b\u4e86\u8fd0\u884c\u65f6\u4fe1\u606f\uff0c\u6bd4\u5982\u6bcf\u4e2a\u65b9\u6cd5\u5927\u7ea6\u82b1\u8d39\u591a\u5c11\u65f6\u95f4\u4ee5\u53ca\u8c03\u7528\u4e86\u591a\u5c11\u6b21\u3002\u9664\u4e86\u5173\u6ce8\u4f60\u7684\u8c03\u4f18\u5de5\u4f5c\u4e4b\u5916\uff0c\u8fd9\u8fd8\u53ef\u4ee5\u63d0\u9192\u4f60\u662f\u5426\u9700\u8981\u6539\u53d8\u7b97\u6cd5\u3002\u5982\u679c\u7a0b\u5e8f\u4e2d\u6f5c\u4f0f\u7740\u5e73\u65b9\u7ea7\uff08\u6216\u66f4\u5dee\uff09\u7684\u7b97\u6cd5\uff0c\u90a3\u4e48\u518d\u591a\u7684\u8c03\u4f18\u4e5f\u65e0\u6cd5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u4f60\u5fc5\u987b\u7528\u4e00\u4e2a\u66f4\u6709\u6548\u7684\u7b97\u6cd5\u6765\u4ee3\u66ff\u8fd9\u4e2a\u7b97\u6cd5\u3002\u7cfb\u7edf\u4e2d\u7684\u4ee3\u7801\u8d8a\u591a\uff0c\u4f7f\u7528\u5206\u6790\u5668\u5c31\u8d8a\u91cd\u8981\u3002\u8fd9\u5c31\u50cf\u5927\u6d77\u635e\u9488\uff1a\u5927\u6d77\u8d8a\u5927\uff0c\u91d1\u5c5e\u63a2\u6d4b\u5668\u5c31\u8d8a\u6709\u7528\u3002\u53e6\u4e00\u4e2a\u503c\u5f97\u7279\u522b\u63d0\u53ca\u7684\u5de5\u5177\u662f jmh\uff0c\u5b83\u4e0d\u662f\u4e00\u4e2a\u5206\u6790\u5668\uff0c\u800c\u662f\u4e00\u4e2a\u5fae\u57fa\u51c6\u6d4b\u8bd5\u6846\u67b6\uff0c\u63d0\u4f9b\u4e86\u5bf9 Java \u4ee3\u7801\u6027\u80fd\u65e0\u4e0e\u4f26\u6bd4\u7684\u9884\u6d4b\u6027\u3002"),(0,n.kt)("p",null,"The need to measure the effects of attempted optimization is even greater in Java than in more traditional languages such as C and C++, because Java has a weaker performance model: The relative cost of the various primitive operations is less well defined. The \u201cabstraction gap\u201d between what the programmer writes and what the CPU executes is greater, which makes it even more difficult to reliably predict the performance consequences of optimizations. There are plenty of performance myths floating around that turn out to be half-truths or outright lies."),(0,n.kt)("p",null,"\u4e0e C \u548c C++ \u7b49\u66f4\u4f20\u7edf\u7684\u8bed\u8a00\u76f8\u6bd4\uff0cJava \u751a\u81f3\u66f4\u9700\u8981\u5ea6\u91cf\u5c1d\u8bd5\u4f18\u5316\u7684\u6548\u679c\uff0c\u56e0\u4e3a Java \u7684\u6027\u80fd\u6a21\u578b\u66f4\u5f31\uff1a\u5404\u79cd\u57fa\u672c\u64cd\u4f5c\u7684\u76f8\u5bf9\u6210\u672c\u6ca1\u6709\u5f97\u5230\u5f88\u597d\u7684\u5b9a\u4e49\u3002\u7a0b\u5e8f\u5458\u7f16\u5199\u7684\u5185\u5bb9\u548c CPU \u6267\u884c\u7684\u5185\u5bb9\u4e4b\u95f4\u7684\u300c\u62bd\u8c61\u9e3f\u6c9f\u300d\u66f4\u5927\uff0c\u8fd9\u4f7f\u5f97\u53ef\u9760\u5730\u9884\u6d4b\u4f18\u5316\u7684\u6027\u80fd\u7ed3\u679c\u53d8\u5f97\u66f4\u52a0\u56f0\u96be\u3002\u6709\u5f88\u591a\u5173\u4e8e\u6027\u80fd\u7684\u4f20\u8bf4\u6d41\u4f20\u5f00\u6765\uff0c\u4f46\u6700\u7ec8\u88ab\u8bc1\u660e\u662f\u534a\u771f\u534a\u5047\u6216\u5f7b\u5934\u5f7b\u5c3e\u7684\u8c0e\u8a00\u3002"),(0,n.kt)("p",null,"Not only is Java\u2019s performance model ill-defined, but it varies from implementation to implementation, from release to release, and from processor to processor. If you will be running your program on multiple implementations or multiple hardware platforms, it is important that you measure the effects of your optimization on each. Occasionally you may be forced to make trade-offs between performance on different implementations or hardware platforms."),(0,n.kt)("p",null,"Java \u7684\u6027\u80fd\u6a21\u578b\u4e0d\u4ec5\u5b9a\u4e49\u4e0d\u6e05\uff0c\u800c\u4e14\u5728\u4e0d\u540c\u7684\u5b9e\u73b0\u3001\u4e0d\u540c\u7684\u53d1\u5e03\u7248\u672c\u3001\u4e0d\u540c\u7684\u5904\u7406\u5668\u4e4b\u95f4\u90fd\u6709\u6240\u4e0d\u540c\u3002\u5982\u679c\u4f60\u8981\u5728\u591a\u4e2a\u5b9e\u73b0\u6216\u591a\u4e2a\u786c\u4ef6\u5e73\u53f0\u4e0a\u8fd0\u884c\u7a0b\u5e8f\uff0c\u90a3\u4e48\u5ea6\u91cf\u4f18\u5316\u5bf9\u6bcf\u4e2a\u5e73\u53f0\u7684\u6548\u679c\u662f\u5f88\u91cd\u8981\u7684\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u4f1a\u88ab\u8feb\u5728\u4e0d\u540c\u5b9e\u73b0\u6216\u786c\u4ef6\u5e73\u53f0\u4e0a\u7684\u6027\u80fd\u4e4b\u95f4\u8fdb\u884c\u6743\u8861\u3002"),(0,n.kt)("p",null,"In the nearly two decades since this item was first written, every component of the Java software stack has grown in complexity, from processors to VMs to libraries, and the variety of hardware on which Java runs has grown immensely. All of this has combined to make the performance of Java programs even less predictable now than it was in 2001, with a corresponding increase in the need to measure it."),(0,n.kt)("p",null,"\u81ea\u672c\u6761\u76ee\u9996\u6b21\u7f16\u5199\u4ee5\u6765\u7684\u8fd1 20 \u5e74\u91cc\uff0cJava \u8f6f\u4ef6\u6808\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u4ece\u5904\u7406\u5668\u5230 vm \u518d\u5230\u5e93\uff0cJava \u8fd0\u884c\u7684\u5404\u79cd\u786c\u4ef6\u90fd\u6709\u4e86\u6781\u5927\u7684\u589e\u957f\u3002\u6240\u6709\u8fd9\u4e9b\u52a0\u5728\u4e00\u8d77\uff0c\u4f7f\u5f97 Java \u7a0b\u5e8f\u7684\u6027\u80fd\u6bd4 2001 \u5e74\u66f4\u96be\u4ee5\u9884\u6d4b\uff0c\u800c\u5bf9\u5b83\u8fdb\u884c\u5ea6\u91cf\u7684\u9700\u6c42\u4e5f\u76f8\u5e94\u589e\u52a0\u3002"),(0,n.kt)("p",null,"To summarize, do not strive to write fast programs\u2014strive to write good ones; speed will follow. But do think about performance while you\u2019re designing systems, especially while you\u2019re designing APIs, wire-level protocols, and persistent data formats. When you\u2019ve finished building the system, measure its performance. If it\u2019s fast enough, you\u2019re done. If not, locate the source of the problem with the aid of a profiler and go to work optimizing the relevant parts of the system. The first step is to examine your choice of algorithms: no amount of low-level optimization can make up for a poor choice of algorithm. Repeat this process as necessary, measuring the performance after every change, until you\u2019re satisfied."),(0,n.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u4e0d\u8981\u52aa\u529b\u5199\u5feb\u7684\u7a0b\u5e8f\uff0c\u8981\u52aa\u529b\u5199\u597d\u7a0b\u5e8f\uff1b\u901f\u5ea6\u81ea\u7136\u4f1a\u63d0\u9ad8\u3002\u4f46\u662f\u5728\u8bbe\u8ba1\u7cfb\u7edf\u65f6\u4e00\u5b9a\u8981\u8003\u8651\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u8bbe\u8ba1API\u3001\u7ebf\u8def\u5c42\u534f\u8bae\u548c\u6301\u4e45\u6570\u636e\u683c\u5f0f\u65f6\u3002\u5f53\u4f60\u5b8c\u6210\u4e86\u7cfb\u7edf\u7684\u6784\u5efa\u4e4b\u540e\uff0c\u8bf7\u5ea6\u91cf\u5b83\u7684\u6027\u80fd\u3002\u5982\u679c\u8db3\u591f\u5feb\uff0c\u5c31\u5b8c\u6210\u4e86\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5229\u7528\u5206\u6790\u5668\u627e\u5230\u95ee\u9898\u7684\u6839\u6e90\uff0c\u5e76\u5bf9\u7cfb\u7edf\u7684\u76f8\u5173\u90e8\u5206\u8fdb\u884c\u4f18\u5316\u3002\u7b2c\u4e00\u6b65\u662f\u68c0\u67e5\u7b97\u6cd5\u7684\u9009\u62e9\uff1a\u518d\u591a\u7684\u5e95\u5c42\u4f18\u5316\u4e5f\u4e0d\u80fd\u5f25\u8865\u7b97\u6cd5\u9009\u62e9\u7684\u4e0d\u8db3\u3002\u6839\u636e\u9700\u8981\u91cd\u590d\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u5728\u6bcf\u6b21\u66f4\u6539\u4e4b\u540e\u6d4b\u91cf\u6027\u80fd\uff0c\u76f4\u5230\u4f60\u6ee1\u610f\u4e3a\u6b62\u3002"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"./Chapter-9-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,n.kt)("a",{parentName:"strong",href:"./Chapter-9-Item-66-Use-native-methods-judiciously"},"Item 66: Use native methods judiciously\uff08\u660e\u667a\u5730\u4f7f\u7528\u672c\u5730\u65b9\u6cd5\uff09"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,n.kt)("a",{parentName:"strong",href:"./Chapter-9-Item-68-Adhere-to-generally-accepted-naming-conventions"},"Item 68: Adhere to generally accepted naming conventions\uff08\u9075\u5b88\u88ab\u5e7f\u6cdb\u8ba4\u53ef\u7684\u547d\u540d\u7ea6\u5b9a\uff09")))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1507],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=h(o),d=a,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return o?n.createElement(u,c(c({ref:t},l),{},{components:o})):n.createElement(u,c({ref:t},l))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var h=2;h<r;h++)c[h]=o[h];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1129:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=o(7462),a=(o(7294),o(3905));const r={},c=void 0,i={unversionedId:"Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method",id:"Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method",title:"Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method",description:"Chapter 10. Exceptions\uff08\u5f02\u5e38\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method.md",sourceDirName:"Books/EffectiveJava3/Chapter-10",slug:"/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-10-Item-73-Throw-exceptions-appropriate-to-the-abstraction",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-73-Throw-exceptions-appropriate-to-the-abstraction"},next:{title:"Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages"}},s={},h=[{value:"Chapter 10. Exceptions\uff08\u5f02\u5e38\uff09",id:"chapter-10-exceptions\u5f02\u5e38",level:2},{value:"Item 74: Document all exceptions thrown by each method\uff08\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u8bb0\u5f55\u4f1a\u629b\u51fa\u7684\u6240\u6709\u5f02\u5e38\uff09",id:"item-74-document-all-exceptions-thrown-by-each-method\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u8bb0\u5f55\u4f1a\u629b\u51fa\u7684\u6240\u6709\u5f02\u5e38",level:3}],l={toc:h};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"chapter-10-exceptions\u5f02\u5e38"},"Chapter 10. Exceptions\uff08\u5f02\u5e38\uff09"),(0,a.kt)("h3",{id:"item-74-document-all-exceptions-thrown-by-each-method\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u8bb0\u5f55\u4f1a\u629b\u51fa\u7684\u6240\u6709\u5f02\u5e38"},"Item 74: Document all exceptions thrown by each method\uff08\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u8bb0\u5f55\u4f1a\u629b\u51fa\u7684\u6240\u6709\u5f02\u5e38\uff09"),(0,a.kt)("p",null,"A description of the exceptions thrown by a method is an important part of the documentation required to use the method properly. Therefore, it is critically important that you take the time to carefully document all of the exceptions thrown by each method (Item 56)."),(0,a.kt)("p",null,"\u63cf\u8ff0\u65b9\u6cd5\u629b\u51fa\u7684\u5f02\u5e38\uff0c\u662f\u8be5\u65b9\u6cd5\u6587\u6863\u7684\u91cd\u8981\u90e8\u5206\u3002\u56e0\u6b64\uff0c\u82b1\u65f6\u95f4\u4ed4\u7ec6\u8bb0\u5f55\u6bcf\u4e2a\u65b9\u6cd5\u629b\u51fa\u7684\u6240\u6709\u5f02\u5e38\u662f\u975e\u5e38\u91cd\u8981\u7684\uff08",(0,a.kt)("a",{parentName:"p",href:"./Chapter-8-Item-56-Write-doc-comments-for-all-exposed-API-elements"},"Item-56"),"\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Always declare checked exceptions individually, and document precisely the conditions under which each one is thrown")," using the Javadoc @throws tag. Don\u2019t take the shortcut of declaring that a method throws some superclass of multiple exception classes that it can throw. As an extreme example, don\u2019t declare that a public method throws Exception or, worse, throws Throwable. In addition to denying any guidance to the method\u2019s user concerning the exceptions it is capable of throwing, such a declaration greatly hinders the use of the method because it effectively obscures any other exception that may be thrown in the same context. One exception to this advice is the main method, which can safely be declared to throw Exception because it is called only by VM."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u59cb\u7ec8\u5355\u72ec\u58f0\u660e checked \u5f02\u5e38\uff0c\u5e76\u4f7f\u7528 Javadoc \u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"@throw")," \u6807\u8bb0\u7cbe\u786e\u8bb0\u5f55\u6bcf\u6b21\u629b\u51fa\u5f02\u5e38\u7684\u6761\u4ef6"),"\u3002\u5982\u679c\u4e00\u4e2a\u65b9\u6cd5\u629b\u51fa\u591a\u4e2a\u5f02\u5e38\uff0c\u4e0d\u8981\u4f7f\u7528\u5feb\u6377\u65b9\u5f0f\u58f0\u660e\u8fd9\u4e9b\u5f02\u5e38\u7684\u8d85\u7c7b\u3002\u4f5c\u4e3a\u4e00\u4e2a\u6781\u7aef\u7684\u4f8b\u5b50\uff0c\u5373\u4e0d\u8981\u5728\u516c\u5171\u65b9\u6cd5\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"throws Exception"),"\uff0c\u6216\u8005\u66f4\u7cdf\uff0c\u751a\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"throws Throwable"),"\u3002\u9664\u4e86\u4e0d\u80fd\u5411\u65b9\u6cd5\u7684\u7528\u6237\u63d0\u4f9b\u4f1a\u629b\u51fa\u54ea\u4e9b\u5f02\u5e38\u7684\u4efb\u4f55\u6d88\u606f\u4e4b\u5916\uff0c\u8fd9\u6837\u7684\u58f0\u660e\u8fd8\u6781\u5927\u5730\u963b\u788d\u4e86\u65b9\u6cd5\u7684\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u63a9\u76d6\u4e86\u5728\u76f8\u540c\u4e0a\u4e0b\u6587\u4e2d\u53ef\u80fd\u629b\u51fa\u7684\u4efb\u4f55\u5176\u4ed6\u5f02\u5e38\u3002\u8fd9\u4e2a\u5efa\u8bae\u7684\u4e00\u4e2a\u7279\u4f8b\u662f main \u65b9\u6cd5\uff0c\u5b83\u53ef\u4ee5\u5b89\u5168\u5730\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"throw Exception"),"\uff0c\u56e0\u4e3a\u5b83\u53ea\u88ab VM \u8c03\u7528\u3002"),(0,a.kt)("p",null,"While the language does not require programmers to declare the unchecked exceptions that a method is capable of throwing, it is wise to document them as carefully as the checked exceptions. Unchecked exceptions generally represent programming errors (Item 70), and familiarizing programmers with all of the errors they can make helps them avoid making these errors. A well-documented list of the unchecked exceptions that a method can throw effectively describes the preconditions for its successful execution. It is essential that every public method\u2019s documentation describe its preconditions (Item 56), and documenting its unchecked exceptions is the best way to satisfy this requirement."),(0,a.kt)("p",null,"\u867d\u7136 Java \u4e0d\u8981\u6c42\u7a0b\u5e8f\u5458\u4e3a\u65b9\u6cd5\u58f0\u660e\u4f1a\u629b\u51fa\u7684 unchecked \u5f02\u5e38\uff0c\u4f46\u660e\u667a\u7684\u505a\u6cd5\u662f\uff0c\u5e94\u8be5\u50cf checked \u5f02\u5e38\u4e00\u6837\u4ed4\u7ec6\u5730\u8bb0\u5f55\u5b83\u4eec\u3002unchecked \u5f02\u5e38\u901a\u5e38\u8868\u793a\u7f16\u7a0b\u9519\u8bef\uff08",(0,a.kt)("a",{parentName:"p",href:"./Chapter-10/Chapter-10-Item-70-Use-checked-exceptions-for-recoverable-conditions-and-runtime-exceptions-for-programming-errors"},"Item-70"),"\uff09\uff0c\u8ba9\u7a0b\u5e8f\u5458\u719f\u6089\u4ed6\u4eec\u53ef\u80fd\u72af\u7684\u6240\u6709\u9519\u8bef\u53ef\u4ee5\u5e2e\u52a9\u4ed6\u4eec\u907f\u514d\u72af\u8fd9\u4e9b\u9519\u8bef\u3002\u5c06\u65b9\u6cd5\u53ef\u4ee5\u629b\u51fa\u7684 unchecked \u5f02\u5e38\u5f62\u6210\u826f\u597d\u6587\u6863\uff0c\u53ef\u4ee5\u6709\u6548\u63cf\u8ff0\u65b9\u6cd5\u6210\u529f\u6267\u884c\u7684\u5148\u51b3\u6761\u4ef6\u3002\u6bcf\u4e2a\u516c\u5171\u65b9\u6cd5\u7684\u6587\u6863\u90fd\u5fc5\u987b\u63cf\u8ff0\u5b83\u7684\u5148\u51b3\u6761\u4ef6\uff08",(0,a.kt)("a",{parentName:"p",href:"./Chapter-8-Item-56-Write-doc-comments-for-all-exposed-API-elements"},"Item-56"),"\uff09\uff0c\u8bb0\u5f55\u5b83\u7684 unchecked \u5f02\u5e38\u662f\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42\u7684\u6700\u4f73\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"It is particularly important that methods in interfaces document the unchecked exceptions they may throw. This documentation forms a part of the interface\u2019s general contract and enables common behavior among multiple implementations of the interface."),(0,a.kt)("p",null,"\u7279\u522b\u91cd\u8981\u7684\u662f\uff0c\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u8981\u8bb0\u5f55\u5b83\u4eec\u53ef\u80fd\u629b\u51fa\u7684 unchecked \u5f02\u5e38\u3002\u6b64\u6587\u6863\u6784\u6210\u63a5\u53e3\u901a\u7528\u7ea6\u5b9a\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u6307\u660e\u63a5\u53e3\u7684\u591a\u4e2a\u5b9e\u73b0\u4e4b\u95f4\u5e94\u8be5\u9075\u5b88\u7684\u516c\u5171\u884c\u4e3a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use the Javadoc @throws tag to document each exception that a method can throw, but do not use the throws keyword on unchecked exceptions.")," It is important that programmers using your API are aware of which exceptions are checked and which are unchecked because the programmers\u2019 responsibilities differ in these two cases. The documentation generated by the Javadoc @throws tag without a corresponding throws clause in the method declaration provides a strong visual cue to the programmer that an exception is unchecked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Javadoc \u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"@throw")," \u6807\u8bb0\u8bb0\u5f55\u65b9\u6cd5\u4f1a\u629b\u51fa\u7684\u6bcf\u4e2a\u5f02\u5e38\uff0c\u4f46\u662f\u4e0d\u8981\u5bf9 unchecked \u5f02\u5e38\u4f7f\u7528 throws \u5173\u952e\u5b57\u3002")," \u8ba9\u4f7f\u7528\u4f60\u7684 API \u7684\u7a0b\u5e8f\u5458\u77e5\u9053\u54ea\u4e9b\u5f02\u5e38\u662f checked \u5f02\u5e38\uff0c\u54ea\u4e9b\u662f unchecked \u5f02\u5e38\u662f\u5f88\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u5458\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\u7684\u804c\u8d23\u662f\u4e0d\u540c\u7684\u3002Javadoc \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@throw")," \u6807\u8bb0\u751f\u6210\u7684\u6587\u6863\u5728\u65b9\u6cd5\u58f0\u660e\u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684 throws \u5b50\u53e5\uff0c\u8fd9\u5411\u7a0b\u5e8f\u5458\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f3a\u70c8\u7684\u89c6\u89c9\u63d0\u793a\uff0c\u8fd9\u662f unchecked \u5f02\u5e38\u3002"),(0,a.kt)("p",null,"It should be noted that documenting all of the unchecked exceptions that each method can throw is an ideal, not always achievable in the real world. When a class undergoes revision, it is not a violation of source or binary compatibility if an exported method is modified to throw additional unchecked exceptions. Suppose a class invokes a method from another, independently written class. The authors of the former class may carefully document all of the unchecked exceptions that each method throws, but if the latter class is revised to throw additional unchecked exceptions, it is quite likely that the former class (which has not undergone revision) will propagate the new unchecked exceptions even though it does not document them."),(0,a.kt)("p",null,"\u5e94\u8be5\u6ce8\u610f\u7684\u662f\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u65b9\u6cd5\u4f1a\u629b\u51fa\u7684\u6240\u6709 unchecked \u5f02\u5e38\u662f\u7406\u60f3\u7684\uff0c\u4f46\u5728\u5b9e\u9645\u4e2d\u5e76\u4e0d\u603b\u662f\u53ef\u4ee5\u505a\u5230\u3002\u5f53\u7c7b\u8fdb\u884c\u4fee\u8ba2\u65f6\uff0c\u5982\u679c\u5c06\u5bfc\u51fa\u7684\u65b9\u6cd5\u4fee\u6539\uff0c\u4f7f\u5176\u629b\u51fa\u989d\u5916\u7684 unchecked \u5f02\u5e38\uff0c\u8fd9\u5e76\u4e0d\u8fdd\u53cd\u6e90\u4ee3\u7801\u6216\u4e8c\u8fdb\u5236\u517c\u5bb9\u6027\u3002\u5047\u8bbe\u4e00\u4e2a\u7c7b A \u4ece\u53e6\u4e00\u4e2a\u72ec\u7acb\u7684\u7c7b B \u4e2d\u8c03\u7528\u4e00\u4e2a\u65b9\u6cd5\u3002A \u7c7b\u7684\u4f5c\u8005\u53ef\u80fd\u4f1a\u4ed4\u7ec6\u8bb0\u5f55\u6bcf\u4e2a\u65b9\u6cd5\u629b\u51fa\u7684 unchecked \u5f02\u5e38\uff0c\u5982\u679c B \u7c7b\u88ab\u4fee\u6539\u4e86\uff0c\u4f7f\u5176\u629b\u51fa\u989d\u5916\u7684 unchecked \u5f02\u5e38\uff0c\u5f88\u53ef\u80fd A \u7c7b\uff08\u672a\u7ecf\u4fee\u6539\uff09\u5c06\u4f20\u64ad\u65b0\u7684 unchecked \u5f02\u5e38\uff0c\u5c3d\u7ba1\u5b83\u6ca1\u6709\u5728\u6587\u6863\u4e2d\u58f0\u660e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If an exception is thrown by many methods in a class for the same reason, you can document the exception in the class\u2019s documentation comment")," rather than documenting it individually for each method. A common example is NullPointerException. It is fine for a class\u2019s documentation comment to say, \u201cAll methods in this class throw a NullPointerException if a null object reference is passed in any parameter,\u201d or words to that effect."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e00\u4e2a\u7c7b\u4e2d\u7684\u8bb8\u591a\u65b9\u6cd5\u90fd\u56e0\u4e3a\u76f8\u540c\u7684\u539f\u56e0\u629b\u51fa\u5f02\u5e38\uff0c\u4f60\u53ef\u4ee5\u5728\u7c7b\u7684\u6587\u6863\u6ce8\u91ca\u4e2d\u8bb0\u5f55\u5f02\u5e38\uff0c")," \u800c\u4e0d\u662f\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u5355\u72ec\u8bb0\u5f55\u5f02\u5e38\u3002\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\u662f NullPointerException\u3002\u7c7b\u7684\u6587\u6863\u6ce8\u91ca\u53ef\u4ee5\u8fd9\u6837\u63cf\u8ff0\uff1a\u300c\u5982\u679c\u5728\u4efb\u4f55\u53c2\u6570\u4e2d\u4f20\u9012\u4e86 null \u5bf9\u8c61\u5f15\u7528\uff0c\u8be5\u7c7b\u4e2d\u7684\u6240\u6709\u65b9\u6cd5\u90fd\u4f1a\u629b\u51fa NullPointerException\u300d\uff0c\u6216\u8005\u7c7b\u4f3c\u610f\u601d\u7684\u8bdd\u3002"),(0,a.kt)("p",null,"In summary, document every exception that can be thrown by each method that you write. This is true for unchecked as well as checked exceptions, and for abstract as well as concrete methods. This documentation should take the form of @throws tags in doc comments. Declare each checked exception individually in a method\u2019s throws clause, but do not declare unchecked exceptions. If you fail to document the exceptions that your methods can throw, it will be difficult or impossible for others to make effective use of your classes and interfaces."),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c\u8bb0\u5f55\u4f60\u6240\u7f16\u5199\u7684\u6bcf\u4e2a\u65b9\u6cd5\u53ef\u80fd\u5f15\u53d1\u7684\u6bcf\u4e2a\u5f02\u5e38\u3002\u5bf9\u4e8e unchecked \u5f02\u5e38\u3001checked \u5f02\u5e38\u3001\u62bd\u8c61\u65b9\u6cd5\u3001\u5b9e\u4f8b\u65b9\u6cd5\u90fd\u662f\u5982\u6b64\u3002\u5e94\u8be5\u5728\u6587\u6863\u6ce8\u91ca\u4e2d\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@throw")," \u6807\u8bb0\u7684\u5f62\u5f0f\u3002\u5728\u65b9\u6cd5\u7684 throws \u5b50\u53e5\u4e2d\u5206\u522b\u58f0\u660e\u6bcf\u4e2a checked \u5f02\u5e38\uff0c\u4f46\u4e0d\u8981\u58f0\u660e unchecked \u5f02\u5e38\u3002\u5982\u679c\u4f60\u4e0d\u8bb0\u5f55\u65b9\u6cd5\u53ef\u80fd\u629b\u51fa\u7684\u5f02\u5e38\uff0c\u5176\u4ed6\u4eba\u5c06\u5f88\u96be\u6216\u4e0d\u53ef\u80fd\u6709\u6548\u5730\u4f7f\u7528\u4f60\u7684\u7c7b\u548c\u63a5\u53e3\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"./Chapter-10/Chapter-10-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,a.kt)("a",{parentName:"strong",href:"./Chapter-10/Chapter-10-Item-73-Throw-exceptions-appropriate-to-the-abstraction"},"Item 73: Throw exceptions appropriate to the abstraction\uff08\u629b\u51fa\u80fd\u7528\u62bd\u8c61\u89e3\u91ca\u7684\u5f02\u5e38\uff09"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,a.kt)("a",{parentName:"strong",href:"./Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages"},"Item 75: Include failure capture information in detail messages\uff08\u5f02\u5e38\u8be6\u7ec6\u6d88\u606f\u4e2d\u5e94\u5305\u542b\u6355\u83b7\u5931\u8d25\u7684\u4fe1\u606f\uff09")))))}p.isMDXComponent=!0}}]);
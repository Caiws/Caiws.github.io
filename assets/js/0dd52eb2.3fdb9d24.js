"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages",id:"Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages",title:"Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages",description:"Chapter 10. Exceptions\uff08\u5f02\u5e38\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages.md",sourceDirName:"Books/EffectiveJava3/Chapter-10",slug:"/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method"},next:{title:"Chapter-10-Item-76-Strive-for-failure-atomicity",permalink:"/docs/Books/EffectiveJava3/Chapter-10/Chapter-10-Item-76-Strive-for-failure-atomicity"}},l={},c=[{value:"Chapter 10. Exceptions\uff08\u5f02\u5e38\uff09",id:"chapter-10-exceptions\u5f02\u5e38",level:2},{value:"Item 75: Include failure capture information in detail messages\uff08\u5f02\u5e38\u8be6\u7ec6\u6d88\u606f\u4e2d\u5e94\u5305\u542b\u6355\u83b7\u5931\u8d25\u7684\u4fe1\u606f\uff09",id:"item-75-include-failure-capture-information-in-detail-messages\u5f02\u5e38\u8be6\u7ec6\u6d88\u606f\u4e2d\u5e94\u5305\u542b\u6355\u83b7\u5931\u8d25\u7684\u4fe1\u606f",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chapter-10-exceptions\u5f02\u5e38"},"Chapter 10. Exceptions\uff08\u5f02\u5e38\uff09"),(0,r.kt)("h3",{id:"item-75-include-failure-capture-information-in-detail-messages\u5f02\u5e38\u8be6\u7ec6\u6d88\u606f\u4e2d\u5e94\u5305\u542b\u6355\u83b7\u5931\u8d25\u7684\u4fe1\u606f"},"Item 75: Include failure capture information in detail messages\uff08\u5f02\u5e38\u8be6\u7ec6\u6d88\u606f\u4e2d\u5e94\u5305\u542b\u6355\u83b7\u5931\u8d25\u7684\u4fe1\u606f\uff09"),(0,r.kt)("p",null,"When a program fails due to an uncaught exception, the system automatically prints out the exception\u2019s stack trace. The stack trace contains the exception\u2019s string representation, the result of invoking its toString method. This typically consists of the exception\u2019s class name followed by its detail message. Frequently this is the only information that programmers or site reliability engineers will have when investigating a software failure. If the failure is not easily reproducible, it may be difficult or impossible to get any more information. Therefore, it is critically important that the exception\u2019s toString method return as much information as possible concerning the cause of the failure. In other words, the detail message of an exception should capture the failure for subsequent analysis."),(0,r.kt)("p",null,"\u5f53\u7a0b\u5e8f\u7531\u4e8e\u672a\u6355\u83b7\u5f02\u5e38\u800c\u5931\u8d25\u65f6\uff0c\u7cfb\u7edf\u53ef\u4ee5\u81ea\u52a8\u6253\u5370\u51fa\u5f02\u5e38\u7684\u5806\u6808\u8ddf\u8e2a\u3002\u5806\u6808\u8ddf\u8e2a\u5305\u542b\u5f02\u5e38\u7684\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u8fd9\u662f\u8c03\u7528\u5176 toString \u65b9\u6cd5\u7684\u7ed3\u679c\u3002\u8fd9\u901a\u5e38\u5305\u62ec\u5f02\u5e38\u7684\u7c7b\u540d\u53ca\u5176\u8be6\u7ec6\u4fe1\u606f\u3002\u901a\u5e38\uff0c\u8fd9\u662f\u7a0b\u5e8f\u5458\u6216\u7ba1\u7406\u5458\u5728\u8c03\u67e5\u8f6f\u4ef6\u6545\u969c\u65f6\u6240\u638c\u63e1\u7684\u552f\u4e00\u4fe1\u606f\u3002\u5982\u679c\u5931\u8d25\u4e0d\u5bb9\u6613\u91cd\u73b0\uff0c\u60f3\u83b7\u5f97\u66f4\u591a\u7684\u4fe1\u606f\u4f1a\u975e\u5e38\u56f0\u96be\u3002\u56e0\u6b64\uff0c\u5f02\u5e38\u7684 toString \u65b9\u6cd5\u8fd4\u56de\u5c3d\u53ef\u80fd\u591a\u7684\u5173\u4e8e\u5931\u8d25\u539f\u56e0\u7684\u4fe1\u606f\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u7531\u5931\u8d25\u5bfc\u81f4\u7684\u5f02\u5e38\u7684\u8be6\u7ec6\u4fe1\u606f\u5e94\u8be5\u88ab\u6355\u83b7\uff0c\u4ee5\u4fbf\u540e\u7eed\u5206\u6790\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To capture a failure, the detail message of an exception should contain the values of all parameters and fields that contributed to the exception.")," For example, the detail message of an IndexOutOfBoundsException should contain the lower bound, the upper bound, and the index value that failed to lie between the bounds. This information tells a lot about the failure. Any or all of the three values could be wrong. The index could be one less than the lower bound or equal to the upper bound (a \u201cfencepost error\u201d), or it could be a wild value, far too low or high. The lower bound could be greater than the upper bound (a serious internal invariant failure). Each of these situations points to a different problem, and it greatly aids in the diagnosis if you know what sort of error you\u2019re looking for."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8981\u6355\u83b7\u5931\u8d25\uff0c\u5f02\u5e38\u7684\u8be6\u7ec6\u6d88\u606f\u5e94\u8be5\u5305\u542b\u5bfc\u81f4\u5f02\u5e38\u7684\u6240\u6709\u53c2\u6570\u548c\u5b57\u6bb5\u7684\u503c\u3002")," \u4f8b\u5982\uff0cIndexOutOfBoundsException \u7684\u8be6\u7ec6\u6d88\u606f\u5e94\u8be5\u5305\u542b\u4e0b\u754c\u3001\u4e0a\u754c\u548c\u672a\u80fd\u4f4d\u4e8e\u4e0b\u754c\u4e4b\u95f4\u7684\u7d22\u5f15\u503c\u3002\u8fd9\u4e9b\u4fe1\u606f\u8bf4\u660e\u4e86\u5f88\u591a\u5173\u4e8e\u5931\u8d25\u7684\u4fe1\u606f\u3002\u8fd9\u4e09\u4e2a\u503c\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u6216\u6240\u6709\u503c\u90fd\u53ef\u80fd\u662f\u9519\u8bef\u7684\u3002\u7d22\u5f15\u53ef\u4ee5\u5c0f\u4e8e\u6216\u7b49\u4e8e\u4e0a\u754c\uff08\u300c\u8d8a\u754c\u9519\u8bef\u300d\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u65e0\u6548\u503c\uff0c\u592a\u5c0f\u6216\u592a\u5927\u3002\u4e0b\u754c\u53ef\u80fd\u5927\u4e8e\u4e0a\u754c\uff08\u4e25\u91cd\u7684\u5185\u90e8\u6545\u969c\uff09\u3002\u6bcf\u4e00\u79cd\u60c5\u51b5\u90fd\u6307\u5411\u4e00\u4e2a\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u5982\u679c\u4f60\u77e5\u9053\u4f60\u5728\u5bfb\u627e\u4ec0\u4e48\u6837\u7684\u9519\u8bef\uff0c\u8fd9\u5bf9\u8bca\u65ad\u6709\u5f88\u5927\u7684\u5e2e\u52a9\u3002"),(0,r.kt)("p",null,"One caveat concerns security-sensitive information. Because stack traces may be seen by many people in the process of diagnosing and fixing software issues, ",(0,r.kt)("strong",{parentName:"p"},"do not include passwords, encryption keys, and the like in detail messages.")),(0,r.kt)("p",null,"\u63d0\u53ca\u4e00\u4e2a\u4e0e\u5b89\u5168\u654f\u611f\u4fe1\u606f\u6709\u5173\u7684\u8b66\u544a\u3002\u56e0\u4e3a\u8bb8\u591a\u4eba\u5728\u8bca\u65ad\u548c\u4fee\u590d\u8f6f\u4ef6\u95ee\u9898\u7684\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u770b\u5230\u5806\u6808\u8ddf\u8e2a\uff0c\u6240\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u5305\u542b\u5bc6\u7801\u3001\u52a0\u5bc6\u5bc6\u94a5\u7b49\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"While it is critical to include all of the pertinent data in the detail message of an exception, it is generally unimportant to include a lot of prose. The stack trace is intended to be analyzed in conjunction with the documentation and, if necessary, source code. It generally contains the exact file and line number from which the exception was thrown, as well as the files and line numbers of all other method invocations on the stack. Lengthy prose descriptions of the failure are superfluous; the information can be gleaned by reading the documentation and source code."),(0,r.kt)("p",null,"\u867d\u7136\u5728\u5f02\u5e38\u7684\u8be6\u7ec6\u4fe1\u606f\u4e2d\u5305\u542b\u6240\u6709\u76f8\u5173\u6570\u636e\u975e\u5e38\u91cd\u8981\uff0c\u4f46\u901a\u5e38\u4e0d\u9700\u8981\u5305\u542b\u5927\u91cf\u7684\u63cf\u8ff0\u3002\u5806\u6808\u8ddf\u8e2a\u5c06\u4e0e\u6587\u6863\u4e00\u8d77\u5206\u6790\uff0c\u5982\u679c\u9700\u8981\uff0c\u8fd8\u5c06\u4e0e\u6e90\u4ee3\u7801\u4e00\u8d77\u5206\u6790\u3002\u5b83\u901a\u5e38\u5305\u542b\u629b\u51fa\u5f02\u5e38\u7684\u786e\u5207\u6587\u4ef6\u548c\u884c\u53f7\uff0c\u4ee5\u53ca\u5806\u6808\u4e0a\u6240\u6709\u65b9\u6cd5\u8c03\u7528\u7684\u6587\u4ef6\u548c\u884c\u53f7\u3002\u5197\u957f\u7684\u63cf\u8ff0\u5bf9\u4e00\u4e2a\u5931\u8d25\u95ee\u9898\u800c\u8a00\u662f\u591a\u4f59\u7684\uff1b\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u6587\u6863\u548c\u6e90\u4ee3\u7801\u6765\u6536\u96c6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"The detail message of an exception should not be confused with a user-level error message, which must be intelligible to end users. Unlike a user-level error message, the detail message is primarily for the benefit of programmers or site reliability engineers, when analyzing a failure. Therefore, information content is far more important than readability. User-level error messages are often localized, whereas exception detail messages rarely are. One way to ensure that exceptions contain adequate failure-capture information in their detail messages is to require this information in their constructors instead of a string detail message. The detail message can then be generated automatically to include the information. For example, instead of a String constructor, IndexOutOfBoundsException could have had a constructor that looks like this:"),(0,r.kt)("p",null,"\u5f02\u5e38\u7684\u8be6\u7ec6\u4fe1\u606f\u4e0d\u5e94\u8be5\u4e0e\u7528\u6237\u5c42\u7684\u9519\u8bef\u6d88\u606f\u6df7\u6dc6\uff0c\u56e0\u4e3a\u7528\u6237\u5c42\u9519\u8bef\u6d88\u606f\u6700\u7ec8\u5fc5\u987b\u88ab\u7528\u6237\u7406\u89e3\u3002\u4e0e\u7528\u6237\u5c42\u9519\u8bef\u6d88\u606f\u4e0d\u540c\uff0c\u8be6\u7ec6\u6d88\u606f\u4e3b\u8981\u662f\u4e3a\u7a0b\u5e8f\u5458\u6216\u7ba1\u7406\u5458\u5728\u5206\u6790\u6545\u969c\u65f6\u63d0\u4f9b\u7684\u3002\u56e0\u6b64\uff0c\u4fe1\u606f\u5185\u5bb9\u8fdc\u6bd4\u53ef\u8bfb\u6027\u91cd\u8981\u3002\u7528\u6237\u5c42\u9519\u8bef\u6d88\u606f\u901a\u5e38\u662f\u672c\u5730\u5316\u7684\uff0c\u800c\u5f02\u5e38\u8be6\u7ec6\u4fe1\u606f\u6d88\u606f\u5f88\u5c11\u672c\u5730\u5316\u3002\u786e\u4fdd\u5f02\u5e38\u5728\u5176\u8be6\u7ec6\u4fe1\u606f\u4e2d\u5305\u542b\u8db3\u591f\u7684\u6545\u969c\u6355\u83b7\u4fe1\u606f\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\uff0c\u5728\u5176\u6784\u9020\u51fd\u6570\u4e2d\u914d\u7f6e\uff0c\u800c\u4e0d\u662f\u4ee5\u4f20\u5165\u5b57\u7b26\u4e32\u65b9\u5f0f\u5f15\u5165\u8fd9\u4e9b\u4fe1\u606f\u3002\u4e4b\u540e\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u8be6\u7ec6\u4fe1\u606f\u6765\u5305\u542b\u7ec6\u8282\u3002\u4f8b\u5982\uff0cIndexOutOfBoundsException \u6784\u9020\u51fd\u6570\u4e0d\u5305\u542b String \u53c2\u6570\uff0c\u800c\u662f\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/**\n* Constructs an IndexOutOfBoundsException.\n**\n@param lowerBound the lowest legal index value\n* @param upperBound the highest legal index value plus one\n* @param index the actual index value\n*/\npublic IndexOutOfBoundsException(int lowerBound, int upperBound, int index) {\n    // Generate a detail message that captures the failure\n    super(String.format("Lower bound: %d, Upper bound: %d, Index: %d",lowerBound, upperBound, index));\n    // Save failure information for programmatic access\n    this.lowerBound = lowerBound;\n    this.upperBound = upperBound;\n    this.index = index;\n}\n')),(0,r.kt)("p",null,"As of Java 9, IndexOutOfBoundsException finally acquired a constructor that takes an int valued index parameter, but sadly it omits the lowerBound and upperBound parameters. More generally, the Java libraries don\u2019t make heavy use of this idiom, but it is highly recommended. It makes it easy for the programmer throwing an exception to capture the failure. In fact, it makes it hard for the programmer not to capture the failure! In effect, the idiom centralizes the code to generate a high-quality detail message in the exception class, rather than requiring each user of the class to generate the detail message redundantly."),(0,r.kt)("p",null,"\u4ece Java 9 \u5f00\u59cb\uff0cIndexOutOfBoundsException \u6700\u7ec8\u83b7\u5f97\u4e86\u4e00\u4e2a\u63a5\u53d7 int \u503c\u7d22\u5f15\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff0c\u4f46\u9057\u61be\u7684\u662f\u5b83\u5ffd\u7565\u4e86\u4e0b\u754c\u548c\u4e0a\u754c\u53c2\u6570\u3002\u66f4\u4e00\u822c\u5730\u8bf4\uff0cJava \u5e93\u4e0d\u4f1a\u5927\u91cf\u4f7f\u7528\u8fd9\u4e2a\u4e60\u60ef\u7528\u6cd5\uff0c\u4f46\u662f\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528\u5b83\u3002\u5b83\u4f7f\u7a0b\u5e8f\u5458\u5f88\u5bb9\u6613\u901a\u8fc7\u629b\u51fa\u5f02\u5e38\u6765\u6355\u83b7\u5931\u8d25\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5b83\u4f7f\u7a0b\u5e8f\u5458\u4e0d\u60f3\u6355\u83b7\u5931\u8d25\u90fd\u96be\uff01\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e2a\u4e60\u60ef\u7528\u6cd5\u5c06\u96c6\u4e2d\u5728\u5f02\u5e38\u7c7b\u4e2d\u751f\u6210\u9ad8\u8d28\u91cf\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u8981\u6c42\u8be5\u7c7b\u7684\u6bcf\u4e2a\u7528\u6237\u90fd\u751f\u6210\u5197\u4f59\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8\uff1aIndexOutOfBoundsException \u6709\u5173 int \u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\u6e90\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/**\n     * Constructs a new {@code IndexOutOfBoundsException} class with an\n     * argument indicating the illegal index.\n     *\n     * <p>The index is included in this exception\'s detail message.  The\n     * exact presentation format of the detail message is unspecified.\n     *\n     * @param index the illegal index.\n     * @since 9\n     */\n    public IndexOutOfBoundsException(int index) {\n        super("Index out of range: " + index);\n    }\n')),(0,r.kt)("p",null,"As suggested in Item 70, it may be appropriate for an exception to provide accessor methods for its failure-capture information (lowerBound, upperBound, and index in the above example). It is more important to provide such accessor methods on checked exceptions than unchecked, because the failure-capture information could be useful in recovering from the failure. It is rare (although not inconceivable) that a programmer might want programmatic access to the details of an unchecked exception. Even for unchecked exceptions, however, it seems advisable to provide these accessors on general principle (Item 12, page 57)."),(0,r.kt)("p",null,"\u6b63\u5982 ",(0,r.kt)("a",{parentName:"p",href:"./Chapter-10/Chapter-10-Item-70-Use-checked-exceptions-for-recoverable-conditions-and-runtime-exceptions-for-programming-errors"},"Item-70")," \u4e2d\u5efa\u8bae\u7684\uff0c\u5f02\u5e38\u4e3a\u5176\u6545\u969c\u6355\u83b7\u4fe1\u606f\u63d0\u4f9b\u8bbf\u95ee\u5668\u65b9\u6cd5\u662f\u9002\u5408\u7684\uff08\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\u4e0b\u754c\u3001\u4e0a\u754c\u548c\u7d22\u5f15\uff09\u3002\u5728 checked \u5f02\u5e38\u4e0a\u63d0\u4f9b\u6b64\u7c7b\u8bbf\u95ee\u5668\u65b9\u6cd5\u6bd4 unchecked \u5f02\u5e38\u4e0a\u63d0\u4f9b\u6b64\u7c7b\u8bbf\u95ee\u5668\u65b9\u6cd5\u66f4\u4e3a\u91cd\u8981\uff0c\u56e0\u4e3a\u6545\u969c\u6355\u83b7\u4fe1\u606f\u53ef\u80fd\u6709\u52a9\u4e8e\u7a0b\u5e8f\u4ece\u6545\u969c\u4e2d\u6062\u590d\u3002\u7a0b\u5e8f\u5458\u53ef\u80fd\u5e0c\u671b\u901a\u8fc7\u7f16\u7a0b\u8bbf\u95ee unchecked \u5f02\u5e38\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u4f46\u8fd9\u662f\u5f88\u5c11\u89c1\u7684\uff08\u5c3d\u7ba1\u662f\u53ef\u4ee5\u60f3\u8c61\u7684\uff09\u3002\u7136\u800c\uff0c\u5373\u4f7f\u5bf9\u4e8e unchecked \u5f02\u5e38\uff0c\u6839\u636e\u4e00\u822c\u539f\u5219\uff0c\u63d0\u4f9b\u8fd9\u4e9b\u8bbf\u95ee\u5668\u4e5f\u662f\u53ef\u4ee5\u7684\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-3-Item-12-Always-override-toString"},"Item-12"),"\uff0c\u7b2c 57 \u9875\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./Chapter-10/Chapter-10-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method"},"Item 74: Document all exceptions thrown by each method\uff08\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u8bb0\u5f55\u4f1a\u629b\u51fa\u7684\u6240\u6709\u5f02\u5e38\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-10/Chapter-10-Item-76-Strive-for-failure-atomicity"},"Item 76: Strive for failure atomicity\uff08\u5c3d\u529b\u4fdd\u8bc1\u6545\u969c\u539f\u5b50\u6027\uff09")))))}p.isMDXComponent=!0}}]);
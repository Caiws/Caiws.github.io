"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,h=f["".concat(c,".").concat(u)]||f[u]||l[u]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation",id:"Books/EffectiveJava3/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation",title:"Chapter-9-Item-63-Beware-the-performance-of-string-concatenation",description:"Chapter 9. General Programming\uff08\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation.md",sourceDirName:"Books/EffectiveJava3/Chapter-9",slug:"/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation",permalink:"/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-9-Item-62-Avoid-strings-where-other-types-are-more-appropriate",permalink:"/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-62-Avoid-strings-where-other-types-are-more-appropriate"},next:{title:"Chapter-9-Item-64-Refer-to-objects-by-their-interfaces",permalink:"/docs/Books/EffectiveJava3/Chapter-9/Chapter-9-Item-64-Refer-to-objects-by-their-interfaces"}},c={},p=[{value:"Chapter 9. General Programming\uff08\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1\uff09",id:"chapter-9-general-programming\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1",level:2},{value:"Item 63: Beware the performance of string concatenation\uff08\u5f53\u5fc3\u5b57\u7b26\u4e32\u8fde\u63a5\u5f15\u8d77\u7684\u6027\u80fd\u95ee\u9898\uff09",id:"item-63-beware-the-performance-of-string-concatenation\u5f53\u5fc3\u5b57\u7b26\u4e32\u8fde\u63a5\u5f15\u8d77\u7684\u6027\u80fd\u95ee\u9898",level:3}],m={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"chapter-9-general-programming\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1"},"Chapter 9. General Programming\uff08\u901a\u7528\u7a0b\u5e8f\u8bbe\u8ba1\uff09"),(0,a.kt)("h3",{id:"item-63-beware-the-performance-of-string-concatenation\u5f53\u5fc3\u5b57\u7b26\u4e32\u8fde\u63a5\u5f15\u8d77\u7684\u6027\u80fd\u95ee\u9898"},"Item 63: Beware the performance of string concatenation\uff08\u5f53\u5fc3\u5b57\u7b26\u4e32\u8fde\u63a5\u5f15\u8d77\u7684\u6027\u80fd\u95ee\u9898\uff09"),(0,a.kt)("p",null,"The string concatenation operator (+) is a convenient way to combine a few strings into one. It is fine for generating a single line of output or constructing the string representation of a small, fixed-size object, but it does not scale. Using ",(0,a.kt)("strong",{parentName:"p"},"the string concatenation operator repeatedly to concatenate n strings requires time quadratic in n.")," This is an unfortunate consequence of the fact that strings are immutable (Item 17). When two strings are concatenated, the contents of both are copied."),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u8fde\u63a5\u64cd\u4f5c\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"(+)")," \u662f\u5c06\u51e0\u4e2a\u5b57\u7b26\u4e32\u7ec4\u5408\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u7b80\u4fbf\u65b9\u6cd5\u3002\u5bf9\u4e8e\u751f\u6210\u5355\u884c\u8f93\u51fa\u6216\u6784\u9020\u4e00\u4e2a\u5c0f\u7684\u3001\u56fa\u5b9a\u5927\u5c0f\u7684\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff0c\u5b83\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u5b83\u4e0d\u80fd\u4f38\u7f29\u3002\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u4e32\u8054\u8fd0\u7b97\u7b26\u91cd\u590d\u4e32\u8054 n \u4e2a\u5b57\u7b26\u4e32\u9700\u8981 n \u7684\u5e73\u65b9\u7ea7\u65f6\u95f4\u3002")," \u8fd9\u662f\u5b57\u7b26\u4e32\u4e0d\u53ef\u53d8\u8fd9\u4e00\u4e8b\u5b9e\u5bfc\u81f4\u7684\u7ed3\u679c\uff08",(0,a.kt)("a",{parentName:"p",href:"./Chapter-4-Item-17-Minimize-mutability"},"Item-17"),"\uff09\u3002\u5f53\u8fde\u63a5\u4e24\u4e2a\u5b57\u7b26\u4e32\u65f6\uff0c\u5c06\u590d\u5236\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"For example, consider this method, which constructs the string representation of a billing statement by repeatedly concatenating a line for each item:"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u8003\u8651\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5b83\u901a\u8fc7\u5c06\u6bcf\u4e2a\u8d26\u5355\u9879\u76ee\u91cd\u590d\u8fde\u63a5\u5230\u4e00\u884c\u6765\u6784\u9020\u8d26\u5355\u8bed\u53e5\u7684\u5b57\u7b26\u4e32\u8868\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Inappropriate use of string concatenation - Performs poorly!\npublic String statement() {\n    String result = "";\n    for (int i = 0; i < numItems(); i++)\n        result += lineForItem(i); // String concatenation\n    return result;\n}\n')),(0,a.kt)("p",null,"The method performs abysmally if the number of items is large. ",(0,a.kt)("strong",{parentName:"p"},"To achieve acceptable performance, use a StringBuilder in place of a String")," to store the statement under construction:"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u7684\u6570\u91cf\u5f88\u5927\uff0c\u5219\u8be5\u65b9\u6cd5\u7684\u6027\u80fd\u975e\u5e38\u7cdf\u7cd5\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8981\u83b7\u5f97\u80fd\u63a5\u53d7\u7684\u6027\u80fd\uff0c\u8bf7\u4f7f\u7528 StringBuilder \u4ee3\u66ff String")," \u6765\u5b58\u50a8\u6b63\u5728\u6784\u5efa\u7684\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public String statement() {\n    StringBuilder b = new StringBuilder(numItems() * LINE_WIDTH);\n    for (int i = 0; i < numItems(); i++)\n        b.append(lineForItem(i));\n    return b.toString();\n}\n")),(0,a.kt)("p",null,"A lot of work has gone into making string concatenation faster since Java 6, but the difference in the performance of the two methods is still dramatic: If numItems returns 100 and lineForItem returns an 80-character string, the second method runs 6.5 times faster than the first on my machine. Because the first method is quadratic in the number of items and the second is linear, the performance difference gets much larger as the number of items grows. Note that the second method preallocates a StringBuilder large enough to hold the entire result, eliminating the need for automatic growth. Even if it is detuned to use a default-sized StringBuilder, it is still 5.5 times faster than the first method."),(0,a.kt)("p",null,"\u81ea Java 6 \u4ee5\u6765\uff0c\u4e3a\u4e86\u4f7f\u5b57\u7b26\u4e32\u8fde\u63a5\u66f4\u5feb\uff0c\u5df2\u7ecf\u505a\u4e86\u5927\u91cf\u5de5\u4f5c\uff0c\u4f46\u662f\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u5728\u6027\u80fd\u4e0a\u7684\u5dee\u5f02\u4ecd\u7136\u5f88\u5927\uff1a\u5982\u679c numItems \u8fd4\u56de 100\uff0clineForItem \u8fd4\u56de 80 \u4e2a\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u7b2c\u4e8c\u4e2a\u65b9\u6cd5\u5728\u6211\u7684\u673a\u5668\u4e0a\u8fd0\u884c\u7684\u901f\u5ea6\u662f\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u7684 6.5 \u500d\u3002\u7531\u4e8e\u7b2c\u4e00\u79cd\u65b9\u6cd5\u5728\u9879\u76ee\u6570\u91cf\u4e0a\u662f\u5e73\u65b9\u7ea7\u7684\uff0c\u800c\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u662f\u7ebf\u6027\u7684\uff0c\u6240\u4ee5\u968f\u7740\u9879\u76ee\u6570\u91cf\u7684\u589e\u52a0\uff0c\u6027\u80fd\u5dee\u5f02\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u5927\u3002\u6ce8\u610f\uff0c\u7b2c\u4e8c\u4e2a\u65b9\u6cd5\u9884\u5148\u5206\u914d\u4e86\u4e00\u4e2a\u8db3\u591f\u5927\u7684 StringBuilder \u6765\u4fdd\u5b58\u6574\u4e2a\u7ed3\u679c\uff0c\u4ece\u800c\u6d88\u9664\u4e86\u81ea\u52a8\u589e\u957f\u7684\u9700\u8981\u3002\u5373\u4f7f\u4f7f\u7528\u9ed8\u8ba4\u5927\u5c0f\u7684 StringBuilder\uff0c\u5b83\u4ecd\u7136\u6bd4\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u5feb 5.5 \u500d\u3002"),(0,a.kt)("p",null,"The moral is simple: ",(0,a.kt)("strong",{parentName:"p"},"Don\u2019t use the string concatenation operator to combine more than a few strings")," unless performance is irrelevant. Use StringBuilder\u2019s append method instead. Alternatively, use a character array, or process the strings one at a time instead of combining them."),(0,a.kt)("p",null,"\u9053\u7406\u5f88\u7b80\u5355\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4f7f\u7528\u5b57\u7b26\u4e32\u8fde\u63a5\u64cd\u4f5c\u7b26\u5408\u5e76\u591a\u4e2a\u5b57\u7b26\u4e32"),"\uff0c\u9664\u975e\u6027\u80fd\u65e0\u5173\u7d27\u8981\u3002\u5426\u5219\u4f7f\u7528 StringBuilder \u7684 append \u65b9\u6cd5\u3002\u6216\u8005\uff0c\u4f7f\u7528\u5b57\u7b26\u6570\u7ec4\uff0c\u518d\u6216\u8005\u4e00\u6b21\u53ea\u5904\u7406\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662f\u7ec4\u5408\u5b83\u4eec\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"./Chapter-9-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,a.kt)("a",{parentName:"strong",href:"./Chapter-9-Item-62-Avoid-strings-where-other-types-are-more-appropriate"},"Item 62: Avoid strings where other types are more appropriate\uff08\u5176\u4ed6\u7c7b\u578b\u66f4\u5408\u9002\u65f6\u5e94\u907f\u514d\u4f7f\u7528\u5b57\u7b26\u4e32\uff09"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,a.kt)("a",{parentName:"strong",href:"./Chapter-9-Item-64-Refer-to-objects-by-their-interfaces"},"Item 64: Refer to objects by their interfaces\uff08\u901a\u8fc7\u63a5\u53e3\u5f15\u7528\u5bf9\u8c61\uff09")))))}l.isMDXComponent=!0}}]);
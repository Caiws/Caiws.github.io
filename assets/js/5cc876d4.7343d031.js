"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects",id:"Books/EffectiveJava3/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects",title:"Chapter-2-Item-6-Avoid-creating-unnecessary-objects",description:"Chapter 2. Creating and Destroying Objects\uff08\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects.md",sourceDirName:"Books/EffectiveJava3/Chapter-2",slug:"/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects",permalink:"/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-2-Item-5-Prefer-dependency-injection-to-hardwiring-resources",permalink:"/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-5-Prefer-dependency-injection-to-hardwiring-resources"},next:{title:"Chapter-2-Item-7-Eliminate-obsolete-object-references",permalink:"/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-7-Eliminate-obsolete-object-references"}},l={},c=[{value:"Chapter 2. Creating and Destroying Objects\uff08\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\uff09",id:"chapter-2-creating-and-destroying-objects\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61",level:2},{value:"Item 6: Avoid creating unnecessary objects\uff08\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\uff09",id:"item-6-avoid-creating-unnecessary-objects\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"chapter-2-creating-and-destroying-objects\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61"},"Chapter 2. Creating and Destroying Objects\uff08\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\uff09"),(0,i.kt)("h3",{id:"item-6-avoid-creating-unnecessary-objects\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61"},"Item 6: Avoid creating unnecessary objects\uff08\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\uff09"),(0,i.kt)("p",null,"It is often appropriate to reuse a single object instead of creating a new functionally equivalent object each time it is needed. Reuse can be both faster and more stylish. An object can always be reused if it is immutable (Item 17)."),(0,i.kt)("p",null,"\u590d\u7528\u5355\u4e2a\u5bf9\u8c61\u901a\u5e38\u662f\u5408\u9002\u7684\uff0c\u4e0d\u5fc5\u6bcf\u6b21\u9700\u8981\u65f6\u90fd\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\u7b49\u6548\u5bf9\u8c61\u3002\u590d\u7528\u53ef\u4ee5\u66f4\u5feb\u3001\u66f4\u6d41\u884c\u3002\u5982\u679c\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u90a3\u4e48\u5b83\u603b\u662f\u53ef\u4ee5\u88ab\u590d\u7528\u7684\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-4-Item-17-Minimize-mutability"},"Item-17"),"\uff09\u3002"),(0,i.kt)("p",null,"As an extreme example of what not to do, consider this statement:"),(0,i.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u4e0d\u8be5\u505a\u7684\u6781\u7aef\u4f8b\u5b50\uff0c\u8bf7\u8003\u8651\u4e0b\u9762\u7684\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'String s = new String("bikini"); // DON\'T DO THIS!\n')),(0,i.kt)("p",null,'The statement creates a new String instance each time it is executed, and none of those object creations is necessary. The argument to the String constructor ("bikini") is itself a String instance, functionally identical to all of the objects created by the constructor. If this usage occurs in a loop or in a frequently invoked method, millions of String instances can be created needlessly.'),(0,i.kt)("p",null,"\u8be5\u8bed\u53e5\u6bcf\u6b21\u6267\u884c\u65f6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 String \u5b9e\u4f8b\uff0c\u800c\u8fd9\u4e9b\u5bf9\u8c61\u521b\u5efa\u90fd\u4e0d\u662f\u5fc5\u9700\u7684\u3002String \u6784\u9020\u51fd\u6570\u7684\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},'("bikini")')," \u672c\u8eab\u5c31\u662f\u4e00\u4e2a String \u5b9e\u4f8b\uff0c\u5728\u529f\u80fd\u4e0a\u4e0e\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u6240\u6709\u5bf9\u8c61\u76f8\u540c\u3002\u5982\u679c\u8fd9\u79cd\u7528\u6cd5\u53d1\u751f\u5728\u5faa\u73af\u6216\u9891\u7e41\u8c03\u7528\u7684\u65b9\u6cd5\u4e2d\uff0c\u521b\u5efa\u5927\u91cf String \u5b9e\u4f8b\u662f\u4e0d\u5fc5\u8981\u7684\u3002"),(0,i.kt)("p",null,"The improved version is simply the following:"),(0,i.kt)("p",null,"\u6539\u8fdb\u540e\u7684\u7248\u672c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'String s = "bikini";\n')),(0,i.kt)("p",null,"This version uses a single String instance, rather than creating a new one each time it is executed. Furthermore, it is guaranteed that the object will be reused by any other code running in the same virtual machine that happens to contain the same string literal ","[JLS, 3.10.5]","."),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c\u4f7f\u7528\u5355\u4e2a String \u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u6267\u884c\u65f6\u90fd\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b9e\u4f8b\u3002\u6b64\u5916\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u5728\u540c\u4e00\u865a\u62df\u673a\u4e2d\u8fd0\u884c\u7684\u5176\u4ed6\u4ee3\u7801\u90fd\u53ef\u4ee5\u590d\u7528\u8be5\u5bf9\u8c61\uff0c\u53ea\u8981\u6070\u597d\u5305\u542b\u76f8\u540c\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf ","[JLS, 3.10.5]","\u3002"),(0,i.kt)("p",null,"You can often avoid creating unnecessary objects by using static factory methods (Item 1) in preference to constructors on immutable classes that provide both. For example, the factory method Boolean.valueOf(String) is preferable to the constructor Boolean(String), which was deprecated in Java 9. The constructor must create a new object each time it\u2019s called, while the factory method is never required to do so and won\u2019t in practice. In addition to reusing immutable objects, you can also reuse mutable objects if you know they won\u2019t be modified."),(0,i.kt)("p",null,"\u4f60\u901a\u5e38\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u9759\u6001\u5de5\u5382\u65b9\u6cd5\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-2-Item-1-Consider-static-factory-methods-instead-of-constructors"},"Item-1"),"\uff09\u6765\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u5728\u63d0\u4f9b\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u4e0d\u53ef\u53d8\u7c7b\u4e0a\u4f7f\u7528\u6784\u9020\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u5de5\u5382\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean.valueOf(String)")," \u6bd4\u6784\u9020\u51fd\u6570 ",(0,i.kt)("del",{parentName:"p"},"Boolean(String)")," \u66f4\u53ef\u53d6\uff0c\u540e\u8005\u5728 Java 9 \u4e2d\u88ab\u5f03\u7528\u4e86\u3002\u6784\u9020\u51fd\u6570\u6bcf\u6b21\u8c03\u7528\u65f6\u90fd\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u800c\u5de5\u5382\u65b9\u6cd5\u4ece\u6765\u4e0d\u9700\u8981\u8fd9\u6837\u505a\uff0c\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u4e5f\u4e0d\u4f1a\u8fd9\u6837\u505a\u3002\u9664\u4e86\u590d\u7528\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4e4b\u5916\uff0c\u5982\u679c\u77e5\u9053\u53ef\u53d8\u5bf9\u8c61\u4e0d\u4f1a\u88ab\u4fee\u6539\uff0c\u4e5f\u53ef\u4ee5\u590d\u7528\u5b83\u4eec\u3002"),(0,i.kt)("p",null,"Some object creations are much more expensive than others. If you\u2019re going to need such an \u201cexpensive object\u201d repeatedly, it may be advisable to cache it for reuse. Unfortunately, it\u2019s not always obvious when you\u2019re creating such an object. Suppose you want to write a method to determine whether a string is a valid Roman numeral. Here\u2019s the easiest way to do this using a regular expression:"),(0,i.kt)("p",null,"\u6709\u4e9b\u5bf9\u8c61\u7684\u521b\u5efa\u7684\u4ee3\u4ef7\u76f8\u6bd4\u800c\u8a00\u8981\u6602\u8d35\u5f97\u591a\u3002\u5982\u679c\u4f60\u9700\u8981\u91cd\u590d\u5730\u4f7f\u7528\u8fd9\u6837\u4e00\u4e2a\u300c\u6602\u8d35\u7684\u5bf9\u8c61\u300d\uff0c\u90a3\u4e48\u6700\u597d\u5c06\u5176\u7f13\u5b58\u4ee5\u4f9b\u590d\u7528\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u5f53\u4f60\u521b\u5efa\u8fd9\u6837\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u8fd9\u4e00\u70b9\u5e76\u4e0d\u603b\u662f\u5f88\u660e\u663e\u3002\u5047\u8bbe\u4f60\u8981\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5\u6765\u786e\u5b9a\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u6709\u6548\u7684\u7f57\u9a6c\u6570\u5b57\u3002\u4e0b\u9762\u662f\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Performance can be greatly improved!\nstatic boolean isRomanNumeral(String s) {\n    return s.matches("^(?=.)M*(C[MD]|D?C{0,3})" + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");\n}\n')),(0,i.kt)("p",null,"The problem with this implementation is that it relies on the String.matches method. ",(0,i.kt)("strong",{parentName:"p"},"While String.matches is the easiest way to check if a string matches a regular expression, it\u2019s not suitable for repeated use in performance-critical situations.")," The problem is that it internally creates a Pattern instance for the regular expression and uses it only once, after which it becomes eligible for garbage collection. Creating a Pattern instance is expensive because it requires compiling the regular expression into a finite state machine."),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5b9e\u73b0\u7684\u95ee\u9898\u662f\u5b83\u4f9d\u8d56\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"String.matches")," \u65b9\u6cd5\u3002",(0,i.kt)("strong",{parentName:"p"},"\u867d\u7136 String.matches \u662f\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6700\u7b80\u5355\u65b9\u6cd5\uff0c\u4f46\u5b83\u4e0d\u9002\u5408\u5728\u6027\u80fd\u5173\u952e\u7684\u60c5\u51b5\u4e0b\u91cd\u590d\u4f7f\u7528\u3002")," \u95ee\u9898\u5728\u4e8e\uff0c\u5b83\u5728\u5185\u90e8\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u521b\u5efa\u4e86\u4e00\u4e2a Pattern \u5b9e\u4f8b\uff0c\u5e76\u4e14\u53ea\u4f7f\u7528\u4e00\u6b21\uff0c\u4e4b\u540e\u5c31\u8fdb\u884c\u5783\u573e\u6536\u96c6\u4e86\u3002\u521b\u5efa\u4e00\u4e2a Pattern \u5b9e\u4f8b\u662f\u5f88\u6602\u8d35\u7684\uff0c\u56e0\u4e3a\u5b83\u9700\u8981\u5c06\u6b63\u5219\u8868\u8fbe\u5f0f\u7f16\u8bd1\u6210\u6709\u9650\u7684\u72b6\u6001\u673a\u3002"),(0,i.kt)("p",null,"To improve the performance, explicitly compile the regular expression into a Pattern instance (which is immutable) as part of class initialization, cache it,and reuse the same instance for every invocation of the isRomanNumeral method:"),(0,i.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u5c06\u6b63\u5219\u8868\u8fbe\u5f0f\u663e\u5f0f\u7f16\u8bd1\u4e3a Pattern \u5b9e\u4f8b\uff08\u5b83\u662f\u4e0d\u53ef\u53d8\u7684\uff09\uff0c\u4f5c\u4e3a\u7c7b\u521d\u59cb\u5316\u7684\u4e00\u90e8\u5206\uff0c\u7f13\u5b58\u5b83\uff0c\u5e76\u5728\u6bcf\u6b21\u8c03\u7528 isRomanNumeral \u65b9\u6cd5\u65f6\u590d\u7528\u540c\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Reusing expensive object for improved performance\npublic class RomanNumerals {\n    private static final Pattern ROMAN = Pattern.compile("^(?=.)M*(C[MD]|D?C{0,3})" + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");\n    static boolean isRomanNumeral(String s) {\n        return ROMAN.matcher(s).matches();\n    }\n}\n')),(0,i.kt)("p",null,"The improved version of isRomanNumeral provides significant performance gains if invoked frequently. On my machine, the original version takes 1.1 \u03bcs on an 8-character input string, while the improved version takes 0.17 \u03bcs, which is 6.5 times faster. Not only is the performance improved, but arguably, so is clarity. Making a static final field for the otherwise invisible Pattern instance allows us to give it a name, which is far more readable than the regular expression itself."),(0,i.kt)("p",null,"\u5982\u679c\u9891\u7e41\u8c03\u7528 isRomanNumeral\uff0c\u6539\u8fdb\u7248\u672c\u5c06\u63d0\u4f9b\u663e\u8457\u7684\u6027\u80fd\u63d0\u5347\u3002\u5728\u6211\u7684\u673a\u5668\u4e0a\uff0c\u521d\u59cb\u7248\u672c\u8f93\u5165 8 \u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u82b1\u8d39 1.1\u03bcs\uff0c\u800c\u6539\u8fdb\u7684\u7248\u672c\u9700\u8981 0.17\u03bcs\uff0c\u5feb 6.5 \u500d\u3002\u4e0d\u4ec5\u6027\u80fd\u5f97\u5230\u4e86\u6539\u5584\uff0c\u6e05\u6670\u5ea6\u4e5f\u5f97\u5230\u4e86\u63d0\u9ad8\u3002\u4e3a\u4e0d\u53ef\u89c1\u7684 Pattern \u5b9e\u4f8b\u521b\u5efa\u4e00\u4e2a\u9759\u6001\u7ec8\u6001\u5b57\u6bb5\u5141\u8bb8\u6211\u4eec\u4e3a\u5b83\u547d\u540d\uff0c\u8fd9\u6bd4\u6b63\u5219\u8868\u8fbe\u5f0f\u672c\u8eab\u66f4\u5bb9\u6613\u9605\u8bfb\u3002"),(0,i.kt)("p",null,"If the class containing the improved version of the isRomanNumeral method is initialized but the method is never invoked, the field ROMAN will be initialized needlessly. It would be possible to eliminate the initialization by lazily initializing the field (Item 83) the first time the isRomanNumeral method is invoked, but this is not recommended. As is often the case with lazy initialization, it would complicate the implementation with no measurable performance improvement (Item 67)."),(0,i.kt)("p",null,"\u5982\u679c\u52a0\u8f7d\u5305\u542b\u6539\u8fdb\u7248 isRomanNumeral \u65b9\u6cd5\u7684\u7c7b\u65f6\uff0c\u8be5\u65b9\u6cd5\u4ece\u672a\u88ab\u8c03\u7528\u8fc7\uff0c\u90a3\u4e48\u521d\u59cb\u5316\u5b57\u6bb5 ROMAN \u662f\u4e0d\u5fc5\u8981\u7684\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u7528\u5ef6\u8fdf\u521d\u59cb\u5316\u5b57\u6bb5\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-11/Chapter-11-Item-83-Use-lazy-initialization-judiciously"},"Item-83"),"\uff09\u7684\u65b9\u5f0f\u5728\u7b2c\u4e00\u6b21\u8c03\u7528 isRomanNumeral \u65b9\u6cd5\u65f6\u624d\u521d\u59cb\u5316\u5b57\u6bb5\uff0c\u800c\u4e0d\u662f\u5728\u7c7b\u52a0\u8f7d\u65f6\u521d\u59cb\u5316\uff0c\u4f46\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u521d\u59cb\u5316\u4f1a\u4f7f\u5b9e\u73b0\u590d\u6742\u5316\uff0c\u800c\u6ca1\u6709\u660e\u663e\u7684\u6027\u80fd\u6539\u5584\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-9-Item-67-Optimize-judiciously"},"Item-67"),"\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8\uff1a\u7c7b\u52a0\u8f7d\u901a\u5e38\u6307\u7684\u662f\u7c7b\u7684\u751f\u547d\u5468\u671f\u4e2d\u52a0\u8f7d\u3001\u8fde\u63a5\u3001\u521d\u59cb\u5316\u4e09\u4e2a\u9636\u6bb5\u3002\u5f53\u65b9\u6cd5\u6ca1\u6709\u5728\u7c7b\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u88ab\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u4e0d\u521d\u59cb\u5316\u4e0e\u4e4b\u76f8\u5173\u7684\u5b57\u6bb5")),(0,i.kt)("p",null,"When an object is immutable, it is obvious it can be reused safely, but there are other situations where it is far less obvious, even counterintuitive. Consider the case of adapters ","[Gamma95]",", also known as views. An adapter is an object that delegates to a backing object, providing an alternative interface. Because an adapter has no state beyond that of its backing object, there\u2019s no need to create more than one instance of a given adapter to a given object."),(0,i.kt)("p",null,"\u5f53\u4e00\u4e2a\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u5f88\u660e\u663e\uff0c\u5b83\u53ef\u4ee5\u5b89\u5168\u5730\u590d\u7528\uff0c\u4f46\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u5b83\u8fdc\u4e0d\u90a3\u4e48\u660e\u663e\uff0c\u751a\u81f3\u8fdd\u53cd\u76f4\u89c9\u3002\u8003\u8651\u9002\u914d\u5668\u7684\u60c5\u51b5 ","[Gamma95]","\uff0c\u4e5f\u79f0\u4e3a\u89c6\u56fe\u3002\u9002\u914d\u5668\u662f\u59d4\u6258\u7ed9\u652f\u6301\u5bf9\u8c61\u7684\u5bf9\u8c61\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66ff\u4ee3\u63a5\u53e3\u3002\u56e0\u4e3a\u9002\u914d\u5668\u7684\u72b6\u6001\u4e0d\u8d85\u8fc7\u5176\u652f\u6301\u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u4e3a\u7ed9\u5b9a\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u7ed9\u5b9a\u9002\u914d\u5668\u7684\u591a\u4e2a\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,"For example, the keySet method of the Map interface returns a Set view of the Map object, consisting of all the keys in the map. Naively, it would seem that every call to keySet would have to create a new Set instance, but every call to keySet on a given Map object may return the same Set instance. Although the returned Set instance is typically mutable, all of the returned objects are functionally identical: when one of the returned objects changes, so do all the others, because they\u2019re all backed by the same Map instance. While it is largely harmless to create multiple instances of the keySet view object, it is unnecessary and has no benefits."),(0,i.kt)("p",null,"\u4f8b\u5982\uff0cMap \u63a5\u53e3\u7684 keySet \u65b9\u6cd5\u8fd4\u56de Map \u5bf9\u8c61\u7684 Set \u89c6\u56fe\uff0c\u5176\u4e2d\u5305\u542b Map \u4e2d\u7684\u6240\u6709\u952e\u3002\u5929\u771f\u7684\u662f\uff0c\u5bf9 keySet \u7684\u6bcf\u6b21\u8c03\u7528\u90fd\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Set \u5b9e\u4f8b\uff0c\u4f46\u662f\u5bf9\u7ed9\u5b9a Map \u5bf9\u8c61\u4e0a\u7684 keySet \u7684\u6bcf\u6b21\u8c03\u7528\u90fd\u53ef\u80fd\u8fd4\u56de\u76f8\u540c\u7684 Set \u5b9e\u4f8b\u3002\u867d\u7136\u8fd4\u56de\u7684 Set \u5b9e\u4f8b\u901a\u5e38\u662f\u53ef\u53d8\u7684\uff0c\u4f46\u6240\u6709\u8fd4\u56de\u7684\u5bf9\u8c61\u5728\u529f\u80fd\u4e0a\u90fd\u662f\u76f8\u540c\u7684\uff1a\u5f53\u8fd4\u56de\u7684\u5bf9\u8c61\u4e4b\u4e00\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u6240\u6709\u5176\u4ed6\u5bf9\u8c61\u4e5f\u4f1a\u53d1\u751f\u66f4\u6539\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u7531\u76f8\u540c\u7684 Map \u5b9e\u4f8b\u652f\u6301\u3002\u867d\u7136\u521b\u5efa keySet \u89c6\u56fe\u5bf9\u8c61\u7684\u591a\u4e2a\u5b9e\u4f8b\u57fa\u672c\u4e0a\u662f\u65e0\u5bb3\u7684\uff0c\u4f46\u8fd9\u662f\u4e0d\u5fc5\u8981\u7684\uff0c\u4e5f\u6ca1\u6709\u597d\u5904\u3002"),(0,i.kt)("p",null,"Another way to create unnecessary objects is autoboxing, which allows the programmer to mix primitive and boxed primitive types, boxing and unboxing automatically as needed. ",(0,i.kt)("strong",{parentName:"p"},"Autoboxing blurs but does not erase the distinction between primitive and boxed primitive types.")," There are subtle semantic distinctions and not-so-subtle performance differences (Item 61). Consider the following method, which calculates the sum of all the positive int values. To do this, the program has to use long arithmetic because an int is not big enough to hold the sum of all the positive int values:"),(0,i.kt)("p",null,"\u53e6\u4e00\u79cd\u521b\u5efa\u4e0d\u5fc5\u8981\u5bf9\u8c61\u7684\u65b9\u6cd5\u662f\u81ea\u52a8\u88c5\u7bb1\uff0c\u5b83\u5141\u8bb8\u7a0b\u5e8f\u5458\u6df7\u5408\u57fa\u672c\u7c7b\u578b\u548c\u5305\u88c5\u7c7b\u578b\uff0c\u6839\u636e\u9700\u8981\u81ea\u52a8\u88c5\u7bb1\u548c\u62c6\u7bb1\u3002",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u88c5\u7bb1\u6a21\u7cca\u4e86\u57fa\u672c\u7c7b\u578b\u548c\u5305\u88c5\u7c7b\u578b\u4e4b\u95f4\u7684\u533a\u522b\uff0c")," \u4e24\u8005\u6709\u7ec6\u5fae\u7684\u8bed\u4e49\u5dee\u522b\u548c\u4e0d\u660e\u663e\u7684\u6027\u80fd\u5dee\u522b\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-9-Item-61-Prefer-primitive-types-to-boxed-primitives"},"Item-61"),"\uff09\u3002\u8003\u8651\u4e0b\u9762\u7684\u65b9\u6cd5\uff0c\u5b83\u8ba1\u7b97\u6240\u6709\u6b63\u6574\u6570\u7684\u548c\u3002\u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u7a0b\u5e8f\u5fc5\u987b\u4f7f\u7528 long\uff0c\u56e0\u4e3a int \u503c\u4e0d\u591f\u5927\uff0c\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u6240\u6709\u6b63\u6574\u6570\u503c\u7684\u548c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Hideously slow! Can you spot the object creation?\nprivate static long sum() {\n    Long sum = 0L;\n    for (long i = 0; i <= Integer.MAX_VALUE; i++)\n        sum += i;\n    return sum;\n}\n")),(0,i.kt)("p",null,"This program gets the right answer, but it is much slower than it should be,due to a one-character typographical error. The variable sum is declared as a Long instead of a long, which means that the program constructs about 231 unnecessary Long instances (roughly one for each time the long i is added to the Long sum). Changing the declaration of sum from Long to long reduces the runtime from 6.3 seconds to 0.59 seconds on my machine. The lesson is clear: ",(0,i.kt)("strong",{parentName:"p"},"prefer primitives to boxed primitives, and watch out for unintentional autoboxing.")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7a0b\u5e8f\u5f97\u5230\u4e86\u6b63\u786e\u7684\u7b54\u6848\uff0c\u4f46\u662f\u7531\u4e8e\u4e00\u4e2a\u5b57\u7b26\u7684\u5370\u5237\u9519\u8bef\uff0c\u5b83\u7684\u901f\u5ea6\u6bd4\u5b9e\u9645\u8981\u6162\u5f97\u591a\u3002\u53d8\u91cf sum \u88ab\u58f0\u660e\u4e3a Long \u800c\u4e0d\u662f long\uff0c\u8fd9\u610f\u5473\u7740\u7a0b\u5e8f\u5c06\u6784\u9020\u5927\u7ea6 231 \u4e2a\u4e0d\u5fc5\u8981\u7684 Long \u5b9e\u4f8b\uff08\u5927\u7ea6\u6bcf\u6b21\u5c06 Long i \u6dfb\u52a0\u5230 Long sum \u65f6\u90fd\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff09\u3002\u5c06 sum \u7684\u58f0\u660e\u4ece Long \u66f4\u6539\u4e3a long\uff0c\u673a\u5668\u4e0a\u7684\u8fd0\u884c\u65f6\u95f4\u5c06\u4ece 6.3 \u79d2\u51cf\u5c11\u5230 0.59 \u79d2\u3002\u6559\u8bad\u5f88\u6e05\u695a\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u57fa\u672c\u7c7b\u578b\u4f18\u4e8e\u5305\u88c5\u7c7b\uff0c\u8fd8\u5e94\u63d0\u9632\u610f\u5916\u7684\u81ea\u52a8\u88c5\u7bb1\u3002")),(0,i.kt)("p",null,"This item should not be misconstrued to imply that object creation is expensive and should be avoided. On the contrary, the creation and reclamation of small objects whose constructors do little explicit work is cheap, especially on modern JVM implementations. Creating additional objects to enhance the clarity,simplicity, or power of a program is generally a good thing."),(0,i.kt)("p",null,"\u672c\u6761\u76ee\u4e0d\u5e94\u8be5\u88ab\u66f2\u89e3\u4e3a\u662f\u5728\u6697\u793a\u521b\u5efa\u5bf9\u8c61\u662f\u6210\u672c\u6602\u8d35\u7684\uff0c\u5e94\u8be5\u907f\u514d\u3002\u76f8\u53cd\uff0c\u521b\u5efa\u548c\u56de\u6536\u8fd9\u4e9b\u5c0f\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u6210\u672c\u662f\u5f88\u4f4e\u5ec9\u7684\uff0c\u5c24\u5176\u662f\u5728\u73b0\u4ee3 JVM \u5b9e\u73b0\u4e0a\u3002\u521b\u5efa\u989d\u5916\u7684\u5bf9\u8c61\u6765\u589e\u5f3a\u7a0b\u5e8f\u7684\u6e05\u6670\u6027\u3001\u7b80\u5355\u6027\u6216\u529f\u80fd\u901a\u5e38\u662f\u4ef6\u597d\u4e8b\u3002"),(0,i.kt)("p",null,"Conversely, avoiding object creation by maintaining your own object pool is a bad idea unless the objects in the pool are extremely heavyweight. The classic example of an object that does justify an object pool is a database connection.The cost of establishing the connection is sufficiently high that it makes sense to reuse these objects. Generally speaking, however, maintaining your own object pools clutters your code, increases memory footprint, and harms performance.Modern JVM implementations have highly optimized garbage collectors that easily outperform such object pools on lightweight objects."),(0,i.kt)("p",null,"\u76f8\u53cd\uff0c\u901a\u8fc7\u7ef4\u62a4\u81ea\u5df1\u7684\u5bf9\u8c61\u6c60\u6765\u907f\u514d\u521b\u5efa\u5bf9\u8c61\u4e0d\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\uff0c\u9664\u975e\u6c60\u4e2d\u7684\u5bf9\u8c61\u975e\u5e38\u91cd\u91cf\u7ea7\u3002\u8bc1\u660e\u5bf9\u8c61\u6c60\u662f\u5408\u7406\u7684\u5bf9\u8c61\u7684\u5178\u578b\u4f8b\u5b50\u662f\u6570\u636e\u5e93\u8fde\u63a5\u3002\u5efa\u7acb\u8fde\u63a5\u7684\u6210\u672c\u975e\u5e38\u9ad8\uff0c\u56e0\u6b64\u590d\u7528\u8fd9\u4e9b\u5bf9\u8c61\u662f\u6709\u610f\u4e49\u7684\u3002\u7136\u800c\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u7ef4\u62a4\u81ea\u5df1\u7684\u5bf9\u8c61\u6c60\u4f1a\u4f7f\u4ee3\u7801\u6df7\u4e71\uff0c\u589e\u52a0\u5185\u5b58\u5360\u7528\uff0c\u5e76\u635f\u5bb3\u6027\u80fd\u3002\u73b0\u4ee3 JVM \u5b9e\u73b0\u5177\u6709\u9ad8\u5ea6\u4f18\u5316\u7684\u5783\u573e\u6536\u96c6\u5668\uff0c\u5728\u8f7b\u91cf\u7ea7\u5bf9\u8c61\u4e0a\u5f88\u5bb9\u6613\u80dc\u8fc7\u8fd9\u6837\u7684\u5bf9\u8c61\u6c60\u3002"),(0,i.kt)("p",null,"The counterpoint to this item is Item 50 on defensive copying. The present item says, \u201cDon\u2019t create a new object when you should reuse an existing one,\u201dwhile Item 50 says, \u201cDon\u2019t reuse an existing object when you should create a new one.\u201d Note that the penalty for reusing an object when defensive copying is called for is far greater than the penalty for needlessly creating a duplicate object. Failing to make defensive copies where required can lead to insidious bugs and security holes; creating objects unnecessarily merely affects style and performance."),(0,i.kt)("p",null,"\u4e0e\u6b64\u9879\u5bf9\u5e94\u7684\u6761\u76ee\u662f ",(0,i.kt)("a",{parentName:"p",href:"./Chapter-8-Item-50-Make-defensive-copies-when-needed"},"Item-50"),"\uff08\u9632\u5fa1\u6027\u590d\u5236\uff09\u3002\u5f53\u524d\u9879\u7684\u63cf\u8ff0\u662f\uff1a\u300c\u5728\u5e94\u8be5\u590d\u7528\u73b0\u6709\u5bf9\u8c61\u65f6\u4e0d\u8981\u521b\u5efa\u65b0\u5bf9\u8c61\u300d\uff0c\u800c Item 50 \u7684\u63cf\u8ff0\u5219\u662f\uff1a\u300c\u5728\u5e94\u8be5\u521b\u5efa\u65b0\u5bf9\u8c61\u65f6\u4e0d\u8981\u590d\u7528\u73b0\u6709\u5bf9\u8c61\u300d\u3002\u8bf7\u6ce8\u610f\uff0c\u5f53\u9700\u8981\u8fdb\u884c\u9632\u5fa1\u6027\u590d\u5236\u65f6\uff0c\u590d\u7528\u5bf9\u8c61\u6240\u53d7\u5230\u7684\u60e9\u7f5a\u8fdc\u8fdc\u5927\u4e8e\u4e0d\u5fc5\u8981\u5730\u521b\u5efa\u91cd\u590d\u5bf9\u8c61\u6240\u53d7\u5230\u7684\u60e9\u7f5a\u3002\u5728\u9700\u8981\u65f6\u4e0d\u5236\u4f5c\u9632\u5fa1\u6027\u526f\u672c\u53ef\u80fd\u5bfc\u81f4\u6f5c\u5728\u7684 bug \u548c\u5b89\u5168\u6f0f\u6d1e\uff1b\u800c\u4e0d\u5fc5\u8981\u5730\u521b\u5efa\u5bf9\u8c61\u53ea\u4f1a\u5f71\u54cd\u6837\u5f0f\u548c\u6027\u80fd\u3002"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./Chapter-2-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,i.kt)("a",{parentName:"strong",href:"./Chapter-2-Item-5-Prefer-dependency-injection-to-hardwiring-resources"},"Item 5: Prefer dependency injection to hardwiring resources\uff08\u4f9d\u8d56\u6ce8\u5165\u4f18\u4e8e\u786c\u8fde\u63a5\u8d44\u6e90\uff09"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,i.kt)("a",{parentName:"strong",href:"./Chapter-2-Item-7-Eliminate-obsolete-object-references"},"Item 7: Eliminate obsolete object references\uff08\u6392\u9664\u8fc7\u65f6\u7684\u5bf9\u8c61\u5f15\u7528\uff09")))))}m.isMDXComponent=!0}}]);
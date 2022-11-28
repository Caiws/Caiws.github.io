"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-11/Chapter-11-Item-82-Document-thread-safety",id:"Books/EffectiveJava3/Chapter-11/Chapter-11-Item-82-Document-thread-safety",title:"Chapter-11-Item-82-Document-thread-safety",description:"Chapter 11. Concurrency\uff08\u5e76\u53d1\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-82-Document-thread-safety.md",sourceDirName:"Books/EffectiveJava3/Chapter-11",slug:"/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-82-Document-thread-safety",permalink:"/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-82-Document-thread-safety",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-82-Document-thread-safety.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-11-Item-81-Prefer-concurrency-utilities-to-wait-and-notify",permalink:"/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-81-Prefer-concurrency-utilities-to-wait-and-notify"},next:{title:"Chapter-11-Item-83-Use-lazy-initialization-judiciously",permalink:"/docs/Books/EffectiveJava3/Chapter-11/Chapter-11-Item-83-Use-lazy-initialization-judiciously"}},c={},l=[{value:"Chapter 11. Concurrency\uff08\u5e76\u53d1\uff09",id:"chapter-11-concurrency\u5e76\u53d1",level:2},{value:"Item 82: Document thread safety\uff08\u6587\u6863\u5e94\u5305\u542b\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027\uff09",id:"item-82-document-thread-safety\u6587\u6863\u5e94\u5305\u542b\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027",level:3}],h={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chapter-11-concurrency\u5e76\u53d1"},"Chapter 11. Concurrency\uff08\u5e76\u53d1\uff09"),(0,r.kt)("h3",{id:"item-82-document-thread-safety\u6587\u6863\u5e94\u5305\u542b\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027"},"Item 82: Document thread safety\uff08\u6587\u6863\u5e94\u5305\u542b\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027\uff09"),(0,r.kt)("p",null,"How a class behaves when its methods are used concurrently is an important part of its contract with its clients. If you fail to document this aspect of a class\u2019s behavior, its users will be forced to make assumptions. If these assumptions are wrong, the resulting program may perform insufficient synchronization (Item 78) or excessive synchronization (Item 79). In either case, serious errors may result."),(0,r.kt)("p",null,"\u7c7b\u5728\u5176\u65b9\u6cd5\u5e76\u53d1\u4f7f\u7528\u65f6\u7684\u884c\u4e3a\u662f\u5176\u4e0e\u5ba2\u6237\u7aef\u7ea6\u5b9a\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u5982\u679c\u4f60\u6ca1\u6709\u8bb0\u5f55\u7c7b\u5728\u8fd9\u4e00\u65b9\u9762\u7684\u884c\u4e3a\uff0c\u90a3\u4e48\u5b83\u7684\u7528\u6237\u5c06\u88ab\u8feb\u505a\u51fa\u5047\u8bbe\u3002\u5982\u679c\u8fd9\u4e9b\u5047\u8bbe\u662f\u9519\u8bef\u7684\uff0c\u751f\u6210\u7684\u7a0b\u5e8f\u53ef\u80fd\u7f3a\u5c11\u8db3\u591f\u7684\u540c\u6b65\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-11/Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data"},"Item-78"),"\uff09\u6216\u8fc7\u5ea6\u7684\u540c\u6b65\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-11/Chapter-11-Item-79-Avoid-excessive-synchronization"},"Item-79"),"\uff09\u3002\u65e0\u8bba\u54ea\u79cd\u60c5\u51b5\uff0c\u90fd\u53ef\u80fd\u5bfc\u81f4\u4e25\u91cd\u7684\u9519\u8bef\u3002"),(0,r.kt)("p",null,"You may hear it said that you can tell if a method is thread-safe by looking for the synchronized modifier in its documentation. This is wrong on several counts. In normal operation, Javadoc does not include the synchronized modifier in its output, and with good reason. ",(0,r.kt)("strong",{parentName:"p"},"The presence of the synchronized modifier in a method declaration is an implementation detail, not a part of its API.")," It does not reliably indicate that a method is thread-safe."),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u542c\u8bf4\u8fc7\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u65b9\u6cd5\u7684\u6587\u6863\u4e2d\u67e5\u627e synchronized \u4fee\u9970\u7b26\u6765\u5224\u65ad\u65b9\u6cd5\u662f\u5426\u7ebf\u7a0b\u5b89\u5168\u3002\u8fd9\u4e2a\u89c2\u70b9\u6709\u597d\u4e9b\u65b9\u9762\u662f\u9519\u8bef\u7684\u3002\u5728\u6b63\u5e38\u64cd\u4f5c\u4e2d\uff0cJavadoc \u7684\u8f93\u51fa\u4e2d\u6ca1\u6709\u5305\u542b\u540c\u6b65\u4fee\u9970\u7b26\uff0c\u8fd9\u662f\u6709\u539f\u56e0\u7684\u3002\u65b9\u6cd5\u58f0\u660e\u4e2d synchronized \u4fee\u9970\u7b26\u7684\u5b58\u5728\u662f\u5b9e\u73b0\u7ec6\u8282\uff0c\u800c\u4e0d\u662f\u5176 API \u7684\u4e00\u90e8\u5206\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5b83\u4e0d\u80fd\u53ef\u9760\u5730\u8868\u660e\u65b9\u6cd5\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002")),(0,r.kt)("p",null,"Moreover, the claim that the presence of the synchronized modifier is sufficient to document thread safety embodies the misconception that thread safety is an all-or-nothing property. In fact, there are several levels of thread safety. ",(0,r.kt)("strong",{parentName:"p"},"To enable safe concurrent use, a class must clearly document what level of thread safety it supports.")," The following list summarizes levels of thread safety. It is not exhaustive but covers the common cases:"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u58f0\u79f0 synchronized \u4fee\u9970\u7b26\u7684\u5b58\u5728\u5c31\u8db3\u4ee5\u8bb0\u5f55\u7ebf\u7a0b\u5b89\u5168\u6027\uff0c\u8fd9\u4e2a\u89c2\u70b9\u662f\u5bf9\u7ebf\u7a0b\u5b89\u5168\u6027\u5c5e\u6027\u7684\u8bef\u89e3\uff0c\u8ba4\u4e3a\u8981\u4e48\u5168\u6709\u8981\u4e48\u5168\u65e0\u3002\u5b9e\u9645\u4e0a\uff0c\u7ebf\u7a0b\u5b89\u5168\u6709\u51e0\u4e2a\u7ea7\u522b\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8981\u542f\u7528\u5b89\u5168\u7684\u5e76\u53d1\u4f7f\u7528\uff0c\u7c7b\u5fc5\u987b\u6e05\u695a\u5730\u8bb0\u5f55\u5b83\u652f\u6301\u7684\u7ebf\u7a0b\u5b89\u5168\u7ea7\u522b\u3002")," \u4e0b\u9762\u7684\u5217\u8868\u603b\u7ed3\u4e86\u7ebf\u7a0b\u5b89\u5168\u7ea7\u522b\u3002\u5b83\u5e76\u975e\u8be6\u5c3d\u65e0\u9057\uff0c\u4f46\u6db5\u76d6\u4ee5\u4e0b\u5e38\u89c1\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Immutable")," \u2014Instances of this class appear constant. No external synchronization is necessary. Examples include String, Long, and BigInteger (Item 17).")),(0,r.kt)("p",null,"\u4e0d\u53ef\u53d8\u7684\u3002\u8fd9\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u770b\u8d77\u6765\u662f\u5e38\u91cf\u3002\u4e0d\u9700\u8981\u5916\u90e8\u540c\u6b65\u3002\u793a\u4f8b\u5305\u62ec String\u3001Long \u548c BigInteger\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-17-Minimize-mutability"},"Item-17"),"\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unconditionally thread-safe")," \u2014Instances of this class are mutable, but the class has sufficient internal synchronization that its instances can be used concurrently without the need for any external synchronization. Examples include AtomicLong and ConcurrentHashMap.")),(0,r.kt)("p",null,"\u65e0\u6761\u4ef6\u7ebf\u7a0b\u5b89\u5168\u3002\u8be5\u7c7b\u7684\u5b9e\u4f8b\u662f\u53ef\u53d8\u7684\uff0c\u4f46\u662f\u8be5\u7c7b\u5177\u6709\u8db3\u591f\u7684\u5185\u90e8\u540c\u6b65\uff0c\u56e0\u6b64\u65e0\u9700\u4efb\u4f55\u5916\u90e8\u540c\u6b65\u5373\u53ef\u5e76\u53d1\u5730\u4f7f\u7528\u8be5\u7c7b\u7684\u5b9e\u4f8b\u3002\u4f8b\u5982 AtomicLong \u548c ConcurrentHashMap\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Conditionally thread-safe")," \u2014Like unconditionally thread-safe, except that some methods require external synchronization for safe concurrent use. Examples include the collections returned by the Collections.synchronized wrappers, whose iterators require external synchronization.")),(0,r.kt)("p",null,"\u6709\u6761\u4ef6\u7684\u7ebf\u7a0b\u5b89\u5168\u3002\u4e0e\u65e0\u6761\u4ef6\u7ebf\u7a0b\u5b89\u5168\u7c7b\u4f3c\uff0c\u53ea\u662f\u6709\u4e9b\u65b9\u6cd5\u9700\u8981\u5916\u90e8\u540c\u6b65\u624d\u80fd\u5b89\u5168\u5e76\u53d1\u4f7f\u7528\u3002\u793a\u4f8b\u5305\u62ec Collections.synchronized \u5305\u88c5\u5668\u8fd4\u56de\u7684\u96c6\u5408\uff0c\u5176\u8fed\u4ee3\u5668\u9700\u8981\u5916\u90e8\u540c\u6b65\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Not thread-safe")," \u2014Instances of this class are mutable. To use them concurrently, clients must surround each method invocation (or invocation sequence) with external synchronization of the clients\u2019 choosing. Examples include the general-purpose collection implementations, such as ArrayList and HashMap.")),(0,r.kt)("p",null,"\u975e\u7ebf\u7a0b\u5b89\u5168\u3002\u8be5\u7c7b\u7684\u5b9e\u4f8b\u662f\u53ef\u53d8\u7684\u3002\u8981\u5e76\u53d1\u5730\u4f7f\u7528\u5b83\u4eec\uff0c\u5ba2\u6237\u7aef\u5fc5\u987b\u4f7f\u7528\u5916\u90e8\u540c\u6b65\u6765\u5305\u56f4\u6bcf\u4e2a\u65b9\u6cd5\u8c03\u7528\uff08\u6216\u8c03\u7528\u5e8f\u5217\uff09\u3002\u8fd9\u6837\u7684\u4f8b\u5b50\u5305\u62ec\u901a\u7528\u7684\u96c6\u5408\u5b9e\u73b0\uff0c\u4f8b\u5982 ArrayList \u548c HashMap\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Thread-hostile")," \u2014This class is unsafe for concurrent use even if every method invocation is surrounded by external synchronization. Thread hostility usually results from modifying static data without synchronization. No one writes a thread-hostile class on purpose; such classes typically result from the failure to consider concurrency. When a class or method is found to be thread-hostile, it is typically fixed or deprecated. The generateSerialNumber method in Item 78 would be thread-hostile in the absence of internal synchronization, as discussed on page 322.")),(0,r.kt)("p",null,"\u7ebf\u7a0b\u5bf9\u7acb\u3002\u5373\u4f7f\u6bcf\u4e2a\u65b9\u6cd5\u8c03\u7528\u90fd\u88ab\u5916\u90e8\u540c\u6b65\u5305\u56f4\uff0c\u8be5\u7c7b\u5bf9\u4e8e\u5e76\u53d1\u4f7f\u7528\u4e5f\u662f\u4e0d\u5b89\u5168\u7684\u3002\u7ebf\u7a0b\u5bf9\u7acb\u901a\u5e38\u662f\u7531\u4e8e\u5728\u4e0d\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\u4fee\u6539\u9759\u6001\u6570\u636e\u800c\u5bfc\u81f4\u7684\u3002\u6ca1\u6709\u4eba\u6545\u610f\u7f16\u5199\u7ebf\u7a0b\u5bf9\u7acb\u7c7b\uff1b\u6b64\u7c7b\u901a\u5e38\u662f\u7531\u4e8e\u6ca1\u6709\u8003\u8651\u5e76\u53d1\u6027\u800c\u5bfc\u81f4\u7684\u3002\u5f53\u53d1\u73b0\u7c7b\u6216\u65b9\u6cd5\u4e0e\u7ebf\u7a0b\u4e0d\u76f8\u5bb9\u65f6\uff0c\u901a\u5e38\u5c06\u5176\u4fee\u590d\u6216\u5f03\u7528\u3002",(0,r.kt)("a",{parentName:"p",href:"./Chapter-11/Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data"},"Item-78")," \u4e2d\u7684 generateSerialNumber \u65b9\u6cd5\u5728\u6ca1\u6709\u5185\u90e8\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\u662f\u7ebf\u7a0b\u5bf9\u7acb\u7684\uff0c\u5982\u7b2c 322 \u9875\u6240\u8ff0\u3002"),(0,r.kt)("p",null,"These categories (apart from thread-hostile) correspond roughly to the thread safety annotations in Java Concurrency in Practice, which are Immutable, ThreadSafe, and NotThreadSafe ","[Goetz06, Appendix A]",". The unconditionally and conditionally thread-safe categories in the above taxonomy are both covered under the ThreadSafe annotation."),(0,r.kt)("p",null,"\u8fd9\u4e9b\u7c7b\u522b\uff08\u4e0d\u5305\u62ec\u7ebf\u7a0b\u5bf9\u7acb\u7c7b\uff09\u5927\u81f4\u5bf9\u5e94\u4e8e\u300aJava Concurrency in Practice\u300b\u4e2d\u7684\u7ebf\u7a0b\u5b89\u5168\u6ce8\u89e3\uff0c\u5206\u522b\u4e3a Immutable\u3001ThreadSafe \u548c NotThreadSafe ","[Goetz06, Appendix A]","\u3002\u4e0a\u9762\u5206\u7c7b\u4e2d\u7684\u65e0\u6761\u4ef6\u7ebf\u7a0b\u5b89\u5168\u548c\u6709\u6761\u4ef6\u7684\u7ebf\u7a0b\u5b89\u5168\u90fd\u5305\u542b\u5728 ThreadSafe \u6ce8\u89e3\u4e2d\u3002"),(0,r.kt)("p",null,"Documenting a conditionally thread-safe class requires care. You must indicate which invocation sequences require external synchronization, and which lock (or in rare cases, locks) must be acquired to execute these sequences. Typically it is the lock on the instance itself, but there are exceptions. For example, the documentation for Collections.synchronizedMap says this:"),(0,r.kt)("p",null,"\u5728\u6587\u6863\u4e2d\u8bb0\u5f55\u4e00\u4e2a\u6709\u6761\u4ef6\u7684\u7ebf\u7a0b\u5b89\u5168\u7c7b\u9700\u8981\u5c0f\u5fc3\u3002\u4f60\u5fc5\u987b\u6307\u51fa\u54ea\u4e9b\u8c03\u7528\u5e8f\u5217\u9700\u8981\u5916\u90e8\u540c\u6b65\uff0c\u4ee5\u53ca\u6267\u884c\u8fd9\u4e9b\u5e8f\u5217\u5fc5\u987b\u83b7\u5f97\u54ea\u4e9b\u9501\uff08\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\u662f\u9501\uff09\u3002\u901a\u5e38\u662f\u5b9e\u4f8b\u672c\u8eab\u7684\u9501\uff0c\u4f46\u4e5f\u6709\u4f8b\u5916\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Collections.synchronizedMap")," \u7684\u6587\u6863\u63d0\u5230\uff1a"),(0,r.kt)("p",null,"It is imperative that the user manually synchronize on the returned map when iterating over any of its collection views:"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u904d\u5386\u5176\u96c6\u5408\u89c6\u56fe\u65f6\uff0c\u5fc5\u987b\u624b\u52a8\u540c\u6b65\u8fd4\u56de\u7684 Map\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Map<K, V> m = Collections.synchronizedMap(new HashMap<>());\nSet<K> s = m.keySet(); // Needn't be in synchronized block\n...\nsynchronized(m) { // Synchronizing on m, not s!\n    for (K key : s)\n        key.f();\n}\n")),(0,r.kt)("p",null,"Failure to follow this advice may result in non-deterministic behavior."),(0,r.kt)("p",null,"\u4e0d\u9075\u5faa\u8fd9\u4e2a\u5efa\u8bae\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0d\u786e\u5b9a\u7684\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"The description of a class\u2019s thread safety generally belongs in the class\u2019s doc comment, but methods with special thread safety properties should describe these properties in their own documentation comments. It is not necessary to document the immutability of enum types. Unless it is obvious from the return type, static factories must document the thread safety of the returned object, as demonstrated by Collections.synchronizedMap (above)."),(0,r.kt)("p",null,"\u7c7b\u7684\u7ebf\u7a0b\u5b89\u5168\u7684\u63cf\u8ff0\u901a\u5e38\u5c5e\u4e8e\u8be5\u7c7b\u7684\u6587\u6863\u6ce8\u91ca\uff0c\u4f46\u662f\u5177\u6709\u7279\u6b8a\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027\u7684\u65b9\u6cd5\u5e94\u8be5\u5728\u5b83\u4eec\u81ea\u5df1\u7684\u6587\u6863\u6ce8\u91ca\u4e2d\u63cf\u8ff0\u8fd9\u4e9b\u5c5e\u6027\u3002\u6ca1\u6709\u5fc5\u8981\u8bb0\u5f55\u679a\u4e3e\u7c7b\u578b\u7684\u4e0d\u53d8\u6027\u3002\u9664\u975e\u4ece\u8fd4\u56de\u7c7b\u578b\u53ef\u4ee5\u660e\u663e\u770b\u51fa\uff0c\u5426\u5219\u9759\u6001\u5de5\u5382\u5fc5\u987b\u8bb0\u5f55\u8fd4\u56de\u5bf9\u8c61\u7684\u7ebf\u7a0b\u5b89\u5168\u6027\uff0c\u6b63\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Collections.synchronizedMap")," \u6240\u6f14\u793a\u7684\u90a3\u6837\u3002"),(0,r.kt)("p",null,"When a class commits to using a publicly accessible lock, it enables clients to execute a sequence of method invocations atomically, but this flexibility comes at a price. It is incompatible with high-performance internal concurrency control, of the sort used by concurrent collections such as ConcurrentHashMap. Also, a client can mount a denial-of-service attack by holding the publicly accessible lock for a prolonged period. This can be done accidentally or intentionally."),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u7c7b\u4f7f\u7528\u516c\u5171\u53ef\u8bbf\u95ee\u9501\u65f6\uff0c\u5b83\u5141\u8bb8\u5ba2\u6237\u7aef\u81ea\u52a8\u6267\u884c\u4e00\u7cfb\u5217\u65b9\u6cd5\u8c03\u7528\uff0c\u4f46\u662f\u8fd9\u79cd\u7075\u6d3b\u6027\u662f\u6709\u4ee3\u4ef7\u7684\u3002\u5b83\u4e0e\u8bf8\u5982 ConcurrentHashMap \u4e4b\u7c7b\u7684\u5e76\u53d1\u96c6\u5408\u6240\u4f7f\u7528\u7684\u9ad8\u6027\u80fd\u5185\u90e8\u5e76\u53d1\u63a7\u5236\u4e0d\u517c\u5bb9\u3002\u6b64\u5916\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u957f\u65f6\u95f4\u6301\u6709\u53ef\u516c\u5f00\u8bbf\u95ee\u7684\u9501\u6765\u53d1\u8d77\u62d2\u7edd\u670d\u52a1\u653b\u51fb\u3002\u8fd9\u53ef\u4ee5\u662f\u65e0\u610f\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u6709\u610f\u7684\u3002"),(0,r.kt)("p",null,"To prevent this denial-of-service attack, you can use a private lock object instead of using synchronized methods (which imply a publicly accessible lock):"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u8fd9\u79cd\u62d2\u7edd\u670d\u52a1\u653b\u51fb\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u79c1\u6709\u9501\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u540c\u6b65\u65b9\u6cd5\uff08\u9690\u542b\u4e00\u4e2a\u516c\u5171\u53ef\u8bbf\u95ee\u7684\u9501\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Private lock object idiom - thwarts denial-of-service attack\nprivate final Object lock = new Object();\npublic void foo() {\n    synchronized(lock) {\n        ...\n    }\n}\n")),(0,r.kt)("p",null,"Because the private lock object is inaccessible outside the class, it is impossible for clients to interfere with the object\u2019s synchronization. In effect, we are applying the advice of Item 15 by encapsulating the lock object in the object it synchronizes."),(0,r.kt)("p",null,"\u56e0\u4e3a\u79c1\u6709\u9501\u5bf9\u8c61\u5728\u7c7b\u4e4b\u5916\u662f\u4e0d\u53ef\u8bbf\u95ee\u7684\uff0c\u6240\u4ee5\u5ba2\u6237\u7aef\u4e0d\u53ef\u80fd\u5e72\u6270\u5bf9\u8c61\u7684\u540c\u6b65\u3002\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u901a\u8fc7\u5c06\u9501\u5bf9\u8c61\u5c01\u88c5\u5728\u5b83\u540c\u6b65\u7684\u5bf9\u8c61\u4e2d\uff0c\u662f\u5728\u5e94\u7528 ",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-15-Minimize-the-accessibility-of-classes-and-members"},"Item-15")," \u7684\u5efa\u8bae\u3002"),(0,r.kt)("p",null,"Note that the lock field is declared final. This prevents you from inadvertently changing its contents, which could result in catastrophic unsynchronized access (Item 78). We are applying the advice of Item 17, by minimizing the mutability of the lock field. ",(0,r.kt)("strong",{parentName:"p"},"Lock fields should always be declared final.")," This is true whether you use an ordinary monitor lock (as shown above) or a lock from the java.util.concurrent.locks package."),(0,r.kt)("p",null,"\u6ce8\u610f\uff0clock \u5b57\u6bb5\u88ab\u58f0\u660e\u4e3a final\u3002\u8fd9\u53ef\u4ee5\u9632\u6b62\u4f60\u65e0\u610f\u4e2d\u66f4\u6539\u5b83\u7684\u5185\u5bb9\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u707e\u96be\u6027\u7684\u975e\u540c\u6b65\u8bbf\u95ee\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-11/Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data"},"Item-78"),"\uff09\u3002\u6211\u4eec\u6b63\u5728\u5e94\u7528 ",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-17-Minimize-mutability"},"Item-17")," \u7684\u5efa\u8bae\uff0c\u6700\u5c0f\u5316\u9501\u5b57\u6bb5\u7684\u53ef\u53d8\u6027\u3002",(0,r.kt)("strong",{parentName:"p"},"Lock \u5b57\u6bb5\u5e94\u8be5\u59cb\u7ec8\u58f0\u660e\u4e3a final\u3002")," \u65e0\u8bba\u4f7f\u7528\u666e\u901a\u7684\u76d1\u89c6\u5668\u9501\uff08\u5982\u4e0a\u6240\u793a\uff09\u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent")," \u5305\u4e2d\u7684\u9501\uff0c\u90fd\u662f\u8fd9\u6837\u3002"),(0,r.kt)("p",null,"The private lock object idiom can be used only on unconditionally thread-safe classes. Conditionally thread-safe classes can\u2019t use this idiom because they must document which lock their clients are to acquire when performing certain method invocation sequences."),(0,r.kt)("p",null,"\u79c1\u6709\u9501\u5bf9\u8c61\u7528\u6cd5\u53ea\u80fd\u5728\u65e0\u6761\u4ef6\u7684\u7ebf\u7a0b\u5b89\u5168\u7c7b\u4e0a\u4f7f\u7528\u3002\u6709\u6761\u4ef6\u7684\u7ebf\u7a0b\u5b89\u5168\u7c7b\u4e0d\u80fd\u4f7f\u7528\u8fd9\u79cd\u7528\u6cd5\uff0c\u56e0\u4e3a\u5b83\u4eec\u5fc5\u987b\u5728\u6587\u6863\u4e2d\u8bb0\u5f55\uff0c\u5728\u6267\u884c\u67d0\u4e9b\u65b9\u6cd5\u8c03\u7528\u5e8f\u5217\u65f6\u8981\u83b7\u53d6\u54ea\u4e9b\u9501\u3002"),(0,r.kt)("p",null,"The private lock object idiom is particularly well-suited to classes designed for inheritance (Item 19). If such a class were to use its instances for locking, a subclass could easily and unintentionally interfere with the operation of the base class, or vice versa. By using the same lock for different purposes, the subclass and the base class could end up \u201cstepping on each other\u2019s toes.\u201d This is not just a theoretical problem; it happened with the Thread class ","[Bloch05, Puzzle 77]","."),(0,r.kt)("p",null,"\u79c1\u6709\u9501\u5bf9\u8c61\u7528\u6cd5\u7279\u522b\u9002\u5408\u4e3a\u7ee7\u627f\u800c\u8bbe\u8ba1\u7684\u7c7b\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-19-Design-and-document-for-inheritance-or-else-prohibit-it"},"Item-19"),"\uff09\u3002\u5982\u679c\u8fd9\u6837\u4e00\u4e2a\u7c7b\u8981\u4f7f\u7528\u5b83\u7684\u5b9e\u4f8b\u8fdb\u884c\u9501\u5b9a\uff0c\u90a3\u4e48\u5b50\u7c7b\u5f88\u5bb9\u6613\u5728\u65e0\u610f\u4e2d\u5e72\u6270\u57fa\u7c7b\u7684\u64cd\u4f5c\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u901a\u8fc7\u4e3a\u4e0d\u540c\u7684\u76ee\u7684\u4f7f\u7528\u76f8\u540c\u7684\u9501\uff0c\u5b50\u7c7b\u548c\u57fa\u7c7b\u6700\u7ec8\u53ef\u80fd\u300c\u8e29\u5230\u5bf9\u65b9\u7684\u811a\u8dbe\u5934\u300d\u3002\u8fd9\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u7406\u8bba\u95ee\u9898\uff0c\u5b83\u5c31\u53d1\u751f\u5728 Thread \u7c7b\u4e2d ","[Bloch05, Puzzle 77]","\u3002"),(0,r.kt)("p",null,"To summarize, every class should clearly document its thread safety properties with a carefully worded prose description or a thread safety annotation. The synchronized modifier plays no part in this documentation. Conditionally thread-safe classes must document which method invocation sequences require external synchronization and which lock to acquire when executing these sequences. If you write an unconditionally thread-safe class, consider using a private lock object in place of synchronized methods. This protects you against synchronization interference by clients and subclasses and gives you more flexibility to adopt a sophisticated approach to concurrency control in a later release."),(0,r.kt)("p",null,"\u603b\u4e4b\uff0c\u6bcf\u4e2a\u7c7b\u90fd\u5e94\u8be5\u63aa\u8f9e\u4e25\u8c28\u7684\u63cf\u8ff0\u6216\u4f7f\u7528\u7ebf\u7a0b\u5b89\u5168\u6ce8\u89e3\u6e05\u695a\u5730\u8bb0\u5f55\u5176\u7ebf\u7a0b\u5b89\u5168\u5c5e\u6027\u3002synchronized \u4fee\u9970\u7b26\u5728\u6587\u6863\u4e2d\u6ca1\u6709\u4efb\u4f55\u4f5c\u7528\u3002\u6709\u6761\u4ef6\u7684\u7ebf\u7a0b\u5b89\u5168\u7c7b\u5fc5\u987b\u8bb0\u5f55\u54ea\u4e9b\u65b9\u6cd5\u8c03\u7528\u5e8f\u5217\u9700\u8981\u5916\u90e8\u540c\u6b65\uff0c\u4ee5\u53ca\u5728\u6267\u884c\u8fd9\u4e9b\u5e8f\u5217\u65f6\u9700\u8981\u83b7\u53d6\u54ea\u4e9b\u9501\u3002\u5982\u679c\u4f60\u7f16\u5199\u4e00\u4e2a\u65e0\u6761\u4ef6\u7ebf\u7a0b\u5b89\u5168\u7684\u7c7b\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u4e00\u4e2a\u79c1\u6709\u9501\u5bf9\u8c61\u6765\u4ee3\u66ff\u540c\u6b65\u65b9\u6cd5\u3002\u8fd9\u5c06\u4fdd\u62a4\u4f60\u514d\u53d7\u5ba2\u6237\u7aef\u548c\u5b50\u7c7b\u7684\u540c\u6b65\u5e72\u6270\uff0c\u5e76\u4e3a\u4f60\u63d0\u4f9b\u66f4\u5927\u7684\u7075\u6d3b\u6027\uff0c\u4ee5\u4fbf\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\u91c7\u7528\u590d\u6742\u7684\u5e76\u53d1\u63a7\u5236\u65b9\u5f0f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./Chapter-11/Chapter-11-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-11/Chapter-11-Item-81-Prefer-concurrency-utilities-to-wait-and-notify"},"Item 81: Prefer concurrency utilities to wait and notify\uff08\u5e76\u53d1\u5b9e\u7528\u5de5\u5177\u4f18\u4e8e wait \u548c notify\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-11/Chapter-11-Item-83-Use-lazy-initialization-judiciously"},"Item 83: Use lazy initialization judiciously\uff08\u660e\u667a\u5730\u4f7f\u7528\u5ef6\u8fdf\u521d\u59cb\u5316\uff09")))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),f=a,y=h["".concat(l,".").concat(f)]||h[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally",id:"Books/EffectiveJava3/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally",title:"Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally",description:"Chapter 2. Creating and Destroying Objects\uff08\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally.md",sourceDirName:"Books/EffectiveJava3/Chapter-2",slug:"/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally",permalink:"/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-2-Item-8-Avoid-finalizers-and-cleaners",permalink:"/docs/Books/EffectiveJava3/Chapter-2/Chapter-2-Item-8-Avoid-finalizers-and-cleaners"},next:{title:"Chapter-3-Introduction",permalink:"/docs/Books/EffectiveJava3/Chapter-3/Chapter-3-Introduction"}},l={},c=[{value:"Chapter 2. Creating and Destroying Objects\uff08\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\uff09",id:"chapter-2-creating-and-destroying-objects\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61",level:2},{value:"Item 9: Prefer try-with-resources to try-finally\uff08\u4f7f\u7528 try-with-resources \u4f18\u4e8e try-finally\uff09",id:"item-9-prefer-try-with-resources-to-try-finally\u4f7f\u7528-try-with-resources-\u4f18\u4e8e-try-finally",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"chapter-2-creating-and-destroying-objects\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61"},"Chapter 2. Creating and Destroying Objects\uff08\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\uff09"),(0,a.kt)("h3",{id:"item-9-prefer-try-with-resources-to-try-finally\u4f7f\u7528-try-with-resources-\u4f18\u4e8e-try-finally"},"Item 9: Prefer try-with-resources to try-finally\uff08\u4f7f\u7528 try-with-resources \u4f18\u4e8e try-finally\uff09"),(0,a.kt)("p",null,"The Java libraries include many resources that must be closed manually by invoking a close method. Examples include InputStream,OutputStream, and java.sql.Connection. Closing resources is often overlooked by clients, with predictably dire performance consequences. While many of these resources use finalizers as a safety net, finalizers don\u2019t work very well (Item 8)."),(0,a.kt)("p",null,"Java \u5e93\u5305\u542b\u8bb8\u591a\u5fc5\u987b\u901a\u8fc7\u8c03\u7528 close \u65b9\u6cd5\u624b\u52a8\u5173\u95ed\u7684\u8d44\u6e90\u3002\u5e38\u89c1\u7684\u6709 InputStream\u3001OutputStream \u548c java.sql.Connection\u3002\u5173\u95ed\u8d44\u6e90\u5e38\u5e38\u4f1a\u88ab\u5ba2\u6237\u7aef\u5ffd\u7565\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u53ef\u6015\u7684\u6027\u80fd\u540e\u679c\u3002\u867d\u7136\u8fd9\u4e9b\u8d44\u6e90\u4e2d\u7684\u8bb8\u591a\u90fd\u4f7f\u7528\u7ec8\u7ed3\u5668\u4f5c\u4e3a\u5b89\u5168\u7f51\uff0c\u4f46\u7ec8\u7ed3\u5668\u5e76\u4e0d\u80fd\u5f88\u597d\u5730\u5de5\u4f5c\uff08",(0,a.kt)("a",{parentName:"p",href:"./Chapter-2-Item-8-Avoid-finalizers-and-cleaners"},"Item-8"),"\uff09\u3002"),(0,a.kt)("p",null,"Historically, a try-finally statement was the best way to guarantee that a resource would be closed properly, even in the face of an exception or return:"),(0,a.kt)("p",null,"\u4ece\u5386\u53f2\u4e0a\u770b\uff0ctry-finally \u8bed\u53e5\u662f\u786e\u4fdd\u6b63\u786e\u5173\u95ed\u8d44\u6e90\u7684\u6700\u4f73\u65b9\u6cd5\uff0c\u5373\u4f7f\u5728\u51fa\u73b0\u5f02\u5e38\u6216\u8fd4\u56de\u65f6\u4e5f\u662f\u5982\u6b64\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// try-finally - No longer the best way to close resources!\nstatic String firstLineOfFile(String path) throws IOException {\n    BufferedReader br = new BufferedReader(new FileReader(path));\n    try {\n        return br.readLine();\n    } finally {\n        br.close();\n    }\n}\n")),(0,a.kt)("p",null,"This may not look bad, but it gets worse when you add a second resource:"),(0,a.kt)("p",null,"\u8fd9\u53ef\u80fd\u770b\u8d77\u6765\u4e0d\u574f\uff0c\u4f46\u6dfb\u52a0\u7b2c\u4e8c\u4e2a\u8d44\u6e90\u65f6\uff0c\u60c5\u51b5\u4f1a\u53d8\u5f97\u66f4\u7cdf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// try-finally is ugly when used with more than one resource!\nstatic void copy(String src, String dst) throws IOException {\n    InputStream in = new FileInputStream(src);\n    try {\n        OutputStream out = new FileOutputStream(dst);\n    try {\n        byte[] buf = new byte[BUFFER_SIZE];\n        int n;\n        while ((n = in.read(buf)) >= 0)\n            out.write(buf, 0, n);\n    } finally {\n        out.close();\n        }\n    }\n    finally {\n        in.close();\n    }\n}\n")),(0,a.kt)("p",null,"It may be hard to believe, but even good programmers got this wrong most of the time. For starters, I got it wrong on page 88 of Java Puzzlers ","[Bloch05]",", and no one noticed for years. In fact, two-thirds of the uses of the close method in the Java libraries were wrong in 2007."),(0,a.kt)("p",null,"\u8fd9\u53ef\u80fd\u96be\u4ee5\u7f6e\u4fe1\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5373\u4f7f\u662f\u4f18\u79c0\u7684\u7a0b\u5e8f\u5458\u4e5f\u4f1a\u72af\u8fd9\u79cd\u9519\u8bef\u3002\u9996\u5148\uff0c\u6211\u5728 Java Puzzlers ","[Bloch05]","\u7684 88 \u9875\u4e0a\u505a\u9519\u4e86\uff0c\u591a\u5e74\u6765\u6ca1\u6709\u4eba\u6ce8\u610f\u5230\u3002\u4e8b\u5b9e\u4e0a\uff0c2007 \u5e74\u53d1\u5e03\u7684 Java \u5e93\u4e2d\u4e09\u5206\u4e4b\u4e8c\u7684 close \u65b9\u6cd5\u4f7f\u7528\u90fd\u662f\u9519\u8bef\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8\uff1a\u300aJava Puzzlers\u300b\u7684\u4e2d\u6587\u8bd1\u672c\u4e3a\u300aJava \u89e3\u60d1\u300b")),(0,a.kt)("p",null,"Even the correct code for closing resources with try-finally statements,as illustrated in the previous two code examples, has a subtle deficiency. The code in both the try block and the finally block is capable of throwing exceptions. For example, in the firstLineOfFile method, the call to readLine could throw an exception due to a failure in the underlying physical device, and the call to close could then fail for the same reason. Under these circumstances, the second exception completely obliterates the first one. There is no record of the first exception in the exception stack trace, which can greatly complicate debugging in real systems\u2014usually it\u2019s the first exception that you want to see in order to diagnose the problem. While it is possible to write code to suppress the second exception in favor of the first, virtually no one did because it\u2019s just too verbose."),(0,a.kt)("p",null,"\u4f7f\u7528 try-finally \u8bed\u53e5\u5173\u95ed\u8d44\u6e90\u7684\u6b63\u786e\u4ee3\u7801\uff08\u5982\u524d\u4e24\u4e2a\u4ee3\u7801\u793a\u4f8b\u6240\u793a\uff09\u4e5f\u6709\u4e00\u4e2a\u7ec6\u5fae\u7684\u7f3a\u9677\u3002try \u5757\u548c finally \u5757\u4e2d\u7684\u4ee3\u7801\u90fd\u80fd\u591f\u629b\u51fa\u5f02\u5e38\u3002\u4f8b\u5982\uff0c\u5728 firstLineOfFile \u65b9\u6cd5\u4e2d\uff0c\u7531\u4e8e\u5e95\u5c42\u7269\u7406\u8bbe\u5907\u53d1\u751f\u6545\u969c\uff0c\u5bf9 readLine \u7684\u8c03\u7528\u53ef\u80fd\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u800c\u5173\u95ed\u7684\u8c03\u7528\u4e5f\u53ef\u80fd\u51fa\u4e8e\u540c\u6837\u7684\u539f\u56e0\u800c\u5931\u8d25\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e8c\u4e2a\u5f02\u5e38\u5c06\u5b8c\u5168\u8986\u76d6\u7b2c\u4e00\u4e2a\u5f02\u5e38\u3002\u5f02\u5e38\u5806\u6808\u8ddf\u8e2a\u4e2d\u6ca1\u6709\u7b2c\u4e00\u4e2a\u5f02\u5e38\u7684\u8bb0\u5f55\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4f7f\u5b9e\u9645\u7cfb\u7edf\u4e2d\u7684\u8c03\u8bd5\u53d8\u5f97\u975e\u5e38\u590d\u6742\uff08\u800c\u8fd9\u53ef\u80fd\u662f\u5e0c\u671b\u51fa\u73b0\u7684\u7b2c\u4e00\u4e2a\u5f02\u5e38\uff0c\u4ee5\u4fbf\u8bca\u65ad\u95ee\u9898\uff09\u3002\u867d\u7136\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\u6765\u6291\u5236\u7b2c\u4e8c\u4e2a\u5f02\u5e38\u800c\u652f\u6301\u7b2c\u4e00\u4e2a\u5f02\u5e38\uff0c\u4f46\u5b9e\u9645\u4e0a\u6ca1\u6709\u4eba\u8fd9\u6837\u505a\uff0c\u56e0\u4e3a\u5b83\u592a\u8fc7\u5197\u957f\u3002"),(0,a.kt)("p",null,"All of these problems were solved in one fell swoop when Java 7 introduced the try-with-resources statement ","[JLS, 14.20.3]",". To be usable with this construct, a resource must implement the AutoCloseable interface, which consists of a single void-returning close method. Many classes and interfaces in the Java libraries and in third-party libraries now implement or extend AutoCloseable. If you write a class that represents a resource that must be closed, your class should implement AutoCloseable too."),(0,a.kt)("p",null,"\u5f53 Java 7 \u5f15\u5165 try-with-resources \u8bed\u53e5 ","[JLS, 14.20.3]","\u65f6\uff0c\u6240\u6709\u8fd9\u4e9b\u95ee\u9898\u90fd\u4e00\u6b21\u6027\u89e3\u51b3\u4e86\u3002\u8981\u4f7f\u7528\u8fd9\u4e2a\u7ed3\u6784\uff0c\u8d44\u6e90\u5fc5\u987b\u5b9e\u73b0 AutoCloseable \u63a5\u53e3\uff0c\u5b83\u7531\u4e00\u4e2a\u5355\u72ec\u7684 void-return close \u65b9\u6cd5\u7ec4\u6210\u3002Java \u5e93\u548c\u7b2c\u4e09\u65b9\u5e93\u4e2d\u7684\u8bb8\u591a\u7c7b\u548c\u63a5\u53e3\u73b0\u5728\u90fd\u5b9e\u73b0\u6216\u6269\u5c55\u4e86 AutoCloseable\u3002\u5982\u679c\u4f60\u7f16\u5199\u7684\u7c7b\u5b58\u5728\u5fc5\u987b\u5173\u95ed\u7684\u8d44\u6e90\uff0c\u90a3\u4e48\u4e5f\u5e94\u8be5\u5b9e\u73b0 AutoCloseable\u3002"),(0,a.kt)("p",null,"Here\u2019s how our first example looks using try-with-resources:"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528 try-with-resources \u7684\u7b2c\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// try-with-resources - the the best way to close resources!\nstatic String firstLineOfFile(String path) throws IOException {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        return br.readLine();\n    }\n}\n")),(0,a.kt)("p",null,"And here\u2019s how our second example looks using try-with-resources:"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528 try-with-resources \u7684\u7b2c\u4e8c\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// try-with-resources on multiple resources - short and sweet\nstatic void copy(String src, String dst) throws IOException {\n    try (InputStream in = new FileInputStream(src);OutputStream out = new FileOutputStream(dst)) {\n        byte[] buf = new byte[BUFFER_SIZE];\n        int n;\n        while ((n = in.read(buf)) >= 0)\n            out.write(buf, 0, n);\n    }\n}\n")),(0,a.kt)("p",null,"originals, but they provide far better diagnostics. Consider the firstLineOfFile method. If exceptions are thrown by both the readLine call and the (invisible) close, the latter exception is suppressed in favor of the former. In fact, multiple exceptions may be suppressed in order to preserve the exception that you actually want to see. These suppressed exceptions are not merely discarded; they are printed in the stack trace with a notation saying that they were suppressed. You can also access them programmatically with the getSuppressed method, which was added to Throwable in Java 7."),(0,a.kt)("p",null,"\u548c\u4f7f\u7528 try-finally \u7684\u539f\u7248\u4ee3\u7801\u76f8\u6bd4\uff0ctry-with-resources \u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u8bca\u65ad\u65b9\u5f0f\u3002\u8003\u8651 firstLineOfFile \u65b9\u6cd5\u3002\u5982\u679c\u5f02\u5e38\u662f\u7531 readLine \u8c03\u7528\u548c\u4e0d\u53ef\u89c1\u7684 close \u629b\u51fa\u7684\uff0c\u5219\u540e\u4e00\u4e2a\u5f02\u5e38\u5c06\u88ab\u6291\u5236\uff0c\u4ee5\u652f\u6301\u524d\u4e00\u4e2a\u5f02\u5e38\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd8\u53ef\u80fd\u4f1a\u6291\u5236\u591a\u4e2a\u5f02\u5e38\uff0c\u4ee5\u4fdd\u7559\u5b9e\u9645\u5e0c\u671b\u770b\u5230\u7684\u5f02\u5e38\u3002\u8fd9\u4e9b\u88ab\u6291\u5236\u7684\u5f02\u5e38\u4e0d\u4f1a\u4ec5\u4ec5\u88ab\u629b\u5f03\uff1b\u5b83\u4eec\u4f1a\u88ab\u6253\u5370\u5728\u5806\u6808\u8ddf\u8e2a\u4e2d\uff0c\u5e76\u6807\u8bb0\u5b83\u4eec\u88ab\u6291\u5236\u3002\u53ef\u4ee5\u901a\u8fc7\u7f16\u7a0b\u65b9\u5f0f\u4f7f\u7528 getSuppressed \u65b9\u6cd5\u8bbf\u95ee\u5230\u5b83\u4eec\uff0c\u8be5\u65b9\u6cd5\u662f\u5728 Java 7 \u4e2d\u6dfb\u52a0\u5230 Throwable \u4e2d\u7684\u3002"),(0,a.kt)("p",null,"You can put catch clauses on try-with-resources statements, just as you can on regular try-finally statements. This allows you to handle exceptions without sullying your code with another layer of nesting. As a slightly contrived example, here\u2019s a version our firstLineOfFile method that does not throw exceptions, but takes a default value to return if it can\u2019t open the file or read from it:"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u5e26\u6709\u8d44\u6e90\u7684 try-with-resources \u8bed\u53e5\u4e2d\u653e\u7f6e catch \u5b50\u53e5\uff0c\u5c31\u50cf\u5728\u5e38\u89c4\u7684 try-finally \u8bed\u53e5\u4e0a\u4e00\u6837\u3002\u8fd9\u5141\u8bb8\u5904\u7406\u5f02\u5e38\u65f6\u4e0d\u5fc5\u7528\u53e6\u4e00\u5c42\u5d4c\u5957\u6765\u5f71\u54cd\u4ee3\u7801\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7279\u6307\u7684\u793a\u4f8b\uff0c\u4e0b\u9762\u662f\u6211\u4eec\u7684 firstLineOfFile \u65b9\u6cd5\u7684\u4e00\u4e2a\u7248\u672c\uff0c\u5b83\u4e0d\u629b\u51fa\u5f02\u5e38\uff0c\u4f46\u5982\u679c\u65e0\u6cd5\u6253\u5f00\u6587\u4ef6\u6216\u4ece\u4e2d\u8bfb\u53d6\u6587\u4ef6\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u9ed8\u8ba4\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// try-with-resources with a catch clause\nstatic String firstLineOfFile(String path, String defaultVal) {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        return br.readLine();\n    } catch (IOException e) {\n        return defaultVal;\n    }\n}\n")),(0,a.kt)("p",null,"The lesson is clear: Always use try-with-resources in preference to tryfinally when working with resources that must be closed. The resulting code is shorter and clearer, and the exceptions that it generates are more useful. The try-with-resources statement makes it easy to write correct code using resources that must be closed, which was practically impossible using tryfinally."),(0,a.kt)("p",null,"\u6559\u8bad\u5f88\u6e05\u695a\uff1a\u5728\u4f7f\u7528\u5fc5\u987b\u5173\u95ed\u7684\u8d44\u6e90\u65f6\uff0c\u603b\u662f\u4f18\u5148\u4f7f\u7528 try-with-resources\uff0c\u800c\u4e0d\u662f try-finally\u3002\u524d\u8005\u7684\u4ee3\u7801\u66f4\u77ed\u3001\u66f4\u6e05\u6670\uff0c\u751f\u6210\u7684\u5f02\u5e38\u66f4\u6709\u7528\u3002\u4f7f\u7528 try-with-resources \u8bed\u53e5\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u4e3a\u5fc5\u987b\u5173\u95ed\u7684\u8d44\u6e90\u7f16\u5199\u6b63\u786e\u7684\u4ee3\u7801\uff0c\u800c\u4f7f\u7528 try-finally \u51e0\u4e4e\u662f\u4e0d\u53ef\u80fd\u7684\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"./Chapter-2-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,a.kt)("a",{parentName:"strong",href:"./Chapter-2-Item-8-Avoid-finalizers-and-cleaners"},"Item 8: Avoid finalizers and cleaners\uff08\u907f\u514d\u4f7f\u7528\u7ec8\u7ed3\u5668\u548c\u6e05\u9664\u5668\uff09"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,a.kt)("a",{parentName:"strong",href:"./Chapter-3-Introduction"},"Chapter 3 Introduction\uff08\u7ae0\u8282\u4ecb\u7ecd\uff09")))))}p.isMDXComponent=!0}}]);
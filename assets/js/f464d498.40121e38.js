"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5635],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="\u9644\u5f55:\u5bf9\u8c61\u4f20\u9012\u548c\u8fd4\u56de",s={unversionedId:"Books/OnJava8/Appendix-Passing-and-Returning-Objects",id:"Books/OnJava8/Appendix-Passing-and-Returning-Objects",title:"\u9644\u5f55:\u5bf9\u8c61\u4f20\u9012\u548c\u8fd4\u56de",description:"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u4f60\u5df2\u7ecf\u5bf9\u201c\u4f20\u9012\u201d\u5bf9\u8c61\u5b9e\u9645\u4e0a\u662f\u4f20\u9012\u5f15\u7528\u8fd9\u4e00\u60f3\u6cd5\u60f3\u6cd5\u611f\u5230\u6ee1\u610f\u3002",source:"@site/docs/Books/OnJava8/Appendix-Passing-and-Returning-Objects.md",sourceDirName:"Books/OnJava8",slug:"/Books/OnJava8/Appendix-Passing-and-Returning-Objects",permalink:"/docs/Books/OnJava8/Appendix-Passing-and-Returning-Objects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/OnJava8/Appendix-Passing-and-Returning-Objects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9644\u5f55:\u5bf9\u8c61\u5e8f\u5217\u5316",permalink:"/docs/Books/OnJava8/Appendix-Object-Serialization"},next:{title:"\u9644\u5f55:\u7f16\u7a0b\u6307\u5357",permalink:"/docs/Books/OnJava8/Appendix-Programming-Guidelines"}},p={},c=[{value:"\u4f20\u9012\u5f15\u7528",id:"\u4f20\u9012\u5f15\u7528",level:2},{value:"\u672c\u5730\u62f7\u8d1d",id:"\u672c\u5730\u62f7\u8d1d",level:2},{value:"\u63a7\u5236\u514b\u9686",id:"\u63a7\u5236\u514b\u9686",level:2},{value:"\u4e0d\u53ef\u53d8\u7c7b",id:"\u4e0d\u53ef\u53d8\u7c7b",level:2},{value:"\u672c\u7ae0\u5c0f\u7ed3",id:"\u672c\u7ae0\u5c0f\u7ed3",level:2}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9644\u5f55\u5bf9\u8c61\u4f20\u9012\u548c\u8fd4\u56de"},"\u9644\u5f55:\u5bf9\u8c61\u4f20\u9012\u548c\u8fd4\u56de"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u4f60\u5df2\u7ecf\u5bf9\u201c\u4f20\u9012\u201d\u5bf9\u8c61\u5b9e\u9645\u4e0a\u662f\u4f20\u9012\u5f15\u7528\u8fd9\u4e00\u60f3\u6cd5\u60f3\u6cd5\u611f\u5230\u6ee1\u610f\u3002")),(0,a.kt)("p",null,"\u5728\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bed\u8a00\u7684\u201c\u5e38\u89c4\u201d\u65b9\u5f0f\u6765\u4f20\u9012\u5bf9\u8c61\uff0c\u5e76\u4e14\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4e00\u5207\u6b63\u5e38\u3002 \u4f46\u662f\u901a\u5e38\u4f1a\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u5fc5\u987b\u505a\u4e00\u4e9b\u4e0d\u5e73\u5e38\u7684\u4e8b\u60c5\uff0c\u7a81\u7136\u4e8b\u60c5\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u3002 Java\u4e5f\u4e0d\u4f8b\u5916\uff0c\u5f53\u60a8\u4f20\u9012\u5bf9\u8c61\u5e76\u5bf9\u5176\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u51c6\u786e\u4e86\u89e3\u6b63\u5728\u53d1\u751f\u7684\u4e8b\u60c5\u5f88\u91cd\u8981\u3002 \u672c\u9644\u5f55\u63d0\u4f9b\u4e86\u8fd9\u79cd\u89c1\u89e3\u3002"),(0,a.kt)("p",null,"\u63d0\u51fa\u672c\u9644\u5f55\u95ee\u9898\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\uff0c\u5982\u679c\u4f60\u4e4b\u524d\u4f7f\u7528\u7c7b\u4f3cC++\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5219\u662f\u201c Java\u662f\u5426\u6709\u6307\u9488\uff1f\u201d Java\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u6807\u8bc6\u7b26\uff08\u9664\u539f\u8bed\u5916\uff09\u90fd\u662f\u8fd9\u4e9b\u6307\u9488\u4e4b\u4e00\uff0c\u4f46\u5b83\u4eec\u7684\u7528\u6cd5\u662f\u4e0d\u4ec5\u53d7\u7f16\u8bd1\u5668\u7684\u7ea6\u675f\uff0c\u800c\u4e14\u53d7\u8fd0\u884c\u65f6\u7cfb\u7edf\u7684\u7ea6\u675f\u3002 \u6362\u4e00\u79cd\u8bf4\u6cd5\uff0cJava\u6709\u6307\u9488\uff0c\u4f46\u6ca1\u6709\u6307\u9488\u7b97\u6cd5\u3002 \u8fd9\u4e9b\u5c31\u662f\u6211\u4e00\u76f4\u6240\u8bf4\u7684\u201c\u5f15\u7528\u201d\uff0c\u60a8\u53ef\u4ee5\u5c06\u5b83\u4eec\u89c6\u4e3a\u201c\u5b89\u5168\u6307\u9488\u201d\uff0c\u4e0e\u5c0f\u5b66\u7684\u5b89\u5168\u526a\u5200\u4e0d\u540c-\u5b83\u4eec\u4e0d\u654f\u9510\uff0c\u56e0\u6b64\u60a8\u4e0d\u8d39\u5439\u7070\u4e4b\u529b\u5c31\u65e0\u6cd5\u4f24\u5bb3\u81ea\u5df1\uff0c\u4f46\u662f\u5b83\u4eec\u6709\u65f6\u53ef\u80fd\u5f88\u4e4f\u5473\u3002"),(0,a.kt)("h2",{id:"\u4f20\u9012\u5f15\u7528"},"\u4f20\u9012\u5f15\u7528"),(0,a.kt)("p",null,"\u5f53\u4f60\u5c06\u5f15\u7528\u4f20\u9012\u7ed9\u65b9\u6cd5\u65f6\uff0c\u5b83\u4ecd\u6307\u5411\u540c\u4e00\u5bf9\u8c61\u3002 \u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u9a8c\u6f14\u793a\u4e86\u8fd9\u4e00\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// references/PassReferences.java\npublic class PassReferences {\npublic static void f(PassReferences h) {\n        System.out.println("h inside f(): " + h);\n    }\n    public static void main(String[] args) {\n        PassReferences p = new PassReferences();\n        System.out.println("p inside main(): " + p);\n        f(p);\n    }\n}\n/* Output:\np inside main(): PassReferences@15db9742\nh inside f(): PassReferences@15db9742\n*/\n')),(0,a.kt)("p",null,"\u65b9\u6cd5  ",(0,a.kt)("inlineCode",{parentName:"p"},"toString() ")," \u5728\u6253\u5370\u8bed\u53e5\u4e2d\u81ea\u52a8\u8c03\u7528\uff0c\u5e76\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"PassReferences")," \u76f4\u63a5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," \u7ee7\u627f\u800c\u65e0\u9700\u91cd\u65b0\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"toString\uff08\uff09")," \u3002 \u56e0\u6b64\uff0c\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"toString\uff08\uff09")," \u7248\u672c\uff0c\u5b83\u6253\u5370\u51fa\u5bf9\u8c61\u7684\u7c7b\uff0c\u7136\u540e\u6253\u5370\u51fa\u8be5\u5bf9\u8c61\u6240\u5728\u7684\u5730\u5740\uff08\u4e0d\u662f\u5f15\u7528\uff0c\u800c\u662f\u5b9e\u9645\u7684\u5bf9\u8c61\u5b58\u50a8\uff09\u3002"),(0,a.kt)("h2",{id:"\u672c\u5730\u62f7\u8d1d"},"\u672c\u5730\u62f7\u8d1d"),(0,a.kt)("h2",{id:"\u63a7\u5236\u514b\u9686"},"\u63a7\u5236\u514b\u9686"),(0,a.kt)("h2",{id:"\u4e0d\u53ef\u53d8\u7c7b"},"\u4e0d\u53ef\u53d8\u7c7b"),(0,a.kt)("h2",{id:"\u672c\u7ae0\u5c0f\u7ed3"},"\u672c\u7ae0\u5c0f\u7ed3"))}u.isMDXComponent=!0}}]);
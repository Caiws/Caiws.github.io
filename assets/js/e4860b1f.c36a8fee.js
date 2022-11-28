"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,u=h["".concat(o,".").concat(d)]||h[d]||m[d]||n;return a?i.createElement(u,s(s({ref:t},p),{},{components:a})):i.createElement(u,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const n={},s=void 0,l={unversionedId:"Books/EffectiveJava3/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution",id:"Books/EffectiveJava3/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution",title:"Chapter-12-Item-86-Implement-Serializable-with-great-caution",description:"Chapter 12. Serialization\uff08\u5e8f\u5217\u5316\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution.md",sourceDirName:"Books/EffectiveJava3/Chapter-12",slug:"/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution",permalink:"/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-12-Item-85-Prefer-alternatives-to-Java-serialization",permalink:"/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-85-Prefer-alternatives-to-Java-serialization"},next:{title:"Chapter-12-Item-87-Consider-using-a-custom-serialized-form",permalink:"/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"}},o={},c=[{value:"Chapter 12. Serialization\uff08\u5e8f\u5217\u5316\uff09",id:"chapter-12-serialization\u5e8f\u5217\u5316",level:2},{value:"Item 86: Implement Serializable with great caution\uff08\u975e\u5e38\u8c28\u614e\u5730\u5b9e\u73b0 Serializable\uff09",id:"item-86-implement-serializable-with-great-caution\u975e\u5e38\u8c28\u614e\u5730\u5b9e\u73b0-serializable",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chapter-12-serialization\u5e8f\u5217\u5316"},"Chapter 12. Serialization\uff08\u5e8f\u5217\u5316\uff09"),(0,r.kt)("h3",{id:"item-86-implement-serializable-with-great-caution\u975e\u5e38\u8c28\u614e\u5730\u5b9e\u73b0-serializable"},"Item 86: Implement Serializable with great caution\uff08\u975e\u5e38\u8c28\u614e\u5730\u5b9e\u73b0 Serializable\uff09"),(0,r.kt)("p",null,"Allowing a class\u2019s instances to be serialized can be as simple as adding the words implements Serializable to its declaration. Because this is so easy to do, there was a common misconception that serialization requires little effort on the part of the programmer. The truth is far more complex. While the immediate cost to make a class serializable can be negligible, the long-term costs are often substantial."),(0,r.kt)("p",null,"\u4f7f\u7c7b\u7684\u5b9e\u4f8b\u53ef\u5e8f\u5217\u5316\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u5b9e\u73b0 Serializable \u63a5\u53e3\u5373\u53ef\u3002\u56e0\u4e3a\u8fd9\u5f88\u5bb9\u6613\u505a\u5230\uff0c\u6240\u4ee5\u6709\u4e00\u4e2a\u666e\u904d\u7684\u8bef\u89e3\uff0c\u8ba4\u4e3a\u5e8f\u5217\u5316\u53ea\u9700\u8981\u7a0b\u5e8f\u5458\u4ed8\u51fa\u5f88\u5c11\u7684\u52aa\u529b\u3002\u800c\u4e8b\u5b9e\u4e0a\u8981\u590d\u6742\u5f97\u591a\u3002\u867d\u7136\u4f7f\u7c7b\u53ef\u5e8f\u5217\u5316\u7684\u5373\u65f6\u4ee3\u4ef7\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\uff0c\u4f46\u957f\u671f\u4ee3\u4ef7\u901a\u5e38\u662f\u5de8\u5927\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A major cost of implementing Serializable is that it decreases the flexibility to change a class\u2019s implementation once it has been released.")," When a class implements Serializable, its byte-stream encoding (or serialized form) becomes part of its exported API. Once you distribute a class widely, you are generally required to support the serialized form forever, just as you are required to support all other parts of the exported API. If you do not make the effort to design a custom serialized form but merely accept the default, the serialized form will forever be tied to the class\u2019s original internal representation. In other words, if you accept the default serialized form, the class\u2019s private and package-private instance fields become part of its exported API, and the practice of minimizing access to fields (Item 15) loses its effectiveness as a tool for information hiding."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u73b0 Serializable \u63a5\u53e3\u7684\u4e00\u4e2a\u4e3b\u8981\u4ee3\u4ef7\u662f\uff0c\u4e00\u65e6\u7c7b\u7684\u5b9e\u73b0\u88ab\u53d1\u5e03\uff0c\u5b83\u5c31\u4f1a\u964d\u4f4e\u66f4\u6539\u8be5\u7c7b\u5b9e\u73b0\u7684\u7075\u6d3b\u6027\u3002")," \u5f53\u7c7b\u5b9e\u73b0 Serializable \u65f6\uff0c\u5176\u5b57\u8282\u6d41\u7f16\u7801\uff08\u6216\u5e8f\u5217\u5316\u5f62\u5f0f\uff09\u6210\u4e3a\u5176\u5bfc\u51fa API \u7684\u4e00\u90e8\u5206\u3002\u4e00\u65e6\u5e7f\u6cdb\u5206\u53d1\u4e86\u4e00\u4e2a\u7c7b\uff0c\u901a\u5e38\u5c31\u9700\u8981\u6c38\u8fdc\u652f\u6301\u5e8f\u5217\u5316\u7684\u5f62\u5f0f\uff0c\u5c31\u50cf\u9700\u8981\u652f\u6301\u5bfc\u51fa API \u7684\u6240\u6709\u5176\u4ed6\u90e8\u5206\u4e00\u6837\u3002\u5982\u679c\u4f60\u4e0d\u52aa\u529b\u8bbe\u8ba1\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u800c\u53ea\u662f\u63a5\u53d7\u9ed8\u8ba4\u5f62\u5f0f\uff0c\u5219\u5e8f\u5217\u5316\u5f62\u5f0f\u5c06\u6c38\u8fdc\u7ed1\u5b9a\u5728\u7c7b\u7684\u539f\u59cb\u5185\u90e8\u5b9e\u73b0\u4e0a\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5982\u679c\u4f60\u63a5\u53d7\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u7c7b\u4e2d\u79c1\u6709\u7684\u5305\u4ee5\u53ca\u79c1\u6709\u5b9e\u4f8b\u5b57\u6bb5\u5c06\u6210\u4e3a\u5176\u5bfc\u51fa API \u7684\u4e00\u90e8\u5206\uff0c\u6b64\u65f6\u6700\u5c0f\u5316\u5b57\u6bb5\u4f5c\u7528\u57df\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-15-Minimize-the-accessibility-of-classes-and-members"},"Item-15"),"\uff09\u4f5c\u4e3a\u4fe1\u606f\u9690\u85cf\u7684\u5de5\u5177\uff0c\u5c06\u5931\u53bb\u5176\u6709\u6548\u6027\u3002"),(0,r.kt)("p",null,"If you accept the default serialized form and later change a class\u2019s internal representation, an incompatible change in the serialized form will result. Clients attempting to serialize an instance using an old version of the class and deserialize it using the new one (or vice versa) will experience program failures. It is possible to change the internal representation while maintaining the original serialized form (using ObjectOutputStream.putFields and ObjectInputStream.readFields), but it can be difficult and leaves visible warts in the source code. If you opt to make a class serializable, you should carefully design a high-quality serialized form that you\u2019re willing to live with for the long haul (Items 87, 90). Doing so will add to the initial cost of development, but it\u2019s worth the effort. Even a well-designed serialized form places constraints on the evolution of a class; an ill-designed serialized form can be crippling."),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u63a5\u53d7\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u7136\u540e\u66f4\u6539\u4e86\u7c7b\u7684\u5185\u90e8\u5b9e\u73b0\uff0c\u5219\u4f1a\u5bfc\u81f4\u4e0e\u5e8f\u5217\u5316\u5f62\u5f0f\u4e0d\u517c\u5bb9\u3002\u8bd5\u56fe\u4f7f\u7528\u7c7b\u7684\u65e7\u7248\u672c\u5e8f\u5217\u5316\u5b9e\u4f8b\uff0c\u518d\u4f7f\u7528\u65b0\u7248\u672c\u53cd\u5e8f\u5217\u5316\u5b9e\u4f8b\u7684\u5ba2\u6237\u7aef\uff08\u53cd\u4e4b\u4ea6\u7136\uff09\u7a0b\u5e8f\u5c06\u4f1a\u5931\u8d25\u3002\u5f53\u7136\uff0c\u53ef\u4ee5\u5728\u7ef4\u62a4\u539f\u59cb\u5e8f\u5217\u5316\u5f62\u5f0f\u7684\u540c\u65f6\u66f4\u6539\u5185\u90e8\u5b9e\u73b0\uff08\u4f7f\u7528 ObjectOutputStream.putFields \u6216 ObjectInputStream.readFields\uff09\uff0c\u4f46\u8fd9\u53ef\u80fd\u4f1a\u5f88\u56f0\u96be\uff0c\u5e76\u5728\u6e90\u4ee3\u7801\u4e2d\u7559\u4e0b\u660e\u663e\u7684\u7f3a\u9677\u3002\u5982\u679c\u4f60\u9009\u62e9\u4f7f\u7c7b\u53ef\u5e8f\u5217\u5316\uff0c\u4f60\u5e94\u8be5\u4ed4\u7ec6\u8bbe\u8ba1\u4e00\u4e2a\u9ad8\u8d28\u91cf\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u4ee5\u4fbf\u957f\u671f\u4f7f\u7528\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"},"Item-87"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-90-Consider-serialization-proxies-instead-of-serialized-instances"},"Item-90"),"\uff09\u3002\u8fd9\u6837\u505a\u4f1a\u589e\u52a0\u5f00\u53d1\u7684\u521d\u59cb\u6210\u672c\uff0c\u4f46\u662f\u8fd9\u6837\u505a\u662f\u503c\u5f97\u7684\u3002\u5373\u4f7f\u662f\u8bbe\u8ba1\u826f\u597d\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u4e5f\u4f1a\u9650\u5236\u7c7b\u7684\u6f14\u5316\uff1b\u800c\u8bbe\u8ba1\u4e0d\u826f\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u5219\u53ef\u80fd\u4f1a\u9020\u6210\u4e25\u91cd\u540e\u679c\u3002"),(0,r.kt)("p",null,"A simple example of the constraints on evolution imposed by serializability concerns stream unique identifiers, more commonly known as serial version UIDs. Every serializable class has a unique identification number associated with it. If you do not specify this number by declaring a static final long field named serialVersionUID, the system automatically generates it at runtime by applying a cryptographic hash function (SHA-1) to the structure of the class. This value is affected by the names of the class, the interfaces it implements, and most of its members, including synthetic members generated by the compiler. If you change any of these things, for example, by adding a convenience method, the generated serial version UID changes. If you fail to declare a serial version UID, compatibility will be broken, resulting in an InvalidClassException at runtime."),(0,r.kt)("p",null,"\u53ef\u5e8f\u5217\u5316\u4f1a\u4f7f\u7c7b\u7684\u6f14\u53d8\u53d7\u5230\u9650\u5236\uff0c\u65bd\u52a0\u8fd9\u79cd\u7ea6\u675f\u7684\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u6d89\u53ca\u6d41\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u901a\u5e38\u79f0\u5176\u4e3a\u4e32\u884c\u7248\u672c UID\u3002\u6bcf\u4e2a\u53ef\u5e8f\u5217\u5316\u7684\u7c7b\u90fd\u6709\u4e00\u4e2a\u4e0e\u4e4b\u5173\u8054\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002\u5982\u679c\u4f60\u6ca1\u6709\u901a\u8fc7\u58f0\u660e\u4e00\u4e2a\u540d\u4e3a serialVersionUID \u7684\u9759\u6001 final long \u5b57\u6bb5\u6765\u6307\u5b9a\u8fd9\u4e2a\u6807\u8bc6\u7b26\uff0c\u90a3\u4e48\u7cfb\u7edf\u5c06\u5728\u8fd0\u884c\u65f6\u5bf9\u7c7b\u5e94\u7528\u52a0\u5bc6\u6563\u5217\u51fd\u6570\uff08SHA-1\uff09\u81ea\u52a8\u751f\u6210\u5b83\u3002\u8fd9\u4e2a\u503c\u53d7\u5230\u7c7b\u7684\u540d\u79f0\u3001\u5b9e\u73b0\u7684\u63a5\u53e3\u53ca\u5176\u5927\u591a\u6570\u6210\u5458\uff08\u5305\u62ec\u7f16\u8bd1\u5668\u751f\u6210\u7684\u5408\u6210\u6210\u5458\uff09\u7684\u5f71\u54cd\u3002\u5982\u679c\u4f60\u66f4\u6539\u4e86\u5176\u4e2d\u4efb\u4f55\u4e00\u9879\uff0c\u4f8b\u5982\uff0c\u901a\u8fc7\u6dfb\u52a0\u4e00\u4e2a\u4e34\u65f6\u7684\u65b9\u6cd5\uff0c\u751f\u6210\u7684\u5e8f\u5217\u7248\u672c UID \u5c31\u4f1a\u66f4\u6539\u3002\u5982\u679c\u4f60\u672a\u80fd\u58f0\u660e\u5e8f\u5217\u7248\u672c UID\uff0c\u517c\u5bb9\u6027\u5c06\u88ab\u7834\u574f\uff0c\u4ece\u800c\u5728\u8fd0\u884c\u65f6\u5bfc\u81f4 InvalidClassException\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A second cost of implementing Serializable is that it increases the likelihood of bugs and security holes (Item 85).")," Normally, objects are created with constructors; serialization is an extralinguistic mechanism for creating objects. Whether you accept the default behavior or override it, deserialization is a \u201chidden constructor\u201d with all of the same issues as other constructors. Because there is no explicit constructor associated with deserialization, it is easy to forget that you must ensure that it guarantees all of the invariants established by the constructors and that it does not allow an attacker to gain access to the internals of the object under construction. Relying on the default deserialization mechanism can easily leave objects open to invariant corruption and illegal access (Item 88)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u73b0 Serializable \u63a5\u53e3\u7684\u7b2c\u4e8c\u4e2a\u4ee3\u4ef7\u662f\uff0c\u589e\u52a0\u4e86\u51fa\u73b0 bug \u548c\u5b89\u5168\u6f0f\u6d1e\u7684\u53ef\u80fd\u6027(\u7b2c85\u9879)\u3002")," \u901a\u5e38\uff0c\u5bf9\u8c61\u662f\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\uff1b\u5e8f\u5217\u5316\u662f\u4e00\u79cd\u7528\u4e8e\u521b\u5efa\u5bf9\u8c61\u7684\u8d85\u8bed\u8a00\u673a\u5236\u3002\u65e0\u8bba\u4f60\u63a5\u53d7\u9ed8\u8ba4\u884c\u4e3a\u8fd8\u662f\u65e0\u89c6\u5b83\uff0c\u53cd\u5e8f\u5217\u5316\u90fd\u662f\u4e00\u4e2a\u300c\u9690\u85cf\u6784\u9020\u51fd\u6570\u300d\uff0c\u5176\u4ed6\u6784\u9020\u51fd\u6570\u5177\u6709\u7684\u6240\u6709\u95ee\u9898\u5b83\u90fd\u6709\u3002\u7531\u4e8e\u6ca1\u6709\u4e0e\u53cd\u5e8f\u5217\u5316\u5173\u8054\u7684\u663e\u5f0f\u6784\u9020\u51fd\u6570\uff0c\u56e0\u6b64\u5f88\u5bb9\u6613\u5fd8\u8bb0\u5fc5\u987b\u8ba9\u5b83\u80fd\u591f\u4fdd\u8bc1\u6240\u6709\u7684\u4e0d\u53d8\u91cf\u90fd\u662f\u7531\u6784\u9020\u51fd\u6570\u5efa\u7acb\u7684\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u653b\u51fb\u8005\u8bbf\u95ee\u6b63\u5728\u6784\u9020\u7684\u5bf9\u8c61\u5185\u90e8\u3002\u4f9d\u8d56\u4e8e\u9ed8\u8ba4\u7684\u53cd\u5e8f\u5217\u5316\u673a\u5236\uff0c\u4f1a\u8ba9\u5bf9\u8c61\u8f7b\u6613\u5730\u906d\u53d7\u4e0d\u53d8\u6027\u7834\u574f\u548c\u975e\u6cd5\u8bbf\u95ee\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively"},"Item-88"),"\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A third cost of implementing Serializable is that it increases the testing burden associated with releasing a new version of a class.")," When a serializable class is revised, it is important to check that it is possible to serialize an instance in the new release and deserialize it in old releases, and vice versa. The amount of testing required is thus proportional to the product of the number of serializable classes and the number of releases, which can be large. You must ensure both that the serialization-deserialization process succeeds and that it results in a faithful replica of the original object. The need for testing is reduced if a custom serialized form is carefully designed when the class is first written (Items 87, 90)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u73b0 Serializable \u63a5\u53e3\u7684\u7b2c\u4e09\u4e2a\u4ee3\u4ef7\u662f\uff0c\u5b83\u589e\u52a0\u4e86\u4e0e\u53d1\u5e03\u7c7b\u7684\u65b0\u7248\u672c\u76f8\u5173\u7684\u6d4b\u8bd5\u8d1f\u62c5\u3002")," \u5f53\u4e00\u4e2a\u53ef\u5e8f\u5217\u5316\u7684\u7c7b\u88ab\u4fee\u6539\u65f6\uff0c\u91cd\u8981\u7684\u662f\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u5728\u65b0\u7248\u672c\u4e2d\u5e8f\u5217\u5316\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u5728\u65e7\u7248\u672c\u4e2d\u53cd\u5e8f\u5217\u5316\u5b83\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u56e0\u6b64\uff0c\u6240\u9700\u7684\u6d4b\u8bd5\u91cf\u4e0e\u53ef\u5e8f\u5217\u5316\u7c7b\u7684\u6570\u91cf\u53ca\u7248\u672c\u7684\u6570\u91cf\u6210\u6b63\u6bd4\uff0c\u5de5\u4f5c\u91cf\u53ef\u80fd\u5f88\u5927\u3002\u4f60\u5fc5\u987b\u786e\u4fdd\u300c\u5e8f\u5217\u5316-\u53cd\u5e8f\u5217\u5316\u300d\u8fc7\u7a0b\u6210\u529f\uff0c\u5e76\u786e\u4fdd\u5b83\u751f\u6210\u539f\u59cb\u5bf9\u8c61\u7684\u65e0\u5dee\u9519\u526f\u672c\u3002\u5982\u679c\u5728\u7b2c\u4e00\u6b21\u7f16\u5199\u7c7b\u65f6\u7cbe\u5fc3\u8bbe\u8ba1\u4e86\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u90a3\u4e48\u6d4b\u8bd5\u7684\u5de5\u4f5c\u91cf\u5c31\u4f1a\u51cf\u5c11\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"},"Item-87"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-90-Consider-serialization-proxies-instead-of-serialized-instances"},"Item-90"),"\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementing Serializable is not a decision to be undertaken lightly.")," It is essential if a class is to participate in a framework that relies on Java serialization for object transmission or persistence. Also, it greatly eases the use of a class as a component in another class that must implement Serializable. There are, however, many costs associated with implementing Serializable. Each time you design a class, weigh the costs against the benefits. Historically, value classes such as BigInteger and Instant implemented Serializable, and collection classes did too. Classes representing active entities, such as thread pools, should rarely implement Serializable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u73b0 Serializable \u63a5\u53e3\u5e76\u4e0d\u662f\u4e00\u4e2a\u8f7b\u677e\u7684\u51b3\u5b9a\u3002")," \u5982\u679c\u4e00\u4e2a\u7c7b\u8981\u53c2\u4e0e\u4e00\u4e2a\u6846\u67b6\uff0c\u8be5\u6846\u67b6\u4f9d\u8d56\u4e8e Java \u5e8f\u5217\u5316\u6765\u8fdb\u884c\u5bf9\u8c61\u4f20\u8f93\u6216\u6301\u4e45\u5316\uff0c\u8fd9\u5bf9\u4e8e\u7c7b\u6765\u8bf4\u5b9e\u73b0 Serializable \u63a5\u53e3\u5c31\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u6b64\u5916\uff0c\u5982\u679c\u7c7b A \u8981\u6210\u4e3a\u53e6\u4e00\u4e2a\u7c7b B \u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u7c7b B \u5fc5\u987b\u5b9e\u73b0 Serializable \u63a5\u53e3\uff0c\u82e5\u7c7b A \u53ef\u5e8f\u5217\u5316\uff0c\u5b83\u5c31\u4f1a\u66f4\u6613\u4e8e\u88ab\u4f7f\u7528\u3002\u7136\u800c\uff0c\u4e0e\u5b9e\u73b0 Serializable \u76f8\u5173\u7684\u4ee3\u4ef7\u5f88\u591a\u3002\u6bcf\u6b21\u8bbe\u8ba1\u4e00\u4e2a\u7c7b\u65f6\uff0c\u90fd\u8981\u6743\u8861\u5229\u5f0a\u3002\u5386\u53f2\u4e0a\uff0c\u50cf BigInteger \u548c Instant \u8fd9\u6837\u7684\u503c\u7c7b\u5b9e\u73b0\u4e86 Serializable \u63a5\u53e3\uff0c\u96c6\u5408\u7c7b\u4e5f\u5b9e\u73b0\u4e86 Serializable \u63a5\u53e3\u3002\u8868\u793a\u6d3b\u52a8\u5b9e\u4f53\uff08\u5982\u7ebf\u7a0b\u6c60\uff09\u7684\u7c7b\u5f88\u5c11\u60c5\u51b5\u9002\u5408\u5b9e\u73b0 Serializable \u63a5\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Classes designed for inheritance (Item 19) should rarely implement Serializable, and interfaces should rarely extend it.")," Violating this rule places a substantial burden on anyone who extends the class or implements the interface. There are times when it is appropriate to violate the rule. For example, if a class or interface exists primarily to participate in a framework that requires all participants to implement Serializable, then it may make sense for the class or interface to implement or extend Serializable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u7ee7\u627f\u800c\u8bbe\u8ba1\u7684\u7c7b\uff08",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-4-Item-19-Design-and-document-for-inheritance-or-else-prohibit-it"},"Item-19"),"\uff09\u5f88\u5c11\u60c5\u51b5\u9002\u5408\u5b9e\u73b0 Serializable \u63a5\u53e3\uff0c\u63a5\u53e3\u4e5f\u5f88\u5c11\u60c5\u51b5\u9002\u5408\u6269\u5c55\u5b83\u3002")," \u8fdd\u53cd\u6b64\u89c4\u5219\u4f1a\u7ed9\u6269\u5c55\u7c7b\u6216\u5b9e\u73b0\u63a5\u53e3\u7684\u4efb\u4f55\u4eba\u5e26\u6765\u5f88\u5927\u7684\u8d1f\u62c5\u3002\u6709\u65f6\uff0c\u8fdd\u53cd\u89c4\u5219\u662f\u6070\u5f53\u7684\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7684\u5b58\u5728\u4e3b\u8981\u662f\u4e3a\u4e86\u53c2\u4e0e\u4e00\u4e2a\u8981\u6c42\u6240\u6709\u53c2\u4e0e\u8005\u90fd\u5b9e\u73b0 Serializable \u63a5\u53e3\u7684\u6846\u67b6\uff0c\u90a3\u4e48\u7c7b\u6216\u63a5\u53e3\u5b9e\u73b0\u6216\u6269\u5c55 Serializable \u53ef\u80fd\u662f\u6709\u610f\u4e49\u7684\u3002"),(0,r.kt)("p",null,"Classes designed for inheritance that do implement Serializable include Throwable and Component. Throwable implements Serializable so RMI can send exceptions from server to client. Component implements Serializable so GUIs can be sent, saved, and restored, but even in the heyday of Swing and AWT, this facility was little-used in practice."),(0,r.kt)("p",null,"\u5728\u4e3a\u4e86\u7ee7\u627f\u800c\u8bbe\u8ba1\u7684\u7c7b\u4e2d\uff0cThrowable \u7c7b\u548c Component \u7c7b\u90fd\u5b9e\u73b0\u4e86 Serializable \u63a5\u53e3\u3002\u6b63\u662f\u56e0\u4e3a Throwable \u5b9e\u73b0\u4e86 Serializable \u63a5\u53e3\uff0cRMI \u53ef\u4ee5\u5c06\u5f02\u5e38\u4ece\u670d\u52a1\u5668\u53d1\u9001\u5230\u5ba2\u6237\u7aef\uff1bComponent \u7c7b\u5b9e\u73b0\u4e86 Serializable \u63a5\u53e3\uff0c\u56e0\u6b64\u53ef\u4ee5\u53d1\u9001\u3001\u4fdd\u5b58\u548c\u6062\u590d GUI\uff0c\u4f46\u5373\u4f7f\u5728 Swing \u548c AWT \u7684\u9f0e\u76db\u65f6\u671f\uff0c\u8fd9\u4e2a\u5de5\u5177\u5728\u5b9e\u8df5\u4e2d\u4e5f\u5f88\u5c11\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"If you implement a class with instance fields that is both serializable and extendable, there are several risks to be aware of. If there are any invariants on the instance field values, it is critical to prevent subclasses from overriding the finalize method, which the class can do by overriding finalize and declaring it final. Otherwise, the class will be susceptible to finalizer attacks (Item 8). Finally, if the class has invariants that would be violated if its instance fields were initialized to their default values (zero for integral types, false for boolean, and null for object reference types), you must add this readObjectNoData method:"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5e26\u6709\u5b9e\u4f8b\u5b57\u6bb5\u7684\u7c7b\uff0c\u5b83\u540c\u65f6\u662f\u53ef\u5e8f\u5217\u5316\u548c\u53ef\u6269\u5c55\u7684\uff0c\u90a3\u4e48\u9700\u8981\u6ce8\u610f\u51e0\u4e2a\u98ce\u9669\u3002\u5982\u679c\u5b9e\u4f8b\u5b57\u6bb5\u503c\u4e0a\u6709\u4efb\u4f55\u4e0d\u53d8\u91cf\uff0c\u5173\u952e\u662f\u8981\u9632\u6b62\u5b50\u7c7b\u8986\u76d6 finalize \u65b9\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6 finalize \u5e76\u58f0\u660e\u5b83\u4e3a final \u6765\u505a\u5230\u3002\u6700\u540e\uff0c\u5982\u679c\u7c7b\u7684\u5b9e\u4f8b\u5b57\u6bb5\u521d\u59cb\u5316\u4e3a\u9ed8\u8ba4\u503c\uff08\u6574\u6570\u7c7b\u578b\u4e3a 0\uff0c\u5e03\u5c14\u503c\u4e3a false\uff0c\u5bf9\u8c61\u5f15\u7528\u7c7b\u578b\u4e3a null\uff09\uff0c\u90a3\u4e48\u5fc5\u987b\u6dfb\u52a0 readObjectNoData \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// readObjectNoData for stateful extendable serializable classes\nprivate void readObjectNoData() throws InvalidObjectException {\n    throw new InvalidObjectException("Stream data required");\n}\n')),(0,r.kt)("p",null,"This method was added in Java 4 to cover a corner case involving the addition of a serializable superclass to an existing serializable class ","[Serialization, 3.5]","."),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u662f\u5728 Java 4 \u4e2d\u6dfb\u52a0\u7684\uff0c\u6d89\u53ca\u5c06\u53ef\u5e8f\u5217\u5316\u8d85\u7c7b\u6dfb\u52a0\u5230\u73b0\u6709\u53ef\u5e8f\u5217\u5316\u7c7b ","[Serialization, 3.5]"," \u7684\u7279\u6b8a\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"There is one caveat regarding the decision not to implement Serializable. If a class designed for inheritance is not serializable, it may require extra effort to write a serializable subclass. Normal deserialization of such a class requires the superclass to have an accessible parameterless constructor ","[Serialization, 1.10]",". If you don\u2019t provide such a constructor, subclasses are forced to use the serialization proxy pattern (Item 90)."),(0,r.kt)("p",null,"\u5173\u4e8e\u4e0d\u5b9e\u73b0 Serializable \u7684\u51b3\u5b9a\uff0c\u6709\u4e00\u4e2a\u8b66\u544a\u3002\u5982\u679c\u4e3a\u7ee7\u627f\u800c\u8bbe\u8ba1\u7684\u7c7b\u4e0d\u53ef\u5e8f\u5217\u5316\uff0c\u5219\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5de5\u4f5c\u6765\u7f16\u5199\u53ef\u5e8f\u5217\u5316\u7684\u5b50\u7c7b\u3002\u5b50\u7c7b\u7684\u5e38\u89c4\u53cd\u5e8f\u5217\u5316\uff0c\u8981\u6c42\u8d85\u7c7b\u5177\u6709\u53ef\u8bbf\u95ee\u7684\u65e0\u53c2\u6570\u6784\u9020\u51fd\u6570 ","[Serialization, 1.10]","\u3002\u5982\u679c\u4e0d\u63d0\u4f9b\u8fd9\u6837\u7684\u6784\u9020\u51fd\u6570\uff0c\u5b50\u7c7b\u5c06\u88ab\u8feb\u4f7f\u7528\u5e8f\u5217\u5316\u4ee3\u7406\u6a21\u5f0f\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-90-Consider-serialization-proxies-instead-of-serialized-instances"},"Item-90"),"\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inner classes (Item 24) should not implement Serializable.")," They use compiler-generated synthetic fields to store references to enclosing instances and to store values of local variables from enclosing scopes. How these fields correspond to the class definition is unspecified, as are the names of anonymous and local classes. Therefore, the default serialized form of an inner class is illdefined. A static member class can, however, implement Serializable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5185\u90e8\u7c7b\uff08",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-4-Item-24-Favor-static-member-classes-over-nonstatic"},"Item-24"),"\uff09\u4e0d\u5e94\u8be5\u5b9e\u73b0 Serializable\u3002")," \u5b83\u4eec\u4f7f\u7528\u7f16\u8bd1\u5668\u751f\u6210\u7684\u5408\u6210\u5b57\u6bb5\u5b58\u50a8\u5bf9\u5916\u56f4\u5b9e\u4f8b\u7684\u5f15\u7528\uff0c\u5e76\u5b58\u50a8\u6765\u81ea\u5916\u56f4\u7684\u5c40\u90e8\u53d8\u91cf\u7684\u503c\u3002\u8fd9\u4e9b\u5b57\u6bb5\u4e0e\u7c7b\u5b9a\u4e49\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u5c31\u548c\u6ca1\u6709\u6307\u5b9a\u533f\u540d\u7c7b\u548c\u5c40\u90e8\u7c7b\u7684\u540d\u79f0\u4e00\u6837\u3002\u56e0\u6b64\uff0c\u5185\u90e8\u7c7b\u7684\u9ed8\u8ba4\u5e8f\u5217\u5316\u5f62\u5f0f\u662f\u4e0d\u786e\u5b9a\u7684\u3002\u4f46\u662f\uff0c\u9759\u6001\u6210\u5458\u7c7b\u53ef\u4ee5\u5b9e\u73b0 Serializable \u63a5\u53e3\u3002"),(0,r.kt)("p",null,"To summarize, the ease of implementing Serializable is specious. Unless a class is to be used only in a protected environment where versions will never have to interoperate and servers will never be exposed to untrusted data, implementing Serializable is a serious commitment that should be made with great care. Extra caution is warranted if a class permits inheritance."),(0,r.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u8ba4\u4e3a\u5b9e\u73b0 Serializable \u63a5\u53e3\u5f88\u7b80\u5355\u8fd9\u4e2a\u89c2\u70b9\u4f3c\u662f\u800c\u975e\u3002\u9664\u975e\u7c7b\u53ea\u5728\u53d7\u4fdd\u62a4\u7684\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u5728\u8fd9\u79cd\u73af\u5883\u4e2d\uff0c\u7248\u672c\u6c38\u8fdc\u4e0d\u5fc5\u4e92\u64cd\u4f5c\uff0c\u670d\u52a1\u5668\u6c38\u8fdc\u4e0d\u4f1a\u66b4\u9732\u4e0d\u53ef\u4fe1\u7684\u6570\u636e\uff0c\u5426\u5219\u5b9e\u73b0 Serializable \u63a5\u53e3\u662f\u4e00\u9879\u4e25\u8083\u7684\u4e8b\u60c5\uff0c\u5e94\u8be5\u975e\u5e38\u5c0f\u5fc3\u3002\u5982\u679c\u7c7b\u5141\u8bb8\u7ee7\u627f\uff0c\u5219\u66f4\u52a0\u9700\u8981\u683c\u5916\u5c0f\u5fc3\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./Chapter-12/Chapter-12-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-12/Chapter-12-Item-85-Prefer-alternatives-to-Java-serialization"},"Item 85: Prefer alternatives to Java serialization\uff08\u4f18\u5148\u9009\u62e9 Java \u5e8f\u5217\u5316\u7684\u66ff\u4ee3\u65b9\u6848\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"},"Item 87: Consider using a custom serialized form\uff08\u8003\u8651\u4f7f\u7528\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\uff09")))))}m.isMDXComponent=!0}}]);
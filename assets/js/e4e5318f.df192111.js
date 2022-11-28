"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},s=void 0,o={unversionedId:"Books/EffectiveJava3/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields",id:"Books/EffectiveJava3/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields",title:"Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields",description:"Chapter 6. Enums and Annotations\uff08\u679a\u4e3e\u548c\u6ce8\u89e3\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields.md",sourceDirName:"Books/EffectiveJava3/Chapter-6",slug:"/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields",permalink:"/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-6-Item-35-Use-instance-fields-instead-of-ordinals",permalink:"/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-35-Use-instance-fields-instead-of-ordinals"},next:{title:"Chapter-6-Item-37-Use-EnumMap-instead-of-ordinal-indexing",permalink:"/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-37-Use-EnumMap-instead-of-ordinal-indexing"}},l={},p=[{value:"Chapter 6. Enums and Annotations\uff08\u679a\u4e3e\u548c\u6ce8\u89e3\uff09",id:"chapter-6-enums-and-annotations\u679a\u4e3e\u548c\u6ce8\u89e3",level:2},{value:"Item 36: Use EnumSet instead of bit fields\uff08\u7528 EnumSet \u66ff\u4ee3\u4f4d\u5b57\u6bb5\uff09",id:"item-36-use-enumset-instead-of-bit-fields\u7528-enumset-\u66ff\u4ee3\u4f4d\u5b57\u6bb5",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"chapter-6-enums-and-annotations\u679a\u4e3e\u548c\u6ce8\u89e3"},"Chapter 6. Enums and Annotations\uff08\u679a\u4e3e\u548c\u6ce8\u89e3\uff09"),(0,i.kt)("h3",{id:"item-36-use-enumset-instead-of-bit-fields\u7528-enumset-\u66ff\u4ee3\u4f4d\u5b57\u6bb5"},"Item 36: Use EnumSet instead of bit fields\uff08\u7528 EnumSet \u66ff\u4ee3\u4f4d\u5b57\u6bb5\uff09"),(0,i.kt)("p",null,"If the elements of an enumerated type are used primarily in sets, it is traditional to use the int enum pattern (Item 34), assigning a different power of 2 to each constant:"),(0,i.kt)("p",null,"\u5982\u679c\u679a\u4e3e\u7c7b\u578b\u7684\u5143\u7d20\u4e3b\u8981\u5728 Set \u4e2d\u4f7f\u7528\uff0c\u4f20\u7edf\u4e0a\u4f7f\u7528 int \u679a\u4e3e\u6a21\u5f0f\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-6-Item-34-Use-enums-instead-of-int-constants"},"Item-34"),"\uff09\uff0c\u901a\u8fc7\u4e0d\u540c\u7684 2 \u5e73\u65b9\u6570\u4e3a\u6bcf\u4e2a\u5e38\u91cf\u8d4b\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Bit field enumeration constants - OBSOLETE!\npublic class Text {\n    public static final int STYLE_BOLD = 1 << 0; // 1\n    public static final int STYLE_ITALIC = 1 << 1; // 2\n    public static final int STYLE_UNDERLINE = 1 << 2; // 4\n    public static final int STYLE_STRIKETHROUGH = 1 << 3; // 8\n    // Parameter is bitwise OR of zero or more STYLE_ constants\n    public void applyStyles(int styles) { ... }\n}\n")),(0,i.kt)("p",null,"This representation lets you use the bitwise OR operation to combine several constants into a set, known as a bit field:"),(0,i.kt)("p",null,"\u8fd9\u79cd\u8868\u793a\u65b9\u5f0f\u79f0\u4e3a\u4f4d\u5b57\u6bb5\uff0c\u5141\u8bb8\u4f60\u4f7f\u7528\u4f4d\u8fd0\u7b97\u7684 OR \u64cd\u4f5c\u5c06\u51e0\u4e2a\u5e38\u91cf\u7ec4\u5408\u6210\u4e00\u4e2a Set\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"text.applyStyles(STYLE_BOLD | STYLE_ITALIC);\n")),(0,i.kt)("p",null,"The bit field representation also lets you perform set operations such as union and intersection efficiently using bitwise arithmetic. But bit fields have all the disadvantages of int enum constants and more. It is even harder to interpret a bit field than a simple int enum constant when it is printed as a number. There is no easy way to iterate over all of the elements represented by a bit field. Finally, you have to predict the maximum number of bits you\u2019ll ever need at the time you\u2019re writing the API and choose a type for the bit field (typically int or long) accordingly. Once you\u2019ve picked a type, you can\u2019t exceed its width (32 or 64 bits) without changing the API."),(0,i.kt)("p",null,"\u4f4d\u5b57\u6bb5\u8868\u793a\u65b9\u5f0f\u5141\u8bb8\u4f7f\u7528\u4f4d\u8fd0\u7b97\u9ad8\u6548\u5730\u6267\u884c Set \u64cd\u4f5c\uff0c\u5982\u5e76\u96c6\u548c\u4ea4\u96c6\u3002\u4f46\u662f\u4f4d\u5b57\u6bb5\u5177\u6709 int \u679a\u4e3e\u5e38\u91cf\u6240\u6709\u7f3a\u70b9\uff0c\u751a\u81f3\u66f4\u591a\u3002\u5f53\u4f4d\u5b57\u6bb5\u88ab\u6253\u5370\u4e3a\u6570\u5b57\u65f6\uff0c\u5b83\u6bd4\u7b80\u5355\u7684 int \u679a\u4e3e\u5e38\u91cf\u66f4\u96be\u7406\u89e3\u3002\u6ca1\u6709\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\u53ef\u4ee5\u904d\u5386\u7531\u4f4d\u5b57\u6bb5\u8868\u793a\u7684\u6240\u6709\u5143\u7d20\u3002\u6700\u540e\uff0c\u4f60\u5fc5\u987b\u9884\u6d4b\u5728\u7f16\u5199 API \u65f6\u9700\u8981\u7684\u6700\u5927\u4f4d\u6570\uff0c\u5e76\u76f8\u5e94\u5730\u4e3a\u4f4d\u5b57\u6bb5\uff08\u901a\u5e38\u662f int \u6216 long\uff09\u9009\u62e9\u4e00\u79cd\u7c7b\u578b\u3002\u4e00\u65e6\u9009\u62e9\u4e86\u4e00\u79cd\u7c7b\u578b\uff0c\u5728\u4e0d\u66f4\u6539 API \u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u80fd\u8d85\u8fc7\u5b83\u7684\u5bbd\u5ea6\uff0832 \u6216 64 \u4f4d\uff09\u3002"),(0,i.kt)("p",null,"Some programmers who use enums in preference to int constants still cling to the use of bit fields when they need to pass around sets of constants. There is no reason to do this, because a better alternative exists. The java.util package provides the EnumSet class to efficiently represent sets of values drawn from a single enum type. This class implements the Set interface, providing all of the richness, type safety, and interoperability you get with any other Set implementation. But internally, each EnumSet is represented as a bit vector. If the underlying enum type has sixty-four or fewer elements\u2014and most do\u2014the entire EnumSet is represented with a single long, so its performance is comparable to that of a bit field. Bulk operations, such as removeAll and retainAll, are implemented using bitwise arithmetic, just as you\u2019d do manually for bit fields. But you are insulated from the ugliness and errorproneness of manual bit twiddling: the EnumSet does the hard work for you."),(0,i.kt)("p",null,"\u4e00\u4e9b\u4f7f\u7528\u679a\u4e3e\u800c\u4e0d\u662f int \u5e38\u91cf\u7684\u7a0b\u5e8f\u5458\u5728\u9700\u8981\u4f20\u9012\u5e38\u91cf\u96c6\u65f6\u4ecd\u7136\u575a\u6301\u4f7f\u7528\u4f4d\u5b57\u6bb5\u3002\u6ca1\u6709\u7406\u7531\u8fd9\u6837\u505a\uff0c\u56e0\u4e3a\u5b58\u5728\u66f4\u597d\u7684\u9009\u62e9\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"java.util")," \u5305\u63d0\u4f9b EnumSet \u7c7b\u6765\u6709\u6548\u5730\u8868\u793a\u4ece\u5355\u4e2a\u679a\u4e3e\u7c7b\u578b\u4e2d\u63d0\u53d6\u7684\u503c\u96c6\u3002\u8fd9\u4e2a\u7c7b\u5b9e\u73b0\u4e86 Set \u63a5\u53e3\uff0c\u63d0\u4f9b\u4e86\u6240\u6709\u5176\u4ed6 Set \u5b9e\u73b0\u6240\u5177\u6709\u7684\u4e30\u5bcc\u6027\u3001\u7c7b\u578b\u5b89\u5168\u6027\u548c\u4e92\u64cd\u4f5c\u6027\u3002\u4f46\u5728\u5185\u90e8\uff0c\u6bcf\u4e2a EnumSet \u90fd\u8868\u793a\u4e3a\u4e00\u4e2a\u4f4d\u5411\u91cf\u3002\u5982\u679c\u5e95\u5c42\u679a\u4e3e\u7c7b\u578b\u6709 64 \u4e2a\u6216\u66f4\u5c11\u7684\u5143\u7d20\uff08\u5927\u591a\u6570\u90fd\u662f\uff09\uff0c\u5219\u6574\u4e2a EnumSet \u7528\u4e00\u4e2a long \u8868\u793a\uff0c\u56e0\u6b64\u5176\u6027\u80fd\u4e0e\u4f4d\u5b57\u6bb5\u7684\u6027\u80fd\u76f8\u5f53\u3002\u6279\u91cf\u64cd\u4f5c\uff08\u5982 removeAll \u548c retainAll\uff09\u662f\u4f7f\u7528\u9010\u4f4d\u7b97\u6cd5\u5b9e\u73b0\u7684\uff0c\u5c31\u50cf\u624b\u52a8\u5904\u7406\u4f4d\u5b57\u6bb5\u4e00\u6837\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u907f\u514d\u56e0\u624b\u5de5\u4fee\u6539\u5bfc\u81f4\u4ea7\u751f\u4e0d\u826f\u4ee3\u7801\u548c\u6f5c\u5728\u9519\u8bef\uff1aEnumSet \u4e3a\u4f60\u5b8c\u6210\u4e86\u8fd9\u4e9b\u7e41\u91cd\u7684\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"Here is how the previous example looks when modified to use enums and enum sets instead of bit fields. It is shorter, clearer, and safer:"),(0,i.kt)("p",null,"\u5f53\u4e4b\u524d\u7684\u793a\u4f8b\u4fee\u6539\u4e3a\u4f7f\u7528\u679a\u4e3e\u548c EnumSet \u800c\u4e0d\u662f\u4f4d\u5b57\u6bb5\u65f6\u3002\u5b83\u66f4\u77ed\uff0c\u66f4\u6e05\u6670\uff0c\u66f4\u5b89\u5168\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// EnumSet - a modern replacement for bit fields\npublic class Text {\n    public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }\n    // Any Set could be passed in, but EnumSet is clearly best\n    public void applyStyles(Set<Style> styles) { ... }\n}\n")),(0,i.kt)("p",null,"Here is client code that passes an EnumSet instance to the applyStyles method. The EnumSet class provides a rich set of static factories for easy set creation, one of which is illustrated in this code:"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u5c06 EnumSet \u5b9e\u4f8b\u4f20\u9012\u7ed9 applyStyles \u65b9\u6cd5\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\u3002EnumSet \u7c7b\u63d0\u4f9b\u4e86\u4e00\u7ec4\u4e30\u5bcc\u7684\u9759\u6001\u5de5\u5382\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u521b\u5efa Set\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u6f14\u793a\u4e86\u5176\u4e2d\u7684\u4e00\u4e2a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));\n")),(0,i.kt)("p",null,"Note that the applyStyles method takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set<Style>")," rather than an ",(0,i.kt)("inlineCode",{parentName:"p"},"EnumSet<Style>"),". While it seems likely that all clients would pass an EnumSet to the method, it is generally good practice to accept the interface type rather than the implementation type (Item 64). This allows for the possibility of an unusual client to pass in some other Set implementation."),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0capplyStyles \u65b9\u6cd5\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Set<Style>")," \u800c\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"EnumSet<Style>"),"\u3002\u867d\u7136\u4f3c\u4e4e\u6240\u6709\u5ba2\u6237\u7aef\u90fd\u53ef\u80fd\u5c06 EnumSet \u4f20\u9012\u7ed9\u8be5\u65b9\u6cd5\uff0c\u4f46\u901a\u5e38\u8f83\u597d\u7684\u505a\u6cd5\u662f\u63a5\u53d7\u63a5\u53e3\u7c7b\u578b\u800c\u4e0d\u662f\u5b9e\u73b0\u7c7b\u578b\uff08",(0,i.kt)("a",{parentName:"p",href:"./Chapter-9-Item-64-Refer-to-objects-by-their-interfaces"},"Item-64"),"\uff09\u3002\u8fd9\u5141\u8bb8\u7279\u6b8a\u7684\u5ba2\u6237\u7aef\u4f20\u5165\u5176\u4ed6 Set \u5b9e\u73b0\u7684\u53ef\u80fd\u6027\u3002"),(0,i.kt)("p",null,"In summary, ",(0,i.kt)("strong",{parentName:"p"},"just because an enumerated type will be used in sets, there is no reason to represent it with bit fields.")," The EnumSet class combines the conciseness and performance of bit fields with all the many advantages of enum types described in Item 34. The one real disadvantage of EnumSet is that it is not, as of Java 9, possible to create an immutable EnumSet, but this will likely be remedied in an upcoming release. In the meantime, you can wrap an EnumSet with Collections.unmodifiableSet, but conciseness and performance will suffer."),(0,i.kt)("p",null,"\u603b\u4e4b\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u679a\u4e3e\u7c7b\u578b\u5c06\u5728 Set \u4e2d\u4f7f\u7528\uff0c\u6ca1\u6709\u7406\u7531\u7528\u4f4d\u5b57\u6bb5\u8868\u793a\u5b83\u3002")," EnumSet \u7c7b\u7ed3\u5408\u4e86\u4f4d\u5b57\u6bb5\u7684\u7b80\u6d01\u6027\u548c\u6027\u80fd\uff0c\u4ee5\u53ca ",(0,i.kt)("a",{parentName:"p",href:"./Chapter-6-Item-34-Use-enums-instead-of-int-constants"},"Item-34")," \u4e2d\u63cf\u8ff0\u7684\u679a\u4e3e\u7c7b\u578b\u7684\u8bb8\u591a\u4f18\u70b9\u3002EnumSet \u7684\u4e00\u4e2a\u771f\u6b63\u7684\u7f3a\u70b9\u662f\uff0c\u4ece Java 9 \u5f00\u59cb\uff0c\u5b83\u4e0d\u80fd\u521b\u5efa\u4e0d\u53ef\u53d8\u7684 EnumSet\uff0c\u5728\u672a\u6765\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u4f1a\u7ea0\u6b63\u8fd9\u4e00\u70b9\u3002\u540c\u65f6\uff0c\u53ef\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Collections.unmodifiableSet")," \u5305\u88c5 EnumSet\uff0c\u4f46\u7b80\u6d01\u6027\u548c\u6027\u80fd\u5c06\u53d7\u5230\u5f71\u54cd\u3002"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./Chapter-6-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,i.kt)("a",{parentName:"strong",href:"./Chapter-6-Item-35-Use-instance-fields-instead-of-ordinals"},"Item 35: Use instance fields instead of ordinals\uff08\u4f7f\u7528\u5b9e\u4f8b\u5b57\u6bb5\u66ff\u4ee3\u5e8f\u6570\uff09"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,i.kt)("a",{parentName:"strong",href:"./Chapter-6-Item-37-Use-EnumMap-instead-of-ordinal-indexing"},"Item 37: Use EnumMap instead of ordinal indexing\uff08\u4f7f\u7528 EnumMap \u66ff\u6362\u5e8f\u6570\u7d22\u5f15\uff09")))))}m.isMDXComponent=!0}}]);
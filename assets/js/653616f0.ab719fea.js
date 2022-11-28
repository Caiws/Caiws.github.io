"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=s,m=u["".concat(l,".").concat(h)]||u[h]||f[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={},o=void 0,i={unversionedId:"Books/EffectiveJava3/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types",id:"Books/EffectiveJava3/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types",title:"Chapter-4-Item-22-Use-interfaces-only-to-define-types",description:"Chapter 4. Classes and Interfaces\uff08\u7c7b\u548c\u63a5\u53e3\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types.md",sourceDirName:"Books/EffectiveJava3/Chapter-4",slug:"/Books/EffectiveJava3/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types",permalink:"/docs/Books/EffectiveJava3/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-4-Item-21-Design-interfaces-for-posterity",permalink:"/docs/Books/EffectiveJava3/Chapter-4/Chapter-4-Item-21-Design-interfaces-for-posterity"},next:{title:"Chapter-4-Item-23-Prefer-class-hierarchies-to-tagged-classes",permalink:"/docs/Books/EffectiveJava3/Chapter-4/Chapter-4-Item-23-Prefer-class-hierarchies-to-tagged-classes"}},l={},c=[{value:"Chapter 4. Classes and Interfaces\uff08\u7c7b\u548c\u63a5\u53e3\uff09",id:"chapter-4-classes-and-interfaces\u7c7b\u548c\u63a5\u53e3",level:2},{value:"Item 22: Use interfaces only to define types\uff08\u63a5\u53e3\u53ea\u7528\u4e8e\u5b9a\u4e49\u7c7b\u578b\uff09",id:"item-22-use-interfaces-only-to-define-types\u63a5\u53e3\u53ea\u7528\u4e8e\u5b9a\u4e49\u7c7b\u578b",level:3}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"chapter-4-classes-and-interfaces\u7c7b\u548c\u63a5\u53e3"},"Chapter 4. Classes and Interfaces\uff08\u7c7b\u548c\u63a5\u53e3\uff09"),(0,s.kt)("h3",{id:"item-22-use-interfaces-only-to-define-types\u63a5\u53e3\u53ea\u7528\u4e8e\u5b9a\u4e49\u7c7b\u578b"},"Item 22: Use interfaces only to define types\uff08\u63a5\u53e3\u53ea\u7528\u4e8e\u5b9a\u4e49\u7c7b\u578b\uff09"),(0,s.kt)("p",null,"When a class implements an interface, the interface serves as a type that can be used to refer to instances of the class. That a class implements an interface should therefore say something about what a client can do with instances of the class. It is inappropriate to define an interface for any other purpose."),(0,s.kt)("p",null,"\u5f53\u4e00\u4e2a\u7c7b\u5b9e\u73b0\u4e86\u4e00\u4e2a\u63a5\u53e3\u65f6\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f5c\u4e3a\u4e00\u79cd\u7c7b\u578b\uff0c\u53ef\u4ee5\u7528\u6765\u5f15\u7528\u7c7b\u7684\u5b9e\u4f8b\u3002\u56e0\u6b64\uff0c\u5b9e\u73b0\u63a5\u53e3\u7684\u7c7b\u5e94\u8be5\u8bf4\u660e\u4f7f\u7528\u8005\u53ef\u4ee5\u5bf9\u7c7b\u7684\u5b9e\u4f8b\u505a\u4ec0\u4e48\u3002\u4e3a\u5176\u4ed6\u4efb\u4f55\u76ee\u7684\u5b9a\u4e49\u63a5\u53e3\u90fd\u662f\u4e0d\u5408\u9002\u7684\u3002"),(0,s.kt)("p",null,"One kind of interface that fails this test is the so-called constant interface. Such an interface contains no methods; it consists solely of static final fields, each exporting a constant. Classes using these constants implement the interface to avoid the need to qualify constant names with a class name. Here is an example:"),(0,s.kt)("p",null,"\u4e0d\u6ee1\u8db3\u4e0a\u8ff0\u6761\u4ef6\u7684\u4e00\u79cd\u63a5\u53e3\u662f\u6240\u8c13\u7684\u5e38\u91cf\u63a5\u53e3\u3002\u8fd9\u6837\u7684\u63a5\u53e3\u4e0d\u5305\u542b\u4efb\u4f55\u65b9\u6cd5\uff1b\u5b83\u4ec5\u7531\u9759\u6001 final \u5b57\u6bb5\u7ec4\u6210\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u5bfc\u51fa\u4e00\u4e2a\u5e38\u91cf\u3002\u4f7f\u7528\u8fd9\u4e9b\u5e38\u91cf\u7684\u7c7b\u5b9e\u73b0\u63a5\u53e3\uff0c\u4ee5\u907f\u514d\u7528\u7c7b\u540d\u4fee\u9970\u5e38\u91cf\u540d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Constant interface antipattern - do not use!\npublic interface PhysicalConstants {\n    // Avogadro's number (1/mol)\n    static final double AVOGADROS_NUMBER = 6.022_140_857e23;\n\n    // Boltzmann constant (J/K)\n    static final double BOLTZMANN_CONSTANT = 1.380_648_52e-23;\n\n    // Mass of the electron (kg)\n    static final double ELECTRON_MASS = 9.109_383_56e-31;\n}\n")),(0,s.kt)("p",null,"The constant interface pattern is a poor use of interfaces. That a class uses some constants internally is an implementation detail. Implementing a constant interface causes this implementation detail to leak into the class\u2019s exported API. It is of no consequence to the users of a class that the class implements a constant interface. In fact, it may even confuse them. Worse, it represents a commitment: if in a future release the class is modified so that it no longer needs to use the constants, it still must implement the interface to ensure binary compatibility. If a nonfinal class implements a constant interface, all of its subclasses will have their namespaces polluted by the constants in the interface."),(0,s.kt)("p",null,"\u5e38\u91cf\u63a5\u53e3\u6a21\u5f0f\u662f\u4f7f\u7528\u63a5\u53e3\u7684\u7cdf\u7cd5\u65b9\u5f0f\u3002\u7c7b\u5185\u90e8\u4f1a\u4f7f\u7528\u4e00\u4e9b\u5e38\u91cf\uff0c\u8fd9\u662f\u5b9e\u73b0\u7ec6\u8282\u3002\u7136\u800c\uff0c\u5b9e\u73b0\u5e38\u91cf\u63a5\u53e3\u4f1a\u5bfc\u81f4\u8fd9\u4e2a\u5b9e\u73b0\u7ec6\u8282\u6cc4\u6f0f\u5230\u7c7b\u7684\u5bfc\u51fa API \u4e2d\u3002\u5bf9\u4e8e\u7c7b\u7684\u7528\u6237\u6765\u8bf4\uff0c\u7c7b\u5b9e\u73b0\u4e00\u4e2a\u5e38\u91cf\u63a5\u53e3\u6ca1\u6709\u4ec0\u4e48\u4ef7\u503c\u3002\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u751a\u81f3\u4f1a\u8ba9\u4ed6\u4eec\u611f\u5230\u56f0\u60d1\u3002\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u5b83\u4ee3\u8868\u4e86\u4e00\u79cd\u627f\u8bfa\uff1a\u5982\u679c\u5728\u5c06\u6765\u7684\u7248\u672c\u4e2d\u4fee\u6539\u4e86\u7c7b\uff0c\u4f7f\u5176\u4e0d\u518d\u9700\u8981\u4f7f\u7528\u5e38\u91cf\uff0c\u90a3\u4e48\u5b83\u4ecd\u7136\u5fc5\u987b\u5b9e\u73b0\u63a5\u53e3\u4ee5\u786e\u4fdd\u4e8c\u8fdb\u5236\u517c\u5bb9\u6027\u3002\u5982\u679c\u4e00\u4e2a\u975e final \u7c7b\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5e38\u91cf\u63a5\u53e3\uff0c\u90a3\u4e48\u5b83\u7684\u6240\u6709\u5b50\u7c7b\u7684\u547d\u540d\u7a7a\u95f4\u90fd\u4f1a\u88ab\u63a5\u53e3\u4e2d\u7684\u5e38\u91cf\u6240\u6c61\u67d3\u3002"),(0,s.kt)("p",null,"There are several constant interfaces in the Java platform libraries, such as java.io.ObjectStreamConstants. These interfaces should be regarded as anomalies and should not be emulated."),(0,s.kt)("p",null,"Java \u5e93\u4e2d\u6709\u51e0\u4e2a\u5e38\u91cf\u63a5\u53e3\uff0c\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"java.io.ObjectStreamConstants"),"\u3002\u8fd9\u4e9b\u63a5\u53e3\u5e94\u8be5\u88ab\u89c6\u4e3a\u53cd\u4f8b\uff0c\u4e0d\u5e94\u8be5\u88ab\u6548\u4eff\u3002"),(0,s.kt)("p",null,"If you want to export constants, there are several reasonable choices. If the constants are strongly tied to an existing class or interface, you should add them to the class or interface. For example, all of the boxed numerical primitive classes, such as Integer and Double, export MIN_VALUE and MAX_VALUE constants. If the constants are best viewed as members of an enumerated type, you should export them with an enum type (Item 34). Otherwise, you should export the constants with a noninstantiable utility class (Item 4). Here is a utility class version of the PhysicalConstants example shown earlier:"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5bfc\u51fa\u5e38\u91cf\uff0c\u6709\u51e0\u4e2a\u5408\u7406\u7684\u9009\u62e9\u3002\u5982\u679c\u8fd9\u4e9b\u5e38\u91cf\u4e0e\u73b0\u6709\u7684\u7c7b\u6216\u63a5\u53e3\u7d27\u5bc6\u7ed1\u5b9a\uff0c\u5219\u5e94\u8be5\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u7c7b\u6216\u63a5\u53e3\u3002\u4f8b\u5982\uff0c\u6240\u6709\u6570\u503c\u5305\u88c5\u7c7b\uff0c\u6bd4\u5982 Integer \u548c Double\uff0c\u90fd\u5bfc\u51fa MIN_VALUE \u548c MAX_VALUE \u5e38\u91cf\u3002\u5982\u679c\u5c06\u8fd9\u4e9b\u5e38\u91cf\u770b\u4f5c\u679a\u4e3e\u7c7b\u578b\u7684\u6210\u5458\uff0c\u90a3\u4e48\u5e94\u8be5\u4f7f\u7528 enum \u7c7b\u578b\u5bfc\u51fa\u5b83\u4eec\uff08",(0,s.kt)("a",{parentName:"p",href:"./Chapter-6-Item-34-Use-enums-instead-of-int-constants"},"Item-34"),"\uff09\u3002\u5426\u5219\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u4e0d\u53ef\u5b9e\u4f8b\u5316\u7684\u5de5\u5177\u7c7b\uff08",(0,s.kt)("a",{parentName:"p",href:"./Chapter-2-Item-4-Enforce-noninstantiability-with-a-private-constructor"},"Item-4"),"\uff09\u5bfc\u51fa\u5e38\u91cf\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4e4b\u524d\u7684 PhysicalConstants \u4f8b\u5b50\u7684\u5de5\u5177\u7c7b\u53e6\u4e00\u4e2a\u7248\u672c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Constant utility class\npackage com.effectivejava.science;\n\npublic class PhysicalConstants {\n    private PhysicalConstants() { } // Prevents instantiation\uff08\u5c06\u6784\u9020\u79c1\u6709\uff0c\u963b\u6b62\u5b9e\u4f8b\u5316\uff09\n    public static final double AVOGADROS_NUMBER = 6.022_140_857e23;\n    public static final double BOLTZMANN_CONST = 1.380_648_52e-23;\n    public static final double ELECTRON_MASS = 9.109_383_56e-31;\n}\n")),(0,s.kt)("p",null,"Incidentally, note the use of the underscore character ( _ ) in the numeric literals. Underscores, which have been legal since Java 7, have no effect on the values of numeric literals, but can make them much easier to read if used with discretion. Consider adding underscores to numeric literals, whether fixed of floating point, if they contain five or more consecutive digits. For base ten literals, whether integral or floating point, you should use underscores to separate literals into groups of three digits indicating positive and negative powers of one thousand."),(0,s.kt)("p",null,"\u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c\u6ce8\u610f\u53ef\u4ee5\u5728\u6570\u5b57\u5b57\u9762\u503c\u4e2d\u4f7f\u7528\u4e0b\u5212\u7ebf\uff08 _ \uff09\u3002\u4e0b\u5212\u7ebf\u81ea Java 7 \u4ee5\u6765\u4e00\u76f4\u662f\u5408\u6cd5\u7684\uff0c\u5b83\u5bf9\u6570\u5b57\u5b57\u9762\u503c\u6ca1\u6709\u5f71\u54cd\uff0c\u5982\u679c\u8c28\u614e\u4f7f\u7528\uff0c\u53ef\u4ee5\u4f7f\u5b83\u4eec\u66f4\u5bb9\u6613\u9605\u8bfb\u3002\u65e0\u8bba\u662f\u4e0d\u662f\u56fa\u5b9a\u7684\u6d6e\u70b9\u6570\uff0c\u5982\u679c\u5b83\u4eec\u5305\u542b\u4e94\u4e2a\u6216\u591a\u4e2a\u8fde\u7eed\u6570\u5b57\uff0c\u90fd\u53ef\u4ee5\u8003\u8651\u6dfb\u52a0\u4e0b\u5212\u7ebf\u5230\u6570\u5b57\u5b57\u9762\u503c\u3002\u5bf9\u4e8e\u4ee5 10 \u4e3a\u57fa\u6570\u7684\u5b57\u9762\u503c\uff0c\u65e0\u8bba\u662f\u6574\u6570\u8fd8\u662f\u6d6e\u70b9\u6570\uff0c\u90fd\u5e94\u8be5\u4f7f\u7528\u4e0b\u5212\u7ebf\u5c06\u5b57\u9762\u503c\u5206\u9694\u4e3a\u4e09\u4f4d\u6570\uff0c\u8868\u793a 1000 \u7684\u6b63\u5e42\u548c\u8d1f\u5e42\u3002"),(0,s.kt)("p",null,"Normally a utility class requires clients to qualify constant names with a class name, for example, PhysicalConstants.AVOGADROS_NUMBER. If you make heavy use of the constants exported by a utility class, you can avoid the need for qualifying the constants with the class name by making use of the static import facility:"),(0,s.kt)("p",null,"\u901a\u5e38\uff0c\u5de5\u5177\u7c7b\u8981\u6c42\u5ba2\u6237\u7aef\u4f7f\u7528\u7c7b\u540d\u6765\u9650\u5b9a\u5e38\u91cf\u540d\uff0c\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"PhysicalConstants.AVOGADROS_NUMBER"),"\u3002\u5982\u679c\u4f60\u5927\u91cf\u4f7f\u7528\u5de5\u5177\u7c7b\u5bfc\u51fa\u7684\u5e38\u91cf\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u9759\u6001\u5bfc\u5165\u673a\u5236\u6765\u907f\u514d\u4f7f\u7528\u7c7b\u540d\u9650\u5b9a\u5e38\u91cf\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Use of static import to avoid qualifying constants\nimport static com.effectivejava.science.PhysicalConstants.*;\n\npublic class Test {\n    double atoms(double mols) {\n        return AVOGADROS_NUMBER * mols;\n    } ...\n    // Many more uses of PhysicalConstants justify static import\n}\n")),(0,s.kt)("p",null,"In summary, interfaces should be used only to define types. They should not be used merely to export constants."),(0,s.kt)("p",null,"\u603b\u4e4b\uff0c\u63a5\u53e3\u5e94\u8be5\u53ea\u7528\u4e8e\u5b9a\u4e49\u7c7b\u578b\u3002\u5b83\u4eec\u4e0d\u5e94\u8be5\u7528\u4e8e\u5bfc\u51fa\u5e38\u91cf\u3002"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"./Chapter-4-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,s.kt)("a",{parentName:"strong",href:"./Chapter-4-Item-21-Design-interfaces-for-posterity"},"Item 21: Design interfaces for posterity\uff08\u4e3a\u540e\u4ee3\u8bbe\u8ba1\u63a5\u53e3\uff09"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,s.kt)("a",{parentName:"strong",href:"./Chapter-4-Item-23-Prefer-class-hierarchies-to-tagged-classes"},"Item 23: Prefer class hierarchies to tagged classes\uff08\u7c7b\u5c42\u6b21\u7ed3\u6784\u4f18\u4e8e\u5e26\u6807\u7b7e\u7684\u7c7b\uff09")))))}f.isMDXComponent=!0}}]);
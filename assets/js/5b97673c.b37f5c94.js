"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},o=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types",id:"Books/EffectiveJava3/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types",title:"Chapter-6-Item-41-Use-marker-interfaces-to-define-types",description:"Chapter 6. Enums and Annotations\uff08\u679a\u4e3e\u548c\u6ce8\u89e3\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types.md",sourceDirName:"Books/EffectiveJava3/Chapter-6",slug:"/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types",permalink:"/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-6-Item-40-Consistently-use-the-Override-annotation",permalink:"/docs/Books/EffectiveJava3/Chapter-6/Chapter-6-Item-40-Consistently-use-the-Override-annotation"},next:{title:"Chapter-7-Introduction",permalink:"/docs/Books/EffectiveJava3/Chapter-7/Chapter-7-Introduction"}},l={},c=[{value:"Chapter 6. Enums and Annotations\uff08\u679a\u4e3e\u548c\u6ce8\u89e3\uff09",id:"chapter-6-enums-and-annotations\u679a\u4e3e\u548c\u6ce8\u89e3",level:2},{value:"Item 41: Use marker interfaces to define types\uff08\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u5b9a\u4e49\u7c7b\u578b\uff09",id:"item-41-use-marker-interfaces-to-define-types\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u5b9a\u4e49\u7c7b\u578b",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chapter-6-enums-and-annotations\u679a\u4e3e\u548c\u6ce8\u89e3"},"Chapter 6. Enums and Annotations\uff08\u679a\u4e3e\u548c\u6ce8\u89e3\uff09"),(0,r.kt)("h3",{id:"item-41-use-marker-interfaces-to-define-types\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u5b9a\u4e49\u7c7b\u578b"},"Item 41: Use marker interfaces to define types\uff08\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u5b9a\u4e49\u7c7b\u578b\uff09"),(0,r.kt)("p",null,"A marker interface is an interface that contains no method declarations but merely designates (or \u201cmarks\u201d) a class that implements the interface as having some property. For example, consider the Serializable interface (Chapter 12). By implementing this interface, a class indicates that its instances can be written to an ObjectOutputStream (or \u201cserialized\u201d)."),(0,r.kt)("p",null,"\u6807\u8bb0\u63a5\u53e3\u662f\u4e00\u79cd\u4e0d\u5305\u542b\u4efb\u4f55\u65b9\u6cd5\u58f0\u660e\u7684\u63a5\u53e3\uff0c\u5b83\u53ea\u662f\u6307\u5b9a\uff08\u6216\u300c\u6807\u8bb0\u300d\uff09\u4e00\u4e2a\u7c7b\uff0c\u8be5\u7c7b\u5b9e\u73b0\u4e86\u5177\u6709\u67d0\u4e9b\u5c5e\u6027\u7684\u63a5\u53e3\u3002\u4f8b\u5982\uff0c\u8003\u8651 Serializable \u63a5\u53e3\uff08Chapter 12\uff09\u3002\u901a\u8fc7\u5b9e\u73b0\u6b64\u63a5\u53e3\uff0c\u8868\u793a\u7c7b\u7684\u5b9e\u4f8b\u53ef\u4ee5\u5199\u5165 ObjectOutputStream\uff08\u6216\u300c\u5e8f\u5217\u5316\u300d\uff09\u3002"),(0,r.kt)("p",null,"You may hear it said that marker annotations (Item 39) make marker interfaces obsolete. This assertion is incorrect. Marker interfaces have two advantages over marker annotations. First and foremost, ",(0,r.kt)("strong",{parentName:"p"},"marker interfaces define a type that is implemented by instances of the marked class; marker annotations do not.")," The existence of a marker interface type allows you to catch errors at compile time that you couldn\u2019t catch until runtime if you used a marker annotation."),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u542c\u8fc7\u4e00\u4e2a\u8bf4\u6cd5\uff1a\u6807\u8bb0\u63a5\u53e3\u5df2\u7ecf\u8fc7\u65f6\uff0c\u66f4\u597d\u7684\u65b9\u5f0f\u662f\u6807\u8bb0\u6ce8\u89e3\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-6-Item-39-Prefer-annotations-to-naming-patterns"},"Item-39"),"\uff09\u3002\u8fd9\u4e2a\u8a00\u8bba\u662f\u9519\u8bef\u7684\u3002\u4e0e\u6807\u8bb0\u6ce8\u89e3\u76f8\u6bd4\uff0c\u6807\u8bb0\u63a5\u53e3\u6709\u4e24\u4e2a\u4f18\u70b9\u3002\u9996\u5148\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bb0\u63a5\u53e3\u5b9a\u4e49\u7684\u7c7b\u578b\u7531\u6807\u8bb0\u7c7b\u7684\u5b9e\u4f8b\u5b9e\u73b0\uff1b\u6807\u8bb0\u6ce8\u89e3\u4e0d\u4f1a\u3002")," \u6807\u8bb0\u63a5\u53e3\u7c7b\u578b\u7684\u5b58\u5728\u5141\u8bb8\u4f60\u5728\u7f16\u8bd1\u65f6\u6355\u83b7\u9519\u8bef\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u6807\u8bb0\u6ce8\u89e3\uff0c\u5219\u5728\u8fd0\u884c\u65f6\u624d\u80fd\u6355\u83b7\u8fd9\u4e9b\u9519\u8bef\u3002"),(0,r.kt)("p",null,"Java\u2019s serialization facility (Chapter 6) uses the Serializable marker interface to indicate that a type is serializable. The ObjectOutputStream.writeObject method, which serializes the object that is passed to it, requires that its argument be serializable. Had the argument of this method been of type Serializable, an attempt to serialize an inappropriate object would have been detected at compile time (by type checking). Compile-time error detection is the intent of marker interfaces, but unfortunately, the ObjectOutputStream.write API does not take advantage of the Serializable interface: its argument is declared to be of type Object, so attempts to serialize an unserializable object won\u2019t fail until runtime."),(0,r.kt)("p",null,"Java \u7684\u5e8f\u5217\u5316\u5de5\u5177\uff08Chapter 6\uff09\u4f7f\u7528 Serializable \u6807\u8bb0\u63a5\u53e3\u6765\u8868\u660e\u4e00\u4e2a\u7c7b\u662f\u53ef\u5e8f\u5217\u5316\u7684\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectOutputStream.writeObject")," \u65b9\u6cd5\u5e8f\u5217\u5316\u4f20\u9012\u7ed9\u5b83\u7684\u5bf9\u8c61\uff0c\u5b83\u8981\u6c42\u5176\u53c2\u6570\u662f\u53ef\u5e8f\u5217\u5316\u7684\u3002\u5047\u8bbe\u8be5\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\u662f Serializable\uff0c\u90a3\u4e48\u5728\u7f16\u8bd1\u65f6\uff08\u901a\u8fc7\u7c7b\u578b\u68c0\u67e5\uff09\u5c31\u4f1a\u68c0\u6d4b\u5230\u5bf9\u4e0d\u5408\u9002\u7684\u5bf9\u8c61\u8fdb\u884c\u5e8f\u5217\u5316\u7684\u9519\u8bef\u3002\u7f16\u8bd1\u65f6\u9519\u8bef\u68c0\u6d4b\u662f\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u7684\u76ee\u7684\uff0c\u4f46\u4e0d\u5e78\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectOutputStream.writeObject")," \u6ca1\u6709\u5229\u7528 Serializable \u63a5\u53e3\uff1a\u5b83\u7684\u53c2\u6570\u88ab\u58f0\u660e\u4e3a Object \u7c7b\u578b\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u5c1d\u8bd5\u5e8f\u5217\u5316\u4e00\u4e2a\u4e0d\u53ef\u5e8f\u5217\u5316\u5bf9\u8c61\uff0c\u76f4\u5230\u8fd0\u884c\u65f6\u624d\u4f1a\u63d0\u793a\u5931\u8d25\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8 1\uff1a\u539f\u6587 ",(0,r.kt)("inlineCode",{parentName:"strong"},"ObjectOutputStream.write")," \u6709\u8bef\uff0c\u8be5\u65b9\u6cd5\u7684\u6bcf\u79cd\u91cd\u8f7d\u4ec5\u652f\u6301 int \u7c7b\u578b\u548c byte[]\uff0c\u5e94\u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"strong"},"ObjectOutputStream.writeObject"),"\uff0c\u5176\u6e90\u7801\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public final void writeObject(Object obj) throws IOException {\n    if (enableOverride) {\n        writeObjectOverride(obj);\n        return;\n    }\n    try {\n        writeObject0(obj, false);\n    } catch (IOException ex) {\n        if (depth == 0) {\n            writeFatalException(ex);\n        }\n        throw ex;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8 2\uff1a\u4f7f\u7528 ObjectOutputStream.writeObject \u7684\u4f8b\u5b50")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public class BaseClass implements Serializable {\n    private final int id;\n    private final String name;\n\n    public BaseClass(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    @Override\n    public String toString() {\n        return "id=" + id + ", name=\'" + name + \'\\\'\';\n    }\n}\n\npublic class Main {\n    private void Out() throws IOException {\n        BaseClass obj = new BaseClass(1, "Mark");\n        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(new File("out.txt")))) {\n            out.writeObject(obj);\n        }\n    }\n\n    private void In() throws IOException, ClassNotFoundException {\n        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(new File("out.txt")))) {\n            BaseClass obj = (BaseClass) in.readObject();\n            System.out.println(obj);\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Another advantage of marker interfaces over marker annotations is that they can be targeted more precisely.")," If an annotation type is declared with target ElementType.TYPE, it can be applied to any class or interface. Suppose you have a marker that is applicable only to implementations of a particular interface. If you define it as a marker interface, you can have it extend the sole interface to which it is applicable, guaranteeing that all marked types are also subtypes of the sole interface to which it is applicable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bb0\u63a5\u53e3\u76f8\u5bf9\u4e8e\u6807\u8bb0\u6ce8\u89e3\u7684\u53e6\u4e00\u4e2a\u4f18\u70b9\u662f\u53ef\u4ee5\u66f4\u7cbe\u786e\u5730\u5b9a\u4f4d\u5b83\u4eec\u3002")," \u5982\u679c\u6ce8\u89e3\u7c7b\u578b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Target(ElementType.TYPE)")," \u58f0\u660e\uff0c\u5b83\u53ef\u4ee5\u5e94\u7528\u4e8e\u4efb\u4f55\u7c7b\u6216\u63a5\u53e3\u3002\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u53ea\u9002\u7528\u4e8e\u7279\u5b9a\u63a5\u53e3\u6765\u5b9e\u73b0\u7684\u6807\u8bb0\u3002\u5982\u679c\u5c06\u5176\u5b9a\u4e49\u4e3a\u6807\u8bb0\u63a5\u53e3\uff0c\u5219\u53ef\u4ee5\u8ba9\u5b83\u6269\u5c55\u5176\u9002\u7528\u7684\u60df\u4e00\u63a5\u53e3\uff0c\u786e\u4fdd\u6240\u6709\u6807\u8bb0\u7684\u7c7b\u578b\u4e5f\u662f\u5176\u9002\u7528\u7684\u60df\u4e00\u63a5\u53e3\u7684\u5b50\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"Arguably, the Set interface is just such a restricted marker interface. It is applicable only to Collection subtypes, but it adds no methods beyond those defined by Collection. It is not generally considered to be a marker interface because it refines the contracts of several Collection methods, including add, equals, and hashCode. But it is easy to imagine a marker interface that is applicable only to subtypes of some particular interface and does not refine the contracts of any of the interface\u2019s methods. Such a marker interface might describe some invariant of the entire object or indicate that instances are eligible for processing by a method of some other class (in the way that the Serializable interface indicates that instances are eligible for processing by ObjectOutputStream)."),(0,r.kt)("p",null,"\u53ef\u4ee5\u8bf4\uff0cSet \u63a5\u53e3\u5c31\u662f\u8fd9\u6837\u4e00\u4e2a\u53d7\u9650\u7684\u6807\u8bb0\u63a5\u53e3\u3002\u5b83\u53ea\u9002\u7528\u4e8e Collection \u7684\u5b50\u7c7b\uff0c\u4f46\u662f\u9664\u4e86 Collection \u5b9a\u4e49\u7684\u65b9\u6cd5\u4e4b\u5916\uff0c\u5b83\u4e0d\u6dfb\u52a0\u4efb\u4f55\u65b9\u6cd5\u3002\u5b83\u901a\u5e38\u4e0d\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u6807\u8bb0\u63a5\u53e3\uff0c\u56e0\u4e3a\u5b83\u7ec6\u5316\u4e86\u51e0\u4e2a Collection \u65b9\u6cd5\u7684\u7ea6\u5b9a\uff0c\u5305\u62ec add\u3001equals \u548c hashCode\u3002\u4f46\u662f\u5f88\u5bb9\u6613\u60f3\u8c61\u4e00\u4e2a\u6807\u8bb0\u63a5\u53e3\u53ea\u9002\u7528\u4e8e\u67d0\u4e9b\u7279\u5b9a\u63a5\u53e3\u7684\u5b50\u7c7b\uff0c\u800c\u4e0d\u7ec6\u5316\u4efb\u4f55\u63a5\u53e3\u65b9\u6cd5\u7684\u7ea6\u5b9a\u3002\u8fd9\u6837\u7684\u6807\u8bb0\u63a5\u53e3\u53ef\u80fd\u63cf\u8ff0\u6574\u4e2a\u5bf9\u8c61\u7684\u67d0\u4e2a\u4e0d\u53d8\u91cf\uff0c\u6216\u8005\u8868\u660e\u5b9e\u4f8b\u80fd\u591f\u5229\u7528\u5176\u4ed6\u7c7b\u7684\u65b9\u6cd5\u8fdb\u884c\u5904\u7406\uff08\u5c31\u50cf Serializable \u63a5\u53e3\u80fd\u591f\u5229\u7528 ObjectOutputStream \u8fdb\u884c\u5904\u7406\u4e00\u6837\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The chief advantage of marker annotations over marker interfaces is that they are part of the larger annotation facility.")," Therefore, marker annotations allow for consistency in annotation-based frameworks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5bf9\u4e8e\u6807\u8bb0\u63a5\u53e3\uff0c\u6807\u8bb0\u6ce8\u89e3\u7684\u4e3b\u8981\u4f18\u52bf\u662f\u5b83\u4eec\u53ef\u4ee5\u662f\u5176\u4ed6\u6ce8\u89e3\u529f\u80fd\u7684\u4e00\u90e8\u5206\u3002")," \u56e0\u6b64\uff0c\u6807\u8bb0\u6ce8\u89e3\u80fd\u591f\u4e0e\u57fa\u4e8e\u4f7f\u7528\u6ce8\u89e3\u7684\u6846\u67b6\u4fdd\u6301\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,"So when should you use a marker annotation and when should you use a marker interface? Clearly you must use an annotation if the marker applies to any program element other than a class or interface, because only classes and interfaces can be made to implement or extend an interface. If the marker applies only to classes and interfaces, ask yourself the question \u201cMight I want to write one or more methods that accept only objects that have this marking?\u201d If so, you should use a marker interface in preference to an annotation. This will make it possible for you to use the interface as a parameter type for the methods in question, which will result in the benefit of compile-time type checking. If you can convince yourself that you\u2019ll never want to write a method that accepts only objects with the marking, then you\u2019re probably better off using a marker annotation. If, additionally, the marking is part of a framework that makes heavy use of annotations, then a marker annotation is the clear choice."),(0,r.kt)("p",null,"\u90a3\u4e48\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528\u6807\u8bb0\u6ce8\u89e3\uff0c\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u5462\uff1f\u663e\u7136\uff0c\u5982\u679c\u6807\u8bb0\u5e94\u7528\u4e8e\u7c7b\u6216\u63a5\u53e3\u4e4b\u5916\u7684\u4efb\u4f55\u7a0b\u5e8f\u5143\u7d20\uff0c\u5219\u5fc5\u987b\u4f7f\u7528\u6807\u8bb0\u6ce8\u89e3\uff0c\u56e0\u4e3a\u53ea\u6709\u7c7b\u548c\u63a5\u53e3\u624d\u80fd\u5b9e\u73b0\u6216\u6269\u5c55\u63a5\u53e3\u3002\u5982\u679c\u6807\u8bb0\u53ea\u9002\u7528\u4e8e\u7c7b\u548c\u63a5\u53e3\uff0c\u90a3\u4e48\u53ef\u4ee5\u95ee\u81ea\u5df1\u8fd9\u6837\u4e00\u4e2a\u95ee\u9898\uff1a\u300c\u6211\u662f\u5426\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u6216\u591a\u4e2a\u65b9\u6cd5\uff0c\u53ea\u63a5\u53d7\u5177\u6709\u8fd9\u79cd\u6807\u8bb0\u7684\u5bf9\u8c61\uff1f\u300d\u5982\u679c\u662f\u8fd9\u6837\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u800c\u4e0d\u662f\u6807\u8bb0\u6ce8\u89e3\u3002\u8fd9\u5c06\u4f7f\u4f60\u80fd\u591f\u5c06\u63a5\u53e3\u7528\u4f5c\u76f8\u5173\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u8fd9\u5c06\u5e26\u6765\u7f16\u8bd1\u65f6\u7c7b\u578b\u68c0\u67e5\u7684\u597d\u5904\u3002\u5982\u679c\u4f60\u786e\u4fe1\u81ea\u5df1\u6c38\u8fdc\u4e0d\u4f1a\u7f16\u5199\u53ea\u63a5\u53d7\u5e26\u6709\u6807\u8bb0\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u90a3\u4e48\u6700\u597d\u4f7f\u7528\u6807\u8bb0\u6ce8\u89e3\u3002\u6b64\u5916\uff0c\u5982\u679c\u6846\u67b6\u5927\u91cf\u4f7f\u7528\u6ce8\u89e3\uff0c\u90a3\u4e48\u6807\u8bb0\u6ce8\u89e3\u5c31\u662f\u660e\u786e\u7684\u9009\u62e9\u3002"),(0,r.kt)("p",null,"In summary, marker interfaces and marker annotations both have their uses. If you want to define a type that does not have any new methods associated with it, a marker interface is the way to go. If you want to mark program elements other than classes and interfaces or to fit the marker into a framework that already makes heavy use of annotation types, then a marker annotation is the correct choice. ",(0,r.kt)("strong",{parentName:"p"},"If you find yourself writing a marker annotation type whose target is ElementType.TYPE, take the time to figure out whether it really should be an annotation type or whether a marker interface would be more appropriate.")),(0,r.kt)("p",null,"\u603b\u4e4b\uff0c\u6807\u8bb0\u63a5\u53e3\u548c\u6807\u8bb0\u6ce8\u89e3\u90fd\u6709\u5404\u81ea\u7684\u7528\u9014\u3002\u5982\u679c\u4f60\u60f3\u8981\u5b9a\u4e49\u4e00\u4e2a\u6ca1\u6709\u4e0e\u4e4b\u5173\u8054\u7684\u65b0\u65b9\u6cd5\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f7f\u7528\u6807\u8bb0\u63a5\u53e3\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6807\u8bb0\u7c7b\u548c\u63a5\u53e3\u4e4b\u5916\u7684\u7a0b\u5e8f\u5143\u7d20\uff0c\u6216\u8005\u5c06\u6807\u8bb0\u7b26\u653e\u5165\u5df2\u7ecf\u5927\u91cf\u4f7f\u7528\u6ce8\u89e3\u7c7b\u578b\u7684\u6846\u67b6\u4e2d\uff0c\u90a3\u4e48\u6807\u8bb0\u6ce8\u89e3\u5c31\u662f\u6b63\u786e\u7684\u9009\u62e9\u3002\u5982\u679c\u4f60\u53d1\u73b0\u81ea\u5df1\u7f16\u5199\u7684\u6807\u8bb0\u6ce8\u89e3\u7c7b\u578b\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Target(ElementType.TYPE)")," \u58f0\u660e\uff08",(0,r.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8\uff1a\u610f\u5728\u8bf4\u660e\u65e2\u53ef\u4ee5\u7528\u6807\u8bb0\u6ce8\u89e3\uff0c\u4e5f\u53ef\u4ee5\u7528\u6807\u8bb0\u63a5\u53e3\u7684\u60c5\u51b5"),"\uff09\uff0c\u90a3\u4e48\u8bf7\u82b1\u65f6\u95f4\u5f04\u6e05\u695a\u7a76\u7adf\u5e94\u8be5\u7528\u6ce8\u89e3\u7c7b\u578b\uff0c\u8fd8\u662f\u6807\u8bb0\u63a5\u53e3\u66f4\u5408\u9002\u3002"),(0,r.kt)("p",null,"In a sense, this item is the inverse of Item 22, which says, \u201cIf you don\u2019t want to define a type, don\u2019t use an interface.\u201d To a first approximation, this item says, \u201cIf you do want to define a type, do use an interface.\u201d"),(0,r.kt)("p",null,"\u4ece\u67d0\u79cd\u610f\u4e49\u4e0a\u8bf4\uff0c\u672c\u6761\u76ee\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-22-Use-interfaces-only-to-define-types"},"Item-22")," \u7684\u8bf4\u6cd5\u76f8\u53cd\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u300c\u5982\u679c\u4e0d\u60f3\u5b9a\u4e49\u7c7b\u578b\uff0c\u5c31\u4e0d\u8981\u4f7f\u7528\u63a5\u53e3\u3002\u300d\uff0c\u4e0e\u672c\u6761\u76ee\u5e94\u7528\u573a\u666f\u9002\u5e94\u7684\u8bf4\u6cd5\u662f\uff0c\u300c\u5982\u679c\u4f60\u786e\u5b9e\u60f3\u5b9a\u4e49\u7c7b\u578b\uff0c\u90a3\u4e48\u5c31\u8981\u4f7f\u7528\u63a5\u53e3\u3002\u300d"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./Chapter-6-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-6-Item-40-Consistently-use-the-Override-annotation"},"Item 40: Consistently use the Override annotation\uff08\u575a\u6301\u4f7f\u7528 @Override \u6ce8\u89e3\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-7-Introduction"},"Chapter 7 Introduction\uff08\u7ae0\u8282\u4ecb\u7ecd\uff09")))))}m.isMDXComponent=!0}}]);
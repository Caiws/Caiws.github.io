"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=o.createContext({}),l=function(e){var t=o.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,h=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=n,m=d["".concat(h,".").concat(p)]||d[p]||c[p]||i;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const i={},r=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals",id:"Books/EffectiveJava3/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals",title:"Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals",description:"Chapter 3. Methods Common to All Objects\uff08\u5bf9\u8c61\u7684\u901a\u7528\u65b9\u6cd5\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals.md",sourceDirName:"Books/EffectiveJava3/Chapter-3",slug:"/Books/EffectiveJava3/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals",permalink:"/docs/Books/EffectiveJava3/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals",permalink:"/docs/Books/EffectiveJava3/Chapter-3/Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals"},next:{title:"Chapter-3-Item-12-Always-override-toString",permalink:"/docs/Books/EffectiveJava3/Chapter-3/Chapter-3-Item-12-Always-override-toString"}},h={},l=[{value:"Chapter 3. Methods Common to All Objects\uff08\u5bf9\u8c61\u7684\u901a\u7528\u65b9\u6cd5\uff09",id:"chapter-3-methods-common-to-all-objects\u5bf9\u8c61\u7684\u901a\u7528\u65b9\u6cd5",level:2},{value:"Item 11: Always override hashCode when you override equals\uff08\u5f53\u8986\u76d6 equals \u65b9\u6cd5\u65f6\uff0c\u603b\u8981\u8986\u76d6 hashCode \u65b9\u6cd5\uff09",id:"item-11-always-override-hashcode-when-you-override-equals\u5f53\u8986\u76d6-equals-\u65b9\u6cd5\u65f6\u603b\u8981\u8986\u76d6-hashcode-\u65b9\u6cd5",level:3}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"chapter-3-methods-common-to-all-objects\u5bf9\u8c61\u7684\u901a\u7528\u65b9\u6cd5"},"Chapter 3. Methods Common to All Objects\uff08\u5bf9\u8c61\u7684\u901a\u7528\u65b9\u6cd5\uff09"),(0,n.kt)("h3",{id:"item-11-always-override-hashcode-when-you-override-equals\u5f53\u8986\u76d6-equals-\u65b9\u6cd5\u65f6\u603b\u8981\u8986\u76d6-hashcode-\u65b9\u6cd5"},"Item 11: Always override hashCode when you override equals\uff08\u5f53\u8986\u76d6 equals \u65b9\u6cd5\u65f6\uff0c\u603b\u8981\u8986\u76d6 hashCode \u65b9\u6cd5\uff09"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You must override hashCode in every class that overrides equals.")," If you fail to do so, your class will violate the general contract for hashCode, which will prevent it from functioning properly in collections such as HashMap and HashSet. Here is the contract, adapted from the Object specification:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5728\u8986\u76d6\u4e86 equals \u65b9\u6cd5\u7684\u7c7b\u4e2d\uff0c\u5fc5\u987b\u8986\u76d6 hashCode \u65b9\u6cd5\u3002")," \u5982\u679c\u4f60\u6ca1\u6709\u8fd9\u6837\u505a\uff0c\u8be5\u7c7b\u5c06\u8fdd\u53cd hashCode \u65b9\u6cd5\u7684\u4e00\u822c\u7ea6\u5b9a\uff0c\u8fd9\u5c06\u963b\u6b62\u8be5\u7c7b\u5728 HashMap \u548c HashSet \u7b49\u96c6\u5408\u4e2d\u6b63\u5e38\u8fd0\u884c\u3002\u4ee5\u4e0b\u662f\u6839\u636e Object \u89c4\u8303\u4fee\u6539\u7684\u7ea6\u5b9a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When the hashCode method is invoked on an object repeatedly during an execution of an application, it must consistently return the same value, provided no information used in equals comparisons is modified. This value need not remain consistent from one execution of an application to another.")),(0,n.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u6267\u884c\u671f\u95f4\u5bf9\u5bf9\u8c61\u91cd\u590d\u8c03\u7528 hashCode \u65b9\u6cd5\u65f6\uff0c\u5b83\u5fc5\u987b\u4e00\u81f4\u5730\u8fd4\u56de\u76f8\u540c\u7684\u503c\uff0c\u524d\u63d0\u662f\u4e0d\u5bf9 equals \u65b9\u6cd5\u4e2d\u7528\u4e8e\u6bd4\u8f83\u7684\u4fe1\u606f\u8fdb\u884c\u4fee\u6539\u3002\u8fd9\u4e2a\u503c\u4e0d\u9700\u8981\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u4e0d\u540c\u6267\u884c\u4e4b\u95f4\u4fdd\u6301\u4e00\u81f4\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If two objects are equal according to the equals(Object) method, then calling hashCode on the two objects must produce the same integer result.")),(0,n.kt)("p",null,"\u5982\u679c\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"p"},"equals(Object)")," \u65b9\u6cd5\u5224\u65ad\u51fa\u4e24\u4e2a\u5bf9\u8c61\u662f\u76f8\u7b49\u7684\uff0c\u90a3\u4e48\u5728\u4e24\u4e2a\u5bf9\u8c61\u4e0a\u8c03\u7528 hashCode \u65b9\u6cd5\u5fc5\u987b\u4ea7\u751f\u76f8\u540c\u7684\u6574\u6570\u7ed3\u679c\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If two objects are unequal according to the equals(Object) method, it is not required that calling hashCode on each of the objects must produce distinct results. However, the programmer should be aware that producing distinct results for unequal objects may improve the performance of hash tables.")),(0,n.kt)("p",null,"\u5982\u679c\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"p"},"equals(Object)")," \u65b9\u6cd5\u5224\u65ad\u51fa\u4e24\u4e2a\u5bf9\u8c61\u4e0d\u76f8\u7b49\uff0c\u5219\u4e0d\u9700\u8981\u5728\u6bcf\u4e2a\u5bf9\u8c61\u4e0a\u8c03\u7528 hashCode \u65b9\u6cd5\u65f6\u5fc5\u987b\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c\u3002\u4f46\u662f\uff0c\u7a0b\u5e8f\u5458\u5e94\u8be5\u77e5\u9053\uff0c\u4e3a\u4e0d\u76f8\u7b49\u7684\u5bf9\u8c61\u751f\u6210\u4e0d\u540c\u7684\u7ed3\u679c\u53ef\u80fd\u4f1a\u63d0\u9ad8\u6563\u5217\u8868\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The key provision that is violated when you fail to override hashCode is the second one: equal objects must have equal hash codes.")," Two distinct instances may be logically equal according to a class\u2019s equals method, but to Object\u2019s hashCode method, they\u2019re just two objects with nothing much in common. Therefore, Object\u2019s hashCode method returns two seemingly random numbers instead of two equal numbers as required by the contract.For example, suppose you attempt to use instances of the PhoneNumber class from Item 10 as keys in a HashMap:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5f53\u4f60\u65e0\u6cd5\u8986\u76d6 hashCode \u65b9\u6cd5\u65f6\uff0c\u5c06\u8fdd\u53cd\u7b2c\u4e8c\u4e2a\u5173\u952e\u6761\u6b3e\uff1a\u76f8\u7b49\u7684\u5bf9\u8c61\u5fc5\u987b\u5177\u6709\u76f8\u7b49\u7684\u6563\u5217\u7801\u3002")," \u6839\u636e\u7c7b\u7684 equals \u65b9\u6cd5\uff0c\u4e24\u4e2a\u4e0d\u540c\u7684\u5b9e\u4f8b\u5728\u903b\u8f91\u4e0a\u53ef\u80fd\u662f\u76f8\u7b49\u7684\uff0c\u4f46\u662f\u5bf9\u4e8e\u5bf9\u8c61\u7684 hashCode \u65b9\u6cd5\u6765\u8bf4\uff0c\u5b83\u4eec\u53ea\u662f\u4e24\u4e2a\u6ca1\u6709\u5171\u540c\u4e4b\u5904\u7684\u5bf9\u8c61\u3002\u56e0\u6b64\uff0cObject \u7684 hashCode \u65b9\u6cd5\u8fd4\u56de\u4e24\u4e2a\u770b\u4f3c\u968f\u673a\u7684\u6570\u5b57\uff0c\u800c\u4e0d\u662f\u7ea6\u5b9a\u8981\u6c42\u7684\u4e24\u4e2a\u76f8\u7b49\u7684\u6570\u5b57\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u4f60\u5c1d\u8bd5\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"./Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals"},"Item-10"),"\u4e2d\u7684 PhoneNumber \u7c7b\u5b9e\u4f8b\u4f5c\u4e3a HashMap \u4e2d\u7684\u952e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Map<PhoneNumber, String> m = new HashMap<>();\nm.put(new PhoneNumber(707, 867, 5309), "Jenny");\n')),(0,n.kt)("p",null,'At this point, you might expect m.get(new PhoneNumber(707, 867, 5309)) to return "Jenny", but instead, it returns null. Notice that two PhoneNumber instances are involved: one is used for insertion into the HashMap, and a second, equal instance is used for (attempted) retrieval. The PhoneNumber class\u2019s failure to override hashCode causes the two equal instances to have unequal hash codes, in violation of the hashCode contract.Therefore, the get method is likely to look for the phone number in a different hash bucket from the one in which it was stored by the put method. Even if the two instances happen to hash to the same bucket, the get method will almost certainly return null, because HashMap has an optimization that caches the hash code associated with each entry and doesn\u2019t bother checking for object equality if the hash codes don\u2019t match.'),(0,n.kt)("p",null,"\u6b64\u65f6\uff0c\u4f60\u53ef\u80fd\u671f\u671b ",(0,n.kt)("inlineCode",{parentName:"p"},"m.get(new PhoneNumber(707, 867,5309))")," \u8fd4\u56de\u300cJenny\u300d\uff0c\u4f46\u662f\u5b83\u8fd4\u56de null\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u6d89\u53ca\u5230\u4e24\u4e2a PhoneNumber \u5b9e\u4f8b\uff1a\u4e00\u4e2a\u7528\u4e8e\u63d2\u5165\u5230 HashMap \u4e2d\uff0c\u53e6\u4e00\u4e2a\u76f8\u7b49\u7684\u5b9e\u4f8b\uff08\u88ab\u8bd5\u56fe\uff09\u7528\u4e8e\u68c0\u7d22\u3002\u7531\u4e8e PhoneNumber \u7c7b\u672a\u80fd\u8986\u76d6 hashCode \u65b9\u6cd5\uff0c\u5bfc\u81f4\u4e24\u4e2a\u76f8\u7b49\u7684\u5b9e\u4f8b\u5177\u6709\u4e0d\u76f8\u7b49\u7684\u6563\u5217\u7801\uff0c\u8fd9\u8fdd\u53cd\u4e86 hashCode \u65b9\u6cd5\u7ea6\u5b9a\u3002\u56e0\u6b64\uff0cget \u65b9\u6cd5\u67e5\u627e\u7535\u8bdd\u53f7\u7801\u7684\u6563\u5217\u6876\u53ef\u80fd\u4f1a\u4e0e put \u65b9\u6cd5\u5b58\u50a8\u7535\u8bdd\u53f7\u7801\u7684\u6563\u5217\u6876\u4e0d\u540c\u3002\u5373\u4f7f\u8fd9\u4e24\u4e2a\u5b9e\u4f8b\u78b0\u5de7\u5206\u914d\u5728\u540c\u4e00\u4e2a\u6563\u5217\u6876\u4e0a\uff0cget \u65b9\u6cd5\u51e0\u4e4e\u80af\u5b9a\u4f1a\u8fd4\u56de null\uff0c\u56e0\u4e3a HashMap \u6709\u4e00\u4e2a\u4f18\u5316\uff0c\u5b83\u7f13\u5b58\u6bcf\u4e2a\u6761\u76ee\u76f8\u5173\u8054\u7684\u6563\u5217\u7801\uff0c\u5982\u679c\u6563\u5217\u7801\u4e0d\u5339\u914d\uff0c\u5c31\u4e0d\u4f1a\u68c0\u67e5\u5bf9\u8c61\u662f\u5426\u76f8\u7b49\u3002"),(0,n.kt)("p",null,"Fixing this problem is as simple as writing a proper hashCode method for PhoneNumber. So what should a hashCode method look like? It\u2019s trivial to write a bad one. This one, for example, is always legal but should never be used:"),(0,n.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5c31\u50cf\u4e3a PhoneNumber \u7f16\u5199\u4e00\u4e2a\u6b63\u786e\u7684 hashCode \u65b9\u6cd5\u4e00\u6837\u7b80\u5355\u3002\u90a3\u4e48 hashCode \u65b9\u6cd5\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u7684\u5462\uff1f\u5199\u4e00\u4e2a\u53cd\u9762\u4f8b\u5b50\u5f88\u5bb9\u6613\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u65b9\u6cd5\u662f\u5408\u6cd5\u7684\uff0c\u4f46\u662f\u4e0d\u5e94\u8be5\u88ab\u4f7f\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// The worst possible legal hashCode implementation - never use!\n@Override\npublic int hashCode() { return 42; }\n")),(0,n.kt)("p",null,"It\u2019s legal because it ensures that equal objects have the same hash code. It\u2019s atrocious because it ensures that every object has the same hash code. Therefore,every object hashes to the same bucket, and hash tables degenerate to linked lists. Programs that should run in linear time instead run in quadratic time. For large hash tables, this is the difference between working and not working."),(0,n.kt)("p",null,"\u5b83\u662f\u5408\u6cd5\u7684\uff0c\u56e0\u4e3a\u5b83\u786e\u4fdd\u4e86\u76f8\u7b49\u7684\u5bf9\u8c61\u5177\u6709\u76f8\u540c\u7684\u6563\u5217\u7801\u3002\u540c\u65f6\u5b83\u4e5f\u5f88\u7cdf\u7cd5\uff0c\u56e0\u4e3a\u5b83\u4f7f\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u76f8\u540c\u7684\u6563\u5217\u7801\u3002\u56e0\u6b64\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u5206\u914d\u5230\u540c\u4e00\u4e2a\u6876\u4e2d\uff0c\u6563\u5217\u8868\u9000\u5316\u4e3a\u94fe\u8868\u3002\u8fd9\u6837\uff0c\u539f\u672c\u5e94\u8be5\u5728\u7ebf\u6027\u9636 ",(0,n.kt)("inlineCode",{parentName:"p"},"O(n)")," \u8fd0\u884c\u7684\u7a0b\u5e8f\u5c06\u5728\u5e73\u65b9\u9636 ",(0,n.kt)("inlineCode",{parentName:"p"},"O(n^2)")," \u8fd0\u884c\u3002\u5bf9\u4e8e\u5927\u578b\u6563\u5217\u8868\uff0c\u8fd9\u662f\u5de5\u4f5c\u548c\u4e0d\u5de5\u4f5c\u7684\u533a\u522b\u3002"),(0,n.kt)("p",null,"A good hash function tends to produce unequal hash codes for unequal instances. This is exactly what is meant by the third part of the hashCode contract. Ideally, a hash function should distribute any reasonable collection of unequal instances uniformly across all int values. Achieving this ideal can be difficult. Luckily it\u2019s not too hard to achieve a fair approximation. Here is a simple recipe:"),(0,n.kt)("p",null,"\u4e00\u4e2a\u597d\u7684\u6563\u5217\u7b97\u6cd5\u503e\u5411\u4e8e\u4e3a\u4e0d\u76f8\u7b49\u7684\u5b9e\u4f8b\u751f\u6210\u4e0d\u76f8\u7b49\u7684\u6563\u5217\u7801\u3002\u8fd9\u6b63\u662f hashCode \u65b9\u6cd5\u7ea6\u5b9a\u7b2c\u4e09\u90e8\u5206\u7684\u542b\u4e49\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u6563\u5217\u7b97\u6cd5\u5e94\u8be5\u5728\u6240\u6709 int \u503c\u4e0a\u5747\u5300\u5408\u7406\u5206\u5e03\u6240\u6709\u4e0d\u76f8\u7b49\u5b9e\u4f8b\u96c6\u5408\u3002\u5b9e\u73b0\u8fd9\u4e2a\u7406\u60f3\u662f\u5f88\u56f0\u96be\u7684\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5b9e\u73b0\u4e00\u4e2a\u7c7b\u4f3c\u7684\u5e76\u4e0d\u592a\u96be\u3002\u8fd9\u91cc\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u65b9\u5f0f\uff1a"),(0,n.kt)("p",null,"1\u3001Declare an int variable named result, and initialize it to the hash code c for the first significant field in your object, as computed in step 2.a. (Recall from Item 10 that a significant field is a field that affects equals comparisons.)"),(0,n.kt)("p",null,"\u58f0\u660e\u4e00\u4e2a\u540d\u4e3a result \u7684 int \u53d8\u91cf\uff0c\u5e76\u5c06\u5176\u521d\u59cb\u5316\u4e3a\u5bf9\u8c61\u4e2d\u7b2c\u4e00\u4e2a\u91cd\u8981\u5b57\u6bb5\u7684\u6563\u5217\u7801 c\uff0c\u5982\u6b65\u9aa4 2.a \u4e2d\u8ba1\u7b97\u7684\u90a3\u6837\u3002\uff08\u56de\u60f3\u4e00\u4e0b ",(0,n.kt)("a",{parentName:"p",href:"./Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals"},"Item-10")," \u4e2d\u7684\u91cd\u8981\u5b57\u6bb5\u4f1a\u5bf9\u6bd4\u8f83\u4ea7\u751f\u5f71\u54cd\uff09"),(0,n.kt)("p",null,"2\u3001For every remaining significant field f in your object, do the following:"),(0,n.kt)("p",null,"\u5bf9\u8c61\u4e2d\u5269\u4f59\u7684\u91cd\u8981\u5b57\u6bb5 f\uff0c\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("p",null,"a. Compute an int hash code c for the field:"),(0,n.kt)("p",null,"\u4e3a\u5b57\u6bb5\u8ba1\u7b97\u4e00\u4e2a\u6574\u6570\u6563\u5217\u7801 c\uff1a"),(0,n.kt)("p",null,"i. If the field is of a primitive type, compute Type.hashCode(f),where Type is the boxed primitive class corresponding to f\u2019s type."),(0,n.kt)("p",null,"\u5982\u679c\u5b57\u6bb5\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u8ba1\u7b97 ",(0,n.kt)("inlineCode",{parentName:"p"},"Type.hashCode(f)"),"\uff0c\u5176\u4e2d type \u662f\u4e0e f \u7c7b\u578b\u5bf9\u5e94\u7684\u5305\u88c5\u7c7b\u3002"),(0,n.kt)("p",null,"ii. If the field is an object reference and this class\u2019s equals method compares the field by recursively invoking equals, recursively invoke hashCode on the field. If a more complex comparison is required,compute a \u201ccanonical representation\u201d for this field and invoke hashCode on the canonical representation. If the value of the field is null, use 0 (or some other constant, but 0 is traditional)."),(0,n.kt)("p",null,"\u5982\u679c\u5b57\u6bb5\u662f\u5bf9\u8c61\u5f15\u7528\uff0c\u5e76\u4e14\u8be5\u7c7b\u7684 equals \u65b9\u6cd5\u901a\u8fc7\u9012\u5f52\u8c03\u7528 equals \u65b9\u6cd5\u6765\u6bd4\u8f83\u5b57\u6bb5\uff0c\u5219\u9012\u5f52\u8c03\u7528\u5b57\u6bb5\u4e0a\u7684 hashCode \u65b9\u6cd5\u3002\u5982\u679c\u9700\u8981\u66f4\u590d\u6742\u7684\u6bd4\u8f83\uff0c\u5219\u4e3a\u8be5\u5b57\u6bb5\u8ba1\u7b97\u4e00\u4e2a\u300ccanonical representation\u300d\uff0c\u5e76\u5728 canonical representation \u4e0a\u8c03\u7528 hashCode \u65b9\u6cd5\u3002\u5982\u679c\u5b57\u6bb5\u7684\u503c\u4e3a\u7a7a\uff0c\u5219\u4f7f\u7528 0\uff08\u6216\u5176\u4ed6\u5e38\u6570\uff0c\u4f46 0 \u662f\u60ef\u7528\u7684\uff09\u3002"),(0,n.kt)("p",null,"iii. If the field is an array, treat it as if each significant element were a separate field. That is, compute a hash code for each significant element by applying these rules recursively, and combine the values per step 2.b. If the array has no significant elements, use a constant, preferably not 0. If all elements are significant, use Arrays.hashCode."),(0,n.kt)("p",null,"\u5982\u679c\u5b57\u6bb5\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5219\u5c06\u5176\u6bcf\u4e2a\u91cd\u8981\u5143\u7d20\u90fd\u89c6\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u5b57\u6bb5\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u901a\u8fc7\u9012\u5f52\u5730\u5e94\u7528\u8fd9\u4e9b\u89c4\u5219\u8ba1\u7b97\u6bcf\u4e2a\u91cd\u8981\u5143\u7d20\u7684\u6563\u5217\u7801\uff0c\u5e76\u5c06\u6bcf\u4e2a\u6b65\u9aa4 2.b \u7684\u503c\u7ec4\u5408\u8d77\u6765\u3002\u5982\u679c\u6570\u7ec4\u4e2d\u6ca1\u6709\u91cd\u8981\u5143\u7d20\uff0c\u5219\u4f7f\u7528\u5e38\u91cf\uff0c\u6700\u597d\u4e0d\u662f 0\u3002\u5982\u679c\u6240\u6709\u5143\u7d20\u90fd\u5f88\u91cd\u8981\uff0c\u90a3\u4e48\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Arrays.hashCode"),"\u3002"),(0,n.kt)("p",null,"b. Combine the hash code c computed in step 2.a into result as follows:"),(0,n.kt)("p",null,"\u5c06\u6b65\u9aa4 2.a \u4e2d\u8ba1\u7b97\u7684\u6563\u5217\u7801 c \u5408\u5e76\u5230 result \u53d8\u91cf\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"result = 31 * result + c;\n")),(0,n.kt)("p",null,"3\u3001Return result."),(0,n.kt)("p",null,"\u8fd4\u56de result \u53d8\u91cf\u3002"),(0,n.kt)("p",null,"When you are finished writing the hashCode method, ask yourself whether equal instances have equal hash codes. Write unit tests to verify your intuition (unless you used AutoValue to generate your equals and hashCode methods,in which case you can safely omit these tests). If equal instances have unequal hash codes, figure out why and fix the problem."),(0,n.kt)("p",null,"\u5f53\u4f60\u5b8c\u6210\u4e86 hashCode \u65b9\u6cd5\u7684\u7f16\u5199\u4e4b\u540e\uff0c\u95ee\u95ee\u81ea\u5df1\u73b0\u5728\u76f8\u540c\u7684\u5b9e\u4f8b\u662f\u5426\u5177\u6709\u76f8\u540c\u7684\u6563\u5217\u7801\u3002\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u6765\u9a8c\u8bc1\u4f60\u7684\u76f4\u89c9\uff08\u9664\u975e\u4f60\u4f7f\u7528 AutoValue \u751f\u6210\u4f60\u7684 equals \u65b9\u6cd5\u548c hashCode \u65b9\u6cd5\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f60\u53ef\u4ee5\u5b89\u5168\u5730\u7701\u7565\u8fd9\u4e9b\u6d4b\u8bd5\uff09\u3002\u5982\u679c\u76f8\u540c\u7684\u5b9e\u4f8b\u6709\u4e0d\u76f8\u7b49\u7684\u6563\u5217\u7801\uff0c\u627e\u51fa\u539f\u56e0\u5e76\u4fee\u590d\u95ee\u9898\u3002"),(0,n.kt)("p",null,"You may exclude derived fields from the hash code computation. In other words, you may ignore any field whose value can be computed from fields included in the computation. You must exclude any fields that are not used in equals comparisons, or you risk violating the second provision of the hashCode contract."),(0,n.kt)("p",null,"\u53ef\u4ee5\u4ece\u6563\u5217\u7801\u8ba1\u7b97\u4e2d\u6392\u9664\u6d3e\u751f\u5b57\u6bb5\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f60\u53ef\u4ee5\u5ffd\u7565\u4efb\u4f55\u53ef\u4ee5\u4ece\u5305\u542b\u7684\u5b57\u6bb5\u8ba1\u7b97\u5176\u503c\u7684\u5b57\u6bb5\u3002\u4f60\u5fc5\u987b\u6392\u9664\u4e0d\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"equals")," \u6bd4\u8f83\u7684\u4efb\u4f55\u5b57\u6bb5\uff0c\u5426\u5219\u4f60\u53ef\u80fd\u4f1a\u8fdd\u53cd hashCode \u65b9\u6cd5\u7ea6\u5b9a\u7684\u7b2c\u4e8c\u4e2a\u6761\u6b3e\u3002"),(0,n.kt)("p",null,"The multiplication in step 2.b makes the result depend on the order of the fields, yielding a much better hash function if the class has multiple similar fields. For example, if the multiplication were omitted from a String hash function, all anagrams would have identical hash codes. The value 31 was chosen because it is an odd prime. If it were even and the multiplication overflowed, information would be lost, because multiplication by 2 is equivalent to shifting. The advantage of using a prime is less clear, but it is traditional. A nice property of 31 is that the multiplication can be replaced by a shift and a subtraction for better performance on some architectures: 31 ","*"," i == (i <<5) - i. Modern VMs do this sort of optimization automatically."),(0,n.kt)("p",null,"\u5728\u6b65\u9aa4 2.b \u4e2d\u4f7f\u7528\u7684\u4e58\u6cd5\u5c06\u4f7f\u7ed3\u679c\u53d6\u51b3\u4e8e\u5b57\u6bb5\u7684\u987a\u5e8f\uff0c\u5982\u679c\u7c7b\u6709\u591a\u4e2a\u76f8\u4f3c\u7684\u5b57\u6bb5\uff0c\u5219\u4f1a\u4ea7\u751f\u4e00\u4e2a\u66f4\u597d\u7684\u6563\u5217\u7b97\u6cd5\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u6563\u5217\u7b97\u6cd5\u4e2d\u7701\u7565\u4e86\u4e58\u6cd5\uff0c\u90a3\u4e48\u6240\u6709\u7684\u5b57\u6bcd\u987a\u5e8f\u90fd\u6709\u76f8\u540c\u7684\u6563\u5217\u7801\u3002\u9009\u62e9 31 \u662f\u56e0\u4e3a\u5b83\u662f\u5947\u7d20\u6570\u3002\u5982\u679c\u662f\u5076\u6570\uff0c\u4e58\u6cd5\u8fd0\u7b97\u5c31\u4f1a\u6ea2\u51fa\uff0c\u4fe1\u606f\u5c31\u4f1a\u4e22\u5931\uff0c\u56e0\u4e3a\u4e58\u6cd5\u8fd0\u7b97\u7b49\u540c\u4e8e\u79fb\u4f4d\u3002\u4f7f\u7528\u7d20\u6570\u7684\u597d\u5904\u4e0d\u592a\u660e\u663e\uff0c\u4f46\u5b83\u662f\u4f20\u7edf\u7528\u6cd5\u300231 \u6709\u4e00\u4e2a\u5f88\u597d\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u7528\u79fb\u4f4d\u548c\u51cf\u6cd5\u6765\u4ee3\u66ff\u4e58\u6cd5\uff0c\u4ece\u800c\u5728\u67d0\u4e9b\u4f53\u7cfb\u7ed3\u6784\u4e0a\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"31 * i == (i <<5) \u2013 i"),"\u3002\u73b0\u4ee3\u865a\u62df\u673a\u81ea\u52a8\u8fdb\u884c\u8fd9\u79cd\u4f18\u5316\u3002"),(0,n.kt)("p",null,"Let\u2019s apply the previous recipe to the PhoneNumber class:"),(0,n.kt)("p",null,"\u8ba9\u6211\u4eec\u5c06\u524d\u9762\u7684\u65b9\u6cd5\u5e94\u7528\u5230 PhoneNumber \u7c7b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// Typical hashCode method\n@Override\npublic int hashCode() {\n    int result = Short.hashCode(areaCode);\n    result = 31 * result + Short.hashCode(prefix);\n    result = 31 * result + Short.hashCode(lineNum);\n    return result;\n}\n")),(0,n.kt)("p",null,"Because this method returns the result of a simple deterministic computation whose only inputs are the three significant fields in a PhoneNumber instance,it is clear that equal PhoneNumber instances have equal hash codes. This method is, in fact, a perfectly good hashCode implementation for PhoneNumber, on par with those in the Java platform libraries. It is simple, is reasonably fast, and does a reasonable job of dispersing unequal phone numbers into different hash buckets."),(0,n.kt)("p",null,"\u56e0\u4e3a\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7b80\u5355\u7684\u786e\u5b9a\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u5b83\u7684\u552f\u4e00\u8f93\u5165\u662f PhoneNumber \u5b9e\u4f8b\u4e2d\u7684\u4e09\u4e2a\u91cd\u8981\u5b57\u6bb5\uff0c\u6240\u4ee5\u5f88\u660e\u663e\uff0c\u76f8\u7b49\u7684 PhoneNumber \u5b9e\u4f8b\u5177\u6709\u76f8\u7b49\u7684\u6563\u5217\u7801\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u662f PhoneNumber \u7684\u4e00\u4e2a\u975e\u5e38\u597d\u7684 hashCode \u65b9\u6cd5\u5b9e\u73b0\uff0c\u4e0e Java \u5e93\u4e2d\u7684 hashCode \u65b9\u6cd5\u5b9e\u73b0\u76f8\u5f53\u3002\u5b83\u5f88\u7b80\u5355\uff0c\u901f\u5ea6\u4e5f\u76f8\u5f53\u5feb\uff0c\u5e76\u4e14\u5408\u7406\u5730\u5c06\u4e0d\u76f8\u7b49\u7684\u7535\u8bdd\u53f7\u7801\u5206\u6563\u5230\u4e0d\u540c\u7684\u6563\u5217\u6876\u4e2d\u3002"),(0,n.kt)("p",null,"While the recipe in this item yields reasonably good hash functions, they are not state-of-the-art. They are comparable in quality to the hash functions found in the Java platform libraries\u2019 value types and are adequate for most uses. If you have a bona fide need for hash functions less likely to produce collisions, see Guava\u2019s com.google.common.hash.Hashing ","[Guava]","."),(0,n.kt)("p",null,"\u867d\u7136\u672c\u6761\u76ee\u4e2d\u7684\u65b9\u6cd5\u4ea7\u751f\u4e86\u76f8\u5f53\u4e0d\u9519\u7684\u6563\u5217\u7b97\u6cd5\uff0c\u4f46\u5b83\u4eec\u5e76\u4e0d\u662f\u6700\u5148\u8fdb\u7684\u3002\u5b83\u4eec\u7684\u8d28\u91cf\u53ef\u4e0e Java \u5e93\u7684\u503c\u7c7b\u578b\u4e2d\u7684\u6563\u5217\u7b97\u6cd5\u76f8\u5ab2\u7f8e\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u7528\u9014\u6765\u8bf4\u90fd\u662f\u8db3\u591f\u7684\u3002\u5982\u679c\u4f60\u786e\u5b9e\u9700\u8981\u4e0d\u592a\u53ef\u80fd\u4ea7\u751f\u51b2\u7a81\u7684\u6563\u5217\u7b97\u6cd5\uff0c\u8bf7\u53c2\u9605 Guava \u7684 com.google.common.hash.Hashing ","[Guava]","\u3002"),(0,n.kt)("p",null,"The Objects class has a static method that takes an arbitrary number of objects and returns a hash code for them. This method, named hash, lets you write one-line hashCode methods whose quality is comparable to those written according to the recipe in this item. Unfortunately, they run more slowly because they entail array creation to pass a variable number of arguments, as well as boxing and unboxing if any of the arguments are of primitive type. This style of hash function is recommended for use only in situations where performance is not critical. Here is a hash function for PhoneNumber written using this technique:"),(0,n.kt)("p",null,"Objects \u7c7b\u6709\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u5b83\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u5bf9\u8c61\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u6563\u5217\u7801\u3002\u8fd9\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"hash")," \u7684\u65b9\u6cd5\u5141\u8bb8\u4f60\u7f16\u5199\u53ea\u6709\u4e00\u884c\u4ee3\u7801\u7684 hashCode \u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u7684\u8d28\u91cf\u53ef\u4ee5\u4e0e\u672c\u6761\u76ee\u4e2d\u63d0\u4f9b\u7684\u7f16\u5199\u65b9\u6cd5\u5ab2\u7f8e\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u5b83\u4eec\u8fd0\u884c\u5f97\u66f4\u6162\uff0c\u56e0\u4e3a\u5b83\u4eec\u9700\u8981\u521b\u5efa\u6570\u7ec4\u6765\u4f20\u9012\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\uff0c\u5982\u679c\u4efb\u4f55\u53c2\u6570\u662f\u539f\u59cb\u7c7b\u578b\u7684\uff0c\u5219\u9700\u8981\u8fdb\u884c\u88c5\u7bb1\u548c\u62c6\u7bb1\u3002\u63a8\u8350\u53ea\u5728\u6027\u80fd\u4e0d\u91cd\u8981\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u8fd9\u79cd\u6563\u5217\u7b97\u6cd5\u3002\u4e0b\u9762\u662f\u4f7f\u7528\u8fd9\u79cd\u6280\u672f\u7f16\u5199\u7684 PhoneNumber \u7684\u6563\u5217\u7b97\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// One-line hashCode method - mediocre performance\n@Override\npublic int hashCode() {\n    return Objects.hash(lineNum, prefix, areaCode);\n}\n")),(0,n.kt)("p",null,"If a class is immutable and the cost of computing the hash code is significant,you might consider caching the hash code in the object rather than recalculating it each time it is requested. If you believe that most objects of this type will be used as hash keys, then you should calculate the hash code when the instance is created. Otherwise, you might choose to lazily initialize the hash code the first time hash-Code is invoked. Some care is required to ensure that the class remains thread-safe in the presence of a lazily initialized field (Item 83). Our PhoneNumber class does not merit this treatment, but just to show you how it\u2019s done, here it is. Note that the initial value for the hashCode field (in this case, 0) should not be the hash code of a commonly created instance:"),(0,n.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7c7b\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u5e76\u4e14\u8ba1\u7b97\u6563\u5217\u7801\u7684\u6210\u672c\u975e\u5e38\u9ad8\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8003\u8651\u5728\u5bf9\u8c61\u4e2d\u7f13\u5b58\u6563\u5217\u7801\uff0c\u800c\u4e0d\u662f\u5728\u6bcf\u6b21\u8bf7\u6c42\u65f6\u91cd\u65b0\u8ba1\u7b97\u5b83\u3002\u5982\u679c\u4f60\u8ba4\u4e3a\u8fd9\u79cd\u7c7b\u578b\u7684\u5927\u591a\u6570\u5bf9\u8c61\u90fd\u5c06\u7528\u4f5c\u6563\u5217\u952e\uff0c\u90a3\u4e48\u4f60\u5e94\u8be5\u5728\u521b\u5efa\u5b9e\u4f8b\u65f6\u8ba1\u7b97\u6563\u5217\u7801\u3002\u5426\u5219\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u7b2c\u4e00\u6b21\u8c03\u7528 hashCode \u65b9\u6cd5\u65f6\u5ef6\u8fdf\u521d\u59cb\u5316\u6563\u5217\u7801\u3002\u5728\u4e00\u4e2a\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\u5b57\u6bb5\uff08",(0,n.kt)("a",{parentName:"p",href:"./Chapter-11/Chapter-11-Item-83-Use-lazy-initialization-judiciously"},"Item-83"),"\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u786e\u4fdd\u8be5\u7c7b\u4ecd\u7136\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u6211\u4eec\u7684 PhoneNumber \u7c7b\u4e0d\u503c\u5f97\u8fdb\u884c\u8fd9\u79cd\u5904\u7406\uff0c\u4f46\u53ea\u662f\u4e3a\u4e86\u5411\u4f60\u5c55\u793a\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u5982\u4e0b\u6240\u793a\u3002\u6ce8\u610f\uff0c\u6563\u5217\u5b57\u6bb5\u7684\u521d\u59cb\u503c\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a 0\uff09\u4e0d\u5e94\u8be5\u662f\u901a\u5e38\u521b\u5efa\u7684\u5b9e\u4f8b\u7684\u6563\u5217\u7801\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// hashCode method with lazily initialized cached hash code\nprivate int hashCode; // Automatically initialized to 0\n@Override\npublic int hashCode() {\n    int result = hashCode;\n\n    if (result == 0) {\n        result = Short.hashCode(areaCode);\n        result = 31 * result + Short.hashCode(prefix);\n        result = 31 * result + Short.hashCode(lineNum);\n        hashCode = result;\n    }\n\n    return result;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Do not be tempted to exclude significant fields from the hash code computation to improve performance.")," While the resulting hash function may run faster, its poor quality may degrade hash tables\u2019 performance to the point where they become unusable. In particular, the hash function may be confronted with a large collection of instances that differ mainly in regions you\u2019ve chosen to ignore. If this happens, the hash function will map all these instances to a few hash codes, and programs that should run in linear time will instead run in quadratic time."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u8bd5\u56fe\u4ece\u6563\u5217\u7801\u8ba1\u7b97\u4e2d\u6392\u9664\u91cd\u8981\u5b57\u6bb5\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002")," \u867d\u7136\u5f97\u5230\u7684\u6563\u5217\u7b97\u6cd5\u53ef\u80fd\u8fd0\u884c\u5f97\u66f4\u5feb\uff0c\u4f46\u5176\u7cdf\u7cd5\u7684\u8d28\u91cf\u53ef\u80fd\u4f1a\u5c06\u6563\u5217\u8868\u7684\u6027\u80fd\u964d\u4f4e\u5230\u65e0\u6cd5\u4f7f\u7528\u7684\u7a0b\u5ea6\u3002\u7279\u522b\u662f\uff0c\u6563\u5217\u7b97\u6cd5\u53ef\u80fd\u4f1a\u9047\u5230\u5927\u91cf\u5b9e\u4f8b\uff0c\u8fd9\u4e9b\u5b9e\u4f8b\u5728\u4f60\u9009\u62e9\u5ffd\u7565\u7684\u4e0d\u540c\u533a\u57df\u3002\u5982\u679c\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u6563\u5217\u7b97\u6cd5\u5c06\u628a\u6240\u6709\u8fd9\u4e9b\u5b9e\u4f8b\u6620\u5c04\u5f88\u5c11\u4e00\u90e8\u5206\u6563\u5217\u7801\uff0c\u4f7f\u5f97\u539f\u672c\u5e94\u8be5\u5728\u7ebf\u6027\u9636 ",(0,n.kt)("inlineCode",{parentName:"p"},"O(n)")," \u8fd0\u884c\u7684\u7a0b\u5e8f\u5c06\u5728\u5e73\u65b9\u9636 ",(0,n.kt)("inlineCode",{parentName:"p"},"O(n^2)")," \u8fd0\u884c\u3002"),(0,n.kt)("p",null,"This is not just a theoretical problem. Prior to Java 2, the String hash function used at most sixteen characters evenly spaced throughout the string,starting with the first character. For large collections of hierarchical names, such as URLs, this function displayed exactly the pathological behavior described earlier."),(0,n.kt)("p",null,"\u8fd9\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u7406\u8bba\u95ee\u9898\u3002\u5728 Java 2 \u4e4b\u524d\uff0c\u5b57\u7b26\u4e32\u6563\u5217\u7b97\u6cd5\u5728\u5b57\u7b26\u4e32\u4e2d\uff0c\u4ee5\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5f00\u59cb\uff0c\u6700\u591a\u4f7f\u7528 16 \u4e2a\u5b57\u7b26\u3002\u5bf9\u4e8e\u5927\u91cf\u4e14\u5206\u5c42\u6b21\u7684\u96c6\u5408\uff08\u5982 url\uff09\uff0c\u8be5\u51fd\u6570\u5b8c\u5168\u5c55\u793a\u4e86\u524d\u9762\u63cf\u8ff0\u7684\u75c5\u6001\u884c\u4e3a\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Don\u2019t provide a detailed specification for the value returned by hashCode, so clients can\u2019t reasonably depend on it; this gives you the flexibility to change it.")," Many classes in the Java libraries, such as String and Integer, specify the exact value returned by their hashCode method as a function of the instance value. This is not a good idea but a mistake that we\u2019re forced to live with: It impedes the ability to improve the hash function in future releases. If you leave the details unspecified and a flaw is found in the hash function or a better hash function is discovered, you can change it in a subsequent release."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4e3a hashCode \u8fd4\u56de\u7684\u503c\u63d0\u4f9b\u8be6\u7ec6\u7684\u89c4\u8303\uff0c\u8fd9\u6837\u5ba2\u6237\u7aef\u5c31\u4e0d\u80fd\u7406\u6240\u5e94\u5f53\u7684\u4f9d\u8d56\u5b83\u3002\u8fd9\uff08\u4e5f\uff09\u7ed9\u4e86\u4f60\u66f4\u6539\u5b83\u7684\u4f59\u5730\u3002")," Java \u5e93\u4e2d\u7684\u8bb8\u591a\u7c7b\uff0c\u4f8b\u5982 String \u548c Integer\uff0c\u90fd\u5c06 hashCode \u65b9\u6cd5\u8fd4\u56de\u7684\u786e\u5207\u503c\u6307\u5b9a\u4e3a\u5b9e\u4f8b\u503c\u7684\u51fd\u6570\u3002\u8fd9\u4e0d\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\uff0c\u800c\u662f\u4e00\u4e2a\u6211\u4eec\u4e0d\u5f97\u4e0d\u9762\u5bf9\u7684\u9519\u8bef\uff1a\u5b83\u963b\u788d\u4e86\u5728\u672a\u6765\u7248\u672c\u4e2d\u63d0\u9ad8\u6563\u5217\u7b97\u6cd5\u7684\u80fd\u529b\u3002\u5982\u679c\u4f60\u4fdd\u7559\u4e86\u672a\u6307\u5b9a\u7684\u7ec6\u8282\uff0c\u5e76\u4e14\u5728\u6563\u5217\u7b97\u6cd5\u4e2d\u53d1\u73b0\u4e86\u7f3a\u9677\uff0c\u6216\u8005\u53d1\u73b0\u4e86\u66f4\u597d\u7684\u6563\u5217\u7b97\u6cd5\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u5728\u540e\u7eed\u7248\u672c\u4e2d\u66f4\u6539\u5b83\u3002"),(0,n.kt)("p",null,"In summary, you must override hashCode every time you override equals,or your program will not run correctly. Your hashCode method must obey the general contract specified in Object and must do a reasonable job assigning unequal hash codes to unequal instances. This is easy to achieve, if slightly tedious, using the recipe on page 51. As mentioned in Item 10, the AutoValue framework provides a fine alternative to writing equals and hashCode methods manually, and IDEs also provide some of this functionality."),(0,n.kt)("p",null,"\u603b\u4e4b\uff0c\u6bcf\u6b21\u8986\u76d6 equals \u65b9\u6cd5\u65f6\u90fd\u5fc5\u987b\u8986\u76d6 hashCode \u65b9\u6cd5\uff0c\u5426\u5219\u7a0b\u5e8f\u5c06\u65e0\u6cd5\u6b63\u786e\u8fd0\u884c\u3002\u4f60\u7684 hashCode \u65b9\u6cd5\u5fc5\u987b\u9075\u5b88 Object \u4e2d\u6307\u5b9a\u7684\u901a\u7528\u7ea6\u5b9a\uff0c\u5e76\u4e14\u5fc5\u987b\u5408\u7406\u5730\u5c06\u4e0d\u76f8\u7b49\u7684\u6563\u5217\u7801\u5206\u914d\u7ed9\u4e0d\u76f8\u7b49\u7684\u5b9e\u4f8b\u3002\u8fd9\u5f88\u5bb9\u6613\u5b9e\u73b0\uff0c\u5982\u679c\u6709\u70b9\u67af\u71e5\uff0c\u53ef\u4f7f\u7528\u7b2c 51 \u9875\u7684\u65b9\u6cd5\u3002\u5982 ",(0,n.kt)("a",{parentName:"p",href:"./Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals"},"Item-10")," \u6240\u8ff0\uff0cAutoValue \u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u79cd\u80fd\u5f88\u597d\u7684\u66ff\u4ee3\u624b\u52a8\u7f16\u5199 equals \u65b9\u6cd5\u548c hashCode \u65b9\u6cd5\u7684\u529f\u80fd\uff0cIDE \u4e5f\u63d0\u4f9b\u4e86\u8fd9\u79cd\u529f\u80fd\u3002"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"./Chapter-3-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,n.kt)("a",{parentName:"strong",href:"./Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals"},"Item 10: Obey the general contract when overriding equals\uff08\u8986\u76d6 equals \u65b9\u6cd5\u65f6\u5e94\u9075\u5b88\u7684\u7ea6\u5b9a\uff09"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,n.kt)("a",{parentName:"strong",href:"./Chapter-3-Item-12-Always-override-toString"},"Item 12: Always override toString\uff08\u59cb\u7ec8\u8986\u76d6 toString \u65b9\u6cd5\uff09")))))}c.isMDXComponent=!0}}]);
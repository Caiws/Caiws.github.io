"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},o=void 0,s={unversionedId:"Books/EffectiveJava3/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively",id:"Books/EffectiveJava3/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively",title:"Chapter-12-Item-88-Write-readObject-methods-defensively",description:"Chapter 12. Serialization\uff08\u5e8f\u5217\u5316\uff09",source:"@site/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively.md",sourceDirName:"Books/EffectiveJava3/Chapter-12",slug:"/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively",permalink:"/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter-12-Item-87-Consider-using-a-custom-serialized-form",permalink:"/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"},next:{title:"Chapter-12-Item-89-For-instance-control-prefer-enum-types-to-readResolve",permalink:"/docs/Books/EffectiveJava3/Chapter-12/Chapter-12-Item-89-For-instance-control-prefer-enum-types-to-readResolve"}},l={},c=[{value:"Chapter 12. Serialization\uff08\u5e8f\u5217\u5316\uff09",id:"chapter-12-serialization\u5e8f\u5217\u5316",level:2},{value:"Item 88: Write readObject methods defensively\uff08\u9632\u5fa1\u6027\u5730\u7f16\u5199 readObject \u65b9\u6cd5\uff09",id:"item-88-write-readobject-methods-defensively\u9632\u5fa1\u6027\u5730\u7f16\u5199-readobject-\u65b9\u6cd5",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"chapter-12-serialization\u5e8f\u5217\u5316"},"Chapter 12. Serialization\uff08\u5e8f\u5217\u5316\uff09"),(0,r.kt)("h3",{id:"item-88-write-readobject-methods-defensively\u9632\u5fa1\u6027\u5730\u7f16\u5199-readobject-\u65b9\u6cd5"},"Item 88: Write readObject methods defensively\uff08\u9632\u5fa1\u6027\u5730\u7f16\u5199 readObject \u65b9\u6cd5\uff09"),(0,r.kt)("p",null,"Item 50 contains an immutable date-range class with mutable private Date fields. The class goes to great lengths to preserve its invariants and immutability by defensively copying Date objects in its constructor and accessors. Here is the class:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./Chapter-8-Item-50-Make-defensive-copies-when-needed"},"Item-50")," \u5305\u542b\u4e00\u4e2a\u5177\u6709\u53ef\u53d8\u79c1\u6709 Date \u5b57\u6bb5\u7684\u4e0d\u53ef\u53d8\u65e5\u671f\u8303\u56f4\u7c7b\u3002\u8be5\u7c7b\u901a\u8fc7\u5728\u6784\u9020\u51fd\u6570\u548c\u8bbf\u95ee\u5668\u4e2d\u9632\u5fa1\u6027\u5730\u590d\u5236 Date \u5bf9\u8c61\uff0c\u4e0d\u9057\u4f59\u529b\u5730\u4fdd\u6301\u5176\u4e0d\u53d8\u6027\u548c\u4e0d\u53ef\u53d8\u6027\u3002\u5b83\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Immutable class that uses defensive copying\npublic final class Period {\n    private final Date start;\n    private final Date end;\n\n    /**\n    * @param start the beginning of the period\n    * @param end the end of the period; must not precede start\n    * @throws IllegalArgumentException if start is after end\n    * @throws NullPointerException if start or end is null\n    */\n    public Period(Date start, Date end) {\n        this.start = new Date(start.getTime());\n        this.end = new Date(end.getTime());\n        if (this.start.compareTo(this.end) > 0)\n            throw new IllegalArgumentException(start + " after " + end);\n    }\n\n    public Date start () { return new Date(start.getTime()); }\n\n    public Date end () { return new Date(end.getTime()); }\n\n    public String toString() { return start + " - " + end; }\n\n    ... // Remainder omitted\n}\n')),(0,r.kt)("p",null,"Suppose you decide that you want this class to be serializable. Because the physical representation of a Period object exactly mirrors its logical data content, it is not unreasonable to use the default serialized form (Item 87). Therefore, it might seem that all you have to do to make the class serializable is to add the words implements Serializable to the class declaration. If you did so, however, the class would no longer guarantee its critical invariants."),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u51b3\u5b9a\u8ba9\u8fd9\u4e2a\u7c7b\u53ef\u5e8f\u5217\u5316\u3002\u7531\u4e8e Period \u5bf9\u8c61\u7684\u7269\u7406\u8868\u793a\u7cbe\u786e\u5730\u53cd\u6620\u4e86\u5b83\u7684\u903b\u8f91\u6570\u636e\u5185\u5bb9\uff0c\u6240\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\u662f\u5408\u7406\u7684\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"},"Item-87"),"\uff09\u3002\u56e0\u6b64\uff0c\u8981\u4f7f\u7c7b\u53ef\u5e8f\u5217\u5316\uff0c\u4f3c\u4e4e\u53ea\u9700\u5c06\u5b9e\u73b0 Serializable \u63a5\u53e3\u3002\u4f46\u662f\uff0c\u5982\u679c\u8fd9\u6837\u505a\uff0c\u8be5\u7c7b\u5c06\u4e0d\u518d\u4fdd\u8bc1\u5b83\u7684\u4e34\u754c\u4e0d\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"The problem is that the readObject method is effectively another public constructor, and it demands all of the same care as any other constructor. Just as a constructor must check its arguments for validity (Item 49) and make defensive copies of parameters where appropriate (Item 50), so must a readObject method. If a readObject method fails to do either of these things, it is a relatively simple matter for an attacker to violate the class\u2019s invariants."),(0,r.kt)("p",null,"\u95ee\u9898\u662f readObject \u65b9\u6cd5\u5b9e\u9645\u4e0a\u662f\u53e6\u4e00\u4e2a\u516c\u5171\u6784\u9020\u51fd\u6570\uff0c\u5b83\u4e0e\u4efb\u4f55\u5176\u4ed6\u6784\u9020\u51fd\u6570\u6709\u76f8\u540c\u7684\u6ce8\u610f\u4e8b\u9879\u3002\u5982\uff0c\u6784\u9020\u51fd\u6570\u5fc5\u987b\u68c0\u67e5\u5176\u53c2\u6570\u7684\u6709\u6548\u6027\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-8-Item-49-Check-parameters-for-validity"},"Item-49"),"\uff09\u5e76\u5728\u9002\u5f53\u7684\u5730\u65b9\u5236\u4f5c\u9632\u5fa1\u6027\u526f\u672c\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-8-Item-50-Make-defensive-copies-when-needed"},"Item-50"),"\uff09\u4e00\u6837\uff0creadObject \u65b9\u6cd5\u4e5f\u5fc5\u987b\u8fd9\u6837\u505a\u3002\u5982\u679c readObject \u65b9\u6cd5\u6ca1\u6709\u505a\u5230\u8fd9\u4e24\u4ef6\u4e8b\u4e2d\u7684\u4efb\u4f55\u4e00\u4ef6\uff0c\u90a3\u4e48\u653b\u51fb\u8005\u5c31\u5f88\u5bb9\u6613\u8fdd\u53cd\u7c7b\u7684\u4e0d\u53d8\u6027\u3002"),(0,r.kt)("p",null,"Loosely speaking, readObject is a constructor that takes a byte stream as its sole parameter. In normal use, the byte stream is generated by serializing a normally constructed instance. The problem arises when readObject is presented with a byte stream that is artificially constructed to generate an object that violates the invariants of its class. Such a byte stream can be used to create an impossible object, which could not have been created using a normal constructor."),(0,r.kt)("p",null,"\u4e0d\u4e25\u683c\u5730\u8bf4\uff0creadObject \u662f\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u5b83\u552f\u4e00\u7684\u53c2\u6570\u662f\u5b57\u8282\u6d41\u3002\u5728\u6b63\u5e38\u4f7f\u7528\u4e2d\uff0c\u5b57\u8282\u6d41\u662f\u901a\u8fc7\u5e8f\u5217\u5316\u4e00\u4e2a\u6b63\u5e38\u6784\u9020\u7684\u5b9e\u4f8b\u751f\u6210\u7684\u3002\u5f53 readObject \u5448\u73b0\u4e00\u4e2a\u5b57\u8282\u6d41\u65f6\uff0c\u95ee\u9898\u5c31\u51fa\u73b0\u4e86\uff0c\u8fd9\u4e2a\u5b57\u8282\u6d41\u662f\u4eba\u4e3a\u6784\u9020\u7684\uff0c\u7528\u6765\u751f\u6210\u4e00\u4e2a\u8fdd\u53cd\u7c7b\u4e0d\u53d8\u6027\u7684\u5bf9\u8c61\u3002\u8fd9\u6837\u7684\u5b57\u8282\u6d41\u53ef\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u601d\u8bae\u7684\u5bf9\u8c61\uff0c\u800c\u8be5\u5bf9\u8c61\u4e0d\u80fd\u4f7f\u7528\u666e\u901a\u6784\u9020\u51fd\u6570\u521b\u5efa\u3002"),(0,r.kt)("p",null,"Assume that we simply added implements Serializable to the class declaration for Period. This ugly program would then generate a Period instance whose end precedes its start. The casts on byte values whose highorder bit is set is a consequence of Java\u2019s lack of byte literals combined with the unfortunate decision to make the byte type signed:"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u53ea\u662f\u7b80\u5355\u5730\u8ba9 Period \u5b9e\u73b0 Serializable \u63a5\u53e3\u3002\u7136\u540e\uff0c\u8fd9\u4e2a\u6709\u95ee\u9898\u7684\u7a0b\u5e8f\u5c06\u751f\u6210\u4e00\u4e2a Period \u5b9e\u4f8b\uff0c\u5176\u7ed3\u675f\u6bd4\u8d77\u59cb\u65f6\u95f4\u8fd8\u8981\u65e9\u3002\u5bf9\u5176\u9ad8\u4f4d\u4f4d\u8bbe\u7f6e\u7684\u5b57\u8282\u503c\u8fdb\u884c\u5f3a\u5236\u8f6c\u6362\uff0c\u8fd9\u662f\u7531\u4e8e Java \u7f3a\u5c11\u5b57\u8282\u5b57\u9762\u503c\uff0c\u518d\u52a0\u4e0a\u8ba9\u5b57\u8282\u7c7b\u578b\u7b7e\u540d\u7684\u9519\u8bef\u51b3\u5b9a\u5bfc\u81f4\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public class BogusPeriod {\n// Byte stream couldn't have come from a real Period instance!\n    private static final byte[] serializedForm = {\n        (byte)0xac, (byte)0xed, 0x00, 0x05, 0x73, 0x72, 0x00, 0x06,\n        0x50, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x40, 0x7e, (byte)0xf8,\n        0x2b, 0x4f, 0x46, (byte)0xc0, (byte)0xf4, 0x02, 0x00, 0x02,\n        0x4c, 0x00, 0x03, 0x65, 0x6e, 0x64, 0x74, 0x00, 0x10, 0x4c,\n        0x6a, 0x61, 0x76, 0x61, 0x2f, 0x75, 0x74, 0x69, 0x6c, 0x2f,\n        0x44, 0x61, 0x74, 0x65, 0x3b, 0x4c, 0x00, 0x05, 0x73, 0x74,\n        0x61, 0x72, 0x74, 0x71, 0x00, 0x7e, 0x00, 0x01, 0x78, 0x70,\n        0x73, 0x72, 0x00, 0x0e, 0x6a, 0x61, 0x76, 0x61, 0x2e, 0x75,\n        0x74, 0x69, 0x6c, 0x2e, 0x44, 0x61, 0x74, 0x65, 0x68, 0x6a,\n        (byte)0x81, 0x01, 0x4b, 0x59, 0x74, 0x19, 0x03, 0x00, 0x00,\n        0x78, 0x70, 0x77, 0x08, 0x00, 0x00, 0x00, 0x66, (byte)0xdf,\n        0x6e, 0x1e, 0x00, 0x78, 0x73, 0x71, 0x00, 0x7e, 0x00, 0x03,\n        0x77, 0x08, 0x00, 0x00, 0x00, (byte)0xd5, 0x17, 0x69, 0x22,\n        0x00, 0x78\n    };\n\n    public static void main(String[] args) {\n        Period p = (Period) deserialize(serializedForm);\n        System.out.println(p);\n    }\n\n    // Returns the object with the specified serialized form\n    static Object deserialize(byte[] sf) {\n        try {\n            return new ObjectInputStream(new ByteArrayInputStream(sf)).readObject();\n        } catch (IOException | ClassNotFoundException e) {\n            throw new IllegalArgumentException(e);\n        }\n    }\n}\n")),(0,r.kt)("p",null,"The byte array literal used to initialize serializedForm was generated by serializing a normal Period instance and hand-editing the resulting byte stream. The details of the stream are unimportant to the example, but if you\u2019re curious, the serialization byte-stream format is described in the Java Object Serialization Specification ","[Serialization, 6]",". If you run this program, it prints Fri Jan 01 12:00:00 PST 1999 - Sun Jan 01 12:00:00 PST 1984. Simply declaring Period serializable enabled us to create an object that violates its class invariants."),(0,r.kt)("p",null,"\u7528\u4e8e\u521d\u59cb\u5316 serializedForm \u7684\u5b57\u8282\u6570\u7ec4\u6587\u672c\u662f\u901a\u8fc7\u5e8f\u5217\u5316\u4e00\u4e2a\u666e\u901a Period \u5b9e\u4f8b\u5e76\u624b\u5de5\u7f16\u8f91\u5f97\u5230\u7684\u5b57\u8282\u6d41\u751f\u6210\u7684\u3002\u6d41\u7684\u7ec6\u8282\u5bf9\u793a\u4f8b\u5e76\u4e0d\u91cd\u8981\uff0c\u4f46\u662f\u5982\u679c\u4f60\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u5728\u300aJavaTM Object Serialization Specification\u300b","[serialization, 6]","\u4e2d\u67e5\u5230\u5e8f\u5217\u5316\u5b57\u8282\u6d41\u7684\u683c\u5f0f\u63cf\u8ff0\u3002\u5982\u679c\u4f60\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f\uff0c\u5b83\u5c06\u6253\u5370 ",(0,r.kt)("inlineCode",{parentName:"p"},"Fri Jan 01 12:00:00 PST 1999 - Sun Jan 01 12:00:00 PST 1984"),"\u3002\u53ea\u9700\u58f0\u660e Period \u53ef\u5e8f\u5217\u5316\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u8fdd\u53cd\u5176\u7c7b\u4e0d\u53d8\u6027\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"To fix this problem, provide a readObject method for Period that calls defaultReadObject and then checks the validity of the deserialized object. If the validity check fails, the readObject method throws InvalidObjectException, preventing the deserialization from completing:"),(0,r.kt)("p",null,"\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8bf7\u4e3a Period \u63d0\u4f9b\u4e00\u4e2a readObject \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8c03\u7528 defaultReadObject\uff0c\u7136\u540e\u68c0\u67e5\u53cd\u5e8f\u5217\u5316\u5bf9\u8c61\u7684\u6709\u6548\u6027\u3002\u5982\u679c\u6709\u6548\u6027\u68c0\u67e5\u5931\u8d25\uff0creadObject \u65b9\u6cd5\u629b\u51fa InvalidObjectException\uff0c\u963b\u6b62\u53cd\u5e8f\u5217\u5316\u5b8c\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// readObject method with validity checking - insufficient!\nprivate void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n    s.defaultReadObject();\n    // Check that our invariants are satisfied\n    if (start.compareTo(end) > 0)\n        throw new InvalidObjectException(start +" after "+ end);\n}\n')),(0,r.kt)("p",null,"While this prevents an attacker from creating an invalid Period instance, there is a more subtle problem still lurking. It is possible to create a mutable Period instance by fabricating a byte stream that begins with a valid Period instance and then appends extra references to the private Date fields internal to the Period instance. The attacker reads the Period instance from the ObjectInputStream and then reads the \u201crogue object references\u201d that were appended to the stream. These references give the attacker access to the objects referenced by the private Date fields within the Period object. By mutating these Date instances, the attacker can mutate the Period instance. The following class demonstrates this attack:"),(0,r.kt)("p",null,"\u867d\u7136\u8fd9\u53ef\u4ee5\u9632\u6b62\u653b\u51fb\u8005\u521b\u5efa\u65e0\u6548\u7684 Period \u5b9e\u4f8b\uff0c\u4f46\u8fd8\u6709\u4e00\u4e2a\u66f4\u5fae\u5999\u7684\u95ee\u9898\u4ecd\u7136\u6f5c\u4f0f\u7740\u3002\u53ef\u4ee5\u901a\u8fc7\u5b57\u8282\u6d41\u6765\u521b\u5efa\u4e00\u4e2a\u53ef\u53d8\u7684 Period \u5b9e\u4f8b\uff0c\u8be5\u5b57\u8282\u6d41\u4ee5\u4e00\u4e2a\u6709\u6548\u7684 Period \u5b9e\u4f8b\u5f00\u59cb\uff0c\u7136\u540e\u5411 Period \u5b9e\u4f8b\u5185\u90e8\u7684\u79c1\u6709\u65e5\u671f\u5b57\u6bb5\u8ffd\u52a0\u989d\u5916\u7684\u5f15\u7528\u3002\u653b\u51fb\u8005\u4ece ObjectInputStream \u4e2d\u8bfb\u53d6 Period \u5b9e\u4f8b\uff0c\u7136\u540e\u8bfb\u53d6\u9644\u52a0\u5230\u6d41\u4e2d\u7684\u300c\u6076\u610f\u5bf9\u8c61\u5f15\u7528\u300d\u3002\u8fd9\u4e9b\u5f15\u7528\u4f7f\u653b\u51fb\u8005\u80fd\u591f\u8bbf\u95ee Period \u5bf9\u8c61\u4e2d\u7684\u79c1\u6709\u65e5\u671f\u5b57\u6bb5\u5f15\u7528\u7684\u5bf9\u8c61\u3002\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u65e5\u671f\u5b9e\u4f8b\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u4fee\u6539 Period \u5b9e\u4f8b\u3002\u4e0b\u9762\u7684\u7c7b\u6f14\u793a\u4e86\u8fd9\u79cd\u653b\u51fb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public class MutablePeriod {\n    // A period instance\n    public final Period period;\n\n    // period\'s start field, to which we shouldn\'t have access\n    public final Date start;\n\n    // period\'s end field, to which we shouldn\'t have access\n    public final Date end;\n\n    public MutablePeriod() {\n        try {\n            ByteArrayOutputStream bos = new ByteArrayOutputStream();\n            ObjectOutputStream out = new ObjectOutputStream(bos);\n\n            // Serialize a valid Period instance\n            out.writeObject(new Period(new Date(), new Date()));\n\n            /*\n            * Append rogue "previous object refs" for internal\n            * Date fields in Period. For details, see "Java\n            * Object Serialization Specification," Section 6.4.\n            */\n            byte[] ref = { 0x71, 0, 0x7e, 0, 5 }; // Ref #5\n            bos.write(ref); // The start field\n            ref[4] = 4; // Ref # 4\n            bos.write(ref); // The end field\n\n            // Deserialize Period and "stolen" Date references\n            ObjectInputStream in = new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()));\n            period = (Period) in.readObject();\n            start = (Date) in.readObject();\n            end = (Date) in.readObject();\n        } catch (IOException | ClassNotFoundException e) {\n            throw new AssertionError(e);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"To see the attack in action, run the following program:"),(0,r.kt)("p",null,"\u8981\u67e5\u770b\u653b\u51fb\u7684\u5b9e\u9645\u6548\u679c\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public static void main(String[] args) {\n    MutablePeriod mp = new MutablePeriod();\n    Period p = mp.period;\n    Date pEnd = mp.end;\n\n    // Let's turn back the clock\n    pEnd.setYear(78);\n    System.out.println(p);\n\n    // Bring back the 60s!\n    pEnd.setYear(69);\n    System.out.println(p);\n}\n")),(0,r.kt)("p",null,"In my locale, running this program produces the following output:"),(0,r.kt)("p",null,"\u5728\u6211\u7684\u8bed\u8a00\u73af\u5883\u4e2d\uff0c\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u4f1a\u4ea7\u751f\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Wed Nov 22 00:21:29 PST 2017 - Wed Nov 22 00:21:29 PST 1978\nWed Nov 22 00:21:29 PST 2017 - Sat Nov 22 00:21:29 PST 1969\n")),(0,r.kt)("p",null,"While the Period instance is created with its invariants intact, it is possible to modify its internal components at will. Once in possession of a mutable Period instance, an attacker might cause great harm by passing the instance to a class that depends on Period\u2019s immutability for its security. This is not so farfetched: there are classes that depend on String\u2019s immutability for their security."),(0,r.kt)("p",null,"\u867d\u7136\u521b\u5efa Period \u5b9e\u4f8b\u65f6\u4fdd\u7559\u4e86\u5b83\u7684\u4e0d\u53d8\u6027\uff0c\u4f46\u662f\u53ef\u4ee5\u968f\u610f\u4fee\u6539\u5b83\u7684\u5185\u90e8\u7ec4\u4ef6\u3002\u4e00\u65e6\u62e5\u6709\u4e00\u4e2a\u53ef\u53d8\u7684 Period \u5b9e\u4f8b\uff0c\u653b\u51fb\u8005\u53ef\u80fd\u4f1a\u5c06\u5b9e\u4f8b\u4f20\u9012\u7ed9\u4e00\u4e2a\u4f9d\u8d56\u4e8e Period \u7684\u4e0d\u53d8\u6027\u6765\u4fdd\u8bc1\u5176\u5b89\u5168\u6027\u7684\u7c7b\uff0c\u4ece\u800c\u9020\u6210\u6781\u5927\u7684\u5371\u5bb3\u3002\u8fd9\u5e76\u4e0d\u662f\u7275\u5f3a\u9644\u4f1a\u7684\uff1a\u6709\u4e9b\u7c7b\u4f9d\u8d56\u4e8e String \u7684\u4e0d\u53d8\u6027\u6765\u4fdd\u8bc1\u5176\u5b89\u5168\u3002"),(0,r.kt)("p",null,"The source of the problem is that Period\u2019s readObject method is not doing enough defensive copying. ",(0,r.kt)("strong",{parentName:"p"},"When an object is deserialized, it is critical to defensively copy any field containing an object reference that a client must not possess.")," Therefore, every serializable immutable class containing private mutable components must defensively copy these components in its readObject method. The following readObject method suffices to ensure Period\u2019s invariants and to maintain its immutability:"),(0,r.kt)("p",null,"\u95ee\u9898\u7684\u6839\u6e90\u5728\u4e8e Period \u7684 readObject \u65b9\u6cd5\u6ca1\u6709\u8fdb\u884c\u8db3\u591f\u7684\u9632\u5fa1\u6027\u590d\u5236\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5f53\u5bf9\u8c61\u88ab\u53cd\u5e8f\u5217\u5316\u65f6\uff0c\u5bf9\u4efb\u4f55\u5ba2\u6237\u7aef\u4e0d\u80fd\u62e5\u6709\u7684\u5bf9\u8c61\u5f15\u7528\u7684\u5b57\u6bb5\u8fdb\u884c\u9632\u5fa1\u6027\u5730\u590d\u5236\u81f3\u5173\u91cd\u8981\u3002")," \u56e0\u6b64\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u53ef\u5e8f\u5217\u5316\u7684\u4e0d\u53ef\u53d8\u7c7b\uff0c\u5982\u679c\u5b83\u5305\u542b\u4e86\u79c1\u6709\u7684\u53ef\u53d8\u7ec4\u4ef6\uff0c\u90a3\u4e48\u5728\u5b83\u7684 readObjec \u65b9\u6cd5\u4e2d\uff0c\u5fc5\u987b\u8981\u5bf9\u8fd9\u4e9b\u7ec4\u4ef6\u8fdb\u884c\u9632\u5fa1\u6027\u5730\u590d\u5236\u3002\u4e0b\u9762\u7684 readObject \u65b9\u6cd5\u8db3\u4ee5\u4fdd\u8bc1\u5468\u671f\u7684\u4e0d\u53d8\u6027\uff0c\u5e76\u4fdd\u6301\u5176\u4e0d\u53d8\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// readObject method with defensive copying and validity checking\nprivate void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n    s.defaultReadObject();\n    // Defensively copy our mutable components\n    start = new Date(start.getTime());\n    end = new Date(end.getTime());\n    // Check that our invariants are satisfied\n    if (start.compareTo(end) > 0)\n        throw new InvalidObjectException(start +" after "+ end);\n}\n')),(0,r.kt)("p",null,"Note that the defensive copy is performed prior to the validity check and that we did not use Date\u2019s clone method to perform the defensive copy. Both of these details are required to protect Period against attack (Item 50). Note also that defensive copying is not possible for final fields. To use the readObject method, we must make the start and end fields nonfinal. This is unfortunate, but it is the lesser of two evils. With the new readObject method in place and the final modifier removed from the start and end fields, the MutablePeriod class is rendered ineffective. The above attack program now generates this output:"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u9632\u5fa1\u526f\u672c\u662f\u5728\u6709\u6548\u6027\u68c0\u67e5\u4e4b\u524d\u6267\u884c\u7684\uff0c\u6211\u4eec\u6ca1\u6709\u4f7f\u7528 Date \u7684 clone \u65b9\u6cd5\u6765\u6267\u884c\u9632\u5fa1\u526f\u672c\u3002\u8fd9\u4e24\u4e2a\u7ec6\u8282\u5bf9\u4e8e\u4fdd\u62a4 Period \u514d\u53d7\u653b\u51fb\u662f\u5fc5\u8981\u7684(\u7b2c50\u9879)\u3002\u8fd8\u8981\u6ce8\u610f\uff0c\u9632\u5fa1\u6027\u590d\u5236\u4e0d\u53ef\u80fd\u7528\u4e8e final \u5b57\u6bb5\u3002\u8981\u4f7f\u7528 readObject \u65b9\u6cd5\uff0c\u5fc5\u987b\u4f7f start \u548c end \u5b57\u6bb5\u975e final\u3002\u8fd9\u662f\u4e0d\u5e78\u7684\uff0c\u4f46\u5374\u662f\u6743\u8861\u5229\u5f0a\u540e\u7684\u65b9\u6848\u3002\u4f7f\u7528\u65b0\u7684 readObject \u65b9\u6cd5\uff0c\u5e76\u4ece start \u548c end \u5b57\u6bb5\u4e2d\u5220\u9664 final \u4fee\u9970\u7b26\uff0cMutablePeriod \u7c7b\u5c06\u65e0\u6548\u3002\u4e0a\u9762\u7684\u653b\u51fb\u7a0b\u5e8f\u73b0\u5728\u751f\u6210\u8fd9\u4e2a\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Wed Nov 22 00:23:41 PST 2017 - Wed Nov 22 00:23:41 PST 2017\nWed Nov 22 00:23:41 PST 2017 - Wed Nov 22 00:23:41 PST 2017\n")),(0,r.kt)("p",null,"Here is a simple litmus test for deciding whether the default readObject method is acceptable for a class: would you feel comfortable adding a public constructor that took as parameters the values for each nontransient field in the object and stored the values in the fields with no validation whatsoever? If not, you must provide a readObject method, and it must perform all the validity checking and defensive copying that would be required of a constructor. Alternatively, you can use the serialization proxy pattern (Item 90). This pattern is highly recommended because it takes much of the effort out of safe deserialization."),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\uff0c\u7528\u4e8e\u5224\u65ad\u9ed8\u8ba4 readObject \u65b9\u6cd5\u662f\u5426\u53ef\u7528\u4e8e\u7c7b\uff1a\u4f60\u662f\u5426\u613f\u610f\u6dfb\u52a0\u4e00\u4e2a\u516c\u5171\u6784\u9020\u51fd\u6570\uff0c\u8be5\u6784\u9020\u51fd\u6570\u5c06\u5bf9\u8c61\u4e2d\u6bcf\u4e2a\u975e transient \u5b57\u6bb5\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u5728\u6ca1\u6709\u4efb\u4f55\u9a8c\u8bc1\u7684\u60c5\u51b5\u4e0b\u5c06\u503c\u5b58\u50a8\u5728\u5b57\u6bb5\u4e2d\uff1f\u5982\u679c\u6ca1\u6709\uff0c\u5219\u5fc5\u987b\u63d0\u4f9b readObject \u65b9\u6cd5\uff0c\u5e76\u4e14\u5b83\u5fc5\u987b\u6267\u884c\u6784\u9020\u51fd\u6570\u6240\u9700\u7684\u6240\u6709\u6709\u6548\u6027\u68c0\u67e5\u548c\u9632\u5fa1\u6027\u590d\u5236\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5e8f\u5217\u5316\u4ee3\u7406\u6a21\u5f0f\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-12/Chapter-12-Item-90-Consider-serialization-proxies-instead-of-serialized-instances"},"Item-90"),"\uff09\u3002\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u6a21\u5f0f\uff0c\u5426\u5219\u4f1a\u5728\u5b89\u5168\u53cd\u5e8f\u5217\u5316\u65b9\u9762\u82b1\u8d39\u5927\u91cf\u7cbe\u529b\u3002"),(0,r.kt)("p",null,"There is one other similarity between readObject methods and constructors that applies to nonfinal serializable classes. Like a constructor, a readObject method must not invoke an overridable method, either directly or indirectly (Item 19). If this rule is violated and the method in question is overridden, the overriding method will run before the subclass\u2019s state has been deserialized. A program failure is likely to result ","[Bloch05, Puzzle 91]","."),(0,r.kt)("p",null,"readObject \u65b9\u6cd5\u548c\u6784\u9020\u51fd\u6570\u4e4b\u95f4\u8fd8\u6709\u4e00\u4e2a\u76f8\u4f3c\u4e4b\u5904\uff0c\u9002\u7528\u4e8e\u975e final \u5e8f\u5217\u5316\u7c7b\u3002\u4e0e\u6784\u9020\u51fd\u6570\u4e00\u6837\uff0creadObject \u65b9\u6cd5\u4e0d\u80fd\u76f4\u63a5\u6216\u95f4\u63a5\u8c03\u7528\u53ef\u8986\u76d6\u7684\u65b9\u6cd5\uff08",(0,r.kt)("a",{parentName:"p",href:"./Chapter-4-Item-19-Design-and-document-for-inheritance-or-else-prohibit-it"},"Item-19"),"\uff09\u3002\u5982\u679c\u8fdd\u53cd\u4e86\u8fd9\u6761\u89c4\u5219\uff0c\u5e76\u4e14\u6d89\u53ca\u7684\u65b9\u6cd5\u88ab\u8986\u76d6\uff0c\u5219\u8986\u76d6\u65b9\u6cd5\u5c06\u5728\u5b50\u7c7b\u7684\u72b6\u6001\u53cd\u5e8f\u5217\u5316\u4e4b\u524d\u8fd0\u884c\u3002\u5f88\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u5931\u8d25 ","[Bloch05, Puzzle 91]","\u3002"),(0,r.kt)("p",null,"To summarize, anytime you write a readObject method, adopt the mindset that you are writing a public constructor that must produce a valid instance regardless of what byte stream it is given. Do not assume that the byte stream represents an actual serialized instance. While the examples in this item concern a class that uses the default serialized form, all of the issues that were raised apply equally to classes with custom serialized forms. Here, in summary form, are the guidelines for writing a readObject method:"),(0,r.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u65e0\u8bba\u4f55\u65f6\u7f16\u5199 readObject \u65b9\u6cd5\uff0c\u90fd\u8981\u91c7\u7528\u8fd9\u6837\u7684\u601d\u7ef4\u65b9\u5f0f\uff0c\u5373\u7f16\u5199\u4e00\u4e2a\u516c\u5171\u6784\u9020\u51fd\u6570\uff0c\u8be5\u6784\u9020\u51fd\u6570\u5fc5\u987b\u751f\u6210\u4e00\u4e2a\u6709\u6548\u7684\u5b9e\u4f8b\uff0c\u800c\u4e0d\u7ba1\u7ed9\u5b9a\u7684\u662f\u4ec0\u4e48\u5b57\u8282\u6d41\u3002\u4e0d\u8981\u5047\u8bbe\u5b57\u8282\u6d41\u8868\u793a\u5b9e\u9645\u7684\u5e8f\u5217\u5316\u5b9e\u4f8b\u3002\u867d\u7136\u672c\u6761\u76ee\u4e2d\u7684\u793a\u4f8b\u6d89\u53ca\u4f7f\u7528\u9ed8\u8ba4\u5e8f\u5217\u5316\u5f62\u5f0f\u7684\u7c7b\uff0c\u4f46\u662f\u6240\u5f15\u53d1\u7684\u6240\u6709\u95ee\u9898\u90fd\u540c\u6837\u9002\u7528\u4e8e\u5177\u6709\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\u7684\u7c7b\u3002\u4e0b\u9762\u662f\u7f16\u5199 readObject \u65b9\u6cd5\u7684\u6307\u5bfc\u539f\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For classes with object reference fields that must remain private, defensively copy each object in such a field. Mutable components of immutable classes fall into this category.")),(0,r.kt)("p",null,"\u5bf9\u8c61\u5f15\u7528\u5b57\u6bb5\u5fc5\u987b\u4fdd\u6301\u79c1\u6709\u7684\u7684\u7c7b\uff0c\u5e94\u9632\u5fa1\u6027\u5730\u590d\u5236\u8be5\u5b57\u6bb5\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u3002\u4e0d\u53ef\u53d8\u7c7b\u7684\u53ef\u53d8\u7ec4\u4ef6\u5c5e\u4e8e\u8fd9\u4e00\u7c7b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check any invariants and throw an InvalidObjectException if a check fails. The checks should follow any defensive copying.")),(0,r.kt)("p",null,"\u68c0\u67e5\u4efb\u4f55\u4e0d\u53d8\u91cf\uff0c\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0c\u5219\u629b\u51fa InvalidObjectException\u3002\u68c0\u67e5\u52a8\u4f5c\u5e94\u8be5\u8ddf\u5728\u4efb\u4f55\u9632\u5fa1\u6027\u590d\u5236\u4e4b\u540e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If an entire object graph must be validated after it is deserialized, use the ObjectInputValidation interface (not discussed in this book).")),(0,r.kt)("p",null,"\u5982\u679c\u5fc5\u987b\u5728\u53cd\u5e8f\u5217\u5316\u540e\u9a8c\u8bc1\u6574\u4e2a\u5bf9\u8c61\u56fe\uff0c\u90a3\u4e48\u4f7f\u7528 ObjectInputValidation \u63a5\u53e3\uff08\u5728\u672c\u4e66\u4e2d\u6ca1\u6709\u8ba8\u8bba\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not invoke any overridable methods in the class, directly or indirectly.")),(0,r.kt)("p",null,"\u4e0d\u8981\u76f4\u63a5\u6216\u95f4\u63a5\u5730\u8c03\u7528\u7c7b\u4e2d\u4efb\u4f55\u53ef\u88ab\u8986\u76d6\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./Chapter-12/Chapter-12-Introduction"},"Back to contents of the chapter\uff08\u8fd4\u56de\u7ae0\u8282\u76ee\u5f55\uff09"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Previous Item\uff08\u4e0a\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form"},"Item 87: Consider using a custom serialized form\uff08\u8003\u8651\u4f7f\u7528\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next Item\uff08\u4e0b\u4e00\u6761\u76ee\uff09\uff1a",(0,r.kt)("a",{parentName:"strong",href:"./Chapter-12/Chapter-12-Item-89-For-instance-control-prefer-enum-types-to-readResolve"},"Item 89: For instance control prefer enum types to readResolve\uff08\u5bf9\u4e8e\u5b9e\u4f8b\u63a7\u5236\uff0c\u679a\u4e3e\u7c7b\u578b\u4f18\u4e8e readResolve\uff09")))))}p.isMDXComponent=!0}}]);
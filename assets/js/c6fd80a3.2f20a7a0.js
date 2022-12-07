"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[7578],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"migration",title:"Migration",hide_title:!0},l="Migration",p={unversionedId:"migration",id:"migration",title:"Migration",description:"UdonSharp 0.x (the .unitypackage version) is deprecated and no longer supported. This new version is easy to get through the Creator Companion, which will help you keep it up-to-date as well.",source:"@site/docs/Migration.md",sourceDirName:".",slug:"/migration",permalink:"/migration",editUrl:"https://github.com/vrchat-community/UdonSharp/edit/master/Docs/Source/Migration.md",tags:[],version:"current",frontMatter:{id:"migration",title:"Migration",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/configuration"},next:{title:"Frequently Asked Questions",permalink:"/frequently-asked-questions"}},u={},m=[{value:"New Features in UdonSharp 1.0",id:"new-features-in-udonsharp-10",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Nested Prefabs",id:"nested-prefabs",level:3},{value:"Does Not Belong to U# Assembly",id:"does-not-belong-to-u-assembly",level:3},{value:"Newtonsoft.Json.Dll",id:"newtonsoftjsondll",level:3},{value:"Other breaking changes",id:"other-breaking-changes",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration"},"Migration"),(0,i.kt)("p",null,"UdonSharp 0.x (the .unitypackage version) is deprecated and no longer supported. This new version is easy to get through the ",(0,i.kt)("a",{parentName:"p",href:"https://vcc.docs.vrchat.com"},"Creator Companion"),", which will help you keep it up-to-date as well."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vcc.docs.vrchat.com/vpm/migrating"},"Migrating Projects using the Creator Companion"),"."),(0,i.kt)("h2",{id:"new-features-in-udonsharp-10"},"New Features in UdonSharp 1.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"More C# features")," in your UdonSharp programs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static")," methods"),(0,i.kt)("li",{parentName:"ul"},"Generic ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"out"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ref"),", and default parameters"),(0,i.kt)("li",{parentName:"ul"},"Extension methods"),(0,i.kt)("li",{parentName:"ul"},"Inheritance, virtual methods, and abstract classes"),(0,i.kt)("li",{parentName:"ul"},"Partial classes"),(0,i.kt)("li",{parentName:"ul"},"Enums")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multi-edit")," multiple UdonSharp scripts in the Unity inspector"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prefab variants"),", ",(0,i.kt)("strong",{parentName:"li"},"instances"),", and ",(0,i.kt)("strong",{parentName:"li"},"nesting")," are now fully supported"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Editor scripting")," has been overhauled and simplified"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compiler fixes")," and ",(0,i.kt)("strong",{parentName:"li"},"optimizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fixed various bugs"),", edge cases, and other rough edges")),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("h3",{id:"nested-prefabs"},"Nested Prefabs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue"),": UdonSharp always warned against using nested prefabs, and now they will completely break in some circumstances."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Symptoms"),": Errors like ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot upgrade scene behaviour 'SomethingOrOther' since its prefab must be upgraded")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Fix"),': Unpack the prefab in your 0.x UdonSharp project first. You can also open the "Udon Sharp" menu item and choose "Force Upgrade".'),(0,i.kt)("h3",{id:"does-not-belong-to-u-assembly"},"Does Not Belong to U# Assembly"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue"),": Libraries with their own Assembly Definitions need to have an U# assembly definition, too."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Symptoms"),": An error like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"[UdonSharp] Script 'Assets/MyScript.cs' does not belong to a U# assembly, have you made a U# assembly definition for the assembly the script is a part of?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Fix"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the Project window to find the file ending in ",(0,i.kt)("inlineCode",{parentName:"li"},".asmdef")," in the same or a parent directory of the script in question. "),(0,i.kt)("li",{parentName:"ol"},"Right-click in the folder which has this Assembly Definition and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Create > U# Assembly Definition"),". "),(0,i.kt)("li",{parentName:"ol"},'Select this new U# asmdef, and use the inspector to set its "Source Assembly" to the other Assembly Definition File. '),(0,i.kt)("li",{parentName:"ol"},"You may need to restart Unity after doing this.")),(0,i.kt)("h3",{id:"newtonsoftjsondll"},"Newtonsoft.Json.Dll"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue"),": Some packages include their own copy of this JSON library, which the VRCSDK pulls in itself. This results in two copies of the library."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Symptoms"),": Errors in your console which mention the above library. It might not be at the front of the sentence, but something like ",(0,i.kt)("inlineCode",{parentName:"p"},"System.TypeInitializationException: the type initializer for blah blah blah...Assets/SketchfabForUnity/Dependencies/Libraries/Newtonsoft.Json.dll")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Fix"),": Remove any copies of Newtonsoft.Json.dll from your Assets folder. The VRCSDK will provide it for any package that needs it through the Package Manager."),(0,i.kt)("h3",{id:"other-breaking-changes"},"Other breaking changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your U# behaviour name must match the .cs file name"),(0,i.kt)("li",{parentName:"ul"},"Duplicate program assets may not reference the same ",(0,i.kt)("inlineCode",{parentName:"li"},".cs")," file"),(0,i.kt)("li",{parentName:"ul"},"Program assets must point to a script and may not be empty"),(0,i.kt)("li",{parentName:"ul"},"Editor scripting is now different: Data is owned by a C# proxy of the UdonSharpBehaviour, and the corresponding UdonBehaviour is empty until runtime."),(0,i.kt)("li",{parentName:"ul"},"Obsoleted overloads for station and player join events may no longer be used")))}d.isMDXComponent=!0}}]);
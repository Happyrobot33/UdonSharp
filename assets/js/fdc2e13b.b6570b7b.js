"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[428],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9111:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"setup",title:"Setup",hide_title:!0},c="Setup",p={unversionedId:"setup",id:"setup",title:"Setup",description:"Requirements",source:"@site/docs/Setup.md",sourceDirName:".",slug:"/setup",permalink:"/setup",editUrl:"https://github.com/vrchat-community/UdonSharp/edit/master/Docs/Source/Setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"Setup",hide_title:!0},sidebar:"mainSidebar",previous:{title:"UdonSharp",permalink:"/"},next:{title:"Examples",permalink:"/examples"}},s={},u=[{value:"Create a new UdonSharp project with the VCC:",id:"create-a-new-udonsharp-project-with-the-vcc",level:2},{value:"Create a new UdonSharp Project with Source Control:",id:"create-a-new-udonsharp-project-with-source-control",level:2},{value:"Add UdonSharp to an existing Udon Project:",id:"add-udonsharp-to-an-existing-udon-project",level:2},{value:"Create or Add UdonSharp with the CLI",id:"create-or-add-udonsharp-with-the-cli",level:2}],d={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unity3d.com/get-unity/download/archive"},"Unity 2019.4.31f1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vrchat.com/home/download"},"VRCSDK3 + Udon"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installation")),(0,o.kt)("p",null,"You can get UdonSharp by using the ",(0,o.kt)("a",{parentName:"p",href:"https://vcc.docs.vrchat.com/"},"VRChat Creator Companion")," (also known as the VCC), its ",(0,o.kt)("a",{parentName:"p",href:"https://vcc.docs.vrchat.com/vpm/cli/"},"CLI"),", or a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vrchat-community/template-udonsharp"},"starter template"),". "),(0,o.kt)("h2",{id:"create-a-new-udonsharp-project-with-the-vcc"},"Create a new UdonSharp project with the VCC:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the latest version of the ",(0,o.kt)("a",{parentName:"li",href:"https://vrchat.com/home/download"},"Creator Companion"),"."),(0,o.kt)("li",{parentName:"ul"},'From the main screen, select "New", then "UdonSharp", and choose a directory.'),(0,o.kt)("li",{parentName:"ul"},'Press "Open Project". That\'s it!')),(0,o.kt)("h2",{id:"create-a-new-udonsharp-project-with-source-control"},"Create a new UdonSharp Project with Source Control:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/template-udonsharp"},"UdonSharp Project Template repository"),"."),(0,o.kt)("li",{parentName:"ul"},'Press "Use this template".'),(0,o.kt)("li",{parentName:"ul"},"Clone the project to your computer using your favorite Git client."),(0,o.kt)("li",{parentName:"ul"},"Open the project directly in Unity, or add it to the VCC for easy access and updating later.")),(0,o.kt)("h2",{id:"add-udonsharp-to-an-existing-udon-project"},"Add UdonSharp to an existing Udon Project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the project to the VCC, migrating it if necessary."),(0,o.kt)("li",{parentName:"ul"},"Select the project from the Projects listing screen."),(0,o.kt)("li",{parentName:"ul"},'In the Repo dropdown above the Package listings, ensure "Curated" is selected.\n',(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/737888/199796293-cadd550e-656d-4b3e-968b-bfff2c2e4697.png",alt:"image"})),(0,o.kt)("li",{parentName:"ul"},'Find UdonSharp in the listed packages and press "Add".')),(0,o.kt)("h2",{id:"create-or-add-udonsharp-with-the-cli"},"Create or Add UdonSharp with the CLI"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vcc.docs.vrchat.com/vpm/cli/"},"The CLI")," is a tool for advanced users, and the best way to manage VPM projects on non-Windows systems for now."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vcc.docs.vrchat.com/vpm/cli/#new"},"New Project from Template")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vcc.docs.vrchat.com/vpm/cli/#add-package"},"Add Package to Project"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Getting started")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make a new object in your scene"),(0,o.kt)("li",{parentName:"ol"},"Add an Udon Behaviour component to your object"),(0,o.kt)("li",{parentName:"ol"},'Below the "New Program" button click the dropdown and select "Udon C# Program Asset"'),(0,o.kt)("li",{parentName:"ol"},"Now click the New Program button, this will create a new UdonSharp program asset for you"),(0,o.kt)("li",{parentName:"ol"},"Click the Create Script button and choose a save destination and name for the script."),(0,o.kt)("li",{parentName:"ol"},"This will create a template script that's ready for you to start working on, open the script in your editor of choice and start programming")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Asset explorer asset creation")),(0,o.kt)("p",null,"Instead of creating assets from an UdonBehaviour you can also do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click in your project asset explorer"),(0,o.kt)("li",{parentName:"ol"},"Navigate to Create > U# script"),(0,o.kt)("li",{parentName:"ol"},"Click U# script, this will open a create file dialog"),(0,o.kt)("li",{parentName:"ol"},"Choose a name for your script and click Save"),(0,o.kt)("li",{parentName:"ol"},"This will create a .cs script file and an UdonSharp program asset that's set up for the script in the same directory")))}h.isMDXComponent=!0}}]);
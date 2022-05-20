"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=l(n),b=a,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return n?r.createElement(g,s(s({ref:e},p),{},{components:n})):r.createElement(g,s({ref:e},p))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9786:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Creating the Taskbar",permalink:"/taskbar/"},c=void 0,l={unversionedId:"taskbar",id:"taskbar",title:"Creating the Taskbar",description:"First, make a new div called taskbar and put the taskbariconscenter div inside of it",source:"@site/docs/taskbar.md",sourceDirName:".",slug:"/taskbar",permalink:"/docs/taskbar",draft:!1,editUrl:"https://github.com/notAperson535/Win11-HTML-Tutorial/tree/website/docs/taskbar.md",tags:[],version:"current",frontMatter:{title:"Creating the Taskbar",permalink:"/taskbar/"},sidebar:"docs",previous:{title:"Creating the Start Menu",permalink:"/docs/startmenu"},next:{title:"script",permalink:"/docs/script"}},p={},d=[{value:"Now, move on to create the script that brings everything together.",id:"now-move-on-to-create-the-script-that-brings-everything-together",level:3}],u={toc:d};function b(t){var e=t.components,n=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"First, make a new div called ",(0,i.kt)("inlineCode",{parentName:"p"},"taskbar")," and put the ",(0,i.kt)("inlineCode",{parentName:"p"},"taskbariconscenter")," div inside of it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="taskbar">\n  <div class="taskbariconscenter">\n    \n  </div>\n</div>\n')),(0,i.kt)("p",null,"Now add the css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".taskbar{\n  -webkit-backdrop-filter: saturate(3) blur(20px);\n  backdrop-filter: saturate(3) blur(20px);\n  background-color: rgba(255,255,255,.80);\n  width: 100%;\n  min-width: 100%;\n  position: absolute;\n  bottom: 0;\n  margin:0;\n  padding:0;\n  height: 48px;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.taskbariconscenter{\n  display: flex;\n}\n")),(0,i.kt)("p",null,"It should now look like this, and when you use the inspect element you can see the taskbariconscenter div centered:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/95918679/168820259-0e859d2d-25b2-4489-acbd-75376bbf83b8.png",alt:"image"})),(0,i.kt)("p",null,"Next, add the icons to the taskbar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="taskbaricons startbutton">\n          <img class="taskbariconsimg" src="img/startbutton.png">\n        </div>\n\n        <div class="taskbaricons">\n          <img class="taskbariconsimg" src="img/search.png">\n        </div>\n\n        <div class="taskbaricons">\n          <img class="taskbariconsimg" src="img/taskview.png">\n        </div>\n\n        <div class="taskbaricons">\n          <img class="taskbariconsimg" src="img/chat.png">\n        </div>\n\n        <div class="taskbaricons">\n          <img class="taskbariconsimg" src="img/explorer.png">\n          <div class="center"><div class="taskbariconhighlight"></div></div>\n        </div>\n\n        <div class="taskbaricons edgetaskbaricon">\n          <img class="taskbariconsimg" src="img/edge.png">\n          <div class="center"><div class="taskbariconhighlight"></div></div>\n        </div>\n\n        <div class="taskbaricons">\n          <img class="taskbariconsimg" src="img/store.ico">\n          <div class="center"><div class="taskbariconhighlight"></div></div>\n        </div>\n</div>\n')),(0,i.kt)("h3",{id:"now-move-on-to-create-the-script-that-brings-everything-together"},(0,i.kt)("a",{parentName:"h3",href:"https://notaperson535.github.io/Win11-HTML-Tutorial/script"},"Now, move on to create the script that brings everything together.")))}b.isMDXComponent=!0}}]);
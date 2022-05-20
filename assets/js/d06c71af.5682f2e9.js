"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},374:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Working on the Base Files",permalink:"/basefiles/"},s=void 0,c={unversionedId:"basefiles",id:"basefiles",title:"Working on the Base Files",description:"First download the files from the template branch on github. It will provide all of the files necessary, aka the images.",source:"@site/docs/basefiles.md",sourceDirName:".",slug:"/basefiles",permalink:"/docs/basefiles",draft:!1,editUrl:"https://github.com/notAperson535/Win11-HTML-Tutorial/tree/website/docs/docs/basefiles.md",tags:[],version:"current",frontMatter:{title:"Working on the Base Files",permalink:"/basefiles/"},sidebar:"docs",next:{title:"Creating the Start Menu",permalink:"/docs/startmenu"}},u={},p=[{value:"Now move on to the start menu creation",id:"now-move-on-to-the-start-menu-creation",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First download the files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," branch on github. It will provide all of the files necessary, aka the images."),(0,o.kt)("p",null,"Now open the HTML file and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," tags. Now link the stylesheet, font, icon, and title by adding these lines inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <head>\n    <link href="https://fonts.cdnfonts.com/css/segoe-ui-variable" rel="stylesheet">\n    <link rel="stylesheet" href="styles.css">\n    <link rel="icon" href="StartIcon.ico">\n    <title>Windows 11 in HTML</title>\n   </head>\n')),(0,o.kt)("p",null,"Next, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," tag"),(0,o.kt)("p",null,"Now add the auto-start audio file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<audio autoplay>\n  <source src="audio/startup.mp3" type="audio/mpeg">\n</audio>\n')),(0,o.kt)("p",null,"Now at the very end of the body tag, add this line to add the script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="script.js"><\/script>\n')),(0,o.kt)("p",null,"Now add these lines to the css to put the background in and set the font"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"body{\n  background-image: url(\"img/background.jpg\");\n  overflow: hidden;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  min-width: 100vw;\n  transition: all .2s ease;\n  margin: 0;\n  padding: 0;\n  font-family: 'Segoe UI Variable', sans-serif;\n  user-select: none;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/95918679/168868470-19dfc68b-34e9-46d3-bbe2-7987a869034e.png",alt:"image"})),(0,o.kt)("h3",{id:"now-move-on-to-the-start-menu-creation"},(0,o.kt)("a",{parentName:"h3",href:"https://notaperson535.github.io/Win11-HTML-Tutorial/startmenu"},"Now move on to the start menu creation")))}f.isMDXComponent=!0}}]);
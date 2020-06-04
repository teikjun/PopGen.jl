(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(199)),o={id:"genepop",title:"Genepop.jl",sidebar_label:"Genepop.jl"},p={id:"api/genepop",title:"Genepop.jl",description:"genepop",source:"@site/docs/api/Genepop.md",permalink:"/PopGen.jl/docs/api/genepop",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/Genepop.md",lastUpdatedAt:1591241785,sidebar_label:"Genepop.jl",sidebar:"docs",previous:{title:"Delimited.jl",permalink:"/PopGen.jl/docs/api/delimited"},next:{title:"HardyWeinberg.jl",permalink:"/PopGen.jl/docs/api/hardyweinberg"}},l=[{value:"<code>genepop</code>",id:"genepop",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"genepop"},Object(i.b)("inlineCode",{parentName:"h3"},"genepop")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"genepop(infile::String; kwargs...)\n")),Object(i.b)("p",null,"Load a Genepop format file into memory as a PopData object."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infile::String")," : path to Genepop file")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Keyword Arguments")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"digits::Integer"),": number of digits denoting each allele (default: ",Object(i.b)("inlineCode",{parentName:"li"},"3"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"popsep::String")," : word that separates populations in ",Object(i.b)("inlineCode",{parentName:"li"},"infile"),' (default: "POP")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"diploid::Bool"),"  : whether samples are diploid for parsing optimizations (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"silent::Bool"),"   : whether to print file information during import (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"File must follow standard Genepop formatting")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First line is a comment (and skipped)"),Object(i.b)("li",{parentName:"ul"},"Loci are listed after first line as one-per-line without commas or in single comma-separated row"),Object(i.b)("li",{parentName:"ul"},"A line with a particular keyword (default ",Object(i.b)("inlineCode",{parentName:"li"},"POP"),") must delimit populations"),Object(i.b)("li",{parentName:"ul"},"Sample name is immediately followed by a ",Object(i.b)("em",{parentName:"li"},"comma")),Object(i.b)("li",{parentName:"ul"},"File is ",Object(i.b)("em",{parentName:"li"},"tab or space delimted")," (but not both!)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Genepop file example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"wasp_hive.gen: Wasp populations in New York \\n\nLocus1\nLocus2\nLocus3\npop\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\npop\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),'waspsNY = genepop("wasp_hive.gen", digits = 3, popsep = "pop")\n')))}b.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,s=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(s,p(p({ref:t},c),{},{components:n})):a.a.createElement(s,p({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
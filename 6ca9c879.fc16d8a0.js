(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(166)),l={id:"variantcall",title:"VariantCall.jl",sidebar_label:"VariantCall.jl"},o={id:"api/variantcall",title:"VariantCall.jl",description:"VariantCall.jl",source:"@site/docs/api/VariantCall.md",permalink:"/PopGen.jl/docs/api/variantcall",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/VariantCall.md",lastUpdatedAt:1591241785,sidebar_label:"VariantCall.jl",sidebar:"docs",previous:{title:"Utils.jl",permalink:"/PopGen.jl/docs/api/utils"}},c=[{value:"VariantCall.jl",id:"variantcalljl",children:[{value:"<code>bcf</code>",id:"bcf",children:[]},{value:"<code>vcf</code>",id:"vcf",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"variantcalljl"},"VariantCall.jl"),Object(i.b)("h3",{id:"bcf"},Object(i.b)("inlineCode",{parentName:"h3"},"bcf")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"bcf(infile::String)\n")),Object(i.b)("p",null,"Load a BCF file into memory as a PopData object. Population and ","[optional]"," location information need to be provided separately."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infile")," : path to BCF file")),Object(i.b)("h3",{id:"vcf"},Object(i.b)("inlineCode",{parentName:"h3"},"vcf")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"vcf(infile::String)\n")),Object(i.b)("p",null,"Load a VCF file into memory as a PoDataj object. Population and ","[optional]"," location information need to be provided separately."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infile")," : path to VCF file")))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),f=a,s=b["".concat(l,".").concat(f)]||b[f]||d[f]||i;return n?r.a.createElement(s,o(o({ref:t},p),{},{components:n})):r.a.createElement(s,o({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
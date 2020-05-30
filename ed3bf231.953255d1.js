(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(155)),r={id:"types",title:"PopObj and PopData types",sidebar_label:"PopObj and PopData types"},c={id:"getting_started/types",title:"PopObj and PopData types",description:"For the PopGen.jl package to be consistent, a standard flexible data structure needs to be defined. The solution is a custom type called  PopData. The struct is defined as:",source:"@site/docs/getting_started/popobj_type.md",permalink:"/PopGen.jl/docs/getting_started/types",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/popobj_type.md",sidebar_label:"PopObj and PopData types",sidebar:"docs",previous:{title:"Comparison",permalink:"/PopGen.jl/docs/getting_started/comparison"},next:{title:"Other data types",permalink:"/PopGen.jl/docs/getting_started/other_types"}},l=[{value:"Metadata",id:"metadata",children:[{value:"name",id:"name",children:[]},{value:"population",id:"population",children:[]},{value:"ploidy",id:"ploidy",children:[]},{value:"longitude",id:"longitude",children:[]},{value:"latitude",id:"latitude",children:[]}]},{value:"Genotype Information",id:"genotype-information",children:[{value:"name",id:"name-1",children:[]},{value:"population",id:"population-1",children:[]},{value:"locus",id:"locus",children:[]},{value:"genotype",id:"genotype",children:[]}]},{value:"location data",id:"location-data",children:[]}],p={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For the PopGen.jl package to be consistent, a standard flexible data structure needs to be defined. The solution is a custom type called  ",Object(o.b)("inlineCode",{parentName:"p"},"PopData"),". The struct is defined as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"struct PopData\n    meta::DataFrame\n    loci::DataFrame\nend\n")),Object(o.b)("p",null,"As you can see, a ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," is made up of two DataFrames, one called ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," for sample information (metadata), and the other called ",Object(o.b)("inlineCode",{parentName:"p"},"loci")," which includes genotype information. This structure allows for easy and convenient access to the fields using dot ",Object(o.b)("inlineCode",{parentName:"p"},".")," accessors.. The ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," and ",Object(o.b)("inlineCode",{parentName:"p"},"loci")," tables are both specific in their structure, so here is an illustration to help you visualize a ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," object:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/PopData.svg",alt:"PopData"}))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PopData")," and other custom types introduced in PopGen.jl fall under an AbstractType we call ",Object(o.b)("inlineCode",{parentName:"p"},"PopObj"),', which is short for "PopGen Object".'),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),'pronouncing "PopObj"')),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'It\'s not super obvious, but we decided to pronounce PopObj as "pop ob" with a silent j because it sounds better than saying "pop obj", but writing it as PopOb looks weird. It\'s a silly little detail that Pavel seems to care a lot about.'))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"avoid manual creation!")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"While it may seem simple enough to create two IndexedTables and make a ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," out of them, the structure of ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," and ",Object(o.b)("inlineCode",{parentName:"p"},"loci")," are specific, so small mistakes in creating them can create many errors and prevent PopGen from working correctly on your data. Please use the included ",Object(o.b)("inlineCode",{parentName:"p"},"csv"),", ",Object(o.b)("inlineCode",{parentName:"p"},"genepop"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"vcf")," file importers instead."))),Object(o.b)("h2",{id:"metadata"},"Metadata"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," table has 5 specific categories/columns: name, population, ploidy, longitude, latitude. These can be directly accessed with ",Object(o.b)("inlineCode",{parentName:"p"},"PopData.meta.colname")," where ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," is the name of your PopData object, and ",Object(o.b)("inlineCode",{parentName:"p"},"colname")," is one of the five column names below."),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{String}")),Object(o.b)("p",null,"The individual/sample names"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'["ind_001", "ind_002", "ind_003"]\n')),Object(o.b)("h3",{id:"population"},"population"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{String}")),Object(o.b)("p",null,"The individual/sample population ID's"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'["borneo", "borneo", "new jersey"]\n')),Object(o.b)("h3",{id:"ploidy"},"ploidy"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{Int8}")),Object(o.b)("p",null,"The ploidy of the samples"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"[2, 2, 2]\n")),Object(o.b)("h3",{id:"longitude"},"longitude"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{Union{Missing,Float32}}")),Object(o.b)("p",null,"latitude data of samples (decimal degrees)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[-11.12, 15.32, 11.02, -4.42]\n")),Object(o.b)("h3",{id:"latitude"},"latitude"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{Union{Missing,Float64}}")),Object(o.b)("p",null,"longitude data of samples (decimal degrees)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[-11.12, 15.32, 11.02, -4]\n")),Object(o.b)("h2",{id:"genotype-information"},"Genotype Information"),Object(o.b)("p",null,"The genotype information is stored in a separate table called ",Object(o.b)("inlineCode",{parentName:"p"},"loci"),'. This table is rather special in that it is stored in "tidy" format, i.e. one record per row. Storing data this way makes it a lot easier to interrogate the data and write new functions, along with leveraging ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/piever/JuliaDBMeta.jl"}),"JuliaDBMeta.jl"),". It also means the table will have as many rows as loci x samples, which can become a lot. To reduce redundant objects inflating object size, the columns name, population, and locus are ",Object(o.b)("inlineCode",{parentName:"p"},"CategoricalStrings"),"  from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/JuliaData/CategoricalArrays.jl"}),"CategoricalArrays.jl"),", which is a memory-saving data structure for long repetitive categorical data. Without using this format, ",Object(o.b)("inlineCode",{parentName:"p"},"gulfsharks"),", whose source file is 3.2mb, would occupy about 27mb in your RAM! The classes of ",Object(o.b)("inlineCode",{parentName:"p"},".loci")," can be directly accessed with ",Object(o.b)("inlineCode",{parentName:"p"},"PopData.loci.colname")," where ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," is the name of your PopData object, and ",Object(o.b)("inlineCode",{parentName:"p"},"colname")," is one of the four column names below."),Object(o.b)("h3",{id:"name-1"},"name"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{CategoricalString}")),Object(o.b)("p",null,"The sample name, stored as a ",Object(o.b)("inlineCode",{parentName:"p"},"CategoricalString"),". Fundamentally, this acts like the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," column of the ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," table, except when deleting entries and a few uncommon edge cases."),Object(o.b)("h3",{id:"population-1"},"population"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{CategoricalString}")),Object(o.b)("p",null,"The population ID associated with that sample, stored as a ",Object(o.b)("inlineCode",{parentName:"p"},"CategoricalString"),". Fundamentally, this acts like the ",Object(o.b)("inlineCode",{parentName:"p"},"population")," column of the ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," table, except when deleting entries and a few uncommon edge cases."),Object(o.b)("h3",{id:"locus"},"locus"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{CategoricalString}")),Object(o.b)("p",null,"The locus associated with the genotype, stored as a ",Object(o.b)("inlineCode",{parentName:"p"},"CategoricalString"),"."),Object(o.b)("h3",{id:"genotype"},"genotype"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"::Vector{Union{Missing,Genotype}}")),Object(o.b)("p",null,"The genotypes of the ",Object(o.b)("inlineCode",{parentName:"p"},"loci")," are an array of type ",Object(o.b)("inlineCode",{parentName:"p"},"Genotype"),", which is an alias for a built-in Julia Tuple type with each value corresponding to an allele (read below to disentangle what that type actually is). For the most part, it looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia",metastring:'tab="genotype example"',tab:'"genotype','example"':!0}),"[(0,1), (0,0), missing, (1,2)]\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"immutable genotypes")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We use the Tuple type for genotypes of individuals because they are ",Object(o.b)("strong",{parentName:"p"},"immutable")," (cannot be changed). By the time you're using PopGen.jl, your data should already be filtered and screened. Hand-editing of genotype alleles is ",Object(o.b)("strong",{parentName:"p"},"strongly")," discouraged, so we outlawed it."))),Object(o.b)("h2",{id:"location-data"},"location data"),Object(o.b)("p",null,"Location data is optional for a ",Object(o.b)("inlineCode",{parentName:"p"},"PopData"),". There are functions that use location information (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"locations"),"), but most don't, so it's not a dealbreaker. At present, there are no analyses that utilize location information. "))}b.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||o;return a?i.a.createElement(u,c(c({ref:t},p),{},{components:a})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
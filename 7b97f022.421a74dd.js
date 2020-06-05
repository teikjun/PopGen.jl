(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(166)),i={id:"heterozygosity",title:"Heterozygosity.jl",sidebar_label:"Heterozygosity.jl"},l={id:"api/heterozygosity",title:"Heterozygosity.jl",description:"ishom",source:"@site/docs/api/Heterozygosity.md",permalink:"/PopGen.jl/docs/api/heterozygosity",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/Heterozygosity.md",lastUpdatedAt:1591241785,sidebar_label:"Heterozygosity.jl",sidebar:"docs",previous:{title:"HardyWeinberg.jl",permalink:"/PopGen.jl/docs/api/hardyweinberg"},next:{title:"ioUtils.jl",permalink:"/PopGen.jl/docs/api/ioutils"}},c=[{value:"<code>ishom</code>",id:"ishom",children:[]},{value:"<code>ishet</code>",id:"ishet",children:[]},{value:"<code>hetero_o</code>",id:"hetero_o",children:[]},{value:"<code>hetero_e</code>",id:"hetero_e",children:[]},{value:"<code>heterozygosity</code>",id:"heterozygosity",children:[]},{value:"<code>het_sample</code>",id:"het_sample",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"ishom"},Object(o.b)("inlineCode",{parentName:"h3"},"ishom")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"ishom(locus::T) where T <: GenotypeArray\nishom(locus::Genotype)\nishom(locus::Missing)\n")),Object(o.b)("p",null,"A series of methods to test if a locus or loci are homozygous and return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if it is, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," if it isn't, and ",Object(o.b)("inlineCode",{parentName:"p"},"missing")," if it's ",Object(o.b)("inlineCode",{parentName:"p"},"missing"),". The vector version simply broadcasts the function over the elements."),Object(o.b)("h3",{id:"ishet"},Object(o.b)("inlineCode",{parentName:"h3"},"ishet")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"ishet(locus::T) where T <: GenotypeArray\nishet(locus::Genotype)\nishet(locus::Missing)\n")),Object(o.b)("p",null,"A series of methods to test if a locus or loci are heterozygous and return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if it is, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," if it isn't. The vector version simply broadcasts the function over the elements. Under the hood, this function is simply ",Object(o.b)("inlineCode",{parentName:"p"},"!ishom"),"."),Object(o.b)("h3",{id:"hetero_o"},Object(o.b)("inlineCode",{parentName:"h3"},"hetero_o")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"hetero_o(data::T) where T <: GenotypeArray\n")),Object(o.b)("p",null,"Returns observed heterozygosity as a mean of the number of heterozygous genotypes, defined as genotypes returning ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for ",Object(o.b)("inlineCode",{parentName:"p"},"ishet()"),". This is numerically feasible because ",Object(o.b)("inlineCode",{parentName:"p"},"true")," values are mathematically represented as ",Object(o.b)("inlineCode",{parentName:"p"},"1"),", whereas ",Object(o.b)("inlineCode",{parentName:"p"},"false")," are represented as ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("h3",{id:"hetero_e"},Object(o.b)("inlineCode",{parentName:"h3"},"hetero_e")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"hetero_e(allele_freqs::Vector{T}) where T <: GenotypeArray\n")),Object(o.b)("p",null,"Returns the expected heterozygosity of an array of genotypes, calculated as 1 - sum of the squared allele frequencies."),Object(o.b)("h3",{id:"heterozygosity"},Object(o.b)("inlineCode",{parentName:"h3"},"heterozygosity")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),'heterozygosity(data::PopData, by::String = "locus")\n')),Object(o.b)("p",null,"Calculate observed and expected heterozygosity in a ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," object. For loci, heterozygosity is calculated in the Nei fashion, such that heterozygosity is calculated as the average over heterozygosity per locus per population."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Modes")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"locus"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"loci"')," : heterozygosity per locus (default)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"sample"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"ind"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"individual"')," : heterozygosity per individual/sample"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"population"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"pop"')," : heterozygosity per population")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),'heterozygosity(nancycats(), "population" )\n')),Object(o.b)("h3",{id:"het_sample"},Object(o.b)("inlineCode",{parentName:"h3"},"het_sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"    het_sample(data::PopData, individual::String)\n")),Object(o.b)("p",null,"Calculate the observed heterozygosity for an individual in a ",Object(o.b)("inlineCode",{parentName:"p"},"PopData")," object. Returns an array of heterozygosity values."))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
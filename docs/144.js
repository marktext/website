(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{396:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,a){"string"==typeof e&&(e=[e]),e.forEach(function(e){!function(e,a){var t=n.languages[e];if(t){var o=t["doc-comment"];if(!o){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^\/][\s\S]*?(?:\*\/|$)/,alias:"comment"}};o=(t=n.languages.insertBefore(e,"comment",i))["doc-comment"]}if(o instanceof RegExp&&(o=t["doc-comment"]={pattern:o}),"Array"===n.util.type(o))for(var r=0,c=o.length;r<c;r++)o[r]instanceof RegExp&&(o[r]={pattern:o[r]}),a(o[r]);else a(o)}}(e,function(n){n.inside||(n.inside={}),n.inside.rest=a})})}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);
//# sourceMappingURL=144.js.map
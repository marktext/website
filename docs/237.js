(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{489:function(a,e){var o,r;o=Prism,r="(?:[a-zA-Z]\\w*|[|\\\\[\\]])+",o.languages.phpdoc=o.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+r+"\\s+)?)\\$\\w+"),lookbehind:!0}}),o.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+r),lookbehind:!0,inside:{keyword:/\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,punctuation:/[|\\[\]()]/}}]}),o.languages.javadoclike.addSupport("php",o.languages.phpdoc)}}]);
//# sourceMappingURL=237.js.map
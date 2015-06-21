/*jslint devel:true */

define(function (require, exports, module) {
    'use strict';
    var LanguageManager = brackets.getModule("language/LanguageManager");
    
    LanguageManager.defineLanguage("sparql", {
    	name: "sparql",
    	mode: "sparql",
    	fileExtensions: [".rq",".ru"],
    	lineComment: ["#"] 
    });
    console.log("Loaded the SPARQL module");
});

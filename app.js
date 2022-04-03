// ==UserScript==
// @name         Project HOHOL
// @namespace    http://tampermonkey.net/
// @version      1
// @description  rofl
// @author       БыдлоSlayer
// @match        *
// ==/UserScript==

(function() {
    'use strict';
    let p = document.querySelectorAll("p");
    let senteceOfOneP = [];
    for(let sentence of p) {
        senteceOfOneP.push(sentence.innerText);
        if(sentence.innerText.search("Украинец")){
            console.log("true");
            let sentenceArr = sentence.innerText.split(" ");
            for(let word in sentenceArr) {
                if(sentenceArr[word] == "украинец") {
                    sentenceArr[word] = "Хохол";
                }
            }
            console.log(sentenceArr);
            sentence.innerText = sentenceArr.join(" ");
        }
    }
})();

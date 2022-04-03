// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  aboba2
// @author       You
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soundsnap.com
// @grant        none
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

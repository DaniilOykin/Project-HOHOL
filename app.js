// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  aboba
// @author       You
// @match        https://www.isuct.ru/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soundsnap.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let imgs = document.querySelectorAll("img")
    for(let img of imgs) {
        img.src = "https://i.pinimg.com/originals/7a/da/30/7ada3098838344a39258f4618bce61f4.jpg"
    }
})();

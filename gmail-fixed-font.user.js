// ==UserScript==
// @name           Gmail Fixed Font
// @namespace      http://www.indelible.org/
// @description    Fixed-font message bodies for Gmail
// @author         Jon Parise
// @version        1.23
// @include        http://mail.google.com/*
// @include        https://mail.google.com/*
// @include        http://*.mail.google.com/*
// @include        https://*.mail.google.com/*
// ==/UserScript==

// Plain-text Message Body
var css = ".ii, .Ak { font: .9em monospace !important; }";
// Quoted Text
css += ".im, .gmail_quote { color: #666 !important; }";

if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node);
    }
}

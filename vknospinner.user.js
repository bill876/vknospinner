// ==UserScript==
// @name         VK No Spinner
// @version      1.0.1
// @description  Replaces fidget spinner image with proper loading spinner image
// @author       bill876
// @homepage     https://github.com/bill876/vknospinner
// @supportURL   https://github.com/bill876/vknospinner/issues
// @downloadURL  https://github.com/bill876/vknospinner/raw/master/vknospinner.user.js
// @updateURL    https://github.com/bill876/vknospinner/raw/master/vknospinner.user.js
// @include      /https?://(.*\.)?vk.com/
// @resource icon1 https://i.imgur.com/QbN4Jyg.png
// @run-at       document-end
// @license      MIT
// ==/UserScript==

const s = document.createElement('style');
s.innerHTML =
`.fidget_spinner, .im-page--history.im-page--history_loading:before {
	background: url('https://i.imgur.com/QbN4Jyg.png') !important;
	background-size: contain !important;
}`;
document.body.appendChild(s);

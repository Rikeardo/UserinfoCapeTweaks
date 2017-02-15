// ==UserScript==
// @name         Userinfo Cape Tweaks
// @version      0.1
// @description  Adding capes to userinfo
// @author       _Rikardo_
// @include     https://goliath.hypixel.net/userinfo?*
// @include     https://goliath.hypixel.net/userinfo#*
// ==/UserScript==

var username = /([A-Za-z0-9_]{1,16})$/.exec($("#columnx > font:first-of-type").text())[1];
$("<img id='cape' style='margin: 20px;' width='40%' src=" + "http://s.optifine.net/capes/" + username + ".png" + " onerror=this.style.display='none'>").insertAfter("img");

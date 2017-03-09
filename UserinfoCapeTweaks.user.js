// ==UserScript==
// @name         Userinfo Cape Tweaks
// @version      0.2
// @description  Adding capes to userinfo
// @author       _Rikardo_
// @include     https://goliath.hypixel.net/userinfo?*
// @include     https://goliath.hypixel.net/userinfo#*
// ==/UserScript==

var username = /([A-Za-z0-9_]{1,16})$/.exec($("#columnx > font:first-of-type").text())[1];
$("<img id='cape' style='margin: 20px;' width='40%' src=" + "http://s.optifine.net/capes/" + username + ".png" + " onerror=this.style.display='none'>").insertAfter("img");

var version = 0.2;
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        var updatedScriptVersion = request.responseText;
        if(version < updatedScriptVersion)
        {
            console.log("Update script");
            window.location.href = "https://github.com/Rikeardo/UserinfoCapeTweaks/raw/master/UserinfoCapeTweaks.user.js";
        }
    }
};
request.open('GET', 'https://raw.githubusercontent.com/Rikeardo/UserinfoCapeTweaks/master/CapeVersion.json', true);
request.send(null);

// ==UserScript==
// @name         Userinfo Cape Tweaks
// @version      0.2.1
// @description  Adding capes to userinfo
// @author       _Rikardo_
// @include     https://goliath.hypixel.net/userinfo?*
// @include     https://goliath.hypixel.net/userinfo#*
// ==/UserScript==

// REMOVED AS ADDED BY DEFAULT

var version = 0.21;
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

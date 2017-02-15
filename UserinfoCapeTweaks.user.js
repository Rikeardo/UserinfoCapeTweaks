// ==UserScript==
// @name         Userinfo Cape Tweaks
// @version      0.1
// @description  Adding capes to userinfo
// @author       _Rikardo_
// @include     https://goliath.hypixel.net/userinfo?*
// @include     https://goliath.hypixel.net/userinfo#*
// ==/UserScript==

var uuidUser = $("font").html();
var username = "";
if(uuidUser.includes("["))
{
    var username = uuidUser.split(" ").pop();
    while(username.includes("</font>"))
    {
        username = username.replace("</font>","");
    }
}
else
{
    username = uuidUser;
}
$("<img id='cape' src=" + "http://s.optifine.net/capes/" + username + ".png" + " onerror=this.style.display='none'>").insertAfter("img");
cape_element = document.getElementById("cape");
cape_element.setAttribute("height", "40%");
cape_element.setAttribute("width", "40%");
cape_element.style.margin = "20px";

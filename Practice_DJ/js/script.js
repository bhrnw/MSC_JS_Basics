let bodyBgColor = document.querySelector("body");
bodyBgColor.style.backgroundColor = "#696969";
let clr = document.querySelector(".page");
clr.style["color"] = "ghostwhite";

let name = document.querySelector(".name");
name.innerHTML = "<span>DJ Rashad</span>";

let profilePhoto = document.querySelector("img");
profilePhoto.setAttribute("src","https://planet.mu/wp-content/uploads/2016/04/flg-rashad-1-650x433.jpg");
let animation = document.querySelector(".short-bio");
animation.className += " animated";

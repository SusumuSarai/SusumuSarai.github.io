//感謝！
function alertThanks() {
  window.alert("Thank to all of you, I can make this HP!");
}

const target7M = document.getElementById("target7M");
target7M.addEventListener("click", alertThanks);

//食べたい！->画像変更
// function alertSweet() {
//   document.getElementById("target7M").src ="https://github.com/SusumuSarai/SusumuSarai.github.io/blob/main/day20_html-css-intro/cani0.png?raw=true""
// }

//食べたい！->画像もどす
function alertSweetR() {
  document.getElementById("target7M").src ="https://github.com/SusumuSarai/SusumuSarai.github.io/blob/main/day20_html-css-intro/picture_man.jpg?raw=true";
  document.getElementById("target7M").height = 298;
}

const target7DR = document.getElementById("target7M");
target7DR.addEventListener("mouseover", alertSweetR);

let dogThinks = ["Can I eat, my sweet?", "Can I eat the sweet?", "Can I eat my sweet?"];
let i = 0;
// let dogThink = prompt('My dog may tink ---');

//食べたい！ ループ
function alertSweet() {
  if(i<3){
    document.getElementById("target7M").src ="https://github.com/SusumuSarai/SusumuSarai.github.io/blob/main/day20_html-css-intro/cani0"+i+".png?raw=true";
    document.getElementById("target7M").height = 298;
  return i=i+1;
  }
  else if (i>=3){
    document.getElementsByClassName("clear").innerText=" ";
    let dogThink = prompt('I think my dog may feel ---');
    document.getElementById("dogMight").appendChild(document.createTextNode("My dog may feel "+dogThink));
  }
}

const target7D = document.getElementById("target7D");
target7D.addEventListener("click", alertSweet);

const div2 = document.createElement("div");
div2.id = "displayHeading";
div1.appendChild(div2);
document.getElementById("displayHeading").className =
  "flex flex-col mt-10 p-5 border-2 border-black relative rounded-md hidden";

const div3 = document.createElement("div");
div3.id = "div3";
div2.appendChild(div3);
document.getElementById("div3").className =
  "w-full flex flex-row justify-between text-sm h-6 absolute -top-3";

const p1 = document.createElement("p");
p1.id = "p1";
const text2 = document.createTextNode("Heading");
p1.appendChild(text2);
div3.appendChild(p1);
document.getElementById("p1").className =
  "bg-gray-300 text-center rounded-md w-20";

const button = document.createElement("button");
button.id = "clshead";
const text3 = document.createTextNode("X");
button.appendChild(text3);
div3.appendChild(button);
document.getElementById("clshead").className =
  "bg-gray-300 text-center rounded-md w-10";

const input = document.createElement("input");
input.id = "head";
div2.appendChild(input);
document.getElementById("head").className =
  "w-full rounded-md bg-gray-100 !outline-none";

const div4 = document.createElement("div");
div4.id = "div4";
div2.appendChild(div4);
document.getElementById("div4").className =
  "w-full flex flex-row justify-between mt-5";

const section = document.createElement("section");
section.id = "section";
div4.appendChild(section);
document.getElementById("section").className = "flex flex-row justify-between";

const button1 = document.createElement("button");
button1.id = "left";
const text5 = document.createTextNode("Left");
button1.appendChild(text5);
section.appendChild(button1);
document.getElementById("left").className = "rounded-md bg-gray-100 w-20 mr-2";

const button2 = document.createElement("button");
button2.id = "center";
const text6 = document.createTextNode("Center");
button2.appendChild(text6);
section.appendChild(button2);
document.getElementById("center").className =
  "rounded-md bg-gray-100 w-20 mr-2";

const button3 = document.createElement("button");
button3.id = "right";
const text7 = document.createTextNode("Right");
button3.appendChild(text7);
section.appendChild(button3);
document.getElementById("right").className = "rounded-md bg-gray-100 w-20 mr-2";

const section1 = document.createElement("section");
section1.id = "section1";
div4.appendChild(section1);
document.getElementById("section1").className = "flex flex-row justify-between";

const button4 = document.createElement("button");
button4.id = "blue";
const text8 = document.createTextNode("Blue");
button4.appendChild(text8);
section1.appendChild(button4);
document.getElementById("blue").className = "rounded-md bg-gray-100 w-20 mr-2";

const button5 = document.createElement("button");
button5.id = "black";
const text9 = document.createTextNode("Black");
button5.appendChild(text9);
section1.appendChild(button5);
document.getElementById("black").className = "rounded-md bg-gray-100 w-20 mr-2";

const button6 = document.createElement("button");
button6.id = "green";
const text10 = document.createTextNode("Green");
button6.appendChild(text10);
section1.appendChild(button6);
document.getElementById("green").className = "rounded-md bg-gray-100 w-20 mr-2";

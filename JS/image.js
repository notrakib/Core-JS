const div5 = document.createElement("div");
div5.id = "displayImage";
div1.appendChild(div5);
document.getElementById("displayImage").className =
  "flex flex-col mt-10 p-5 border-2 border-black relative rounded-md hidden";

const div6 = document.createElement("div");
div6.id = "div6";
div5.appendChild(div6);
document.getElementById("div6").className =
  "w-full flex flex-row justify-between text-sm h-6 absolute -top-3";

const p2 = document.createElement("p");
p2.id = "p2";
const text11 = document.createTextNode("Poster Image");
p2.appendChild(text11);
div6.appendChild(p2);
document.getElementById("p2").className =
  "bg-gray-300 text-center rounded-md w-32";

const button10 = document.createElement("button");
button10.id = "clsImage";
const text12 = document.createTextNode("X");
button10.appendChild(text12);
div6.appendChild(button10);
document.getElementById("clsImage").className =
  "bg-gray-300 text-center rounded-md w-10";

const input2 = document.createElement("input");
input2.id = "file";
input2.setAttribute("type", "file");
input2.setAttribute("name", "attach");
div5.appendChild(input2);

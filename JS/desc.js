const div7 = document.createElement("div");
div7.id = "displayDescription";
div1.appendChild(div7);
document.getElementById("displayDescription").className =
  "flex flex-col mt-10 p-5 border-2 border-black relative rounded-md hidden";

const div8 = document.createElement("div");
div8.id = "div8";
div7.appendChild(div8);
document.getElementById("div8").className =
  "w-full flex flex-row justify-between text-sm h-6 absolute -top-3";

const p3 = document.createElement("p");
p3.id = "p3";
const texti = document.createTextNode("Description");
p3.appendChild(texti);
div8.appendChild(p3);
document.getElementById("p3").className =
  "bg-gray-300 text-center rounded-md w-20";

const button11 = document.createElement("button");
button11.id = "clsDesc";
const textx = document.createTextNode("X");
button11.appendChild(textx);
div8.appendChild(button11);
document.getElementById("clsDesc").className =
  "bg-gray-300 text-center rounded-md w-10";

const textarea = document.createElement("textarea");
textarea.id = "txtarea";
// input2.type = "text";
div7.appendChild(textarea);
document.getElementById("txtarea").className =
  "w-full rounded-md bg-gray-100 h-20 !outline-none";

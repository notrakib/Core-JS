const div0 = document.createElement("div");
div0.id = "div0";
document.body.appendChild(div0);
document.getElementById("div0").className =
  "flex flex-row w-full bg-gray-200 h-full p-5";

const div1 = document.createElement("div");
div1.id = "div1";
div0.appendChild(div1);
document.getElementById("div1").className =
  "h-full w-1/2 flex flex-col p-5 border-2 border-black relative rounded-md  ml-5";

const h1 = document.createElement("h1");
h1.id = "h1";
const text1 = document.createTextNode("Components");
h1.appendChild(text1);
div1.appendChild(h1);
document.getElementById("h1").className =
  "text-xl bg-gray-100 text-center rounded-md h-8 absolute -top-4 w-4/5 self-center";

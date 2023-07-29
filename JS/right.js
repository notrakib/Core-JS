const divf = document.createElement("div");
divf.id = "divf";
div0.appendChild(divf);
document.getElementById("divf").className =
  "h-full w-1/2 flex flex-col p-5 border-2 border-black relative rounded-md ml-5";

const pf = document.createElement("p");
pf.id = "pf";
const textpf = document.createTextNode("Preview");
pf.appendChild(textpf);
divf.appendChild(pf);
document.getElementById("pf").className =
  "text-xl bg-gray-100 text-center rounded-md h-8 absolute -top-4 w-4/5 self-center";

const divf2 = document.createElement("div");
divf2.id = "divf2";
divf.appendChild(divf2);
document.getElementById("divf2").className = "flex-col";

const hf = document.createElement("p");
hf.id = "Heading";
divf2.appendChild(hf);
document.getElementById("Heading").className =
  "text-gray-950 text-left text-4xl h-20";

const img = document.createElement("img");
img.id = "img";
divf2.appendChild(img);
document.getElementById("img").className = "object-cover h-3/6 m-7";

const hf2 = document.createElement("p");
hf2.id = "description";
divf2.appendChild(hf2);
document.getElementById("description").className = "h-32";

const div = document.createElement("div");
div.id = "div";
div1.appendChild(div);
document.getElementById("div").className = "flex flex-row mt-7";

const buttonh = document.createElement("button");
buttonh.id = "headingBTN";
const texth = document.createTextNode("Heading");
buttonh.appendChild(texth);
div.appendChild(buttonh);
document.getElementById("headingBTN").className =
  "w-full rounded-md bg-gray-100";

const buttoni = document.createElement("button");
buttoni.id = "imageBTN";
const textp = document.createTextNode("Image");
buttoni.appendChild(textp);
div.appendChild(buttoni);
document.getElementById("imageBTN").className =
  "w-full rounded-md bg-gray-100 ml-3";

const buttond = document.createElement("button");
buttond.id = "descriptionBTN";
const textd = document.createTextNode("Description");
buttond.appendChild(textd);
div.appendChild(buttond);
document.getElementById("descriptionBTN").className =
  "w-full rounded-md bg-gray-100 ml-3";

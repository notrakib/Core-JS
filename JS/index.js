function getheader() {
  var x = document.getElementById("head").value;
  document.getElementById("Heading").textContent = x;
}

document.getElementById("head").addEventListener("input", getheader);

function getDesc() {
  var x = document.getElementById("txtarea").value;
  document.getElementById("description").textContent = x;
}

document.getElementById("txtarea").addEventListener("input", getDesc);

function getFilePath() {
  var x = document.getElementById("file").files[0];
  document.getElementById("img").src = window.URL.createObjectURL(x);
}

document.getElementById("file").addEventListener("input", getFilePath);

function changeHeadingColor(data) {
  let value = document.getElementById("Heading").className;
  document.getElementById("Heading").className = `${data} ${
    value.split(" ")[1]
  } ${value.split(" ")[2]}`;
}

document.getElementById("blue").addEventListener("click", function () {
  changeHeadingColor("text-blue-600");
});
document.getElementById("black").addEventListener("click", function () {
  changeHeadingColor("text-gray-950");
});
document.getElementById("green").addEventListener("click", function () {
  changeHeadingColor("text-lime-600");
});

function changeHeadingAlign(data) {
  let value = document.getElementById("Heading").className;
  document.getElementById("Heading").className = `${
    value.split(" ")[0]
  } ${data} ${value.split(" ")[2]}`;
}

document.getElementById("left").addEventListener("click", function () {
  changeHeadingAlign("text-left");
});
document.getElementById("center").addEventListener("click", function () {
  changeHeadingAlign("text-center");
});
document.getElementById("right").addEventListener("click", function () {
  changeHeadingAlign("text-right");
});

function CloseHeading() {
  document.getElementById("displayHeading").classList.add("hidden");
  document.getElementById("headingBTN").classList.remove("hidden");
}

function OpenHeading() {
  document.getElementById("displayHeading").classList.remove("hidden");
  document.getElementById("headingBTN").classList.add("hidden");
}

document.getElementById("headingBTN").addEventListener("click", OpenHeading);
document.getElementById("clshead").addEventListener("click", CloseHeading);

function CloseImage() {
  document.getElementById("displayImage").classList.add("hidden");
  document.getElementById("imageBTN").classList.remove("hidden");
}

function OpenImage() {
  document.getElementById("displayImage").classList.remove("hidden");
  document.getElementById("imageBTN").classList.add("hidden");
}

document.getElementById("imageBTN").addEventListener("click", OpenImage);
document.getElementById("clsImage").addEventListener("click", CloseImage);

function CloseDesc() {
  document.getElementById("displayDescription").classList.add("hidden");
  document.getElementById("descriptionBTN").classList.remove("hidden");
}

function OpenDesc() {
  document.getElementById("displayDescription").classList.remove("hidden");
  document.getElementById("descriptionBTN").classList.add("hidden");
}

document.getElementById("descriptionBTN").addEventListener("click", OpenDesc);
document.getElementById("clsDesc").addEventListener("click", CloseDesc);

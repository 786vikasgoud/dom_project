let wholeData = async () => {
  let data = await fetch("https://restcountries.com/v3.1/all");
  let data1 = await data.json();
  return data1;
};

let imgurl;
wholeData()
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      imgurl = data[i].flags.png;
      var newDiv = document.createElement("div");
      newDiv.className = "card";
      newDiv.style.width = "17rem";

      var imgDiv = document.createElement("img");
      imgDiv.className = "flag";
      imgDiv.setAttribute("src", imgurl);
      newDiv.appendChild(imgDiv);

      var countrydiv = document.createElement("div");
      countrydiv.className = "countryname";
      countrydiv.innerText = data[i].name.common;
      newDiv.appendChild(countrydiv);

      var popdiv = document.createElement("div");
      popdiv.className = "Population";
      var strongElement = document.createElement("strong");
      strongElement.innerText = "Population: ";
      popdiv.appendChild(strongElement);
      popdiv.appendChild(document.createTextNode(data[i].population));
      newDiv.appendChild(popdiv);

      // var popdiv = document.createElement("div");
      // popdiv.className = "Population";
      // popdiv.innerText = `Population:${data[i].population}`;
      // newDiv.appendChild(popdiv);

      var regdiv = document.createElement("div");
      regdiv.className = "Region";
      var strongreg = document.createElement("strong");
      strongreg.innerText = "Region: ";
      regdiv.appendChild(strongreg);
      regdiv.appendChild(document.createTextNode(data[i].region));
      newDiv.appendChild(regdiv);

      var capdiv = document.createElement("div");
      capdiv.className = "Capital";
      var strongcap = document.createElement("strong");
      strongcap.innerText = "Capital: ";
      capdiv.appendChild(strongcap);
      capdiv.appendChild(document.createTextNode(data[i].capital));
      newDiv.appendChild(capdiv);

      var filterdiv = document.getElementsByClassName("flagsdata");
      filterdiv[0].appendChild(newDiv);
    }
  })
  .catch((err) => {
    console.log("error");
  });

var iteminput = document.querySelectorAll("li");
for (let i = 0; i < iteminput.length; i++) {
  iteminput[i].addEventListener("click", runevent);
}
function runevent(e) {
  let regiondata = e.target.innerText;
  let filterdiv = document.getElementsByClassName("card");
  Array.from(filterdiv).forEach((element) => {
    // console.log(regiondata);
    if (element.children[3].innerText === `Region: ${regiondata}`) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
var inputs = document.querySelector("input[type='text']");
inputs.addEventListener("keyup", searchevents);
function searchevents(e) {
  let countrydata = e.target.value.toLowerCase();
  let card = document.getElementsByClassName("card");
  Array.from(card).forEach((element) => {
    let str = element.children[1].innerText;
    str = str.toLowerCase();
    if (str.indexOf(countrydata) != -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

var slider_img = document.querySelector(".slider-img");
var images1 = [
  "Baybayin.png",
  "Gold.png",
  "Jar.png",
  "Tabon.png",
  "Textile.png",
];
var images2 = [
  "Builders.png",
  "Ermita.png",
  "Market.png",
  "Parisian.png",
  "Spolarium.png",
];
var images3 = [
  "Akbil.png",
  "Coffin.png",
  "Lolong.png",
  "Pouches.png",
  "Tree.png",
];

document.addEventListener("DOMContentLoaded", function () {
  const imgContainers = document.querySelectorAll(".img-con");

  imgContainers.forEach(function (container) {
    const img = container.querySelector("img");

    container.addEventListener("mouseover", function () {
      img.style.transform = "scale(1.1)";
    });

    container.addEventListener("mouseout", function () {
      img.style.transform = "scale(1)";
    });
  });
});

function aboutUs() {
  window.location.href = "https://kjgb031.github.io/webpage/AboutUs.html";
}

function btnHomepage() {
  window.location.href = "https://kjgb031.github.io/webpage/mainPage.html";
}
/*ANTHROPOLOGY CAROUSEL*/
var a = 0;

function back1() {
  if (a <= 0) a = images1.length;
  a--;
  return setImg1();
}

function next1() {
  if (a >= images1.length - 1) a = -1;
  a++;
  return setImg1();
}

function setImg1() {
  return slider_img.setAttribute("src", "anthroimg/" + images1[a]);
}

/*FINE ARTS CAROUSEL*/

var b = 0;

function back2() {
  if (b <= 0) b = images2.length;
  b--;
  return setImg2();
}

function next2() {
  if (b >= images2.length - 1) b = -1;
  b++;
  return setImg2();
}

function setImg2() {
  return slider_img.setAttribute("src", "artsimg/" + images2[b]);
}

/*NATURAL HISTORY CAROUSEL*/

var c = 0;

function back3() {
  if (c <= 0) c = images3.length;
  c--;
  return setImg3();
}

function next3() {
  if (c >= images3.length - 1) c = -1;
  c++;
  return setImg3();
}

function setImg3() {
  return slider_img.setAttribute("src", "naturalhistoimg/" + images3[c]);
}

// search
const defaultResult = [
  {
    field: [
      "National Museum of Anthropology", // name
      "Anthropology.html", // link
      "Mainimg/anthro.png", // image source
      "Anthropology Museum", // image alt
    ],
  },
  {
    field: [
      "National Museum of Fine Arts",
      "FineArts.html",
      "Mainimg/fineArts.png",
      "Fine Arts Museum",
    ],
  },
  {
    field: [
      "NaturalHistory.html",
      "Anthropology.html",
      "Mainimg/naturalHisto.png",
      "Image 3",
    ],
  },
];
function createCard(data) {
  return `<div class="img-con">
      <a href="${data.link}">
        <img src="${data.image}" alt="${data.imageAlt}" />
      </a>
      <h3>${data.name}</h3>
    </div>`;
}
function getResults() {
  const url = new URL(window.location.href); // get current url, since when you search for an item page will refresh and search value is in url
  const searchValue = url.searchParams.get("searchbarMain"); // get search value in url parameter
  // find the searchValue on converted xml to json
  const result = xmlToJson.record.filter((e) => {
    const [title] = e.field;
    return title.toLowerCase().includes(searchValue.toLowerCase());
  });
  // if no result is found or no search value, show default else show result
  const results = result.length === 0 || !searchValue ? defaultResult : result;
  const resultContainer = document.getElementById("Museums");
  let resultsDOM = ""; // accumulator of html DOM return of createCard
  results.forEach((res) => {
    // deconstruct the array
    const [name, link, image, imageAlt] = res.field;
    resultsDOM += createCard({ name, link, image, imageAlt });
  });
  resultContainer.innerHTML = resultsDOM; // show the result
}

getResults(); // call onload

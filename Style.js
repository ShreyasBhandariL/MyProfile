const node = document.querySelectorAll(".node");
const popUpPage = document.querySelectorAll(".title");

const showPopUp = (index) => {
  popUpPage[index].classList.add("show");
};
const hidePopUp = (index) => {
  popUpPage[index].classList.remove("show");
};

for (let i = 0; i < node.length; i++) {
  node[i].addEventListener("mouseenter", function () {
    showPopUp(i);
  });
  node[i].addEventListener("mouseleave", function () {
    hidePopUp(i);
  });
}

const svd = document.querySelector(".background");
const allText = document.querySelectorAll(".dynamic_color");
const Hlo = document.querySelectorAll(".hlo1");
const Srujan = document.querySelectorAll(".srujan");
const SSS = document.querySelectorAll(".sss");
let DarkMode = false;

function toggleColor() {
  if (DarkMode) {
    svd.style.backgroundColor = "white";
    svd.style.color = "black";
    allText.forEach((element) => {
      element.classList.remove("bgteal-dark");
      element.classList.add("bgteal-white");
    });
     Hlo.forEach((e) => {
       e.classList.remove("hi");
       e.classList.add("hlo1");
     });
    Srujan.forEach((e) => {
      e.classList.remove("github8");
      e.classList.add("github");
    });
    SSS.forEach((e) => {
      e.classList.remove("sss1");
      e.classList.add("sss");
    });
  } else {
    svd.style.backgroundColor = "rgb(9, 13, 27)";
    allText.forEach((element) => {
      element.classList.remove("bgteal-white");
      element.classList.add("bgteal-dark");
    });
    Hlo.forEach((e) => {
      e.classList.remove("hlo1");
      e.classList.add("hi");
    })
    Srujan.forEach((e) => {
      e.classList.remove("github");
      e.classList.add("github8");
    });
    SSS.forEach((e) => {
      e.classList.remove("sss");
      e.classList.add("sss1");
    });
    svd.style.color = "white";
  }
  DarkMode = !DarkMode;
}

/*certificate*/
document.addEventListener("DOMContentLoaded", function () {
  var owlCarousel = $(".owl-carousel");
  if (owlCarousel.length > 0) {
    owlCarousel.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      center: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
});

//contact
const item = document.querySelectorAll(".item");
const content = document.querySelectorAll(".hlo");
const spopup = (index) => {
  content[index].classList.add("show");
};
const hPopUp = (index) => {
  content[index].classList.remove("show");
};

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("mouseenter", function () {
    spopup(i);
  });
  item[i].addEventListener("mouseleave", function () {
    hPopUp(i);
  });
}

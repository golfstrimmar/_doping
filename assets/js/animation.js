"use ctrict";


export const Anim = () => {
  function AnimForScrollTop(cell) {
    window.addEventListener("scroll", function () {
      let rec = cell.getBoundingClientRect();
      if (rec.top < document.body.offsetHeight - 200) {
        cell.classList.add("_is-active");
      }
    });
  }

  function AnimForScrollleft(cell) {
    window.addEventListener("scroll", function () {
      let rec = cell.getBoundingClientRect();
      if (rec.top < document.body.offsetHeight - 200) {
        cell.classList.add("_is-active");
      }
    });
  }

  function AnimForScrollRight(cell) {
    window.addEventListener("scroll", function () {
      let rec = cell.getBoundingClientRect();
      if (rec.top < document.body.offsetHeight - 200) {
        cell.classList.add("_is-active");
      }
    });
  }


  document.addEventListener("DOMContentLoaded", function () {
    let animTop = document.querySelectorAll("._anim-top");
    let animleft = document.querySelectorAll("._anim-left");
    let animRight = document.querySelectorAll("._anim-right");
    let paralax = document.querySelectorAll("._paralax");
    let singlesTop = Array.prototype.slice.call(animTop);
    let singlesleft = Array.prototype.slice.call(animleft);
    let singlesRight = Array.prototype.slice.call(animRight);

    if (singlesTop.length > 0) {
      singlesTop.forEach((cell) => {
        AnimForScrollTop(cell);
      });
    }

    if (singlesleft.length > 0) {
      singlesleft.forEach((cell) => {
        AnimForScrollleft(cell);
      });
    }

    if (singlesRight.length > 0) {
      singlesRight.forEach((cell) => {
        AnimForScrollRight(cell);
      });
    }
  });


};





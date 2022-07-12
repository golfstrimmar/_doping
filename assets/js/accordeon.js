"use ctrict";



export  class Accord {
    constructor(accord) {
      this.button = accord;
      this.header = accord.closest(".accord-header-js");
      this.hidden = this.header.nextElementSibling;
      this.HiddenItemIndex = accord.getAttribute("rel");
      this.HiddenChildren = [...this.hidden.children];
      this.hiddenItemActive = "";
      for (let i = 0; i < this.HiddenChildren.length; ++i) {
        if (i == this.HiddenItemIndex) {
          this.hiddenItemActive = this.HiddenChildren[i];
        }
      }
      this.neibours = [...accord.closest(".accord-header-js").children];
      this.timeout = 0;

      this.neibours.forEach((cell) => {
        if (cell.matches("._is-active")) {
          this.timeout = 300;
        }
      });
    }

    activeAdd(arg) {
      arg.classList.add("_is-active");
    }
    notActiveAdd(arg) {
      arg.classList.remove("_is-active");
    }

    start() {
      Accord.resetAll();

      this.hiddenItemActive.style.height = this.hiddenItemActive.scrollHeight;
      this.neibours.forEach((cell) => {
        cell == this.button ? this.activeAdd(cell) : this.notActiveAdd(cell);
        for (let i = 0; i < this.HiddenChildren.length; ++i) {
          this.notActiveAdd(this.HiddenChildren[i]);
          this.HiddenChildren[i].style.height = "0px";
        }
        setTimeout(() => {
          this.activeAdd(this.hiddenItemActive);
          this.hiddenItemActive.style.height =
            this.hiddenItemActive.scrollHeight + "px";
        }, this.timeout);
      });
    }

    stop() {
      this.notActiveAdd(this.button);
      this.notActiveAdd(this.hiddenItemActive);
      this.hiddenItemActive.style.height = 0;
    }

    static resetAll() {
      document.querySelectorAll(".accord-header-item").forEach((cell) => {
        cell.classList.remove("_is-active");
      });
      document.querySelectorAll(".accord-hidden-item").forEach((cell) => {
        cell.classList.remove("_is-active");
        cell.style.height = "0px";
      });
    }
  }







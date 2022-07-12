"use strict";

import { body } from "/src/constants";


export  const Popups = () => {
    const popup = document.querySelector(".popup-js"),
      contents = popup.querySelectorAll(".popup__content");

    document.addEventListener("click", (e) => {
      const target = e.target;

      // ==========================
      const openPop = () => {
        const initTarget = popup.querySelector(target.getAttribute("rel"));
        contents.forEach((cell) => {
          if (cell == initTarget) {
            initTarget.style.display = "block";
          } else {
            cell.style.display = "none";
          }
        });

        popup.style.display = "block";
        popup.animate([{ opacity: "0" }, { opacity: "1" }], {
          duration: 200,
        });
        setTimeout(() => {
          popup.style.opacity = "1";
        }, 200);
        body.style.cssText = "overflow: hidden";
      };
      // ==========================
      const closePop = () => {
        popup.animate([{ opacity: "1" }, { opacity: "0" }], {
          duration: 200,
        });
        setTimeout(() => {
          popup.style.display = "none";
          popup.style.opacity = "0";
        }, 180);
        body.style.cssText = "overflow: visible";
        contents.forEach((cell) => {
          cell.style.display = "none";
        });
      };
      // ==========================

      if (target.closest(".popups-init-js")) {
        openPop();
      } else if (
        target.matches(".popup-overlay-js") ||
        target.closest(".popup-close-js")
      ) {
        closePop();
      }
    });
  };


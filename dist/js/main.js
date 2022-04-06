"use strict";

/* eslint-env browser */
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar"),
      navbarBurger = navbar.querySelector(".navbar-burger"),
      navbarMenu = navbar.querySelector(".navbar-menu");

  if (navbar && navbarBurger && navbarMenu) {
    navbarBurger.addEventListener("click", function () {
      var condition = !navbarMenu.classList.contains("is-active");
      toggleClass(condition, navbarMenu, "is-active");
      toggleClass(condition, navbarBurger, "is-active");
    });
  } // Getting all the modals, close and trigger buttons


  var modals = document.querySelectorAll(".modal"),
      modalButtons = document.querySelectorAll(".open-modal-button"),
      modalClose = document.querySelectorAll(".close-modal-button"); // For Success Message Notification

  var successMessages = document.querySelectorAll(".modal-success-notification"); // Adding event listener to all the trigger buttons

  if (modalButtons.length > 0) {
    modalButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        document.getElementById(this.dataset.target).classList.add("is-active");
      });
    });
  } // Adding event listener to all the close buttons


  if (modalClose.length > 0) {
    modalClose.forEach(function (closeButton) {
      closeButton.addEventListener("click", function () {
        modals.forEach(function (modal) {
          modal.classList.remove("is-active"); // hiding success notification on closing the modal

          successMessages.forEach(function (message) {
            message.classList.add("is-hidden");
          });
        });
      });
    });
  } // For Showing the Success Notification


  var sendBugReport = document.querySelector(".send-bug-report");

  if (sendBugReport !== null) {
    sendBugReport.addEventListener("click", function () {
      successMessages.forEach(function (message) {
        message.classList.remove("is-hidden");
      });
    });
  } // Notifications


  var closeNotification = document.querySelectorAll(".close-notification");

  if (closeNotification.length > 0) {
    closeNotification.forEach(function (closeIcon) {
      closeIcon.addEventListener("click", function () {
        closeIcon.closest(".notification").remove();
      });
    });
  }
});
/**
 * Toggles class of target based on condition
 * @param {string} cn Condition
 * @param {string} tt Target
 * @param {string} cs Class
 */

var toggleClass = function toggleClass(cn, tt, cs) {
  return tt.classList.toggle(cs, cn);
};
/* eslint-env browser */
document.addEventListener( "DOMContentLoaded", () => {

  const
    navbar = document.querySelector( ".navbar" ),
    navbarBurger = navbar.querySelector( ".navbar-burger" ),
    navbarMenu = navbar.querySelector( ".navbar-menu" )

  if ( navbar && navbarBurger && navbarMenu ) {
    navbarBurger.addEventListener( "click", () => {
      const condition = !navbarMenu.classList.contains( "is-active" )
      toggleClass( condition, navbarMenu, "is-active" )
      toggleClass( condition, navbarBurger, "is-active" )
    } )
  }

  // Getting all the modals, close and trigger buttons
  const
    modals = document.querySelectorAll( ".modal" ),
    modalButtons = document.querySelectorAll( ".open-modal-button" ),
    modalClose = document.querySelectorAll( ".close-modal-button" )

  // For Success Message Notification
  const successMessages = document.querySelectorAll( ".modal-success-notification" )

  // Adding event listener to all the trigger buttons
  if ( modalButtons.length > 0 ) {
    modalButtons.forEach( button => {
      button.addEventListener( "click", function () {
        document.getElementById( this.dataset.target ).classList.add( "is-active" )
      } )
    } )
  }

  // Adding event listener to all the close buttons
  if ( modalClose.length > 0 ) {
    modalClose.forEach( closeButton => {
      closeButton.addEventListener( "click", function () {
        modals.forEach( modal => {
          modal.classList.remove( "is-active" )
          // hiding success notification on closing the modal
          successMessages.forEach( message => {
            message.classList.add( "is-hidden" )
          } )
        } )
      } )
    } )
  }

  // For Showing the Success Notification
  const sendBugReport = document.querySelector( ".send-bug-report" )
  if ( sendBugReport !== null ) {
    sendBugReport.addEventListener( "click", function () {
      successMessages.forEach( message => {
        message.classList.remove( "is-hidden" )
      } )
    } )
  }

  // Notifications
  const closeNotification = document.querySelectorAll( ".close-notification" )
  if ( closeNotification.length > 0 ) {
    closeNotification.forEach( closeIcon => {
      closeIcon.addEventListener( "click", () => {
        closeIcon.closest( ".notification" ).remove();
      } )
    } )
  }

} )

/**
 * Toggles class of target based on condition
 * @param {string} cn Condition
 * @param {string} tt Target
 * @param {string} cs Class
 */
const toggleClass = ( cn, tt, cs) => tt.classList.toggle( cs, cn )

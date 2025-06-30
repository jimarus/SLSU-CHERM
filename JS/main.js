/**
 * main.js
 * 
 * This script handles various UI interactions and animations for the SLSU CHERM website.
 * 
 * Features:
 * - Smooth scroll to "What is CHERM" section when About Us is clicked.
 * - Handles redirection to Objectives page.
 * - Restores scroll position to "What is CHERM" if set in sessionStorage.
 * - Responsive behavior for Bootstrap modal navigation on window resize.
 * - Animated intro title using anime.js.
 * - Shows/hides the custom About Us dropdown menu on hover.
 * 
 * Dependencies:
 * - Bootstrap 5 (for modal)
 * - anime.js (for text animation)
 * 
 * Author: SLSU CHERM Web Team
 * Last updated: 2025-06-30
 */

/* jshint esversion: 6, browser: true */
(function () {
    'use strict';

    /**
     * Smooth scroll to "What is CHERM" section when About Us is clicked in navbar.
     */
    document.getElementById('navbarDropdown').addEventListener('click', function (event) {
      if (window.location.hash !== '#what-is-cherm') {
        event.preventDefault();
        document.querySelector('#what-is-cherm').scrollIntoView({ behavior: 'smooth' });
      }
    });

    /**
     * Redirects to objectives.html (currently unused).
     */
    function gotoObjectives() {
      window.location.href = "objectives.html";
    }

    /**
     * On DOMContentLoaded, scroll to "What is CHERM" if sessionStorage flag is set.
     */
    document.addEventListener("DOMContentLoaded", function () {
      if (sessionStorage.getItem("scrollToWhatIsCherm") === "true") {
        sessionStorage.removeItem("scrollToWhatIsCherm");

        let target = document.getElementById("what-is-cherm");
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }, 500);
        }
      }
    });

    /**
     * Handles closing the Bootstrap modal if window is resized to desktop width.
     */
    function handleResize() {
      const navModal = document.getElementById('navModal');
      if (window.innerWidth >= 992 && navModal.classList.contains('show')) {
        const modalInstance = bootstrap.Modal.getInstance(navModal);
        if (modalInstance) {
          modalInstance.hide();
        }

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }

        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
      }
    }

    window.addEventListener('resize', handleResize);
    document.addEventListener('DOMContentLoaded', handleResize);

    /**
     * Animates the intro title text using anime.js.
     */
    var textWrapper = document.querySelector('.intro-title .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.intro-title .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 20 * i
      }).add({
        targets: '.intro-title .letter',
        rotateY: [0, 90],
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    setTimeout(function () {
      document.querySelector('.intro-title').style.display = 'none';
    }, 4000);

    /**
     * Shows/hides the custom About Us dropdown menu on hover.
     */
    const aboutUs = document.getElementById('navbarDropdown');
    const dropdown = document.getElementById('customDropdown');

    if (aboutUs && dropdown) {
      aboutUs.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
      });

      dropdown.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
      });

      dropdown.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
      });

      aboutUs.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!dropdown.matches(':hover')) {
            dropdown.style.display = 'none';
          }
        }, 200);
      });
    }

})();

/**
 * Duplicate About Us dropdown hover logic for compatibility.
 * Ensures dropdown shows/hides on hover for About Us link.
 */
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('navbarDropdown');
    const dropdown = document.getElementById('customDropdown');

    if (aboutLink && dropdown) {
        aboutLink.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
        aboutLink.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!dropdown.matches(':hover')) dropdown.style.display = 'none';
            }, 200);
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });
        dropdown.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
    }
});
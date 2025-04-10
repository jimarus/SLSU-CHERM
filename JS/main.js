/* jshint esversion: 6, browser: true */
(function () {
    'use strict';
  
    document.getElementById('navbarDropdown').addEventListener('click', function (event) {
      if (window.location.hash !== '#what-is-cherm') {
        event.preventDefault();
        document.querySelector('#what-is-cherm').scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    function gotoObjectives() {
      window.location.href = "objectives.html";
    }
  
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
  
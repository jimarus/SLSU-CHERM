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

// Function to hide the modal if the window width is greater than or equal to 992px
function handleResize() {
    const navModal = document.getElementById('navModal');
    if (window.innerWidth >= 992 && navModal.classList.contains('show')) {
        // Check if the modal instance exists
        const modalInstance = bootstrap.Modal.getInstance(navModal);
        if (modalInstance) {
            modalInstance.hide(); // Hide the modal
        }

        // Remove the modal backdrop if it exists
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }

        // Ensure the body class and styles are reset
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
    }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Call the function on page load to handle initial state
document.addEventListener('DOMContentLoaded', handleResize);


// Wrap every letter in a span
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

// Custom dropdown functionality
// Show the dropdown when the trigger is hovered over
const trigger = document.getElementById("navbarDropdown");
const dropdown = document.getElementById("customDropdown");
const toggleIcon = document.getElementById("dropdownToggleIcon");

let hoverTimeout;
let dropdownVisible = false;

function showDropdown() {
    clearTimeout(hoverTimeout);
    dropdown.style.display = "block";
    dropdownVisible = true;
}

function hideDropdown() {
    hoverTimeout = setTimeout(() => {
        dropdown.style.display = "none";
        dropdownVisible = false;
    }, 300);
}

// Hover behavior
trigger.addEventListener("mouseenter", showDropdown);
trigger.addEventListener("mouseleave", hideDropdown);
dropdown.addEventListener("mouseenter", showDropdown);
dropdown.addEventListener("mouseleave", hideDropdown);

// Click toggle icon to manually toggle dropdown
toggleIcon.addEventListener("click", () => {
    if (dropdownVisible) {
        dropdown.style.display = "none";
        dropdownVisible = false;
    } else {
        showDropdown();
    }
});



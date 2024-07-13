
$(window).on("load", function () {
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader() {
  $("#loading").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $("#loading").remove(); //makes page more lightweight
  });
}

// typing effect
var typed = new Typed("#typed", {
  strings: ["Web Developer", "Web Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 4000,
  startDelay: 1000,
  loop: true,
});

// memberikan kelas active ke navbar saat discroll dan klik
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const sections = document.querySelectorAll("section");

  function changeLinkState() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 30;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-item a[href="#${sectionId}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`.nav-item a[href="#${sectionId}"]`)
          .classList.remove("active");
      }
    });
  }

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = navLink.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", changeLinkState);
  changeLinkState(); // Run on page load to set initial state
});

document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  readMoreBtns.forEach(btn => {
    const cardText = btn.previousElementSibling;
    const words = cardText.innerText.split(' ');

    if (words.length > 10) {
      const truncatedText = words.slice(0, 10).join(' ') + '...';
      cardText.innerText = truncatedText;
      btn.style.display = 'inline-block';

      btn.addEventListener('click', () => {
        if (btn.innerText === 'Read More') {
          cardText.innerText = words.join(' ');
          btn.innerText = 'Read Less';
        } else {
          cardText.innerText = truncatedText;
          btn.innerText = 'Read More';
        }
      });
    }
  });
});

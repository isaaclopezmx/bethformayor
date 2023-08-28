// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

$(document).ready(function () {
  // Initialize Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Check if the element is one of those that should be delayed
        if (entry.target.id !== "animatedText") {
          // Delay the animation by 2 seconds (2000 milliseconds)
          setTimeout(() => {
            animateText(entry.target.id);
          }, 2000);
        } else {
          // Start the animation immediately for 'animatedText'
          animateText(entry.target.id);
        }
      }
    });
  });

  // Observe elements with the IDs 'animatedText' and 'animatedTextTwo'
  observer.observe(document.querySelector("#animatedText"));
  observer.observe(document.querySelector("#animatedTextTwo"));

  function animateText(targetId) {
    let text = $(`#${targetId}`).text();
    let html = "";

    for (let i = 0; i < text.length; i++) {
      html += `<span>${text[i]}</span>`;
    }

    $(`#${targetId}`).html(html);

    let $spans = $(`#${targetId} span`);
    let index = 0;

    function innerAnimateText() {
      if (index < $spans.length) {
        $($spans[index]).css("color", "#EFB114");
        index++;
        setTimeout(innerAnimateText, 100); // Adjust the speed here
      }
    }

    innerAnimateText();
  }
});

/*
	Snapshot by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

		// Gallery.
			$('.gallery').each(function() {

				var	$gallery = $(this),
					$content = $gallery.find('.content');

				// Poptrox.
					$content.poptrox({
						usePopupCaption: true
					});

				// Tabs.
					$gallery.each( function() {

						var $this = $(this),
							$tabs = $this.find('.tabs a'),
							$media = $this.find('.media');

						$tabs.on('click', function(e) {

							var $this = $(this),
								tag = $this.data('tag');

							// Prevent default.
							 	e.preventDefault();

							// Remove active class from all tabs.
								$tabs.removeClass('active');

							// Reapply active class to current tab.
								$this.addClass('active');

							// Hide media that do not have the same class as the clicked tab.
								$media
									.fadeOut('fast')
									.each(function() {

										var $this = $(this);

										if ($this.hasClass(tag))
											$this
												.fadeOut('fast')
												.delay(200)
												.queue(function(next) {
													$this.fadeIn();
													next();
												});

									});

						});

					});


			});

	});

})(jQuery);

// Chat
// Handles ingredientSearch and bannerChatButton only
document.addEventListener("DOMContentLoaded", function() {
    const ingredientSearch = document.getElementById("ingredientSearch");
    const bannerChatButton = document.getElementById("bannerChatButton");

    // Banner Chat Button Click Handler
    bannerChatButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const bannerMessage = ingredientSearch.value.trim();
        if (bannerMessage !== "") {
            addUserMessage(bannerMessage);
            ingredientSearch.value = ""; // Clear the search bar
            // Simulate a bot response (replace with your chatbot logic)
            setTimeout(function() {
                addBotMessage("Simulated bot response: " + bannerMessage);
            }, 1000); // Simulate a 1-second delay
        }
    });



// Banner should only leave space for footer

function adjustBannerHeight() {
    const banner = document.getElementById('banner');
    const footer = document.getElementById('footer');

    if (banner && footer) {
        const footerHeight = footer.offsetHeight;
        banner.style.minHeight = `calc(100vh - ${footerHeight}px)`;
        banner.style.height = `calc(100vh - ${footerHeight}px)`;
    }
}

// Call the function on page load and window resize
window.addEventListener('load', adjustBannerHeight);
window.addEventListener('resize', adjustBannerHeight);


// Dark & Light toggle

document.querySelector(".day-night input").addEventListener("change", () => {
	document.querySelector("body").classList.add("toggle");
	setTimeout(() => {
	  document.querySelector("body").classList.toggle("light");
  
	  setTimeout(
		() => document.querySelector("body").classList.remove("toggle"),
		10
	  );
	}, 5);
  });
  
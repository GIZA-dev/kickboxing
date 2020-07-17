$(document).ready(function () {

			/*----------------------------------------------------*/
			/*  Sticky Navigation
			------------------------------------------------------*/
			$(window).on('scroll', function () {

				var y = $(window).scrollTop(),
					topBar = $('header');
					link = $('.main-navigation li a');

				if (y > 1) {
					topBar.addClass('sticky');
					link.addClass('linkColor');
				} else {
					topBar.removeClass('sticky');
					link.removeClass('linkColor');

				}

			});

			/*-----------------------------------------------------*/
    /* Mobile Menu
   ------------------------------------------------------ */
	var toggleButton = $('.menu-toggle'), nav = $('.main-navigation');

  toggleButton.on('click', function(event){
    event.preventDefault();
    toggleButton.toggleClass('is-clicked');
    nav.slideToggle();
  });

    if (toggleButton.is(':visible')) nav.addClass('mobile');

    $(window).resize(function() {
    if (toggleButton.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('#main-nav-wrap li a').on("click", function() {

    if (nav.hasClass('mobile')) {
      toggleButton.toggleClass('is-clicked');
      nav.fadeOut();
    }
    });

			/*----------------------------------------------------*/
			/* Highlight the current section in the navigation bar
			------------------------------------------------------*/
			var sections = $("section"),
				navigation_links = $("#main-nav-wrap li a");

			sections.waypoint({

				handler: function (direction) {

					var active_section;

					active_section = $('section#' + this.element.id);

					if (direction === "up") active_section = active_section.prev();

					var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

					navigation_links.parent().removeClass("current");
					active_link.parent().addClass("current");

				},

				offset: '25%'

			});

			/*----------------------------------------------------*/
			/* Smooth Scrolling
			------------------------------------------------------*/
			$('.smoothscroll').on('click', function (e) {

				e.preventDefault();

				var target = this.hash,
					$target = $(target);

				$('html, body').stop().animate({
					'scrollTop': $target.offset().top
				}, 800, 'swing', function () {
					window.location.hash = target;
				});

			});
			/*----------------------------------------------------*/
			/* Choose correct history
			------------------------------------------------------*/
			$('.usa').click(function () {
				$(this).css("opacity", "1");
				$('.textusa').show();
				$('.textjap').hide();
				$('.jap').css("opacity", "0.5");
			});

			$('.jap').click(function () {
				$(this).css("opacity", "1");
				$('.textjap').show();
				$('.textusa').hide();
				$('.usa').css("opacity", "0.5");
			});
			/*----------------------------------------------------*/
			/* devisions of kickboxing
			------------------------------------------------------*/
			$('.hidden_description').hide();
			$(document).ready(function () {
				$('.section').click(function () {
					$(this).toggleClass('whiteborder').next().slideToggle();
					$('.section').not(this).removeClass('whiteborder').next().slideUp();
				});
			});

			/*----------------------------------------------------*/
			/* Slick Slider
			------------------------------------------------------*/
			$('.slider').slick({
				dots: true,
				infinite: true,
				arrows: false,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				]
			});
});
"use strict";



(function() {
	$(function() {



		/*AOS*/
		if( "AOS" in window ){
			AOS.init({
				offset: 100,
				once: true,
				duration: 1100,
				delay: 150
			});
			setTimeout(function() { AOS.refresh(); }, 1);
		}


		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				// ajax: {
				//   url: 'https://api.github.com/search/repositories',
				//   dataType: 'json'
				//   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
				// },
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});


		/*Owl carousel*/
		var owlBtn = [
			'<span class="owl-btn previous">'+
				'<svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow"></path></svg>'+
			'</span>', 
			'<span class="owl-btn next">'+
				'<svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow"></path></svg>'+
			'</span>'
		]

		{
			var items = $(".short-partners-items.owl-carousel").attr("data-owl-item") || null
			$(".short-partners-items.owl-carousel").owlCarousel({
				nav: true,
				//items: 3,
				dots: false,
				dotsEach: true,
				autoplay: true,
				touchDrag: checkSm(),
				responsive:{
					0:{items:2},
					991:{items: items || 3}
				},
				navText : owlBtn,
				margin: 30
			});
		}

		$(".certifications-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: true,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:3}
			},
			navText : owlBtn,
			margin: 15
		});

		$(".short-video-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: true,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:2}
			},
			navText : owlBtn,
			margin: 15
		});


		if( $(".owl-nav-style-1").length > 0 ){
			$(".owl-nav-style-1").map(function( i, el ){
				$(el).find(".owl-prev").after($(el).find(".owl-dots"));
			})
			
		}
		



		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				thumbs : {
					autoStart   : true
				},
				touch : false,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		if( "smoothScroll" in window )
			smoothScroll.init({
				easing: 'easeInOutCubic',
				offset: 85
			});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});



		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				//"theme-dark",
				"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});







		/*FLIKITY*/
		var arrowStyle = "M 198.608,246.104 382.664,62.04 c 5.068,-5.056 7.856,-11.816 7.856,-19.024 0,-7.212 -2.788,-13.968 -7.856,-19.032 L 366.536,7.864 C 361.476,2.792 354.712,0 347.504,0 340.296,0 333.54,2.792 328.476,7.864 L 109.328,227.008 c -5.084,5.08 -7.868,11.868 -7.848,19.084 -0.02,7.248 2.76,14.028 7.848,19.112 l 218.944,218.932 c 5.064,5.072 11.82,7.864 19.032,7.864 7.208,0 13.964,-2.792 19.032,-7.864 l 16.124,-16.12 c 10.492,-10.492 10.492,-27.572 0,-38.06 z";

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items figure").length ){
			window.bnrCarousel = $(".bnr-carousel").children(".carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: false,
				pauseAutoPlayOnHover: true,
				arrowShape: "M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z",
				initialIndex: 0,
				friction: 1,
				selectedAttraction: 1,
				prevNextButtons: false, //костыль с переключателями
				draggable: false,
				wrapAround: true,
				pageDots: true,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			bnrCarousel.data("flickity");

			$(".bnr-carousel .carousel-items").append("<div class='container-arrows'></div>").find(".container-arrows").append($(".bnr-carousel .carousel-items .flickity-prev-next-button"))

			$(".bnr-carousel .container-arrows").append('<button class="flickity-prev-next-button previous" type="button" aria-label="previous"><svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow"></path></svg></button><button class="flickity-prev-next-button next" type="button" aria-label="next"><svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>');

			var btnNext = bnrCarousel.find(".flickity-prev-next-button.next");
			var btnPrev = bnrCarousel.find(".flickity-prev-next-button.previous");

			btnNext.on("click", bnrCarousel, function(e, s) {
				var currentSlide = bnrCarousel.find(".is-selected");
				currentSlide.addClass("ended");
				setTimeout(function(){
					currentSlide.removeClass("ended");
					e.data.flickity("next", true);
				}, 400);
				console.log(e, s);
			});

			btnPrev.on("click", bnrCarousel, function(e) {
				e.data.flickity("previous", true);
			});


			var winHeight = $(window).height();
			bnrCarousel.on( 'settle.flickity', function( event, index ) {
				var that = $(this);
				var bnrImgHeight = that.find(".is-selected img").height()
				$(".is-selected .parallax-scene").css("transform", "scale(" + (winHeight / (bnrImgHeight * 0.013) >> 0) / 100 + ")" );
				//$(".is-selected .desc-content").css("transform", "scale(" + (winHeight / (bnrImgHeight * 0.012) >> 0) / 100 + ")" );
			});
		}

		if ($(".carousel-article").length >= 0) {
			window.carouselArticle = function() {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: false,
							cellAlign: "center",
							bgLazyLoad: 1,
							//friction: 1,
							//selectedAttraction: 1,
							initialIndex: 1,
							draggable: false,
							contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 1,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: false,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						adaptiveHeight: true,
						//contain: true,
						pageDots: false
					});
          $("[data-fancybox]").fancybox({
            afterShow: function(instance, current) {
              this.$content.find(".carousel-main").flickity("resize");
              this.$content.find(".carousel-nav").flickity("resize");
            }
          });
				}
			}
		};
		carouselArticle();
		

    // Прибавление-убавление значении
    (function(){
      var form = $("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(document).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        cntInput.val( cntVal ).attr("value", cntVal)
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )

    })();


    



		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
				console.log("masonry");
			}
			$(window).trigger("resize");
		}

		//Лимит текста
		$("[data-text-limit]").map(function( i, el ){
			el = $(el);
			var text = el.text();
			var textLimit = el.attr("data-text-limit");

			if( text.length > textLimit*1 ){
				text = text.substring(0, textLimit )
				el.text( text+ " ..." );
			}
		})


		//Паралакс картин
		$(".parallax-scene").map(function(i, el){
			var parallaxInstance = new Parallax(el);
		})

		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 80 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled");

			} else if ($(window).scrollTop() < 80 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta

			if( $(".entity-bar-area").length < 0 ){

				var entityBarArea = $(".entity-bar-area");
				var entityBar = $(".entity-bar");
				var enContent = ( ($(".entity-content").offset().top) <= ($(window).scrollTop() + $(window).height() - ($(".entity-content").height() + 350)) )

				if( (entityBarArea.offset().top) <= ($(window).scrollTop() + 70) && !enContent){
					if(!entityBar.hasClass("entity-bar-fixed")){
						entityBar.addClass("entity-bar-fixed");
						$("main").before(entityBar);
					}
				}else if( entityBar.hasClass("entity-bar-fixed") ){
					entityBar.removeClass("entity-bar-fixed");
					entityBarArea.after(entityBar);
					//console.log("не в зоне");
				}
			}

		});
		$(window).trigger("scroll");

		//Изменение цвета стеклотары
		$(".choice-color-item").on("click", function(){
			var that = $(this);
			var index = that.index();
			that
			.addClass("is-selected").siblings().removeClass("is-selected")
			.closest(".wrapper").find(".choice-imgs img").eq(index)
			.addClass("is-selected").siblings().removeClass("is-selected");
		})


		//Прилоудер
		window.preLoader = {
		  preBox: "#prebox",
		  enter: true,
		  status: $("#prebox").hasClass("in"),

		  preToggle: function(bool, func) {

		    var endtime = 600;
		    //if (!this.enter) return;
		    if (typeof func === "function")
		      setTimeout(function() {
		        func();
		      }, endtime);
		    var preBox = $(this.preBox);
		    if (bool || this.status) {
		    	setTimeout(function(){
			      preBox.removeClass("in");
		    	}, endtime)
		     } else {
			     	preBox
			      	.show()
			      	.addClass("in")
			      	.find(".box-content");
				      setTimeout(function() {
					      $(preLoader.preBox).fadeOut();
				      }, 1000);
		     }
		    return (this.status = !this.status);

		  },

		  preImg: function(img) {
		    var images = img || document.images,
		      imagesTotalCount = images.length,
		      imagesLoadedCount = 0,
		      preloadPercent = $(".percent").text("0 %");
		      
		    if (imagesTotalCount == 0) {
		      preOnload();
		      $(preloadPercent).text("100 %");
		    }

		    for (var i = 0; i < imagesTotalCount; i++) {
		      var image_clone = new Image();
		      image_clone.onload = image_loaded;
		      image_clone.onerror = image_loaded;
		      image_clone.src = images[i].src;
		    }

		    function preOnload() {
		      onLoaded();
		      preLoader.preToggle();
		    }

		    function image_loaded() {
		      imagesLoadedCount++;

		      var per = (100 / imagesTotalCount * imagesLoadedCount) << 0;

		      setTimeout(function() {
		        //console.log(per);
		        $(preloadPercent).text(per + "%");
		        $(".text-shadow").css("left", per + "%")
		      }, 500);

		      if (imagesLoadedCount >= imagesTotalCount) preOnload();
		    }
		  }
		};
		preLoader.preImg();

	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent),
		isEdge = /Edge/i.test(navigator.userAgent);


// COMMON FUNCTION

setTimeout(function() {
	//jQuery FUNCITON
	$.fn.onResized = function() {
		onResized(function() {
			this;
		});
		return this;
	};
}, 10);




function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}

function intSpace( int, replaceType ){
		var cnt = 0;
		var newInt = "";
		int = int*1;
		replaceType = replaceType || " ";
		if( typeof int === NaN )
			return;
		var arrInt = (int+"").match(/([0-9])/gim).reverse();
		for (var i = 0; i < arrInt.length; i++) {
			cnt++;
			newInt = arrInt[i]+newInt
			if(cnt === 3){
				newInt = replaceType+newInt;
				cnt = 0;
			}
		}
		return newInt;
}

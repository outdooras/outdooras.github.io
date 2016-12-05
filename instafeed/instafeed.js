jQuery( document ).ready(function($) {
 var feed = new Instafeed({
 get: 'user',
 userId: 2162912851,
 accessToken: '2162912851.1677ed0.eb4c604e9f6b42d788f586a965d7b7af',
 resolution: 'thumbnail',
 template: '<a href="{{link}}" target="_blank"><img src="{{image}}" style="border-radius: 25px"; /><div class="likes">&hearts; {{likes}}</div></a>',
 target: 'instafeed',
 
 after: function() {
 $('.owl-carousel').owlCarousel({
	/*
	items : 1, //1 items above 1000px browser width
	itemsDesktop : [1000,1], //1 items between 1000px and 901px
	itemsDesktopSmall : [900,1], // 1 items between 900px and 601px
	itemsTablet: [600,1], //1 items between 600 and 0
	itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	*/
	singleItem: true, // One image slide
	margin:0.5,
	
	//Pagination
	pagination: false,
	loop:false,
	
	// Autoplay
	autoPlay: true,
	stopOnHover: true,
	
	// Navigation
	navigationText : ["forrige","neste"],
	navigation: true,
	
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
	
	//Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 });
 
 }
 });
 feed.run();
});
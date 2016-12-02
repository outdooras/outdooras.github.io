jQuery( document ).ready(function($) {
 var feed = new Instafeed({
 get: 'user',
 userId: 2162912851,
 accessToken: '2162912851.1677ed0.eb4c604e9f6b42d788f586a965d7b7af',
 resolution: 'thumbnail',
 template: '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12"><a href="{{link}}" target="_blank"><img src="{{image}}" style="border-radius: 25px"; /><div class="likes">&hearts; {{likes}}</div></a></div>',
 target: 'instafeed',
 
 after: function() {
 $('.owl-carousel').owlCarousel({
	items : 10, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	loop:false,
	margin:0.1,
	navigation: true,
	navigationText: true,
	autoPlay: true,
 });
 
 }
 });
 feed.run();
});
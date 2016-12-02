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
 items:4,
 loop:false,
 margin:0,
 navigation: true,
 navigationText: true,
 autoPlay: true,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [979,3]
 });
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});
 }
 });
 feed.run();
});
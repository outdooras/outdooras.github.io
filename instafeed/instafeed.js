var feed = new Instafeed({
        get: 'user',
        userId: '2162912851',
        accessToken: '2162912851.1677ed0.eb4c604e9f6b42d788f586a965d7b7af',
		limit: 6,
		sortBy: 'most-recent',
		  after: function () {
			var images = $("#instafeed").find('a');
			$.each(images, function(index, image) {
			  var delay = (index * 75) + 'ms';
			  $(image).css('-webkit-animation-delay', delay);
			  $(image).css('-moz-animation-delay', delay);
			  $(image).css('-ms-animation-delay', delay);
			  $(image).css('-o-animation-delay', delay);
			  $(image).css('animation-delay', delay);
			  $(image).addClass('animated flipInX');
			});
		  },
		template: '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12"><a href="{{link}}" target="_blank"><img src="{{image}}" style="border-radius: 25px"; /><div class="likes">&hearts; {{likes}}</div></a></div>'
});
feed.run();
var $boxOne = $('.box:nth-child(1)')/*,
  $boxTwo = $('.box:nth-child(2)'),
  $boxThree = $('.box:nth-child(3)')*/;

var boxOne = new TimelineMax();
boxOne.to($boxOne, 0.6, {
  opacity: 1,
  scale: 1,
  ease: Back.easeOut
}, 1.2);

/*,
  boxTwo = new TimelineMax(),
  boxThree = new TimelineMax();

boxOne.to($boxOne, 0.6, {
  opacity: 0.25,
  scale: 1,
  ease: Back.easeOut
}).to($boxOne, 0.6, {
  rotation: 4,
  ease: Back.easeOut
}, 2);

boxTwo.to($boxTwo, 0.6, {
  opacity: 0.5,
  scale: 1,
  ease: Back.easeOut
}, 0.6).to($boxTwo, 0.6, {
  rotation: -4,
  ease: Back.easeOut
}, 1.8);

boxThree.to($boxThree, 0.6, {
  opacity: 1,
  scale: 1,
  ease: Back.easeOut
}, 1.2);

/**
 * Point Animation
 */
$('.point').on('click', function(e) {
  var getTotalPoints = $('.point').length,
    getIndex = $(this).index(),
    getCompleteIndex = $('.point--active').index();
    $('.point--active').addClass('point--complete').removeClass('point--active');
    $(this).addClass('point--active');
    $(this).prevAll().removeClass('point--complete').removeClass('point--active');
    $(this).nextAll().removeClass('point--complete').removeClass('point--active');
	$('#sr').val(getIndex);
	//change progress bar label
	$('.progress-note-label:nth-child('+(getIndex+1)+')').removeClass('hide');
	$('.progress-note-label:nth-child('+(getIndex+1)+')').prevAll().addClass('hide');
	$('.progress-note-label:nth-child('+(getIndex+1)+')').nextAll().addClass('hide');
	//alert((getIndex))
	refresh(getIndex)
});



$('.radius-toggle').on('click', function() {
  $('body').toggleClass('show-radius')
});

var missionatual = $.parseJSON(localStorage.getItem('currentMission'))
function createCard(){
    var misionSelect = {}
    
    misionSelect = JSON.parse(localStorage.getItem('misiones')) 
    
   $.each(misionSelect, function(i, mision){
       var cardMIsion = '<div id="'+mision.id+'" class="cardMision animate__animated animate__backInRight"><div class="bulletMision"><div class="mision"><div class="txtMision"><p>'+mision.bullet+'</p></div><div class="iconMision"><img src="shared/img/ui/'+mision.id+'.svg" alt="'+mision.id+'"></div></div><img src="shared/img/ui/bullet-mision.svg" alt="bulletSvg"></div><div class="numberMision"><p>'+(i+1)+'</p><div id="number'+mision.id+'" class="numberFoot"><img src="shared/img/ui/number-unactive.svg" alt="unactive"></div></div></div>'
        $(cardMIsion).appendTo(".swipperMisiones")
       
   })
}

$(document).ready(function () {
    var rallyIndex = ''
    var rallyTotal = localStorage.getItem('rally')
    createCard()
    var urlNumber = 'shared/img/ui/number-active.svg'
    $('#titleMisiones').text(LanObj.ui.misiones)
    $.each(missionatual, function(i, misionComplete){
        $('#number'+misionComplete+'>img').attr('src', urlNumber)
    })
    
    if (rallyTotal != undefined) {
        rallyIndex = $.parseJSON(rallyTotal);
        console.log(rallyIndex);
    }

    var progressIndex  = (100/11)
    var progressPan = missionatual.length*progressIndex
    console.log(progressPan);
    $('.imgProgress').css('width', ''+progressPan/2+'%' )
    $('.progressCat>div').css('width', ''+progressPan+'%' )
// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('arrowPrev');
var rightPaddle = document.getElementsByClassName('arrowNext');
console.log(leftPaddle);
// get items dimensions
var itemsLength = $('.cardMision').length;
console.log(itemsLength);
var itemSize = $('.cardMision').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.contentMisiones').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuVisibleSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.swipperMisiones').scrollLeft();
    
};

// finally, what happens when we are actually scrolling the menu
$('.swipperMisiones').on('scroll', function() {
   
  console.log('entra scroll');
	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;
    console.log(menuPosition);
    console.log(menuEndOffset);
    console.log(paddleMargin);
	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < paddleMargin) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition >= paddleMargin) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
}



});

// scroll to left
$(rightPaddle).on('click', function(e) {
  console.log(e.target);
	$('.swipperMisiones').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
  console.log('entraright');
});

// scroll to right
$(leftPaddle).on('click', function() {
	$('.swipperMisiones').animate( { scrollLeft: '0' }, scrollDuration);
  console.log('entrarleft');
});
});
function b_menu(sMenuSelector)					
{
var m = this;

m.selector = sMenuSelector;
m.menu = $(m.selector);

m.showSubmenu = function (){
	$(this).children('ul').stop().slideDown();
	$(this)
		.stop()
			.animate({
				backgroundColor:"#c0c0c0",
			}, 500 );
	}
	
m.hideSubmenu = function(){
	$(this).children('ul').stop().slideUp();
	$(this)
		.stop()
			.animate({
				backgroundColor:"#DDD",
			}, 500 );
	}

m.menu.find('li')
	.mouseenter(m.showSubmenu)		
	.mouseleave(m.hideSubmenu);
}
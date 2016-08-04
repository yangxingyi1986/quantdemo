(function(){
    var scTop = 0,
        beginH = 138,
        wW = $(window).width(),
        classN,
        num;
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
        beginH = 138;
        switch (scTop){
            case 600: beginH -= 45;break;
            case 500: beginH -= 50;break;
            case 400: beginH -= 55;break;
            case 300: beginH -= 60;break;
            case 200: beginH -= 65;break;
            default : beginH = 138;break;
        }
    });
    $('.side-li > li').hover(function(){
        $(this).find('h3').css({border: 'none'})
            .end().find('span').css({color: "#f40"});
        classN = $(this).attr('class');
        num = classN.substring(2, classN.length);

        switch (scTop){
            case 0: if(num > 14){ beginH += 120}else if(num >= 12){beginH += 41}; break;
            case 100: if(num == 1){beginH -= 27}else if(num == 16){beginH += 7}; break;
            case 200: num < 5 ? beginH -= 60 : beginH -= 30; break;
            case 300: num < 8 ? beginH -= 60 : beginH -= 40; break;
            case 400: num <= 11 ? beginH -= 50 : beginH += 10; break;
            case 500: num < 14 ? beginH -= 50 : ''; break;
            case 600: num <= 16 ? beginH -= 50 : ''; break;
            default : beginH = 138;break;
        }
        $('.hiden-box').show()
            .css({
                left: (wW * 0.1+ wW*0.8*0.2 + 6),
                top:  beginH
            }).animate({width: '729px'}, 300);
        $('.hiden-box > li').hide();
        $('#hiden-'+num).fadeIn(200);
        beginH = 138;
    }, function(){
        $(this).find('h3').css({border: ''})
            .end().find('span').css({color: ""});
        $('.hiden-box').hide().css({width: '0'});
    });
    $('.hiden-box').hover(function(){
        $('.s_'+num).css({
            border: '1px solid #f40',
            borderRight: '1px solid #fff'
        }).find('h3').css({border: 'none'})
            .end().find('span').css({color: "#f40"});
        $(this).show().css({width: '729px'});
    }, function(){
        $('.s_'+num).css({
            border: '',
            borderRight: ''
        }).find('h3').css({border: ''})
            .end().find('span').css({color: ""});
        $(this).animate({
            width: 0
        }, 200).hide(200);
    });

})();

$(function() {
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
})
$('#container').mixItUp();
$('.shuffle li').click(function() {
    $(this).addClass('select').siblings().removeClass('select');
});
//scroll top     
var scrollButton = $("#scroll-top");
$(window).scroll(function () {
if ( $(this).scrollTop() >= 600 ) { 
    scrollButton.show();
} else {
    scrollButton.hide();
}
});
scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0}, 600);
});
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
//select
$("select.main_select").change(function(){
    $selected = $(this).children("option:selected").data('show');
    $("#"+ $selected).show().siblings('select').hide();
});
//livepreview
$('.live').keyup(function () {
    $($(this).data('class')).text($(this).val());
});

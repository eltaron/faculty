$('#container').mixItUp();
$('.shuffle li').click(function() {
    $(this).addClass('select').siblings().removeClass('select');
});
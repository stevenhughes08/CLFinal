
$(".controls").hide();

//this function set a jquery plug in called .center //

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}
//Here is the jQuery calls.//
$(document).ready(function() {
$(".menu").click(function() {
    $(".controls").toggle().center();
});
$(".close-btn").click(function(){
  $(".controls").hide().center();
})
});

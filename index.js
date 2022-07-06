

$(".btn").click(function(){
var key = $(this).html();
$("span").text(key);
// var identity = $(this).attr("id");
$(".btn").removeClass("non-active active");
$(this).addClass("active");

})

$(".btn-submit").click(function(){

    $(".one").addClass("hide");
    $(".two").removeClass("hide");
})




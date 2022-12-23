$("#btn-inscrevase").on("click", function(){
    $("#btn-inscrevase").addClass("btn-warning").removeClass("btn-info")
    $("#pv-modal-inscrevase").addClass("pv-is-open pv-slide-top-in")
})

$(".close-modal").on("click", function(){
    $("#pv-modal-inscrevase").removeClass("pv-is-open animated bounce")
    $("#btn-inscrevase").removeClass("btn-warning").addClass("btn-success")
})

$("#scroll-up").on("click", function() {
    $('html,body').scrollTop(0)
});
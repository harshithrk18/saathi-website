$(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");$(".modal-dialog").velocity("transition."+o)})});
// $("#referral").click(function () {
//     window.open("https://goo.gl/1dF1ST","_blank")
// })
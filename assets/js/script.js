// $(function () {
 // $('[data-toggle="popover"]').popover();
//});

$(document).ready(function () {

//carousel
$(document).ready(function () {
  $('.carousel').carousel();
});



//Enable Tooltip 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




  // color del titulo "destacados"
  $('#destacados2').click(function () {
    $(this).css({
      "color": "rgb(58, 142, 156)"
    });
  })

  $('#destacados2').dblclick(function () {
    $(this).css({
      "color": "white"
    });
  })

})






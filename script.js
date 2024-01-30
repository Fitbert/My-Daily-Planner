  
$(document).ready(function() {
  var r= moment().format("MMMM Do YYYY");
  let d = document.getElementById("currentDay");
  d.innerHTML = r;
  var a = moment().format("HH");
  $("#clearFieldsBtn").click(function(t) {
      r.preventDefault,
      $("textarea").val(""),
      localStorage.clear()
  }),
  $(".time-div").each(function() {
      var w = $(this).attr("id").split("-")[1];
      a == w ? ($(this).addClass("present"),
      $(this).children(".description").addClass("white-text")) : a < w ? ($(this).removeClass("present"),
      $(this).addClass("future")) : w < a && ($(this).removeClass("future"),
      $(this).addClass("past"))
  }),
  $(".saveBtn").click(function(r) {
    var savedMessageEl = $('saved-message');  
    r.preventDefault();
      var e = $(this).siblings(".time-block").val()
        , t = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(t, e)
      document.getElementById('saved-message').textContent = 'Stored to local storage!';
   
  }),
  $("#clearFieldsBtn").click(function(r) {
    r.preventDefault,
    $("textarea").val(""),
    localStorage.clear()
}),
  $("#hour-09 .time-block").val(localStorage.getItem("09")),
  $("#hour-10 .time-block").val(localStorage.getItem("10")),
  $("#hour-11 .time-block").val(localStorage.getItem("11")),
  $("#hour-12 .time-block").val(localStorage.getItem("12")),
  $("#hour-13 .time-block").val(localStorage.getItem("13")),
  $("#hour-14 .time-block").val(localStorage.getItem("14")),
  $("#hour-15 .time-block").val(localStorage.getItem("15")),
  $("#hour-16 .time-block").val(localStorage.getItem("16")),
  $("#hour-17 .time-block").val(localStorage.getItem("17"))
});

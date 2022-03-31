$(document).ready(function() {

  
  $(".submissionButton > button").on("mouseover", function() {
    $(this).css({
      // "box-shadow": "5px 5px",
      "border": "8px solid #00ccff",
      "margin": "0px"
    });
  });


  $(".submissionButton > button").on("mouseleave", function() {
    $(this).css({
      // "box-shadow": "none",
      "border": "0px solid #4056A1",
      "margin": "8px"
    });
  });

  
$(".retweetButtons > .fa-solid").on("mouseover", function(event) {
  $(this).css({color: "red"});  
});

$(".retweetButtons > .fa-solid").on("mouseleave", function(event) {
  $(this).css({color: "grey"});
});

$("article").on("mouseover", function(event) {
  $(this).css({
    "box-shadow": "5px 5px",
    "background-color": "#f6f5ff"
  });
});

$("article").on("mouseleave", function(event) {
  $(this).css({
    "box-shadow": "none",
    "background-color": "white"
  });
});










  
});
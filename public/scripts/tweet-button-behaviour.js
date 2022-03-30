$(document).ready(function() {

  $(".submissionButton > button").on("mouseover", function(event) {
    $(this).css({
      // "box-shadow": "5px 5px",
      "border": "3px solid #4056A1",
      "margin": "1px"
    });
  });

  $(".submissionButton > button").on("mouseleave", function(event) {
    $(this).css({
      // "box-shadow": "none",
      "border": "1px solid #4056A1",
      "margin": "3px"
    });
  });
  
});
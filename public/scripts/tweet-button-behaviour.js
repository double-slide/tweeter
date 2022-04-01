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
});
$(document).ready(function() {

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
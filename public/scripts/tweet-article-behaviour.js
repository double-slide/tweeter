$(document).ready(function() {

  $(".retweetButtons > .fa-solid").on("mouseover", function(event) {

    $(this).css({color: "red"});

    // const counterDifference = $(this).val().length;
    // const $charCounter = $(this).closest("form").find('.counter');
    // const maxCharCount = 140 - counterDifference;
    // $charCounter.text(maxCharCount);
    // if (maxCharCount < 0) {
    //   $charCounter.css({ color: 'red'});
    // }
    // if (maxCharCount >= 0) {
    //   $charCounter.css({ color: 'black'});
    // }
    

  });

  $(".retweetButtons > .fa-solid").on("mouseleave", function(event) {
    $(this).css({color: "grey"});
  });

  $(".container > .tweets-container > article").on("mouseover", function(event) {
    $(this).css({
      "box-shadow": "5px 5px",
      "background-color": "#f6f5ff"
    });
  });

  $(".container > .tweets-container > article").on("mouseleave", function(event) {
    $(this).css({
      "box-shadow": "none",
      "background-color": "white"
  });
  });
  
});
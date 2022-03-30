$(document).ready(function() {

  $("#tweet-text").on("input", function(event) {
    const counterDifference = $(this).val().length;
    const $charCounter = $(this).closest("form").find('.counter');
    const maxCharCount = 140 - counterDifference;
    $charCounter.text(maxCharCount);
    if (maxCharCount < 0) {
      $charCounter.css({ color: 'red'});
    }
    if (maxCharCount >= 0) {
      $charCounter.css({ color: 'black'});
    }
    

  });
  
});
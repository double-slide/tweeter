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



  $('#tweetForm').submit(function(event) {
    
    event.preventDefault();

    const serializedTweet = $('#tweetForm').serialize();
    const tweet = $('#tweet-text').val();

    // check if tweet is empty or null
    if (tweet === "" || tweet === null) {
      alert("Tweet must contain content!");
    } else if (tweet.length >= 140) {
      alert("Tweet is limited to 140 characters!");
    } else {
      // console.log('MADE TO CALL AJAX');
    $.ajax({
      type: 'POST',
      url: "/tweets",
      data: serializedTweet
    })

    }

    
  });







  
});
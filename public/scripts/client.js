

$(document).ready(function() {
  
  const loadTweets = function() {
    $.ajax('/tweets', { 
      type: 'GET'
    })
    .then(function (tweets) {
      renderTweets(tweets);
    })
  };

  const renderTweets = function(tweets) {
    const numberOfTweets= tweets.length;
    for (let i = 0; i < numberOfTweets; i++) {
      const $tweet = createTweetElement(tweets[i])
      $('#tweets-container').prepend($tweet); 
    }
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {

    // const todayDateUnix = Date.now();
    const tweetDateUnix = tweet.created_at;
    // const $daysSinceTweet = Math.round((todayDateUnix - tweetDateUnix) / 86400000);
    const $daysSinceTweet = timeago.format(tweetDateUnix)
    

    const $tweet = $(
      `<article>
        <header>
          <div class="userName">
          <img src="${tweet.user.avatars}">
          <a>${tweet.user.name}</a>
          </div>
          <div class="userHandle">
            <a>${tweet.user.handle}</a>
          </div>
        </header>
        <div class="tweet">
          <p>${escape(tweet.content.text)}</p>
        </div>
        <footer> 
          <p>${$daysSinceTweet}</p>
          <div class="retweetButtons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>`
    )
    return $tweet;
  };

  loadTweets();

  $('#tweetForm').submit(function(event) {
    
    event.preventDefault();

    const serializedTweet = $('#tweetForm').serialize();
    const tweet = $('#tweet-text').val();

    // check if tweet is empty or null
    if (tweet === "" || tweet === null) {
      $('#errorNoText').slideDown(100);
    } else if (tweet.length > 140) {
      $('#errorTooLong').slideDown(100);
    } else {
      $('#errorNoText').slideUp(100);
      $('#errorTooLong').slideUp(100);
      // console.log('MADE TO CALL AJAX');
    $.ajax({
      type: 'POST',
      url: "/tweets",
      data: serializedTweet
    }).then(() => {
      loadTweets();
    });
    }
  });

  $('#errorNoText').hide();
  $('#errorTooLong').hide();


  $("div#errorNoText").removeClass("hidden");
  $("div#errorTooLong").removeClass("hidden");


});
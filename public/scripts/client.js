
// JQUERY EVENT HANDLERS ONCE DOCUMENT IS READY
$(document).ready(function() {


  // HANDLER FOR TWEET FORM SUBMISSION
  $('#tweetForm').submit(function(event) {

    // STOP PAGE REFRESH
    event.preventDefault();

    const serializedTweet = $('#tweetForm').serialize();
    const tweet = $('#tweet-text').val();

    // ERROR CHECKING ON TWEET; IF OK AJAX POST THEN PROMISE TO LOADTWEETS
    if (tweet === "" || tweet === null) {
      $('#errorNoText').slideDown(100);
      return;
    }
    if (tweet.length > 140) {
      $('#errorTooLong').slideDown(100);
      return;
    }
    $('#errorNoText').slideUp(100);
    $('#errorTooLong').slideUp(100);
    $('textarea').val("");
    $.post("/tweets", serializedTweet)
      .then(() => {
        loadTweets();
      });
  });


  // UPDATE CHARACTER DISPLAY WHEN TYPING & ON FORM SUBMIT
  $("#tweet-text").on("input", counterUpdater);
  $('#tweetForm').submit(counterUpdater);


  // HIDE INITIAL ERROR MESSAGES
  $('#errorNoText').hide();
  $('#errorTooLong').hide();

  // LOAD TWEETS
  loadTweets();
});


// FUNCTION TO UPDATE COUNTER
const counterUpdater = function() {
  const counterDifference = $(this).val().length;
  const $charCounter = $(this).closest("form").find('.counter');
  const maxCharCount = 140 - counterDifference;
  $charCounter.text(maxCharCount);
  if (maxCharCount < 0) {
    $charCounter.css({ color: 'red' });
  }
  if (maxCharCount >= 0) {
    $charCounter.css({ color: 'black' });
  }
};


// FUNCTION TO LOAD TWEETS USING AJAX GET REQUEST, THEN PROMISE TO RENDER TWEETS
const loadTweets = function() {
  $.ajax('/tweets', {
    type: 'GET'
  })
    .then(function(tweets) {
      renderTweets(tweets);
    });
};


// FUNCTION TO TAKE 'TWEETS' ARRAY AND RENDER INTO HTML USING 'CREATE TWEET ELEMENT' FUNCTION
const renderTweets = function(tweets) {
  const numberOfTweets = tweets.length;
  const container = $('#tweets-container');
  container.empty();
  for (let i = 0; i < numberOfTweets; i++) {
    const $tweet = createTweetElement(tweets[i]);
    container.prepend($tweet);
  }
};


// FUNCTION TO STOP XSS IN TWEET DATA
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// FUNCTION TO TAKE SINGLE TWEET DATA AND RENDER INTO HTML AND THEN RETURN
const createTweetElement = function(tweet) {
  const tweetDateUnix = tweet.created_at;
  const $daysSinceTweet = timeago.format(tweetDateUnix);
  const $tweet = $(
    `<article>
          <header>
            <div class="userName">
            <img src="${escape(tweet.user.avatars)}">
            <a>${escape(tweet.user.name)}</a>
            </div>
            <div class="userHandle">
              <a>${escape(tweet.user.handle)}</a>
            </div>
          </header>
          <div class="tweet">
            <p>${escape(tweet.content.text)}</p>
          </div>
          <footer> 
            <p>${escape($daysSinceTweet)}</p>
            <div class="retweetButtons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>`
  );

  return $tweet;
};
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
      $('#tweets-container').append($tweet); 
    }
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
          <p>${tweet.content.text}</p>
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






});